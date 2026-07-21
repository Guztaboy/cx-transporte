import React, { useRef } from 'react';
import { Package, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroTruck from '../assets/hero_truck.png';
import MercadoLivreBadge from './MercadoLivreBadge';

const HeroSection = ({ scrollToSection }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const truckY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const truckScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="hero" ref={ref} className="fp-section flex items-center">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-darkerBg via-[#050d1a] to-darkerBg" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand/8 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <motion.div style={{ y: titleY, opacity: titleOpacity }} className="w-full lg:w-1/2 z-10">
            <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible" className="mb-6">
              <MercadoLivreBadge />
            </motion.div>
            <motion.h1 custom={1} variants={textVariants} initial="hidden" animate="visible"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-8 tracking-tight"
            >
              ABASTEÇA<br />SEU FULL<br /><span className="text-brand">COM RAPIDEZ.</span>
            </motion.h1>
            <motion.p custom={2} variants={textVariants} initial="hidden" animate="visible"
              className="text-gray-400 text-base md:text-lg mb-10 max-w-md leading-relaxed"
            >
              A CX Transporte Personnalité é especializada no transporte de mercadorias para Centros de Distribuição do Mercado Livre Full, com segurança, pontualidade e compromisso.
            </motion.p>
            <motion.div custom={3} variants={textVariants} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://wa.me/5511943165771" target="_blank" rel="noopener noreferrer"
                className="group flex justify-center items-center gap-3 bg-brand hover:bg-brandDark text-darkerBg px-8 py-4 font-black text-sm tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,215,0,0.3)]"
              >
                <MessageCircle size={20} />
                FALE PELO WHATSAPP
              </a>
              <button
                onClick={() => scrollToSection('cta')}
                className="flex justify-center items-center gap-3 border border-white/20 hover:border-brand/60 text-white hover:text-brand px-8 py-4 font-bold text-sm tracking-widest transition-all duration-300"
              >
                <Package size={20} />
                SOLICITAR ORÇAMENTO
              </button>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: truckY, scale: truckScale }} className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-brand/15 blur-[80px] rounded-full scale-75" />
            <motion.img
              src={heroTruck}
              alt="Caminhão CX Transporte"
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg lg:max-w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
