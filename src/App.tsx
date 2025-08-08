import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractivePanel } from './components/InteractivePanel';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import WaveAnimation from './components/WaveAnimation';
import { CursorTrail } from './components/CursorTrail';
import { CursorTracker } from './components/CursorTracker';
import { FloatingImages } from './components/FloatingImages';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-brand-pink/70 from-0% via-slate-200 via-20% to-slate-200 to-80% relative overflow-hidden">
          {/* Particle animation background */}
          <ParticleBackground />
          <WaveAnimation />
          <FloatingImages />
          
          {/* Cursor trail effect */}
          <CursorTrail />
          
          {/* Cursor position tracker */}
          <CursorTracker />
          
          {/* Main content */}
          <div className="relative z-10">
            <Header />
            <Hero />
            <InteractivePanel />
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;