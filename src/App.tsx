import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BootSequence } from './components/BootSequence';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BeamsBackground } from './components/ui/beams-background';

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (booting) return; // Wait until boot completes before starting scroll

    // Initialize Lenis for smooth scrolling with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [booting]);

  return (
    <>
      {booting && <BootSequence onComplete={() => setBooting(false)} />}
      
      <div className={`${booting ? 'h-screen overflow-hidden' : ''} bg-black`}>
        <main className="relative min-h-screen">
          <Navbar />
          
          <Hero />
          
          {/* About section */}
          <About />
          <Projects />
          <Services />
          <Process />
          <Contact />
          <Footer />
        </main>
      </div>

      <style>{`
        body {
          background-color: black;
        }
      `}</style>
    </>
  );
}

