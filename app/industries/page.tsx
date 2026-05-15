'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Truck, Landmark, ShieldCheck, Scale } from 'lucide-react';
import { WatercolorBackground } from '@/components/UISnippets';

export default function IndustriesPage() {
  const industries = [
    {
      title: "Logistics & Supply Chain",
      description: "Instantly process Bills of Lading, Commercial Invoices, and Delivery Notes with custom extraction models tuned for global shipping document variations.",
      img: "https://picsum.photos/seed/logisticsind/800/600"
    },
    {
      title: "Banking & Finance",
      description: "Securely digitize decades of loan applications, bank statements, and audit trails. Make everything instantly searchable while maintaining strict compliance protocols.",
      img: "https://picsum.photos/seed/financeind/800/600"
    },
    {
      title: "Insurance",
      description: "Automate claims processing workflows and archive old policy files without losing fidelity. Our AI identifies policy numbers and claim amounts out of the box.",
      img: "https://picsum.photos/seed/insuranceind/800/600"
    },
    {
      title: "Legal & Compliance",
      description: "Case files, contracts, and court documents securely digitized. Features built in automated PII masking and immutable access logs for litigation readiness.",
      img: "https://picsum.photos/seed/legalind/800/600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-[#111111] selection:bg-zinc-200">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 lg:pt-52 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="text-6xl sm:text-7xl lg:text-[100px] tracking-tight leading-[1] font-semibold text-[#111111] max-w-[1000px] mx-auto mb-10"
            >
               Solutions for <br />
               <span className="text-zinc-400">
                  every vertical.
               </span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="text-xl md:text-2xl text-[#666666] font-normal max-w-2xl mx-auto leading-relaxed mb-12"
            >
               We have trained our extraction models on millions of industry-specific documents ensuring out-of-the-box accuracy for your sector.
            </motion.p>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID */}
      <section className="py-20 px-6">
         <div className="max-w-[1200px] mx-auto space-y-32">
            {industries.map((ind, index) => (
               <div key={index} className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-8">
                     <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111]">{ind.title}</h2>
                     <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-lg">
                        {ind.description}
                     </p>
                     <button className="flex items-center gap-2 text-zinc-900 font-medium group text-lg pb-1 border-b border-zinc-900">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </div>
                  <div className="flex-1 w-full">
                     <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm relative flex items-center justify-center group">
                        <WatercolorBackground />
                        <div className="relative z-10 w-24 h-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/50 text-zinc-900 group-hover:scale-110 transition-transform duration-500">
                           {index === 0 && <Truck strokeWidth={1} className="w-12 h-12" />}
                           {index === 1 && <Landmark strokeWidth={1} className="w-12 h-12" />}
                           {index === 2 && <ShieldCheck strokeWidth={1} className="w-12 h-12" />}
                           {index === 3 && <Scale strokeWidth={1} className="w-12 h-12" />}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 px-4 sm:px-6 mb-12 mt-20">
         <div className="max-w-[1200px] mx-auto bg-zinc-900 rounded-[2rem] p-16 md:p-32 text-center relative overflow-hidden flex flex-col items-center">
            <h2 className="text-5xl md:text-[60px] font-medium tracking-tight text-white mb-10 relative z-10 max-w-3xl leading-[1.05]">
               Don&apos;t see your <span className="text-zinc-500">industry?</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-xl font-light leading-relaxed mb-10 relative z-10">
               Our models can be fine-tuned to your specific document types in a matter of days. Contact our engineering team for a custom assessment.
            </p>
            <div className="flex gap-4 relative z-10 flex-col sm:flex-row w-full sm:w-auto mt-4">
               <Link href="/contact" className="bg-white text-zinc-900 hover:bg-zinc-100 px-10 py-5 rounded-full font-medium transition-colors text-lg whitespace-nowrap inline-block">
                  Contact Sales
               </Link>
            </div>
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
