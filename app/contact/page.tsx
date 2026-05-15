'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-orange-100 selection:text-orange-900 w-full overflow-x-hidden">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-[76px] w-full"></div>

      <section className="pt-24 lg:pt-32 pb-24 px-6 relative overflow-hidden min-h-[calc(100vh-76px)] flex flex-col justify-center">
        {/* Ambient Animated Blob Background */}
        <div className="absolute inset-0 bg-[#FBFBFB] pointer-events-none z-0">
           <div className="absolute top-[0%] left-[10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
           <div className="absolute top-[20%] right-[10%] w-[40%] h-[60%] bg-orange-100/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
           
           {/* Modern Dotted Canvas Texture */}
           <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
           
           {/* Noise Overlay */}
           <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
        </div>

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
            <div className="order-2 lg:order-1 lg:pr-12">
               <div className="inline-flex items-center gap-2 text-[12px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100/80 px-4 py-2 rounded-full border border-zinc-200 mb-8 backdrop-blur-sm">
                  Get in touch
               </div>
               <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl tracking-tight leading-[1.05] font-medium text-zinc-900 mb-8"
               >
                  Connect with our <br />
                  <span className="text-zinc-400">
                     implementation team.
                  </span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[17px] md:text-[19px] text-zinc-600 font-light leading-relaxed mb-16 max-w-lg"
               >
                  Whether you are starting with a single department or organizing a nationwide archive, we are here to understand your requirements and design a sensible plan.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-10"
               >
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-zinc-600" />
                     </div>
                     <div>
                        <h3 className="font-medium text-[17px] text-zinc-900 mb-1">Corporate Office</h3>
                        <p className="text-zinc-500 font-light leading-relaxed">Level 35 & 37, West Tower, World Trade Center,<br />No. 1, Bank of Ceylon Mawatha, Colombo 1</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-zinc-600" />
                     </div>
                     <div>
                        <h3 className="font-medium text-[17px] text-zinc-900 mb-1">Direct contact</h3>
                        <p className="text-zinc-500 font-light leading-relaxed">contact@paperlogic.lk</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 bg-white border border-zinc-200 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-zinc-600" />
                     </div>
                     <div>
                        <h3 className="font-medium text-[17px] text-zinc-900 mb-1">Phone</h3>
                        <p className="text-zinc-500 font-light leading-relaxed">+94725999555</p>
                     </div>
                  </div>
               </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
               className="order-1 lg:order-2"
            >
               <div className="bg-white/80 p-8 sm:p-12 rounded-[40px] border border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-xl relative overflow-hidden min-h-[560px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                     {formState === 'idle' && (
                        <motion.form 
                           key="idle"
                           initial={{ opacity: 0, filter: 'blur(4px)' }}
                           animate={{ opacity: 1, filter: 'blur(0px)' }}
                           exit={{ opacity: 0, filter: 'blur(4px)' }}
                           transition={{ duration: 0.4 }}
                           onSubmit={handleSubmit} 
                           className="space-y-6"
                        >
                           <div className="mb-8">
                              <h2 className="text-3xl font-medium tracking-tight mb-2 text-zinc-900">Let&apos;s start a conversation</h2>
                              <p className="text-zinc-500 font-light">Tell us a bit about your current records situation.</p>
                           </div>

                           <div className="grid grid-cols-2 gap-5">
                              <div>
                                 <label className="block text-[13px] font-semibold text-zinc-600 mb-2 uppercase tracking-wide">First Name</label>
                                 <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all font-light" placeholder="Jane" />
                              </div>
                              <div>
                                 <label className="block text-[13px] font-semibold text-zinc-600 mb-2 uppercase tracking-wide">Last Name</label>
                                 <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all font-light" placeholder="Doe" />
                              </div>
                           </div>
                           <div>
                              <label className="block text-[13px] font-semibold text-zinc-600 mb-2 uppercase tracking-wide">Work Email</label>
                              <input required type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all font-light" placeholder="jane@organization.com" />
                           </div>
                           <div>
                              <label className="block text-[13px] font-semibold text-zinc-600 mb-2 uppercase tracking-wide">Estimated Volume</label>
                              <select required className="w-full bg-zinc-50 border border-zinc-200 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all font-light appearance-none" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1em' }}>
                                 <option value="" disabled selected>Select an approximation...</option>
                                 <option>A few filing cabinets</option>
                                 <option>A dedicated storage room</option>
                                 <option>Multiple storage locations / Warehouse</option>
                                 <option>Continuous daily intake</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-[13px] font-semibold text-zinc-600 mb-2 uppercase tracking-wide">How can we help?</label>
                              <textarea required rows={3} className="w-full bg-zinc-50 border border-zinc-200 rounded-[24px] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all font-light resize-none" placeholder="We have about 5 years of historical contracts..."></textarea>
                           </div>
                           <button type="submit" className="w-full bg-zinc-900 text-white py-4 rounded-full font-medium hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2 text-[17px]">
                              Send Message
                              <ArrowRight className="w-4 h-4" />
                           </button>
                        </motion.form>
                     )}

                     {formState === 'submitting' && (
                        <motion.div 
                           key="submitting"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 1.05 }}
                           className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10"
                        >
                           <Loader2 className="w-10 h-10 text-zinc-900 animate-spin mb-6" />
                           <p className="text-xl font-medium text-zinc-900 tracking-tight">Sending details...</p>
                        </motion.div>
                     )}

                     {formState === 'success' && (
                        <motion.div 
                           key="success"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md z-20 px-8 text-center"
                        >
                           <div className="w-20 h-20 bg-green-50 border-2 border-green-100 rounded-full flex items-center justify-center mb-8 mx-auto relative">
                              <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl animate-pulse"></div>
                              <CheckCircle2 className="w-10 h-10 text-green-600 relative z-10" />
                           </div>
                           <h3 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">Message received.</h3>
                           <p className="text-[17px] text-zinc-500 font-light leading-relaxed max-w-sm mx-auto mb-10">
                              Thank you for reaching out. A member of our team will review your requirements and get back to you within 24 hours to schedule a consultation.
                           </p>
                           <button 
                              onClick={() => setFormState('idle')}
                              className="bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                           >
                              Send another message
                           </button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </motion.div>
        </div>
      </section>

      {/* FOOTER (Minimal) */}
      <footer className="pt-24 pb-12 px-6 border-t border-zinc-200 bg-white relative z-10">
         <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-[15px] font-medium text-zinc-400">
            <div>&copy; {new Date().getFullYear()} Paperlogic Solutions PVT Limited.</div>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
