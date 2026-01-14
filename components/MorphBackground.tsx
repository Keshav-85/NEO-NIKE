import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MORPH_PATH_1, MORPH_PATH_2, MORPH_PATH_3, MORPH_PATH_4 } from '../constants';

const MorphBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Interpolate the 'd' attribute of the SVG path based on scroll position
  // 0 -> Hero, 0.33 -> Shoe 1, 0.66 -> Shoe 2, 1.0 -> Footer/End
  const path = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [MORPH_PATH_1, MORPH_PATH_2, MORPH_PATH_3, MORPH_PATH_4, MORPH_PATH_1]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["#39ff14", "#ff0099", "#00f3ff", "#fdf500", "#39ff14"]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  const scale = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [1, 1.5, 0.8]
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cyber-black opacity-90 z-[-1]" />
      
      {/* Grid overlay for cyberpunk feel */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <motion.svg
        viewBox="0 0 600 600"
        className="w-[120vh] h-[120vh] max-w-none opacity-40 blur-3xl"
        style={{ rotate, scale }}
      >
        <motion.path
          d={path}
          fill={color}
          transition={{ duration: 0.5, ease: "linear" }} // Smoothness comes from useTransform, but transition helps if we change state abruptly
        />
      </motion.svg>
      
      <motion.svg
        viewBox="0 0 600 600"
        className="absolute w-[80vh] h-[80vh] max-w-none opacity-60 mix-blend-screen"
        style={{ rotate: useTransform(rotate, r => -r), scale }}
      >
        <motion.path
          d={path}
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
      </motion.svg>
    </div>
  );
};

export default MorphBackground;