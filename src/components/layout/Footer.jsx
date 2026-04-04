import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineTool, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  const sections = [
    { id: "about", label: "About", icon: <AiOutlineUser /> },
    { id: "skills", label: "Skills", icon: <AiOutlineTool /> },
    { id: "projects", label: "Projects", icon: <AiOutlineFundProjectionScreen /> },
    { id: "services", label: "Services", icon: <AiOutlineTool /> },
    { id: "contact", label: "Contact", icon: <AiOutlineMail /> },
    
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/jawa.sakher.7", icon: <FaFacebookF />, color: "#1877F2" },
    { href: "https://www.instagram.com/jawa_sakher", icon: <FaInstagram />, color: "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)" },
    { href: "https://www.linkedin.com/in/jawasakher/", icon: <FaLinkedinIn />, color: "#0A66C2" },
    { href: "https://github.com/jawasakher ", icon: <FaGithub />, color: "#000000" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-500 to-green-400 animate-gradient-x opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">
        {/* Section Links */}
        <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          {sections.map(section => (
            <button
              key={section.label}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md p-3 rounded-xl shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:brightness-110 hover:bg-white/10"
            >
              <span className="text-primary text-lg">{section.icon}</span>
              <span className="text-white font-medium">{section.label}</span>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 items-center">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 transform hover:scale-110 hover:shadow-2xl"
              style={{
                background: social.color.includes("gradient") ? social.color : social.color,
                color: "#fff",
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-10 text-center text-gray-200 text-sm pb-6 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} Jawa Sakher. Built with React. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
