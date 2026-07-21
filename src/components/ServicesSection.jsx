import React, { useRef } from 'react';
import { Truck, CalendarCheck, Clock, Package, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  { icon: <Truck size={28} />, title: 'Transporte para Mercado Livre Full', description: 'Coleta e entrega de mercadorias diretamente aos CDs do Mercado Livre com pontualidade.' },
  { icon: <CalendarCheck size={28} />, title: 'Coletas Programadas', description: 'Planejamento logístico completo conforme a necessidade e volume da sua empresa.' },
  { icon: <Clock size={28} />, title: 'Entregas Agendadas', description: 'Organização rigorosa para cumprir os horários definidos pelo Mercado Livre.' },
  { icon: <Package size={28} />, title: 'Logística Personalizada', description: 'Soluções sob medida adaptadas ao volume e rotina da sua operação.' },
  { icon: <Zap size={28} />, title: 'Entregas Expressas', description: 'Para demandas urgentes: máxima velocidade sem abrir mão da segurança.' },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="services" ref={ref} className="fp-section flex items-center">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-darkerBg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/6 blur-[120px] rounded-full" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand text-xs font-bold tracking-[0.4em] uppercase">O que fazemos</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight mb-6">
                NOSSOS<br /><span className="text-brand">SERVIÇOS.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Soluções completas para o abastecimento do seu Mercado Livre Full. Cada serviço desenhado para maximizar sua performance na plataforma.
              </p>
              <div className="mt-8 h-px bg-gradient-to-r from-brand to-transparent w-3/4" />
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-6 p-6 border border-white/5 hover:border-brand/40 bg-white/[0.02] hover:bg-brand/5 transition-all duration-400 cursor-default"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-brand/30 group-hover:border-brand group-hover:bg-brand/10 text-brand transition-all duration-400">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-brand transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.description}</p>
                </div>
                <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-0.5 bg-brand" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
