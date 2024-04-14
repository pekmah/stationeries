"use server";
import GlobalServices from "@/services/GlobalServices";
import nodemailer from "nodemailer";

export async function SendEmailAction(formData: FormData): Promise<any> {
  const contacts = await GlobalServices.getContacts();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail", // use 'gmail' or any other service you prefer
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER, // replace with your email
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD, // replace with your password
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.NEXT_PUBLIC_MAIL_USER, // sender address
    to: contacts.email, // list of receivers
    subject: formData.get("subject") as string, // Subject line
    html: `<b>${formData.get("message") as string}</b>`, // html body
  };

  // send mail with defined transport object
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ success: true, message: "Email sent successfully" });
      }
    });
  });
}
