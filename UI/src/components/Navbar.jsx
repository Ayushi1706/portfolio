import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-purple px-6 py-4 flex justify-end items-center">

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-white font-medium">

        <li>
          <a
            href="#project"
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Work
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </li>

      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-purple flex flex-col items-center gap-6 py-8 md:hidden text-white">

          <a href="#project" onClick={() => setOpen(false)}>
            Work
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  );
};