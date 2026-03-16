const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (name, email, subject, message) => {
  try {

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    // Mail sent to you from contact form
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto reply to user
    let info = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting me! I'll get back to you soon.</p>
      `,
    });

    return info;

  } catch (error) {
    console.log("Error in mailSender:", error.message);
  }
};

module.exports = mailSender;
