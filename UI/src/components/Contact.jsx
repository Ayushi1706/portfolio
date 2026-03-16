import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    await emailjs.send(
      "service_26wqoji",
      "template_nvxt21m",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "EFxsIqzqcop5ojQ0k"
    );
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    toast.error("Failed to send message");
    console.error(error);
  } finally {
    setLoading(false);
  }
};
