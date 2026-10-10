import React, { useState } from 'react';

export default function Visualizer({ isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState('30x45');
  const [substrate, setSubstrate] = useState('acrylic');
  const [wallColor, setWallColor] = useState('#121212');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/95 flex flex-col font-sans text-stone-100">
      <div className="h-16 border-b border-stone-800 px-6 flex items-center justify-between">
        <h2 className="font-serif text-lg tracking-wider">ROOM SCALE VISUALIZER (1:1 TRUE SCALE)</h2>
        <button onClick={onClose} className="text-sm uppercase tracking-widest hover:text-amber-400">Close ✕</button>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        {/* ROOM CANVAS */}
        <div 
          className="lg:col-span-2 flex flex-col items-center justify-center p-8 transition-colors duration-500 relative"
          style={{ backgroundColor: wallColor }}
        >
          <div className="relative max-w-xl w-full aspect-[3/2] flex items-center justify-center border border-dashed border-stone-700">
            <img 
              src="/images/jparker-colosseum-golden-hour.jpg" 
              alt="Visualizer Artwork" 
              className="max-h-full max-w-full object-contain shadow-2xl transition-all"
              style={{
                boxShadow: substrate === 'acrylic' ? '0 25px 50px -12px rgba(0,0,0,0.7)' : '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />
          </div>
          <div className="mt-8 text-xs uppercase tracking-widest text-stone-400">
            Scale benchmark: Mounted over 84" Sofa
          </div>
        </div>

        {/* CONTROLS SIDEBAR */}
        <div className="bg-stone-900 p-8 border-l border-stone-800 space-y-8 overflow-y-auto">
          <div>
            <label className="text-xs uppercase tracking-widest text-amber-400 block mb-3">1. Select Dimensions</label>
            <div className="grid grid-cols-3 gap-2">
              {['20x30', '24x36', '30x45'].map((sz) => (
                <button 
                  key={sz} 
                  onClick={() => setSelectedSize(sz)}
                  className={`py-3 border text-xs uppercase ${selectedSize === sz ? 'border-amber-400 text-amber-400 bg-stone-950' : 'border-stone-800 text-stone-400'}`}
                >
                  {sz} in
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-amber-400 block mb-3">2. Substrate Option</label>
            <div className="space-y-2 text-xs">
              {[
                { id: 'acrylic', label: '3/8" Museum Acrylic Face Mount' },
                { id: 'metal', label: 'Chromaluxe HD MetalPrint' },
                { id: 'paper', label: 'Hahnemühle Fine Art Rag (Framed)' }
              ].map((sub) => (
                <button 
                  key={sub.id}
                  onClick={() => setSubstrate(sub.id)}
                  className={`w-full p-3 text-left border ${substrate === sub.id ? 'border-amber-400 text-amber-400 bg-stone-950' : 'border-stone-800 text-stone-400'}`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-amber-400 block mb-3">3. Wall Color</label>
            <div className="flex gap-3">
              {['#121212', '#2a2a2a', '#F5F5F3', '#1B263B'].map((clr) => (
                <button 
                  key={clr} 
                  onClick={() => setWallColor(clr)}
                  className={`w-8 h-8 rounded-full border-2 ${wallColor === clr ? 'border-amber-400 scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: clr }}
                />
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800">
            <button className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 py-4 font-sans text-xs uppercase tracking-widest font-medium transition-colors">
              Inquire / Reserve Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
