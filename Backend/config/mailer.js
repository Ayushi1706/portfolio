const nodemailer = require("nodemailer");

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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for reaching out!`,
      html: `<p>Hi ${name},<br>Thanks for contacting me! I'll get back to you soon.</p>`
    });
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

module.exports = sendMail;
