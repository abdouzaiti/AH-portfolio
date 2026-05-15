import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

import { BeamsBackground } from './components/ui/beams-background';

export default function App() {
  const [booting, setBooting] = useState(false);

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
      <div className="bg-black">
        <ScrollProgress />
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

