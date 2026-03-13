const sendMail = require("../config/mailer");

const sendContactMessage = async(req,res) => {
    try {
        const {name, email, subject, message} = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required" });
          }

          await sendMail(name, email, subject, message);
          res.status(200).json({ message: "Message sent successfully" });
    }catch(err){
        console.error("MAIL ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { sendContactMessage };