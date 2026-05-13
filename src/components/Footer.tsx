import { motion } from 'motion/react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-12 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="scale-75 origin-left">
              <Logo />
            </a>
            <p className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
              © {new Date().getFullYear()} ZAITI × HABIBI. ALL SYSTEMS OPERATIONAL.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] font-mono tracking-widest text-white/40 hover:text-white transition-colors uppercase"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            V. 2.1.0-DEPLOYED
          </div>
        </div>
      </div>
    </footer>
  );
}
