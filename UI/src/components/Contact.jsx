import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import TextType from "./TextType";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   toast.success("Message sent successfully!");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: ""
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
     const res = await axios.post(
  "https://portfolio-puxo.onrender.com/api/contact",
  formData
);
  
      toast.success(res.data.message);
  
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
  
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="text-white px-6 md:px-20 py-20 md:py-32">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT SIDE */}
        <div>
        <TextType
            text={["LET’S CONNECT"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            className="text-4xl md:text-6xl font-bold tracking-wide text-green-300 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          />

          <p className="text-gray-300 mb-4">
            Say hello at
            <span className="text-green-400 ml-2">
              ayushi1705singh@gmail.com
            </span>
          </p>

          <div className="flex gap-6 text-green-400 text-xl mt-6">

            <a
              href="https://github.com/Ayushi1706"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ayushi-singh-278400349/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-black bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-black bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full text-black bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-black bg-gray-900 border border-gray-700 rounded-md p-3 focus:outline-none focus:border-green-400"
            />
          </div>

          <button
  type="submit"
  disabled={loading}
  className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition flex items-center justify-center gap-2 disabled:opacity-50"
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
      Sending...
    </>
  ) : (
    "SUBMIT"
  )}
</button>

        </form>

      </div>

      <ToastContainer position="top-right" autoClose={3000} />

    </section>
  );
};
