import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const lines = [
  "INITIALIZING KERNEL v20.77...",
  "CHECKING BIOS... OK",
  "DECRYPTING ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "NEURAL HANDSHAKE: COMPLETE",
  "WELCOME, RUNNER."
];

const BootSequence: React.FC<Props> = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, Math.random() * 300 + 200); // Random delay between 200-500ms
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[1000] flex flex-col items-start justify-end p-10 md:p-20 font-mono text-cyber-neon selection:bg-cyber-neon selection:text-black">
      <div className="w-full max-w-2xl">
        {lines.map((line, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: currentLineIndex >= index ? 1 : 0, x: currentLineIndex >= index ? 0 : -10 }}
                className="mb-2 text-sm md:text-xl"
            >
                <span className="mr-4 text-gray-500">{`> 0x${(2550 + index * 12).toString(16).toUpperCase()}`}</span>
                {line}
            </motion.div>
        ))}
        <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-3 h-5 bg-cyber-neon mt-4"
        />
      </div>
      
      <div className="absolute top-10 right-10 text-right text-xs text-gray-600 hidden md:block">
        <div>CPU: 4.8THz</div>
        <div>MEM: 128PB</div>
        <div>NET: CONNECTED</div>
      </div>
    </div>
  );
};

export default BootSequence;