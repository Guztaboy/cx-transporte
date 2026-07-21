import React, { useRef } from 'react';
import { FileText, CalendarClock, Truck, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { number: '01', icon: <FileText size={24} />, title: 'Solicite um orçamento', description: 'Entre em contato via WhatsApp ou formulário e informe sua necessidade, volume e frequência.' },
  { number: '02', icon: <CalendarClock size={24} />, title: 'Agendamos a operação', description: 'Planejamos a coleta e o transporte conforme sua programação e os horários do Mercado Livre.' },
  { number: '03', icon: <Truck size={24} />, title: 'Coletamos sua mercadoria', description: 'Nossa equipe qualificada realiza a coleta com segurança, organização e agilidade.' },
  { number: '04', icon: <MapPin size={24} />, title: 'Entregamos no CD', description: 'Sua carga é entregue no Centro de Distribuição dentro da programação estabelecida, sem atrasos.' },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="how-it-works" ref={ref} className="fp-section flex items-center">
      {/* BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-darkerBg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/4 blur-[140px] rounded-full" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.015) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-xs font-bold tracking-[0.4em] uppercase">Processo simplificado</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-3">
            COMO <span className="text-brand">FUNCIONA.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative mb-8">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-brand bg-darkerBg flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                  <div className="text-brand">{step.icon}</div>
                </div>
              </div>

              <h3 className="text-white font-black text-base mb-3 leading-snug">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
