import React, { useState, useEffect } from 'react';
import MorphBackground from './components/MorphBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import CyberChat from './components/CyberChat';
import BootSequence from './components/BootSequence';
import CustomCursor from './components/CustomCursor';
import LabSection from './components/LabSection';
import Gallery from './components/Gallery';
import { SHOES } from './constants';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<'home' | 'gallery'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="relative min-h-screen bg-cyber-black text-gray-100 selection:bg-cyber-pink selection:text-white">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <BootSequence onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Effect - Only show on home to not conflict with gallery 3d effect */}
            {view === 'home' && <MorphBackground />}
            
            {/* Overlay UI */}
            <Navbar onNavigate={setView} currentView={view} />
            
            <AnimatePresence mode="wait">
              {view === 'home' ? (
                <motion.main 
                  key="home"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Hero />
                  
                  <div className="flex flex-col">
                      {SHOES.map((shoe, index) => (
                          <ProductSection key={shoe.id} shoe={shoe} index={index} />
                      ))}
                  </div>

                  {/* Lab Section */}
                  <LabSection />

                  <section className="h-[50vh] flex flex-col items-center justify-center border-t border-white/10 bg-black/80 backdrop-blur-sm relative overflow-hidden">
                       {/* Footer decorative grid */}
                      <div className="absolute inset-0 opacity-5" 
                           style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} 
                      />
                      
                      <h2 className="font-display text-4xl mb-4 relative z-10">JOIN THE RESISTANCE</h2>
                      <div className="flex gap-4 relative z-10">
                          <input type="email" placeholder="ENTER_EMAIL_ADDRESS" className="bg-transparent border border-gray-600 px-4 py-2 font-mono text-white focus:border-cyber-neon outline-none w-64 bg-black/50" />
                          <button className="bg-cyber-neon text-black font-bold px-6 py-2 font-display hover:bg-white transition-colors">SUBSCRIBE</button>
                      </div>
                      <p className="mt-8 font-mono text-xs text-gray-600 relative z-10">© 2077 NEO-NIKE CORP. ALL RIGHTS RESERVED.</p>
                  </section>
                </motion.main>
              ) : (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Gallery />
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Assistant */}
            <CyberChat />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;