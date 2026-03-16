const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (name, email, subject, message) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ayushi1705singh@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    });
  } catch (error) {
    console.error("Email error:", error.message);
    throw error;
  }
};

module.exports = sendMail;
