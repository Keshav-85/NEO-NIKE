import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Camera, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a longer scrollable area
  const { scrollY } = useScroll();

  // Smooth out the scroll value for smoother parallax
  const smoothScroll = useSpring(scrollY, { stiffness: 50, damping: 20 });

  // 3D Parallax transforms for 3 columns
  const y1 = useTransform(smoothScroll, [0, 2000], [0, -600]);
  const y2 = useTransform(smoothScroll, [0, 2000], [-300, -1200]); // Moves faster
  const y3 = useTransform(smoothScroll, [0, 2000], [-100, -800]);  // Moves medium

  const rotate = useTransform(smoothScroll, [0, 2000], [0, 5]);

  // Split images into 3 columns
  const col1 = GALLERY_IMAGES.filter((_, i) => i % 3 === 0);
  const col2 = GALLERY_IMAGES.filter((_, i) => i % 3 === 1);
  const col3 = GALLERY_IMAGES.filter((_, i) => i % 3 === 2);

  return (
    <div ref={containerRef} className="relative w-full min-h-[250vh] bg-cyber-black overflow-hidden perspective-container">
      <style>{`
        .perspective-container {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Decorative Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
        <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(#39ff14 1px, transparent 1px),
                linear-gradient(90deg, #39ff14 1px, transparent 1px)`,
                backgroundSize: '100px 100px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'top center'
            }}
        />
      </div>

      <div className="fixed top-24 left-10 z-20 mix-blend-difference text-white pointer-events-none hidden md:block">
        <h2 className="font-display text-6xl font-bold opacity-20">ARCHIVE_GRID</h2>
        <p className="font-mono text-xs tracking-widest text-cyber-neon mt-2">SCROLL_TO_NAVIGATE_DATA_STREAM</p>
      </div>

      {/* 3D Content Container */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-full max-w-[1400px] h-[120vh] grid grid-cols-1 md:grid-cols-3 gap-8 p-8 preserve-3d origin-center"
            style={{ 
                rotateX: 20, 
                rotateZ: -5,
                rotateY: rotate,
                y: -100 // Initial offset to center
            }}
          >
            {/* Column 1 */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-8 preserve-3d">
                {col1.map((src, i) => (
                    <GalleryItem key={`c1-${i}`} src={src} index={i} />
                ))}
            </motion.div>

            {/* Column 2 */}
            <motion.div style={{ y: y2 }} className="flex flex-col gap-8 preserve-3d pt-24">
                {col2.map((src, i) => (
                    <GalleryItem key={`c2-${i}`} src={src} index={i} />
                ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: y3 }} className="flex flex-col gap-8 preserve-3d">
                {col3.map((src, i) => (
                    <GalleryItem key={`c3-${i}`} src={src} index={i} />
                ))}
            </motion.div>
          </motion.div>
      </div>
    </div>
  );
};

const GalleryItem: React.FC<{ src: string, index: number }> = ({ src, index }) => {
    return (
        <motion.div 
            className="group relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-white/10 bg-gray-900 pointer-events-auto cursor-pointer"
            whileHover={{ 
                scale: 1.1, 
                z: 100, 
                rotateX: 0, 
                rotateZ: 0,
                borderColor: '#39ff14',
                boxShadow: '0 0 50px rgba(57, 255, 20, 0.3)'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="absolute inset-0 bg-cyber-blue/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            
            <img 
                src={src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
            />
            
            {/* Overlay UI */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs text-cyber-neon border border-cyber-neon px-2 py-1">
                        IMG_0{index + 1}
                    </span>
                    <Maximize2 className="text-white w-4 h-4" />
                </div>
                
                <div>
                    <h3 className="font-display text-xl text-white">DATA_FRAGMENT</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-mono mt-1">
                        <Camera size={12} />
                        <span>RAW_CAPTURE</span>
                    </div>
                </div>
            </div>

            {/* Glitch lines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
        </motion.div>
    )
}

export default Gallery;