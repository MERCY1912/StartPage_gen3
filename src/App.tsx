import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractivePanel from './components/InteractivePanel';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-cream to-lavender font-sans relative overflow-hidden">
          <FloatingPetals />
          <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
            <Header />
            <Hero />
            <InteractivePanel />
            <Footer />
          </main>
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;