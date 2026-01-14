export interface Hotspot {
  id: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  label: string;
  value: string;
}

export interface Shoe {
  id: string;
  name: string;
  codename: string;
  price: string;
  description: string;
  imageUrl: string;
  techSpecs: string[];
  color: string;
  hotspots?: Hotspot[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum MorphState {
  IDLE,
  MORPHING
}