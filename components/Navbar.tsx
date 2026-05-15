'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight, Shirt, Leaf, ShoppingCart, Truck, Pill, LayoutGrid } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const industries = [
    { name: 'Apparel', href: '/industries/apparel', desc: 'Secure operational records', icon: Shirt, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Plantations', href: '/industries/plantations', desc: 'Centralize divisional documents', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50' },
    { name: 'FMCG', href: '/industries/fmcg', desc: 'Distribution route sheets', icon: ShoppingCart, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'Logistics', href: '/industries/logistics', desc: 'Clearance & customs filings', icon: Truck, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Pharma', href: '/industries/pharma', desc: 'NMRA & batch records', icon: Pill, color: 'text-teal-500', bg: 'bg-teal-50' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-xl border-zinc-200/50 py-4 shadow-sm' : 'bg-white/50 backdrop-blur-md border-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT LINKS */}
        <div className="hidden md:flex flex-1 items-center gap-8 text-[15px] font-medium text-zinc-600">
          <Link href="/platform" className="hover:text-zinc-900 transition-colors">Platform</Link>
          <div 
            className="relative h-full"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className={`flex items-center gap-1.5 hover:text-zinc-900 transition-colors py-2 outline-none h-full ${industriesOpen ? 'text-zinc-900' : ''}`}>
              Industries <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${industriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 pt-4 w-[650px] z-50"
                >
                  <div className="bg-white rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-zinc-200/60 overflow-hidden flex relative backdrop-blur-xl">
                    <div className="w-1/3 bg-zinc-50/80 p-8 flex flex-col justify-between border-r border-zinc-100">
                      <div>
                        <div className="w-10 h-10 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-zinc-100 flex items-center justify-center mb-6">
                           <LayoutGrid className="w-5 h-5 text-zinc-800" />
                        </div>
                        <h3 className="text-lg font-medium text-zinc-900 mb-2">Tailored Solutions</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          We understand the unique regulatory and operational burdens of your sector. Select your industry to see our tailored workflow.
                        </p>
                      </div>
                      <Link href="/platform" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-900 hover:text-zinc-600 transition-colors mt-8 uppercase tracking-wider">
                         Explore Platform <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    {/* Right Links Grid */}
                    <div className="w-2/3 p-6 grid grid-cols-1 gap-1">
                       {industries.map((ind) => (
                         <Link key={ind.name} href={ind.href} className="group p-3 rounded-2xl hover:bg-zinc-50 border border-transparent hover:border-zinc-100 transition-all flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${ind.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                               <ind.icon className={`w-5 h-5 ${ind.color}`} />
                            </div>
                            <div className="flex-1">
                               <div className="text-[15px] font-medium text-zinc-900 mb-0.5 flex items-center gap-2">
                                  {ind.name}
                               </div>
                               <div className="text-[13px] text-zinc-500">{ind.desc}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                         </Link>
                       ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* LOGO (CENTERED / MOBILE LEFT) */}
        <div className="flex-1 md:flex-none flex justify-start md:justify-center">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <Image src="/paperlogic_logo.svg" alt="Paperlogic" width={148} height={28} priority />
          </Link>
        </div>
        
        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6 shrink-0">
          <Link href="/login" className="text-zinc-600 hover:text-zinc-900 transition-colors text-[15px] font-medium">Log In</Link>
          <Link href="/contact" className="bg-[#111111] hover:bg-zinc-800 text-white px-6 py-2.5 rounded-full font-medium transition-colors text-[15px]">
            Book Survey
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -mr-2 text-zinc-900 outline-none">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
         {mobileMenuOpen && (
            <motion.div 
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: '100vh' }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
               className="md:hidden fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-xl border-t border-zinc-100 overflow-y-auto z-40"
            >
               <div className="flex flex-col p-6 space-y-6 pb-32">
                  <div className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest px-2">Platform</div>
                  <Link href="/platform" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-900 px-2 py-1">Overview</Link>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-900 px-2 py-1">Log In</Link>
                  
                  <div className="w-full h-px bg-zinc-100 my-4"></div>
                  
                  <div className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest px-2 mb-2">Industries</div>
                  <div className="flex flex-col space-y-2">
                     {industries.map((ind) => (
                       <Link key={ind.name} href={ind.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 p-2 rounded-2xl active:bg-zinc-50 transition-colors">
                          <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center shrink-0`}>
                             <ind.icon className={`w-5 h-5 ${ind.color}`} />
                          </div>
                          <div className="flex flex-col">
                             <span className="text-lg font-medium text-zinc-900">{ind.name}</span>
                             <span className="text-sm text-zinc-500">{ind.desc}</span>
                          </div>
                       </Link>
                     ))}
                  </div>

                  <div className="w-full h-px bg-zinc-100 my-4"></div>
                  
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#111111] text-center text-white w-full py-4 rounded-xl font-medium text-lg mt-4 shadow-xl shadow-zinc-200">
                     Book Free Survey
                  </Link>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
    </nav>
  );
}

