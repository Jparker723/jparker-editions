import React, { useState } from 'react';
import { navigationConfig } from '../config/developer-config';

export default function Navbar({ onOpenVisualizer }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 text-stone-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <a href="/" className="font-serif text-xl tracking-widest uppercase text-stone-100 hover:text-amber-400 transition-colors">
          {navigationConfig.brand}
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em]">
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#fine-art" className="py-6 hover:text-amber-400 transition-colors flex items-center gap-1">
              Fine Art Collections
              <span className="text-[10px]">▼</span>
            </a>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-stone-900 border border-stone-800 p-6 shadow-2xl space-y-4">
                {navigationConfig.mainNav[0]?.categories?.map((cat) => (
                  <a key={cat.title} href="#fine-art" className="block group">
                    <p className="text-stone-200 group-hover:text-amber-400 transition-colors font-medium">{cat.title}</p>
                    <p className="text-[10px] text-stone-500 lowercase">featured: {cat.featuredItem}</p>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#aegean" className="hover:text-amber-400 transition-colors flex items-center gap-2">
            Aegean Series
            <span className="text-[9px] bg-stone-800 text-amber-400 px-2 py-0.5 rounded uppercase">Color</span>
          </a>

          <a href="#about" className="hover:text-amber-400 transition-colors">
            About
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center space-x-6 text-xs uppercase tracking-widest">
          <button 
            onClick={onOpenVisualizer}
            className="border border-amber-400/50 hover:border-amber-400 text-amber-400 px-5 py-2.5 transition-all duration-300"
          >
            Room Visualizer
          </button>
          <a href="#inquire" className="text-stone-300 hover:text-white">
            Inquire (0)
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-stone-300 hover:text-white"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-6 py-8 space-y-6 text-xs uppercase tracking-widest">
          <a href="#fine-art" className="block text-amber-400 font-medium">Fine Art Collections</a>
          <a href="#aegean" className="block text-stone-300">Aegean Series (Open Edition)</a>
          <a href="#about" className="block text-stone-300">About the Artist</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenVisualizer(); }}
            className="w-full text-center border border-amber-400 text-amber-400 py-3"
          >
            Launch Room Visualizer
          </button>
        </div>
      )}
    </header>
  );
}
