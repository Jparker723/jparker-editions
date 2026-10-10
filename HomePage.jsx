import React, { useState } from 'react';
import { fineArtCollection, oceansidePierDiptych, greeceCollections } from '../config/developer-config';

export default function HomePage({ onOpenVisualizer, onSelectArtwork }) {
  const [activeDiptychTab, setActiveDiptychTab] = useState('midnightColor');

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen font-serif">
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-stone-800">
        <img 
          src="/images/jparker-colosseum-golden-hour.jpg" 
          alt="Colosseum Monolith"
          className="absolute inset-0 w-full h-full object-cover opacity-40 filter grayscale contrast-125 scale-105"
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-4 font-sans">
            Fine Art & Architectural Monochromes
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            JPARKER EDITIONS
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-sans font-light mb-8 leading-relaxed">
            Museum-grade fine art photography isolating form, quietude, and elemental structure across world architecture and waterscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-sans text-sm tracking-widest uppercase">
            <a 
              href="#fine-art"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-8 py-4 transition-all duration-300 font-medium"
            >
              Explore Lead Exhibition
            </a>
            <button 
              onClick={onOpenVisualizer}
              className="border border-stone-400 hover:border-white px-8 py-4 transition-all duration-300"
            >
              Launch Room Scale Visualizer
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED FINE ART MONOCHROMES */}
      <section id="fine-art" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 font-sans mb-2">Curated Portfolio</h2>
          <p className="text-3xl md:text-4xl font-light">Featured Masterworks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fineArtCollection.items.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer bg-stone-900 border border-stone-800 p-4 transition-all duration-500 hover:border-stone-600"
              onClick={() => onSelectArtwork && onSelectArtwork(item.id)}
            >
              <div className="overflow-hidden aspect-[2/3] mb-4 bg-stone-950">
                <img 
                  src={`/images/${item.filename}`} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="font-sans">
                <span className="text-xs text-amber-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-xl font-serif text-stone-100 my-1">{item.title}</h3>
                <p className="text-xs text-stone-400 uppercase tracking-widest">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT DIPTYCH: OCEANSIDE PIER */}
      <section className="bg-stone-900 border-y border-stone-800 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-sans">Diptych Study</span>
            <h2 className="text-3xl md:text-5xl font-light mt-2 mb-6">Oceanside Pier: Day & Midnight</h2>
            <p className="text-stone-300 font-sans font-light leading-relaxed mb-6">
              A unique study in contrast. Side-by-side exposures capture Oceanside Pier under direct daylight and again at 11:00 PM in pitch darkness without moonlight.
            </p>
            
            <div className="flex gap-4 font-sans text-xs uppercase tracking-wider mb-8">
              <button 
                onClick={() => setActiveDiptychTab('midnightColor')}
                className={`px-4 py-3 border transition-all ${activeDiptychTab === 'midnightColor' ? 'border-amber-400 text-amber-400 bg-stone-950' : 'border-stone-800 text-stone-400'}`}
              >
                11 PM Midnight Exposure
              </button>
              <button 
                onClick={() => setActiveDiptychTab('daytimeMonochrome')}
                className={`px-4 py-3 border transition-all ${activeDiptychTab === 'daytimeMonochrome' ? 'border-amber-400 text-amber-400 bg-stone-950' : 'border-stone-800 text-stone-400'}`}
              >
                Daylight Monochrome
              </button>
            </div>

            <button 
              onClick={onOpenVisualizer}
              className="bg-stone-100 text-stone-950 font-sans text-xs uppercase tracking-widest px-8 py-4 hover:bg-stone-300 transition-colors"
            >
              Preview Set in Room Visualizer
            </button>
          </div>

          <div className="relative aspect-[2/3] bg-stone-950 border border-stone-800 p-2">
            <img 
              src={`/images/${oceansidePierDiptych.items[activeDiptychTab].filename}`} 
              alt="Oceanside Pier Preview"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* AEGEAN COLOR SERIES */}
      <section id="aegean" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-amber-400 font-sans mb-2">Open Edition Travel Series</h2>
          <p className="text-3xl md:text-4xl font-light">The Aegean Series</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {greeceCollections.aegeanSeries.items.map((item) => (
            <div key={item.id} className="bg-stone-900 border border-stone-800 p-4">
              <div className="aspect-[2/3] mb-4 overflow-hidden bg-stone-950">
                <img 
                  src={`/images/${item.filename}`} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif">{item.title}</h3>
              <p className="text-xs font-sans text-stone-400 uppercase tracking-widest mt-1">{item.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST FOOTER */}
      <footer className="border-t border-stone-800 py-16 text-center font-sans text-stone-400 text-xs">
        <p className="mb-2">© JParker Editions. All Rights Reserved.</p>
        <p>Museum-Grade Fine Art & Architectural Photography</p>
      </footer>

    </div>
  );
}
