import { motion } from 'motion/react';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex items-center justify-center group"
    >
      <img 
        src="/logo.png" 
        alt="Abdou & Hadi Logo" 
        className="h-14 md:h-16 w-auto object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        style={{ filter: 'contrast(120%) brightness(1.2)' }}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
