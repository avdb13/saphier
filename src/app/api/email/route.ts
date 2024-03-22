import { type NextRequest, NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, companyName, phoneNumber, message } = await request.json()

  const transport = createTransport({
    service: 'gmail',
    /*
        setting service as 'gmail' is same as providing these setings:

        host: "smtp.gmail.com",
        port: 465,
        secure: true

        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.THEIR_EMAIL,
    // cc: email,
    subject: `Saphier - Bericht van ${name}${companyName && ', ' + companyName}`,
    text: `naam: ${name}\nbedrijfsnaam: ${companyName}\nemail: ${email}\ntelefoonnummer: ${phoneNumber}\n\n${message}`,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()

    return NextResponse.json({ message: 'success' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
