import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootMessages = [
  "INITIALIZING...",
  "LOADING SYSTEMS...",
  "CONNECTING DATABASE...",
  "SYNC COMPLETE"
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (messageIndex < bootMessages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex(prev => prev + 1);
      }, 700); // adjust timing as needed
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsCompleted(true);
        setTimeout(onComplete, 1000); // Extra time for the exit animation
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isCompleted && (
        <motion.div
          key="boot-sequence"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden font-mono text-white selection:bg-cyan-500/30"
        >
          {/* Subtle grid background for boot */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
          
          {/* Subtle glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Tiny glowing particles (simulated with CSS/motion if needed, keeping simple here) */}
          <div className="relative z-10 text-center">
            {bootMessages.map((msg, index) => (
              <motion.div
                key={msg}
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ 
                    opacity: index <= messageIndex ? (index === messageIndex ? 1 : 0.4) : 0, 
                    y: 0, 
                    filter: index <= messageIndex ? "blur(0px)" : "blur(5px)"
                }}
                className={`text-sm md:text-base tracking-[0.3em] font-medium mb-4 ${index === messageIndex ? 'text-cyan-400' : 'text-gray-500'}`}
                style={{
                  textShadow: index === messageIndex ? '0 0 15px rgba(34, 211, 238, 0.5)' : 'none'
                }}
              >
                {msg}
              </motion.div>
            ))}
          </div>
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] z-20 pointer-events-none opacity-20 Mix-blend-overlay" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
