import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import MercadoLivreBadge from './MercadoLivreBadge';

const Footer = ({ scrollToSection }) => {
  return (
    <section id="footer" className="fp-section flex items-center">
      <div className="absolute inset-0 -z-10 bg-[#010409]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={logo} alt="CX Transporte" className="h-14 w-auto mb-5 object-contain" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Especialistas em logística e transporte de alta performance para operações Mercado Livre Full.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-white font-black mb-6 tracking-[0.2em] text-xs uppercase">Navegação</h4>
            <ul className="space-y-3">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'services', label: 'Serviços' },
                { id: 'how-it-works', label: 'Como Funciona' },
                { id: 'why-cx', label: 'Diferenciais' },
                { id: 'cta', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-brand transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-white font-black mb-6 tracking-[0.2em] text-xs uppercase">Especialização</h4>
            <MercadoLivreBadge />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="text-white font-black mb-6 tracking-[0.2em] text-xs uppercase">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/5511943165771" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors text-sm">(11) 94316-5771</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@cxtransportes.com.br" className="text-gray-600 hover:text-white transition-colors text-sm">contato@cxtransportes.com.br</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Atendemos todo o Brasil</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} CX Transporte Personnalité · Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-brand transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
