import React, { useRef } from 'react';
import { ShieldCheck, Clock, Map, Headphones } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const benefits = [
  {
    icon: <ShieldCheck size={36} />,
    title: 'ENTREGAS SEGURAS',
    description: 'Mercadorias transportadas com máximo cuidado e seguro completo durante todo o trajeto.',
    number: '01',
  },
  {
    icon: <Clock size={36} />,
    title: 'PONTUALIDADE GARANTIDA',
    description: 'Cumprimos rigorosamente os horários exigidos pelo Mercado Livre para não prejudicar sua operação.',
    number: '02',
  },
  {
    icon: <Map size={36} />,
    title: 'FOCO MERCADO LIVRE FULL',
    description: 'Especialistas exclusivos em operações Full. Conhecemos cada detalhe do processo.',
    number: '03',
  },
  {
    icon: <Headphones size={36} />,
    title: 'ATENDIMENTO PERSONALIZADO',
    description: 'Acompanhamento dedicado em cada operação, com comunicação direta e transparente.',
    number: '04',
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="benefits" ref={ref} className="fp-section flex items-center">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-darkBg" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,215,0,0.03) 0%, transparent 60%)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,215,0,0.03) 0px, rgba(255,215,0,0.03) 1px, transparent 1px, transparent 25%)',
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand text-xs font-bold tracking-[0.4em] uppercase">Por que escolher a CX</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-3 leading-tight">
            DIFERENCIAIS<br /><span className="text-brand">QUE IMPORTAM.</span>
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-darkerBg/50 p-10 hover:bg-darkerBg transition-all duration-500 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] select-none group-hover:text-brand/[0.08] transition-colors duration-500">
                {b.number}
              </span>

              <div className="text-brand mb-5 relative z-10">{b.icon}</div>
              <h3 className="text-white font-black text-lg tracking-wider mb-3 relative z-10">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm relative z-10">{b.description}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-brand transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
