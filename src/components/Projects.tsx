import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StarButton } from './ui/star-button';
import { StarBorder } from './ui/star-border';
import { ScannerCardStream } from './ScannerCardStream';

const projects = [
  {
    id: 1,
    title: 'Delizia Pizza',
    category: 'Web',
    image: 'https://api.microlink.io/?url=https://delizia-pizza.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    description: 'A premium Italian pizza restaurant website featuring a modern menu, online ordering system, and elegant visual storytelling.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    link: 'https://delizia-pizza.vercel.app/',
  },
  {
    id: 2,
    title: 'AI Outreach Architect',
    category: 'Automation',
    image: '/workflow1.jpg',
    description: 'An intelligent email automation system that sends messages automatically, uses AI to classify replies, and logs results in real-time—optimizing lead management and response efficiency.',
    tech: ['n8n', 'OpenAI', 'Google Sheets', 'Gmail API'],
    link: '#',
  },
  {
    id: 3,
    title: 'AI Lead Processing Agent',
    category: 'Automation',
    image: '/workflow2.jpg',
    description: 'An AI-powered email agent that automates outreach while collecting and processing lead data from external sources via APIs—streamlining data storage and lead management.',
    tech: ['n8n', 'OpenAI', 'API Integration', 'Google Sheets'],
    link: '#',
  },
  {
    id: 4,
    title: 'AI Personalized Outreach System',
    category: 'Automation',
    image: '/workflow3.jpg',
    description: 'An AI-powered outreach system that sends personalized emails, analyzes replies with sentiment detection, and automates smart follow-ups—streamlining lead tracking and engagement.',
    tech: ['n8n', 'OpenAI', 'Sentiment Analysis', 'Gmail API'],
    link: '#',
  },
  {
    id: 5,
    title: 'Mo3adali',
    category: 'Mobile',
    image: 'https://api.microlink.io/?url=https://mo3adali.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    description: 'A comprehensive academic management mobile app that helps students calculate, track, and optimize their grade point averages with a clean, intuitive interface.',
    tech: ['React', 'Tailwind CSS', 'PWA', 'Vercel'],
    link: 'https://mo3adali.vercel.app/',
  },
  {
    id: 6,
    title: 'École Nadjah',
    category: 'Web',
    image: 'https://api.microlink.io/?url=https://ecole-nadjah.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
    description: 'A dedicated platform for École Nadjah private school, featuring integrated live educational sessions and an interactive learning environment.',
    tech: ['React', 'Tailwind CSS', 'Live Sessions', 'Vercel'],
    link: 'https://ecole-nadjah.vercel.app/',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const categories = ['All', 'Web', 'Mobile', 'Automation'];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreenImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects.filter(p => p.id !== 3) 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-semibold uppercase tracking-[-0.04em] mb-4">
                Selected <span className="text-white/40">Work</span>
              </h2>
              <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">System Deployment Repository</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.3}>
            <div className="flex gap-2 bg-white/2 p-1 rounded-sm border border-white/10 overflow-x-auto no-scrollbar max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                    filter === cat ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full relative mt-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ScannerCardStream 
                initialSpeed={550}
                cardData={filteredProjects.map(p => ({
                  id: p.id,
                  image: p.image,
                  link: p.link !== '#' ? p.link : undefined,
                  title: p.title
                }))}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
              onClick={() => setFullscreenImage(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={fullscreenImage}
              alt="Project Fullscreen"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
