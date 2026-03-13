'use client';
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../Assest/profile.JPG";
import TextType from "./TextType";

export const HeroSection = () => {
  return (
    <section className="text-white min-h-screen flex items-center px-6 md:px-16 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Content */}
        <div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            HI, I AM <br />

            <TextType
              text={["AYUSHI SINGH."]}
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              className="text-green-300 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
            />
          </h1>

          <p className="text-gray-300 mt-6 max-w-lg">
            Full-Stack MERN Developer skilled in building scalable web
            applications, with strong knowledge of Data Structures and
            Algorithms in Java and a passion for solving real-world problems.
          </p>

          <div className="flex items-center gap-4 mt-8 flex-wrap">

            <a
              href="mailto:ayushi1705singh@gmail.com"
              target="_blank"
              className="bg-green-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition"
            >
              CONTACT ME
            </a>

            <div className="flex gap-3 text-xl">

              <a
                href="https://github.com/Ayushi1706"
                target="_blank"
                className="bg-black p-3 rounded-full hover:bg-gray-800 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ayushi-singh-278400349/"
                target="_blank"
                className="bg-black p-3 rounded-full hover:bg-gray-800 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
  <img
    src={profileImage}
    alt="profile"
    className="rounded-full w-72 md:w-[420px] shadow-[0_0_80px_rgba(34,197,94,0.5)]"
  />
</div>

      </div>

    </section>
  );
};