import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/jawa.sakher.7", label: "Facebook", icon: <FaFacebookF /> },
    { href: "https://www.instagram.com/jawa_sakher", label: "Instagram", icon: <FaInstagram /> },
    { href: "https://www.linkedin.com/in/jawasakher/", label: "LinkedIn", icon: <FaLinkedinIn /> },
    { href: "https://github.com/jawasakher", label: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050605]">
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#6FE047]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">Jawa Sakher / Full-Stack Developer</p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Have a product worth building?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              Let&apos;s turn a clear idea into a thoughtful interface and a dependable digital system.
            </p>
            <a
              href="mailto:jawasakher@gmail.com"
              className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-primary"
            >
              <span className="grid h-9 w-9 place-items-center border border-primary/40 text-primary">
                <AiOutlineMail className="text-lg" />
              </span>
              jawasakher@gmail.com
            </a>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">Explore</p>
            <nav className="flex flex-col items-start gap-3">
          {sections.map(section => (
            <button
              key={section.label}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-white/60 transition-colors hover:text-primary"
            >
              {section.label}
            </button>
          ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/35">Connect</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center border border-white/15 text-white/65 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#6FE047]" />
              Open to remote collaborations
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Jawa Sakher. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.16em]">Built with React / shipped with care</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
