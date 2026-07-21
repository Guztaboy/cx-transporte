import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const SECTIONS = [
  { name: 'INÍCIO', id: 'hero' },
  { name: 'SERVIÇOS', id: 'services' },
  { name: 'COMO FUNCIONA', id: 'how-it-works' },
  { name: 'DIFERENCIAIS', id: 'why-cx' },
  { name: 'CONTATO', id: 'cta' },
];

const Header = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed w-full top-4 md:top-6 z-50 px-4 md:px-12 flex justify-center pointer-events-none">
        <div className="w-full max-w-7xl bg-darkerBg/60 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full px-6 py-4 flex justify-between items-center pointer-events-auto shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-darkerBg/80">

          <button onClick={() => handleNav('hero')} className="flex-shrink-0">
            <img className="h-10 w-auto object-contain" src={logo} alt="CX Transporte" />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {SECTIONS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`font-semibold text-xs tracking-widest transition-colors duration-300 ${
                  activeSection === link.id ? 'text-brand' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex flex-shrink-0">
            <a
              href="https://wa.me/5511943165771"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand hover:bg-brandDark text-darkerBg px-5 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
            >
              <MessageCircle size={16} />
              WHATSAPP
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white flex-shrink-0">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-darkerBg/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {SECTIONS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-left font-semibold text-sm tracking-widest transition-colors ${
                    activeSection === link.id ? 'text-brand' : 'text-gray-300 hover:text-brand'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/5511943165771"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-brand text-darkerBg px-5 py-3 rounded-xl font-bold text-sm tracking-widest mt-4"
              >
                <MessageCircle size={18} />
                WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
