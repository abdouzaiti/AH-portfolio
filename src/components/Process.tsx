import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and technical requirements.',
  },
  {
    number: '02',
    title: 'Design & Strategy',
    description: 'Crafting the visual identity and technical architecture that will power your solution.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building your project with clean, scalable code and regular progress updates.',
  },
  {
    number: '04',
    title: 'Automation',
    description: 'Integrating intelligent workflows to ensure your system runs like a well-oiled machine.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Rigorous testing followed by a smooth launch and ongoing support.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">Execution Framework</p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-semibold uppercase tracking-[-0.04em] mb-8 leading-none">
            Strategic <span className="text-white/40">Process</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-sans leading-relaxed">
            A precise engineering methodology designed to transition from complex problems to high-performance systems.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 overflow-hidden">
                <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="w-full h-1/4 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                />
          </div>

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-32 ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col mb-4 ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-[0.3em] uppercase mb-2">Phase {step.number}</span>
                    <h3 className="text-4xl md:text-5xl font-display font-semibold uppercase tracking-tight">{step.title}</h3>
                  </div>
                  <p className={`text-white/50 font-sans leading-relaxed max-w-md mx-auto ${i % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 w-24 h-24 shrink-0 rounded-sm border border-white/10 bg-white/2 backdrop-blur-lg flex items-center justify-center text-xl font-mono text-white/80 group overflow-hidden">
                   <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                   <span className="relative z-10">{step.number}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
