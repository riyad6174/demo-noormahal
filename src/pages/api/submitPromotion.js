// import { NextApiRequest, NextApiResponse } from "next";
// export default async function handler(NextApiRequest, NextApiResponse) {
//     if()
// }

import { google } from 'googleapis';

export default async (req, res) => {
  const { name, email, message,phone,date,sheetName } = req.body;
    // const privateKey='"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrHwOYbxie/kko\nD+uK8itH8DBjPEww6NU9iVvPI77yEZx2W0WL0hymcIPUQqveAfXEpxvQeUzZjnbX\nnBKlSmZO2rz9+4Xoz5Hw3eUpZ1a55UN9DKyHV6vyRtSiUHs3Ugvk3VxV0D8a2KKv\noU5LEkqBtlqA7RBaEOgb9fJc7stdSFEk5APev+oCepK6HxznooGgHTJI/KLj3PVD\naFIS3mQhJdbrVyBs8q2Pkmiy6uPQDLAuEVh5i/ktDW28eBqTDjjr8i1Z9u3PPi45\nGBYtzrY0hyBDB4UHqxBOCvkmShy7cJXRmaQaW2T7c66PciG7P77lGXI9oekGKQ2E\nOJ0WhyTfAgMBAAECggEAQnhEnESjSrc50Y8Fjq5s83+wPAvjCKiYlFOzzu1ysXL3\n1N21UQ+nw1s3Sg8v1YfrYJ0M59kGage10CC2+W/B9+VtvjaimIFwjiCTcJbMkF8m\n7P8sUVJT30N2OyqKAj4jkp4NzOOcb6Aw6Yn98JlFScd8tlHfpSymDJ5nq4OyiSP4\nKb0bYDp9+M+jEylyqpQVAyiIXAihplBshSCpPYrEHelmeAfHAYat35p5DE28yJo5\nZmbYC9Sb9smIbPADGpYgfWhNOOV3O3XQtVc9QgKwU4hsTFPxIp+6Ir/AC88rfhMc\nMoPJBGpJk4EV+P5GqI1t/BjfJIbwjlrgHhgpunTZsQKBgQDgZQIfhd2w+Kd9nkE+\nNatkmhrqysmZ98Z3RfZA8t31d8CrxKsTsz/MGIPi1OkdujBqkONSFmHt9/AxPFid\nHp+GCfGUebKCHvWfPLdagk/dMG+ZuOaum23uADJId887DGvsymy+yWiyfsSMimfd\ng/vTSzs7V47e++olN634+2SJ5wKBgQDDOSCAJOUEMz/2N+NSc5bhQdkDejUHdvFY\np+0R/3MlfwiMIOMlqWF40+bijqVRAgy4+NwFvKrqa50ZMtZAIuUHa3Ewl278tZzb\nlQf2Etp3U/2fXuobc+cqi5zT7D4rX3KcmjT0mX1+G0X7EkLvvumCifXqGIFYNCU9\nQ47/RN9eSQKBgC/SdwxezCteItvrsT3f1EIhcaEeTK7Klnpu55dZ6yHYPrCcvlT5\ne5w0kU7zTyctugnMDRY+fOppT8A+eygpEZhQYDLjaL7AeFpSZ0Ubxod+PhqFxGvr\n5ha15gF5vyl3cTzKuzhB1lVMHPlSueYErdOPEfWIqIMvLux1nFcWxIt7AoGAKnjZ\nO0fLk1hbCAQsrpl7L9KVlg4WT2NvKmyORSYgNP4oK+RTxrPNAu6HAq8qBC+/+NYb\neBwNyyZSbVMEDbwJu82COKIZgV05nQQVUVHUubVKLkwF/qb+meD545k4BVOkqbFa\n6AQkqzTfyrm0WlhckQvWtnFSYpAlsehqydqABhECgYEApKPkhZmhlz/5bhZabGtN\nwfoEA+pLIN5AnzSPF0XJhajFIPNz4sI/1IgLmbwGGeMZ36eP4RM4LllZ2TYxzGL6\nIWxgHr+OxHz1uNIzjoVjCx5bomI/8raAPCGCUuwZ+ZMLHoDefztdJDAMFXWwSe5u\nXSWj76+Nb4MPkWXylr+xdaE=\n-----END PRIVATE KEY-----\n"'
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL ,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
//   const spreadsheetId = '1pKws05Ta6iLpnl7Hcw6-QFDnUFCSILEzwP5ccJs6zNA';
  console.log(spreadsheetId)

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range:`${sheetName}!A1`,
    //   range: 'A1:F1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, email,phone,date, message,]],
      },
    });

    console.log(`Rows updated: ${response.data.updates.updatedCells}`);

    res.status(200).json({ message: 'Form data submitted successfully!' });
  } catch (error) {
    console.error('Error inserting data into Google Sheets:', error);
    res.status(500).json({ message: 'Failed to submit form data.' });
  }
};
