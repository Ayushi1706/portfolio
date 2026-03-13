// Email template sent to YOU (portfolio owner)

const contactMailTemplate = (name, email, subject, message) => {
    return {
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          
          <h2 style="color:#22c55e;">New Portfolio Contact Message</h2>
  
          <p>You received a new message from your portfolio contact form.</p>
  
          <table style="border-collapse: collapse; width:100%; margin-top:15px;">
            <tr>
              <td style="padding:8px; font-weight:bold;">Name:</td>
              <td>${name}</td>
            </tr>
  
            <tr>
              <td style="padding:8px; font-weight:bold;">Email:</td>
              <td>${email}</td>
            </tr>
  
            <tr>
              <td style="padding:8px; font-weight:bold;">Subject:</td>
              <td>${subject}</td>
            </tr>
          </table>
  
          <h3 style="margin-top:20px;">Message</h3>
  
          <div style="
            background:#f4f4f4;
            padding:15px;
            border-radius:6px;
            border-left:4px solid #22c55e;
          ">
            ${message}
          </div>
  
          <p style="margin-top:20px; color:gray; font-size:12px;">
            This message was sent from your portfolio website.
          </p>
  
        </div>
      `
    };
  };
  
  
  
  // Auto-reply template sent to USER
  
  const autoReplyTemplate = (name) => {
    return {
      subject: "Thanks for contacting Ayushi Singh",
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; line-height:1.6">
  
          <h2>Thank you for reaching out!</h2>
  
          <p>Hello ${name},</p>
  
          <p>
            Thank you for contacting me through my portfolio website.
            I have received your message and will get back to you as soon as possible.
          </p>
  
          <p>
            If your message is urgent, you can also reach me at:
          </p>
  
          <p>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/ayushi-singh-278400349/" target="_blank">
              linkedin.com/in/ayushi-singh-278400349
            </a>
          </p>
  
          <br>
  
          <p>Best regards,</p>
          <p><strong>Ayushi Singh</strong></p>
          
          <hr style="margin-top:20px">
  
          <p style="font-size:12px;color:gray;">
            This is an automated reply confirming that your message was received.
          </p>
  
        </div>
      `
    };
  };
  
  
  
  module.exports = {
    contactMailTemplate,
    autoReplyTemplate
  };