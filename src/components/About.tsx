import { motion } from 'motion/react';
import { Code2, Cpu, Globe, Smartphone, Zap } from 'lucide-react';

const skills = {
  abdou: [
    { name: 'React / Next.js', icon: Globe },
    { name: 'Flutter / Mobile', icon: Smartphone },
    { name: 'Node.js / Backend', icon: Code2 },
    { name: 'UI/UX Design', icon: Zap },
  ],
  abdelhadi: [
    { name: 'AI Workflows', icon: Cpu },
    { name: 'API Integrations', icon: Code2 },
    { name: 'Process Automation', icon: Zap },
    { name: 'Custom Bots', icon: Globe },
  ],
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-display font-semibold uppercase tracking-[-0.04em] mb-8">
            The Duo Behind <br/>the <span className="text-white/40">Magic</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-sans leading-relaxed">
            Combining high-end development with intelligent automation to build the future of digital business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Abdou */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group lg:border-r lg:border-white/5 lg:pr-16"
          >
            <div className="flex flex-col gap-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/5 bg-white/2 mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200" 
                        alt="Zaiti Abdou working" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase mb-4">Lead Systems Engineer</span>
                    <h3 className="text-5xl md:text-6xl font-display font-semibold uppercase tracking-tighter mb-4">Zaiti Abdou</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-sans mb-8">
                    A creative engineer focused on crafting immersive digital systems. Specialized in building scalable web architectures and high-performance applications with a focus on system integrity and motion design.
                </p>
                <div className="flex flex-wrap gap-2">
                {skills.abdou.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/5 bg-white/2">
                        <skill.icon size={14} className="text-cyan-400" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
          </motion.div>

          {/* Abdelhadi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="flex flex-col gap-6">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-white/5 bg-white/2 mb-4">
                    <img 
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                        alt="Habibi Abdelhadi working" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-emerald-400 tracking-[0.4em] uppercase mb-4">Automation Architect</span>
                    <h3 className="text-5xl md:text-6xl font-display font-semibold uppercase tracking-tighter mb-4">Habibi Abdelhadi</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-sans mb-8">
                    Master of efficiency and intelligent workflows. Architecting complex automation systems and AI integrations that eliminate friction and scale operational intelligence for modern enterprises.
                </p>
                <div className="flex flex-wrap gap-2">
                {skills.abdelhadi.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/5 bg-white/2">
                        <skill.icon size={14} className="text-emerald-400" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">{skill.name}</span>
                    </div>
                ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
