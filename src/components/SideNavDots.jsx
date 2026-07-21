import React from 'react';
import { motion } from 'framer-motion';

const SECTION_LABELS = {
  hero: 'Início',
  benefits: 'Diferenciais',
  services: 'Serviços',
  'why-cx': 'Por que a CX',
  'how-it-works': 'Como Funciona',
  cta: 'Contato',
  footer: 'Rodapé',
};

const SideNavDots = ({ sections, activeSection, scrollToSection }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 items-center">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          title={SECTION_LABELS[id] || id}
          className="group relative flex items-center justify-end gap-3"
        >
          <span className="absolute right-7 opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-semibold text-brand whitespace-nowrap bg-darkerBg/80 backdrop-blur-sm px-2 py-1 rounded pointer-events-none">
            {SECTION_LABELS[id] || id}
          </span>
          <motion.div
            animate={{
              width: activeSection === id ? 24 : 8,
              backgroundColor: activeSection === id ? '#FFD700' : 'rgba(255,255,255,0.3)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-2 rounded-full"
          />
        </button>
      ))}
    </div>
  );
};

export default SideNavDots;
