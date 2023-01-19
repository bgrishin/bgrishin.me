import { Request, Response } from 'express'
import 'dotenv/config'

const { google } = require('googleapis')
const sheets = google.sheets('v4')

export default async function handler(req: Request, res: Response) {
  const response = (
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: ['A1:ZZ'],
      auth: process.env.GOOGLE_SPREADSHEET_API_KEY
    })
  ).data
  response.values.splice(0, 1)
  res.status(200).json(
    response.values.map(
      ([imageURL, name, description, link, bgColor, textColor]: string[]) => ({
        imageURL,
        name,
        description,
        link,
        bgColor,
        textColor
      })
    )
  )
}
