import { google } from 'googleapis';
const fs = require("fs");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log("ATTEMPT")
      const data  = req.body; // Your data to write to the spreadsheet

      const credential = JSON.parse(
        Buffer.from(process.env.GOOGLE_AUTH_CREDENTIALS, "base64").toString().replace(/\n/g,"")
      );      

      console.log("email: ", credential.client_email);
      console.log("private key: ", credential.private_key);

      // Authenticate with the Google Sheets API
      const auth = new google.auth.GoogleAuth({
        projectId: "fusernow-rewards",
        credentials: {
          client_email: credential.client_email,
          private_key: credential.private_key,
        },
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });

      const client = await auth.getClient();

      const googleSheets = google.sheets({ version: 'v4', auth: client });

      const spreadsheetId = "1EUpEUUJR1VFeTMJxr8qTdELglJnaRVsyIKl5YD4AsGk"; // The ID of your spreadsheet

      // Write to the spreadsheet
      const response = googleSheets.spreadsheets.values.append(
        callback=gsheet_callback,
        {
          auth,
          spreadsheetId,
          range: 'Sheet1', // Change Sheet1 if your worksheet's name is different
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: data, // Each sub-array is a row and each element is a cell
        },
      });
      console.log("response: ", response)


      res.status(200).json({ message: 'Data written successfully.' });
    } catch (error) {
      console.log("ERROR: ", error, " AND: ", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function gsheet_callback() {
  console.log("callback");
  console.log()
}