import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shoe } from '../types';
import { ShoppingBag, Activity, ChevronRight } from 'lucide-react';

interface Props {
  shoe: Shoe;
  index: number;
}

const ProductSection: React.FC<Props> = ({ shoe, index }) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center py-20 relative snap-center border-t border-white/5 overflow-hidden">
      <div className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Image Side with HUD */}
        <motion.div 
          className="w-full md:w-1/2 relative group"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-[4/3] rounded-sm border border-white/10 bg-black/40 backdrop-blur-sm">
            {/* Tech Header on Image */}
            <div className="absolute top-0 left-0 p-2 bg-black/80 border-r border-b border-white/20 z-20 font-mono text-xs text-cyber-neon flex justify-between w-full pr-4">
              <span>IMG_REF: {shoe.id.toUpperCase()}</span>
              <span className="animate-pulse">● LIVE</span>
            </div>
            
            <div className="relative w-full h-full overflow-hidden">
                <img 
                src={shoe.imageUrl} 
                alt={shoe.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[0.8] contrast-125"
                />
            </div>
            
            {/* HUD Hotspots */}
            {isInView && shoe.hotspots?.map((spot, i) => (
                <motion.div
                    key={spot.id}
                    className="absolute z-30"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                >
                    {/* The Dot */}
                    <div className="relative">
                        <div className="w-3 h-3 bg-cyber-neon rounded-full shadow-[0_0_10px_#39ff14]" />
                        <div className="absolute inset-0 w-3 h-3 bg-cyber-neon rounded-full animate-ping" />
                        
                        {/* The Line and Label */}
                        <motion.div 
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 100, opacity: 1 }}
                            transition={{ delay: 0.8 + (i * 0.2), duration: 0.5 }}
                            className={`absolute top-1/2 h-[1px] bg-cyber-neon/50 flex items-center ${isEven ? 'left-4' : 'right-4 flex-row-reverse origin-right'}`}
                            style={{ width: '120px' }}
                        >
                            <div className="w-full h-full relative">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 + (i * 0.2) }}
                                    className={`absolute -top-8 ${isEven ? 'left-full ml-2' : 'right-full mr-2 text-right'} w-48`}
                                >
                                    <div className="bg-black/80 border border-cyber-neon/30 p-2 text-xs font-mono">
                                        <div className="text-cyber-neon font-bold">{spot.label}</div>
                                        <div className="text-gray-400">{spot.value}</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}

            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
          </div>
        </motion.div>

        {/* Info Side */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
             <span className="px-2 py-1 bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/50 text-xs font-mono tracking-widest">{shoe.codename}</span>
             <div className="h-[1px] flex-1 bg-gradient-to-r from-cyber-pink/50 to-transparent" />
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-none" style={{ textShadow: `0 0 20px ${shoe.color}40` }}>
            {shoe.name}
          </h2>

          <p className="font-body text-xl text-gray-300 leading-relaxed max-w-lg border-l-2 border-white/10 pl-4">
            {shoe.description}
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            {shoe.techSpecs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-mono text-gray-400 group cursor-default">
                <Activity size={14} className="text-cyber-blue group-hover:animate-pulse" />
                <span className="group-hover:text-cyber-blue transition-colors">{spec}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex-1 group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest overflow-hidden hover:bg-cyber-neon transition-colors">
                <span className="relative z-10 flex items-center justify-center gap-2">
                ACQUIRE <ShoppingBag size={18} />
                </span>
            </button>
            <button className="px-6 border border-white/20 hover:border-white text-white transition-colors">
                <ChevronRight />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductSection;