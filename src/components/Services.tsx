import { motion } from 'motion/react';
import { Bot, Sparkles } from 'lucide-react';
import IconCloud from './ui/icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "supabase",
  "n8n",
  "flutter",
  "c",
  "firebase",
  "git",
  "github",
  "docker",
  "python",
  "dart"
];

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Scalable, high-performance web applications built with modern frameworks like Next.js and React.',
    icon: null,
    color: 'text-primary',
  },
  {
    title: 'Mobile App Development',
    description: 'Native-feel cross-platform mobile applications for iOS and Android using Flutter and React Native.',
    icon: null,
    color: 'text-accent',
  },
  {
    title: 'AI Integrations',
    description: 'Custom AI solutions, LLM implementations, and intelligent features that enhance user experience.',
    icon: null,
    color: 'text-green-500',
  },
  {
    title: 'Automation Systems',
    description: 'End-to-end business process automation, API integrations, and custom workflow engines.',
    icon: null,
    color: 'text-purple-500',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric design systems that are both beautiful and functional, with a focus on motion.',
    icon: null,
    color: 'text-pink-500',
  },
  {
    title: 'Digital Strategy',
    description: 'Consulting on tech stack selection, architecture design, and digital transformation.',
    icon: null,
    color: 'text-yellow-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-emerald-400">Engineering Portfolio</p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold uppercase tracking-[-0.04em] mb-8 leading-none italic">
              System <br/><span className="text-white/40">Capabilities</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-sans leading-relaxed">
              Architecting high-performance digital environments through precise code and intelligent automation.
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-sm lg:max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-emerald-400/5 blur-[100px] rounded-full" />
              <IconCloud iconSlugs={slugs} />
            </motion.div>
          </div>
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
