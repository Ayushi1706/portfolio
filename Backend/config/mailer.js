const nodemailer = require("nodemailer");
const { contactMailTemplate, autoReplyTemplate } = require("../templates/mailTemplate");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,       
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendMail = async (name, email, subject, message) => {
  try {

    // Email to YOU
    const adminMail = contactMailTemplate(name, email, subject, message);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: adminMail.subject,
      html: adminMail.html
    });

    // Auto reply to USER
    const userReply = autoReplyTemplate(name);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: userReply.subject,
      html: userReply.html
    });

  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

module.exports = sendMail;
