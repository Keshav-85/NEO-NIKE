import React from 'react';
import { Menu, Search, User } from 'lucide-react';

interface Props {
  onNavigate: (view: 'home' | 'gallery') => void;
  currentView: 'home' | 'gallery';
}

const Navbar: React.FC<Props> = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
            <h1 
              onClick={() => onNavigate('home')}
              className="font-display font-bold text-xl tracking-widest text-white cursor-pointer hover:text-cyber-neon transition-colors"
            >
              NEO-NIKE
            </h1>
            <div className="hidden md:flex gap-6 font-mono text-xs text-gray-400">
                <button 
                  onClick={() => onNavigate('home')} 
                  className={`hover:text-cyber-neon transition-colors ${currentView === 'home' ? 'text-cyber-neon' : ''}`}
                >
                  [COLLECTIONS]
                </button>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className={`hover:text-cyber-neon transition-colors ${currentView === 'gallery' ? 'text-cyber-neon' : ''}`}
                >
                  [GALLERY_GRID_3D]
                </button>
                <button className="hover:text-cyber-neon transition-colors">[LABS]</button>
            </div>
        </div>

        <div className="flex items-center gap-6 text-white">
            <Search size={20} className="hover:text-cyber-blue cursor-pointer transition-colors" />
            <User size={20} className="hover:text-cyber-blue cursor-pointer transition-colors" />
            <Menu size={24} className="md:hidden hover:text-cyber-neon cursor-pointer" />
            <div className="hidden md:block px-4 py-1 border border-cyber-neon text-cyber-neon font-mono text-xs hover:bg-cyber-neon hover:text-black transition-colors cursor-pointer">
                CONNECT_WALLET
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;