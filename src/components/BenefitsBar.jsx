import React from 'react';
import { ShieldCheck, Clock, Map, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsBar = () => {
  const benefits = [
    { icon: <ShieldCheck size={32} className="text-brand" />, title: "ENTREGAS SEGURAS" },
    { icon: <Clock size={32} className="text-brand" />, title: "PONTUALIDADE GARANTIDA" },
    { icon: <Map size={32} className="text-brand" />, title: "FOCO EM MERCADO LIVRE FULL" },
    { icon: <Headphones size={32} className="text-brand" />, title: "ATENDIMENTO PERSONALIZADO" },
  ];

  return (
    <div className="bg-darkBg border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 text-center lg:text-left"
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <h3 className="text-white font-bold text-sm tracking-wider">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsBar;
