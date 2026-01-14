import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden snap-start">
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-mono text-cyber-neon text-sm md:text-xl tracking-[0.5em] mb-4">SYSTEM_INIT: V.20.77</h2>
          <h1 className="font-display text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] mb-6 relative">
             <span className="absolute -left-1 -top-1 text-cyber-pink opacity-50 blur-[1px] animate-pulse">NEO-NIKE</span>
             <span className="relative z-10">NEO-NIKE</span>
             <span className="absolute -right-1 -bottom-1 text-cyber-blue opacity-50 blur-[1px] animate-pulse">NEO-NIKE</span>
          </h1>
          <p className="font-body text-gray-400 text-lg md:text-2xl tracking-wide max-w-2xl mx-auto uppercase">
            Adaptive. Reactive. Cybernetic.
            <br />
            <span className="text-cyber-yellow">The future of movement is programmed here.</span>
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 flex flex-col gap-8 text-xs font-mono text-gray-600 hidden md:flex">
        <div className="rotate-[-90deg]">SCROLL_VELOCITY</div>
        <div className="w-[1px] h-32 bg-gray-800 mx-auto"></div>
        <div className="rotate-[-90deg]">MORPH_STATUS</div>
      </div>
      
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyber-neon">
         <div className="w-1 h-12 bg-gradient-to-b from-transparent via-cyber-neon to-transparent" />
       </div>
    </section>
  );
};

export default Hero;