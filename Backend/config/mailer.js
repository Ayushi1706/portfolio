const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    let info = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: title,
      html: body,
    });
    return info;
  } catch (error) {
    console.log("Error in mailSender", error.message);
  }
};

module.exports = mailSender;
