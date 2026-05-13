import { motion } from 'motion/react';
import { Code, Smartphone, Cpu, Bot, Layers, Sparkles } from 'lucide-react';
import { StarBorder } from './ui/star-border';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Scalable, high-performance web applications built with modern frameworks like Next.js and React.',
    icon: Code,
    color: 'text-primary',
  },
  {
    title: 'Mobile App Development',
    description: 'Native-feel cross-platform mobile applications for iOS and Android using Flutter and React Native.',
    icon: Smartphone,
    color: 'text-accent',
  },
  {
    title: 'AI Integrations',
    description: 'Custom AI solutions, LLM implementations, and intelligent features that enhance user experience.',
    icon: Bot,
    color: 'text-green-500',
  },
  {
    title: 'Automation Systems',
    description: 'End-to-end business process automation, API integrations, and custom workflow engines.',
    icon: Cpu,
    color: 'text-purple-500',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design systems that are both beautiful and functional, with a focus on motion.',
    icon: Layers,
    color: 'text-pink-500',
  },
  {
    title: 'Digital Strategy',
    description: 'Consulting on tech stack selection, architecture design, and digital transformation.',
    icon: Sparkles,
    color: 'text-yellow-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-emerald-400">Engineering Portfolio</p>
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-semibold uppercase tracking-[-0.04em] mb-8 leading-none">
            System <br/><span className="text-white/40">Capabilities</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed">
            Architecting high-performance digital environments through precise code and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 border border-white/5 bg-white/2 rounded-sm group-hover:bg-white/10 transition-colors ${service.color}`}>
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase italic">0{i+1}</span>
              </div>
              <h3 className="text-2xl font-display font-semibold uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.1 + 0.5 }}
                    className="absolute inset-0 bg-white/20 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
