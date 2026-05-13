import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Copy, Check } from 'lucide-react';
import { StarBorder } from './ui/star-border';
import { StarButton } from './ui/star-button';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "zaitihabibi@gmail.com";

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "213657097226";
    const text = `*New Signal Transmission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">Connection Portal</p>
              </div>
              <h2 className="text-6xl md:text-9xl font-display font-semibold uppercase tracking-[-0.04em] mb-12 leading-[0.8]">
                Let's <br />
                <span className="text-white/40 italic">build</span> <br />
                the future.
              </h2>
              <p className="text-xl text-white/50 mb-16 max-w-sm font-sans leading-relaxed">
                Have a project in mind? Or just want to say hi? We're always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-12">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-cyan-400 tracking-[0.3em] uppercase">Primary Contact</span>
                  <div className="flex items-center gap-4 group">
                    <a href={`mailto:${email}`} className="text-2xl md:text-3xl font-display font-semibold hover:text-cyan-400 transition-colors uppercase tracking-tight break-all md:break-normal">
                        {email}
                    </a>
                    <button 
                      onClick={copyToClipboard}
                      className="p-3 rounded-sm border border-white/10 bg-white/2 hover:bg-white/5 transition-colors relative group interactive"
                    >
                      {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-white/40 group-hover:text-white" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">Digital Node</span>
                    <div className="flex gap-4">
                    {[
                        { Icon: Github, href: "#" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/zaiti-habibi-1617b13bb/" },
                        { Icon: Instagram, href: "https://www.instagram.com/zaiti.habibi/" }
                    ].map(({ Icon, href }, i) => (
                        <a
                        key={i}
                        href={href}
                        target={href !== "#" ? "_blank" : undefined}
                        rel={href !== "#" ? "noopener noreferrer" : undefined}
                        className="w-12 h-12 rounded-sm border border-white/5 bg-white/2 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                        >
                        <Icon size={18} />
                        </a>
                    ))}
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-full lg:mt-32"
          >
            <div className="p-8 md:p-12 border border-white/5 bg-white/2 backdrop-blur-3xl rounded-sm">
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-semibold uppercase tracking-tight mb-2 italic">Signal Transmission</h3>
                </div>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors bg-transparent font-sans"
                      placeholder="e.g. JOHN DOE"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors bg-transparent font-sans"
                      placeholder="e.g. JOHN@EXAMPLE.COM"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors bg-transparent font-sans resize-none"
                      placeholder="Describe the system requirements..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-white text-black font-semibold uppercase tracking-[0.3em] text-xs transition-transform hover:scale-105 active:scale-95 interactive"
                  >
                    Initiate Transmission
                  </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
