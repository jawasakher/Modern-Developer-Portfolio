import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${isScrolled ? 'bg-black/40 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-5">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Code className="w-6 h-6 text-primary" />
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary/30 hover:opacity-80">
            {PERSONAL_INFO.name.split(' ').map(w => w[0]).join('')}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-white underline underline-offset-4' : 'text-white/70 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
          
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-4 text-white hover:text-white/80">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-white/10 px-5 py-5 space-y-2 rounded-b-2xl shadow-lg">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 mt-2"
            >
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
