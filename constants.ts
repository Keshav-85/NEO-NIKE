import { Shoe } from './types';

// Complex SVG paths for morphing.
export const MORPH_PATH_1 = "M435.5,120.5 C485,170 510,250 480,320 C450,390 380,420 300,430 C220,440 150,400 120,330 C90,260 110,180 160,130 C210,80 300,60 360,80 C420,100 435.5,120.5 435.5,120.5 Z";
export const MORPH_PATH_2 = "M450,100 L500,300 L350,450 L150,400 L50,250 L150,50 L350,20 L450,100 Z";
export const MORPH_PATH_3 = "M550,200 C550,300 500,380 400,400 C300,420 200,380 100,350 C50,320 50,150 150,120 C250,90 350,50 450,100 C550,150 550,200 550,200 Z";
export const MORPH_PATH_4 = "M400,100 L420,150 L480,140 L460,200 L500,250 L400,400 L300,450 L200,400 L100,250 L150,150 L250,50 L400,100 Z";

export const SHOES: Shoe[] = [
  {
    id: 'nike-air-mag-neo',
    name: 'NIKE AIR MAG NEO',
    codename: 'PROJECT_FLUX',
    price: 'ETH 2.5',
    description: 'Self-lacing adaptive fit technology derived from 2089 archive data. Zero-gravity sole unit.',
    imageUrl: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2670&auto=format&fit=crop',
    techSpecs: ['Auto-Lace v9.0', 'Flux Capacitor Sole', 'Anti-Grav Mesh'],
    color: '#00f3ff',
    hotspots: [
      { id: 'h1', x: 45, y: 60, label: 'AUTO-LACE MOTOR', value: '4000 RPM' },
      { id: 'h2', x: 75, y: 80, label: 'FLUX UNIT', value: '1.21 GW' },
      { id: 'h3', x: 20, y: 40, label: 'CUFF SENSOR', value: 'BIOMETRIC' }
    ]
  },
  {
    id: 'vapor-glitch-runner',
    name: 'VAPOR GLITCH RUNNER',
    codename: 'SECTOR_7_PROTO',
    price: 'ETH 1.8',
    description: 'Designed for urban traversal in high-density sectors. Neural-link compatible sensory feedback.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop',
    techSpecs: ['Haptic Feedback', 'Stealth Fabric', 'Neon-pulse Rim'],
    color: '#ff0099',
    hotspots: [
        { id: 'h1', x: 50, y: 50, label: 'UPPER MESH', value: 'NANOFIBER' },
        { id: 'h2', x: 80, y: 85, label: 'TRACTION', value: 'MAG-LOCK' }
    ]
  },
  {
    id: 'cyber-dunk-low',
    name: 'CYBER DUNK LOW',
    codename: 'NETRUNNER_EDITION',
    price: 'ETH 1.2',
    description: 'Classic silhouette reinforced with carbon-nanotube weave. Acid-rain resistant coating.',
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop',
    techSpecs: ['Gore-Tex Infinite', 'Carbon Plate', 'Data-Port Heel'],
    color: '#39ff14',
    hotspots: [
        { id: 'h1', x: 30, y: 65, label: 'SWOOSH', value: 'OLED PANEL' },
        { id: 'h2', x: 60, y: 30, label: 'COLLAR', value: 'MEMORY FOAM' },
        { id: 'h3', x: 85, y: 80, label: 'MIDSOLE', value: 'REACTOR CORE' }
    ]
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2525&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605348532760-6753d5c43329?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556906781-9a412961d289?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514989940723-e8875ea6ab7d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=2000&auto=format&fit=crop"
];