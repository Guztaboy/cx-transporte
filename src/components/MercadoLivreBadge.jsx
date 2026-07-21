import React from 'react';

const MercadoLivreBadge = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="flex items-center justify-center w-12 h-12 shadow-[0_0_15px_rgba(255,230,0,0.15)] rounded-full">
      <img src="https://vectorseek.com/wp-content/uploads/2023/08/Mercado-Livre-Icon-Logo-Vector.svg-.png" alt="Mercado Livre" className="w-full h-full object-contain" />
    </div>
    {/* Text */}
    <div className="flex flex-col">
      <span className="text-white font-black text-sm tracking-wide leading-tight">MERCADO LIVRE</span>
      <span className="text-[#FFE600] font-black text-xs tracking-widest uppercase">Full</span>
    </div>
  </div>
);

export default MercadoLivreBadge;
