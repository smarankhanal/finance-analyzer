import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className=" bg-secondary  text-text  mx-auto mb-4 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl p-8 md:flex-row">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <Logo />
        <p className=" text-sm">Building the future of teal interfaces.</p>
      </div>

      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        <a href="#about" className="anchor">
          About
        </a>
        <a href="#projects" className="anchor">
          Projects
        </a>
        <a href="#contact" className="anchor">
          Contact
        </a>
      </nav>

      <div className="flex flex-col items-center gap-2 md:items-end">
        <div className="flex gap-4">
          <span className="hover:text-primary cursor-pointer transition-colors">
            Twitter
          </span>
          <span className="hover:text-primary cursor-pointer transition-colors">
            GitHub
          </span>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Brand.</p>
      </div>
    </footer>
  );
}
