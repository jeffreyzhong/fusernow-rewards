import { google } from 'googleapis';

export default async function handler(req, res) {
  console.log("YOOOOOO");
  if (req.method === 'POST') {
    try {
      console.log("req.body", req.body);
      const data  = req.body; // Your data to write to the spreadsheet

      // Authenticate with the Google Sheets API
      const auth = new google.auth.GoogleAuth({
        keyFile: '/Users/jeff/Projects/fusernow-rewards/fusernow-rewards/pages/api/fusernow-rewards-1f8763ad6465.json', // Path to your JSON credentials
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
      });

      const client = await auth.getClient();

      const googleSheets = google.sheets({ version: 'v4', auth: client });

      const spreadsheetId = "1EUpEUUJR1VFeTMJxr8qTdELglJnaRVsyIKl5YD4AsGk"; // The ID of your spreadsheet

      // Write to the spreadsheet
      const response = googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: 'Sheet1', // Change Sheet1 if your worksheet's name is different
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: data, // Each sub-array is a row and each element is a cell
        },
      });

      console.log("responseeee: ", response);

      res.status(200).json({ message: 'Data written successfully.' });
    } catch (error) {
      console.error('Error writing to spreadsheet:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}