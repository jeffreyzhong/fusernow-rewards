import { google } from 'googleapis';
const fs = require("fs");

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data  = req.body;

      const credential = JSON.parse(
        Buffer.from(process.env.GOOGLE_AUTH_CREDENTIALS, "base64").toString().replace(/\n/g,"")
      );      

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

      const spreadsheetId = "1EUpEUUJR1VFeTMJxr8qTdELglJnaRVsyIKl5YD4AsGk";

      const response = await googleSheets.spreadsheets.values.append(
        {
          auth,
          spreadsheetId,
          range: 'FuserNow Survey Tracker',
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: data,
        },
      });

      res.status(200).json({ message: 'Data written successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}