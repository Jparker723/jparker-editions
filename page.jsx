'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Visualizer from '../components/Visualizer';

export default function Page() {
  const [visualizerOpen, setVisualizerOpen] = useState(false);

  return (
    <main>
      <Navbar onOpenVisualizer={() => setVisualizerOpen(true)} />
      <HomePage onOpenVisualizer={() => setVisualizerOpen(true)} />
      <Visualizer isOpen={visualizerOpen} onClose={() => setVisualizerOpen(false)} />
    </main>
  );
}
