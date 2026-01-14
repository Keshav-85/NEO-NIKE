import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
        {/* Main Reticle */}
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 border border-cyber-neon rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            animate={{
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
                scale: isHovering ? 0.5 : 1,
                backgroundColor: isHovering ? '#39ff14' : 'transparent'
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />
        
        {/* Outer Ring / Brackets */}
        <motion.div
            className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center hidden md:flex"
            animate={{
                x: mousePosition.x - 24,
                y: mousePosition.y - 24,
                scale: isHovering ? 1.5 : 1,
                rotate: isHovering ? 90 : 0
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
            {isHovering ? (
                // Bracket Style for hover
                <div className="w-full h-full relative">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-pink"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-pink"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-pink"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-pink"></div>
                </div>
            ) : (
                // Dotted Ring for normal
                <div className="w-full h-full border border-dashed border-white/30 rounded-full animate-spin-slow"></div>
            )}
        </motion.div>
    </>
  );
};

export default CustomCursor;