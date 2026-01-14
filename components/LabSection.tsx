import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Wind, Crosshair } from 'lucide-react';

const LabSection: React.FC = () => {
  const [mode, setMode] = useState<'stealth' | 'assault' | 'velocity'>('stealth');
  const [isGlitching, setIsGlitching] = useState(false);

  const handleModeChange = (newMode: typeof mode) => {
    setIsGlitching(true);
    setMode(newMode);
    setTimeout(() => setIsGlitching(false), 500);
  };

  const modes = {
    stealth: {
      color: '#4b5563',
      filter: 'grayscale(100%) contrast(120%) brightness(0.8)',
      stats: { p: 40, s: 95, a: 60 }
    },
    assault: {
      color: '#ef4444',
      filter: 'sepia(100%) hue-rotate(-50deg) saturate(300%) contrast(120%)',
      stats: { p: 90, s: 50, a: 70 }
    },
    velocity: {
      color: '#39ff14',
      filter: 'hue-rotate(90deg) saturate(200%) brightness(1.1)',
      stats: { p: 60, s: 70, a: 95 }
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-black border-t border-white/10 overflow-hidden py-20 snap-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        {/* Controls */}
        <div className="w-full md:w-1/3 space-y-8">
          <div className="border-l-4 border-cyber-neon pl-4">
            <h2 className="text-4xl font-display font-bold text-white mb-2">RESEARCH_LAB</h2>
            <p className="font-mono text-gray-400 text-sm">SELECT COMBAT CONFIGURATION</p>
          </div>

          <div className="flex flex-col gap-4">
            {(['stealth', 'assault', 'velocity'] as const).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                className={`flex items-center justify-between p-4 border transition-all duration-300 ${
                  mode === m 
                    ? 'border-cyber-neon bg-cyber-neon/10 text-cyber-neon scale-105' 
                    : 'border-white/20 text-gray-500 hover:border-white/50'
                }`}
              >
                <span className="font-display tracking-widest uppercase">{m}</span>
                {m === 'stealth' && <Shield size={18} />}
                {m === 'assault' && <Crosshair size={18} />}
                {m === 'velocity' && <Wind size={18} />}
              </button>
            ))}
          </div>

          {/* Stats Graph (Visual only) */}
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h3 className="font-mono text-xs text-gray-400 mb-4 flex items-center gap-2">
                <Zap size={12} className="text-cyber-yellow"/> PERFORMANCE METRICS
            </h3>
            <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                    <span className="w-12">PWR</span>
                    <div className="flex-1 h-1 bg-gray-700">
                        <motion.div 
                            className="h-full bg-cyber-pink" 
                            animate={{ width: `${modes[mode].stats.p}%` }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-12">STL</span>
                    <div className="flex-1 h-1 bg-gray-700">
                        <motion.div 
                            className="h-full bg-gray-400" 
                            animate={{ width: `${modes[mode].stats.s}%` }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-12">AGL</span>
                    <div className="flex-1 h-1 bg-gray-700">
                        <motion.div 
                            className="h-full bg-cyber-blue" 
                            animate={{ width: `${modes[mode].stats.a}%` }}
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Central Display */}
        <div className="w-full md:w-2/3 relative flex justify-center items-center">
            {/* Spinning Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-[500px] h-[500px] border border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite] ${isGlitching ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] ${isGlitching ? 'opacity-0' : 'opacity-100'}`} />
            </div>

            <motion.div
                animate={isGlitching ? { 
                    x: [-5, 5, -5, 5, 0],
                    opacity: [1, 0.5, 1, 0.5, 1],
                    filter: ["none", "invert(1)"] 
                } : { 
                    x: 0, opacity: 1 
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
            >
                <img 
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2670&auto=format&fit=crop"
                    alt="Prototype Shoe"
                    className="max-w-full md:max-w-xl object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                    style={{ 
                        filter: modes[mode].filter,
                        transition: 'filter 0.5s ease' 
                    }}
                />
                
                {/* Glitch Overlay layers */}
                {isGlitching && (
                    <>
                        <div className="absolute inset-0 bg-cyber-neon/20 mix-blend-color-dodge translate-x-2" style={{ clipPath: 'inset(10% 0 40% 0)'}}></div>
                        <div className="absolute inset-0 bg-cyber-pink/20 mix-blend-exclusion -translate-x-2" style={{ clipPath: 'inset(60% 0 10% 0)'}}></div>
                    </>
                )}
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LabSection;