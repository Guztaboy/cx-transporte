import React, { useRef } from 'react';
import { ShieldCheck, Clock, MessageSquare, Shield, User, Award, Handshake } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const reasons = [
  { icon: <ShieldCheck size={22} />, title: 'Especialização em operações para Mercado Livre Full' },
  { icon: <Clock size={22} />, title: 'Pontualidade rigorosa nas entregas' },
  { icon: <MessageSquare size={22} />, title: 'Comunicação direta durante toda a operação' },
  { icon: <Shield size={22} />, title: 'Segurança total no transporte das mercadorias' },
  { icon: <User size={22} />, title: 'Atendimento dedicado e personalizado' },
  { icon: <Award size={22} />, title: 'Compromisso inabalável com prazos' },
  { icon: <Handshake size={22} />, title: 'Parceria estratégica para o crescimento do seu negócio' },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const titleX = useTransform(scrollYProgress, [0, 0.5, 1], ['-5%', '0%', '5%']);

  return (
    <section id="why-cx" ref={ref} className="fp-section flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-darkBg" />
        {/* Big diagonal brand stripe */}
        <div
          className="absolute -right-1/4 top-0 w-1/2 h-full bg-brand/4"
          style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/6 blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* LEFT — Big Text */}
          <motion.div style={{ x: titleX }} className="w-full lg:w-2/5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-brand text-xs font-bold tracking-[0.4em] uppercase"
            >
              Nossa proposta de valor
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black text-white mt-3 leading-[0.9]"
            >
              POR QUE<br />ESCOLHER<br /><span className="text-brand">A CX?</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 h-1 bg-brand origin-left w-24"
            />
          </motion.div>

          {/* RIGHT — List */}
          <div className="w-full lg:w-3/5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-5 py-5 border-b border-white/5 hover:border-brand/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand/30 group-hover:border-brand group-hover:bg-brand/10 flex items-center justify-center text-brand transition-all duration-300">
                  {r.icon}
                </div>
                <span className="text-gray-300 group-hover:text-white font-medium text-sm md:text-base transition-colors duration-300">
                  {r.title}
                </span>
                <span className="ml-auto text-brand/0 group-hover:text-brand/60 font-black text-xs tracking-widest transition-colors duration-300">
                  →
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
