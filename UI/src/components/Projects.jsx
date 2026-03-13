import React from "react";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  return (
    <section id="project" className="text-white px-6 md:px-16 py-16 md:py-24">

      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-green-300">
        FEATURED PROJECTS
      </h2>

      <p className="text-gray-300 mb-12 md:mb-16 max-w-xl">
        Here are some of the selected projects that showcase my passion for development.
      </p>

      {projects.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16"
        >

          {/* Image */}
          <div className="bg-dark p-4 md:p-8 rounded-xl w-full">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full shadow-[0_0_80px_rgba(34,197,94,0.5)]"
            />
          </div>

          {/* Details */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 max-w-lg">
              {project.description}
            </p>

            {/* Info */}
            <div className="border-t border-gray-700 pt-4 mb-6">
              <p className="flex justify-between py-2">
                <span>Year</span>
                <span>{project.year}</span>
              </p>

              <p className="flex justify-between py-2">
                <span>Role</span>
                <span>{project.role}</span>
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-green-300">
              <a
                href={project.live}
                className="flex items-center gap-2 hover:text-green-500"
              >
                LIVE DEMO <FiExternalLink />
              </a>

              <a
                href={project.github}
                className="flex items-center gap-2 hover:text-green-500"
              >
                SEE ON GITHUB <FaGithub />
              </a>
            </div>

          </div>

        </div>
      ))}
    </section>
  );
};