import React from "react";
import TextType from "./TextType";


export const About = () => {
    const skills = [
        "HTML","CSS","JAVASCRIPT","REACT","NODE JS","MONGODB","TAILWIND CSS","JAVA"
      ];
  return (
    <div className="text-white">

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="px-6 md:px-20 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 w-full">

          {/* Title */}
          <TextType
            text={["About Me"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            className="text-4xl md:text-6xl font-bold tracking-wide text-green-300 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          />

          {/* Content */}
          <div className="text-gray-300 leading-relaxed max-w-xl space-y-6">

            <p>
              I am a passionate{" "}
              <span className="text-white font-semibold">
                MERN Stack Developer
              </span>{" "}
              who enjoys building responsive, user-friendly, and scalable web
              applications. I have a strong foundation in{" "}
              <span className="text-white font-semibold">
                Data Structures and Algorithms using Java
              </span>
              , which helps me approach problems logically and write efficient
              code.
            </p>

            <p>
              I enjoy turning ideas into real-world applications using modern
              technologies like{" "}
              <span className="text-white">
                MongoDB, Express.js, React, and Node.js
              </span>
              . I am always eager to learn new technologies, improve my
              problem-solving skills, and build impactful projects that deliver
              great user experiences.
            </p>

          </div>
        </div>
      </section>


      {/* SKILLS SECTION */}
      <section className="px-6 md:px-20 py-20 md:py-32">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Title */}
          <TextType
            text={["Skills"]}
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            className="text-4xl md:text-6xl font-bold tracking-wide text-green-300 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          />

          {/* Skills Content */}
          <div>

            <p className="text-gray-400 max-w-xl mb-10">
              I am always looking to add more skills and improve my development
              capabilities. I enjoy learning new technologies and expanding my
              knowledge to build better applications.
            </p>

            {/* Skill Pills */}
            <div className="overflow-hidden mt-12 w-full">

<div className="flex gap-6 whitespace-nowrap animate-marquee">

  {[...skills, ...skills].map((skill, index) => (
    <span
      key={index}
      className="border border-gray-500 px-6 py-3 rounded-full text-sm hover:bg-green-400 hover:text-black transition"
    >
      {skill}
    </span>
  ))}

</div>

</div>

          </div>

        </div>

      </section>

    </div>
  );
};