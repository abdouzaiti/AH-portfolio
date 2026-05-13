import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: "40%", opacity: 0, filter: "blur(20px)" }}
            animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.15em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.6em] -right-[0.25em] text-[0.4em] text-cyan-400 animate-pulse">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="h-screen w-full bg-black">
      <div className="relative h-full w-full overflow-hidden">
        
        {/* Background video - Single Subject Studio */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise & Texture Overlays - Lightened for clarity */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 md:px-12 md:pb-16 lg:px-20 lg:pb-24">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-12">
            
            <div className="col-span-12 lg:col-span-9 translate-x-[-0.04em]">
              <h1
                className="font-display font-semibold leading-[0.9] tracking-[-0.05em] text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[7.5vw] uppercase pointer-events-none"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="ZAITI × HABIBI" />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-8 pb-4 lg:col-span-3 lg:pb-8">
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40">Collective Intelligence</span>
                </div>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans max-w-sm">
                  We are a dual-force engineering studio building digital systems and intelligent automation for real-world impact. Bound by passion and hunger to unlock potential through unique perspectives.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-4 rounded-sm bg-white py-1 pl-6 pr-1 text-xs font-mono uppercase tracking-[0.2em] text-black transition-all hover:pr-2 interactive"
                >
                  Enter the lab
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-black transition-transform group-hover:scale-105">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

