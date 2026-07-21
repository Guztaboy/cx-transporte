import React, { useRef } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CtaSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['40px', '0px']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="cta" ref={ref} className="fp-section flex items-center justify-center">
      {/* Dramatic parallax BG */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-darkerBg" />
        {/* Brand color explosion */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-brand/10 via-transparent to-transparent" />
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/15 blur-[100px] rounded-full animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand/10 blur-[80px] rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,215,0,0.1) 0px, rgba(255,215,0,0.1) 1px, transparent 1px, transparent 60px)',
        }} />
      </motion.div>

      <motion.div style={{ y: textY, opacity: textOpacity }} className="text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-brand text-xs font-bold tracking-[0.5em] uppercase mb-8"
        >
          Pronto para começar?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6"
        >
          PRECISA<br />ABASTECER<br />SEU FULL COM<br /><span className="text-brand">RAPIDEZ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-lg mb-12"
        >
          Nossa equipe está pronta para atender sua empresa agora mesmo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="https://wa.me/5511943165771"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-center items-center gap-3 bg-brand hover:bg-brandDark text-darkerBg px-10 py-5 font-black text-sm tracking-widest transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,215,0,0.4)]"
          >
            <MessageCircle size={22} />
            FALE PELO WHATSAPP
          </a>
          <a
            href="tel:+5511943165771"
            className="flex justify-center items-center gap-3 border-2 border-white/20 hover:border-brand text-white hover:text-brand px-10 py-5 font-bold text-sm tracking-widest transition-all duration-300 hover:-translate-y-2"
          >
            <Phone size={20} />
            (11) 94316-5771
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
