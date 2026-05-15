'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { HeroDashboard, AIEngineSnippet, UniversalSearchSnippet, BentoSnippetOne, BentoSnippetTwo, BentoSnippetThree, FeatureListSnippet, WatercolorBackground, AutomatedExtractionSnippet } from '@/components/UISnippets';
import { Navbar } from '@/components/Navbar';
import { ArrowRight, Box, Zap, Search, ChevronRight, CheckCircle2, Truck, Layers, Activity, Download, Settings2, Users, Shirt, Leaf, ShoppingCart, Pill } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('Logistics');

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-[#111111] selection:bg-zinc-200">
      <Navbar />
      
      {/* 2. TOP BANNER */}
      <div className="pt-24 pb-6 flex justify-center text-[13px] md:text-sm text-zinc-600 bg-[#FBFBFB]">
           🚀 Paperlogic includes AI models to help you extract data in style. <Link href="/platform" className="underline underline-offset-4 decoration-zinc-300 ml-1 hover:text-zinc-900 transition-colors">Explore Features</Link>
      </div>

      {/* 3. HERO SECTION */}
      <section className="px-3 md:px-4 mb-24 max-w-[1600px] mx-auto w-full">
         <div className="w-full rounded-3xl md:rounded-[2rem] overflow-hidden relative border border-zinc-200/60 bg-zinc-50 shadow-sm flex flex-col justify-end pt-32 pb-16 lg:pt-48 lg:pb-24 px-8 md:px-12 lg:px-16 min-h-[500px]">
            {/* Ambient Animated Blob Background */}
            <div className="absolute inset-0 overflow-hidden bg-[#FBFBFB] pointer-events-none z-0">
               <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
               <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
               <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] bg-zinc-200/50 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
               
               {/* Modern Dotted Canvas Texture */}
               <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
               
               {/* Noise Overlay */}
               <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
            </div>

            {/* Subtle Gradient for text readability at bottom/top */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-zinc-50/90 pointer-events-none z-0" />

            {/* Content box */}
            <div className="relative z-10 flex flex-col gap-12 sm:gap-16">
               
               {/* Headline */}
               <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[75px] tracking-tight leading-[1.05] font-medium text-zinc-900 max-w-[800px]"
               >
                  When your team asks for older records,
                  <span className="text-zinc-500 block mt-2">
                     have the answer ready in seconds.
                  </span>
               </motion.h1>

               {/* Download Card */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
               >
                  <Link href="/contact" className="bg-white/80 backdrop-blur-xl border border-zinc-200/80 rounded-[24px] p-5 md:p-6 flex items-center gap-5 w-fit hover:bg-white transition-all shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group hover:-translate-y-1">
                     <div className="w-14 h-14 bg-zinc-900 p-[1px] rounded-2xl shadow-sm overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center rounded-[15px]">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </div>
                     </div>
                     <div className="pr-6">
                        <div className="text-zinc-900 font-semibold text-[18px] tracking-tight leading-tight mb-1">Book a free site survey</div>
                        <div className="text-zinc-500 font-medium text-[14px]">For mid-sized companies</div>
                     </div>
                  </Link>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 4. PARAGRAPH & DASHBOARD IMG */}
      <section className="mb-24 px-6 max-w-[1200px] mx-auto flex flex-col items-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="my-16 md:my-32 max-w-[900px] mx-auto text-left w-full"
         >
            <p className="text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.3] tracking-tight text-[#999999]">
               <span className="text-[#222222]">Paperlogic is a digital records service for modern teams.</span> We collect your paper archives and turn them into a searchable portal, so you are always ready for any data request.
            </p>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-xl overflow-hidden border border-zinc-200 shadow-2xl shadow-black/5 bg-white relative aspect-[4/3] sm:aspect-square md:aspect-[16/9]"
         >
            <HeroDashboard />
         </motion.div>
      </section>



      {/* 4. HOW IT HELPS SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[36px] font-medium tracking-tight text-[#222222] leading-tight mb-1">
               How Paperlogic helps
            </h2>
            <h3 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#999999] leading-tight">
               Get work flowing with less friction
            </h3>
         </div>

         <div className="grid md:grid-cols-2 gap-8 lg:gap-10 w-full">
            {/* Card 1: UI Widget */}
            <div className="flex flex-col">
               <div className="bg-[#F6F6F6] rounded-3xl aspect-[1.2/1] md:aspect-[1.5/1] w-full flex items-center justify-center p-6 md:p-10 mb-5 overflow-hidden">
                  {/* Clean Inline Widget */}
                  <div className="w-full max-w-[280px] bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-100 p-6 flex flex-col gap-6">
                     <div>
                        <h3 className="text-[#222222] font-medium text-lg mb-1">Audit readiness</h3>
                        <p className="text-[#888888] text-sm">FY 2026</p>
                     </div>
                     <div className="flex flex-col gap-2.5">
                        <div className="flex justify-between items-center bg-[#F5F5F5] px-4 py-3 rounded-[10px] text-[15px] text-[#444444]">
                           <span>Digitized</span>
                           <span className="font-semibold text-[#111111]">12,478</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#222222] px-4 py-3 rounded-[10px] text-[15px] text-white">
                           <span>Extracted</span>
                           <span className="font-semibold text-white">9,664</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#F5F5F5] px-4 py-3 rounded-[10px] text-[15px] text-[#444444]">
                           <span>Verified</span>
                           <span className="font-semibold text-[#111111]">9,297</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="pr-4">
                  <h4 className="text-lg font-medium text-[#222222] mb-1.5">Find historical records instantly</h4>
                  <p className="text-[15px] leading-relaxed text-[#777777]">
                     Remove the hassle of manual filing systems. Locate specific contracts or documents seamlessly across your organization.
                  </p>
               </div>
            </div>

            {/* Card 2: UI Snippet */}
            <div className="flex flex-col">
               <AutomatedExtractionSnippet />
               <div className="pr-4">
                  <h4 className="text-lg font-medium text-[#222222] mb-1.5">Intelligent document reading</h4>
                  <p className="text-[15px] leading-relaxed text-[#777777]">
                     Transform physical documents into clear digital data. Capture key details seamlessly without manual entry.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[36px] font-medium tracking-tight text-[#222222] leading-tight mb-1">
               How Paperlogic works
            </h2>
            <h3 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#999999] leading-tight">
               Built for compliance and clarity
            </h3>
         </div>

         <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
            
            {/* Card 1 */}
            <div className="bg-[#F6F6F6] rounded-[24px] p-5 md:p-8 flex flex-col">
               <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col justify-between aspect-square relative">
                  <div>
                     <div className="text-[16px] font-medium text-[#222222] tracking-tight">Express Processing</div>
                     <div className="text-[#888888] text-[14px] mt-0.5">Colombo Facility</div>
                  </div>
                  
                  <div className="flex justify-center flex-1 items-center mt-2">
                     <div className="relative w-24 h-24 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                        <div className="absolute w-[2px] h-[35%] bg-[#D0D0D0] top-[15%] left-1/2 -translate-x-1/2 rounded-full"></div>
                        <div className="absolute w-[35%] h-[3px] bg-[#222222] top-1/2 left-1/2 rounded-full origin-left -translate-y-1/2 rotate-[20deg]"></div>
                     </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 text-[#A0A0A0] text-[13px] font-medium">
                     24hr SLA
                  </div>
               </div>
               
               <h4 className="text-[17px] font-medium text-[#222222] mb-1.5">Secure Collection</h4>
               <p className="text-[15px] leading-relaxed text-[#777777]">
                  Our bonded team transports your physical boxes to our facility. We handle all sorting and prep without disrupting your daily operations.
               </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F6F6F6] rounded-[24px] p-5 md:p-8 flex flex-col">
               <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col justify-between aspect-square">
                  <div>
                     <div className="text-[16px] font-medium text-[#222222] tracking-tight">Clause match found</div>
                     <div className="text-[#888888] text-[14px] mt-0.5">Legal & Terms</div>
                  </div>
                  
                  <div className="bg-[#F6F6F6] rounded-xl p-3 flex items-center gap-3 mt-auto">
                     <div className="w-10 h-10 rounded-[10px] overflow-hidden bg-zinc-200 flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <div className="text-[14px] font-medium text-[#222222]">Sarah Jenkins</div>
                        <div className="text-[#888888] text-[12.5px] mt-0.5">Head of Compliance</div>
                     </div>
                  </div>
               </div>
               
               <h4 className="text-[17px] font-medium text-[#222222] mb-1.5">Intelligent Parsing</h4>
               <p className="text-[15px] leading-relaxed text-[#777777]">
                  Our proprietary models extract vendor names, expiration dates, and distinct clauses, transforming images into reliable structured data.
               </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F6F6F6] rounded-[24px] p-5 md:p-8 flex flex-col">
               <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_4px_24px_rgb(0,0,0,0.03)] border border-zinc-100 flex flex-col justify-between aspect-square">
                  <div className="flex items-center gap-3.5">
                     <div className="w-10 h-10 rounded-[10px] bg-[#C15B2D] flex items-center justify-center shrink-0">
                        <Box className="w-5 h-5 text-white" />
                     </div>
                     <div>
                        <div className="text-[16px] font-medium text-[#222222] tracking-tight">Vault Storage</div>
                        <div className="text-[#888888] text-[14px] mt-0.5">Processing volume</div>
                     </div>
                  </div>
                  
                  <div className="mt-auto flex items-end justify-between items-stretch h-[100px] gap-2 px-1 pb-1">
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#F2F2F2] rounded-md h-[20%]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">J</div></div>
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#F2F2F2] rounded-md h-[40%]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">A</div></div>
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#F2F2F2] rounded-md h-[55%]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">S</div></div>
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#F2F2F2] rounded-md h-[45%]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">O</div></div>
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#222222] rounded-md h-[95%] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">N</div></div>
                     <div className="flex flex-col justify-end w-full items-center"><div className="w-full bg-[#F2F2F2] rounded-md h-[70%]"></div><div className="text-[11px] text-[#A0A0A0] mt-3 font-medium uppercase">D</div></div>
                  </div>
               </div>
               
               <h4 className="text-[17px] font-medium text-[#222222] mb-1.5">Instant Retrieval</h4>
               <p className="text-[15px] leading-relaxed text-[#777777]">
                  Monitor your digital backlog in real-time. Instantly query your archive for historical documents without sorting through spreadsheets or drives.
               </p>
            </div>

         </div>
      </section>

      {/* 6. FEATURES VERTICAL SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1100px] mx-auto w-full">
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
            <div className="lg:w-1/3 flex flex-col items-start lg:pt-8">
               <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[#222222] leading-tight mb-2">
                  The operational flow
               </h2>
               <h3 className="text-[18px] font-normal text-[#888888] leading-relaxed mb-8">
                  From physical box to digital index
               </h3>
            </div>

            <div className="lg:w-2/3 flex flex-col w-full">
               {[
                  {
                     title: "Collect",
                     desc: "We come to your office, seal your boxes, and securely log every container into our chain-of-custody tracking.",
                     Icon: Truck
                  },
                  {
                     title: "Prepare",
                     desc: "Trained operators open, sort, remove staples, and tag every document with separator sheets to define logical files.",
                     Icon: Layers
                  },
                  {
                     title: "Scan",
                     desc: "High-speed production scanners securely convert every page into clear, readable, and highly accurate searchable PDFs.",
                     Icon: Activity
                  },
                  {
                     title: "Index",
                     desc: "Every document goes through OCR and gets tagged with date, reference number, and specific category by our models.",
                     Icon: Search
                  },
                  {
                     title: "Deliver",
                     desc: "You receive your entire digitized archive on a secure encrypted hard drive, via portal login, or structured for your ERP.",
                     Icon: Download
                  },
                  {
                     title: "Retain or Destroy",
                     desc: "We either safely store original records long term, cross-cut shred them with a destruction certificate, or return them based on your choice.",
                     Icon: Settings2
                  }
               ].map((step, idx) => (
                  <div key={idx} className={`py-6 md:py-8 flex items-center gap-5 md:gap-6 group cursor-pointer transition-colors ${idx !== 0 ? 'border-t border-zinc-200/70' : ''}`}>
                     <div className="w-14 h-14 md:w-[60px] md:h-[60px] shrink-0 bg-[#F2F2F2] rounded-[14px] md:rounded-[16px] flex items-center justify-center transition-colors group-hover:bg-[#EAEAEA]">
                        <step.Icon className="w-6 h-6 md:w-7 md:h-7 text-[#222222]" strokeWidth={1.5} />
                     </div>
                     <div className="flex-1 pr-4 md:pr-6">
                        <h4 className="text-[17px] md:text-[18px] font-medium text-[#222222] mb-0.5 group-hover:text-black transition-colors">{step.title}</h4>
                        <p className="text-[14.5px] md:text-[15px] leading-relaxed text-[#888888] group-hover:text-[#666666] transition-colors">{step.desc}</p>
                     </div>
                     <div className="shrink-0 flex opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#222222]" strokeWidth={1.5} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. TAILORED TABS SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="text-center mb-10 mt-10">
            <h2 className="text-4xl md:text-[50px] font-medium tracking-tight text-[#222222] mb-1 leading-tight">
               Meet Paperlogic
            </h2>
            <h3 className="text-4xl md:text-[50px] font-normal tracking-tight text-[#999999] leading-tight">
               The records service for mid-sized companies
            </h3>
         </div>
         
          <div className="flex justify-start md:justify-center mb-8 relative z-10 w-full overflow-x-auto hide-scrollbar md:px-4 pb-2">
            <div className="flex items-center justify-start md:justify-center gap-1.5 bg-[#F4F4F4] p-1.5 rounded-full whitespace-nowrap min-w-max mx-auto md:w-auto">
               {[
                 { id: 'Apparel', label: 'Apparel', icon: Shirt },
                 { id: 'Plantations', label: 'Plantations', icon: Leaf },
                 { id: 'FMCG', label: 'FMCG', icon: ShoppingCart },
                 { id: 'Logistics', label: 'Logistics', icon: Truck },
                 { id: 'Pharma', label: 'Pharma', icon: Pill }
               ].map((ind) => (
                 <button 
                   key={ind.id} 
                   onClick={() => setActiveTab(ind.id)}
                   className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14.5px] font-medium transition-all ${
                     activeTab === ind.id 
                       ? 'bg-white text-[#222222] shadow-[0_2px_8px_rgba(0,0,0,0.06)]' 
                       : 'text-[#888888] hover:text-[#444444]'
                   }`}
                 >
                   <ind.icon className="w-4 h-4" />
                   {ind.label}
                 </button>
               ))}
            </div>
         </div>

         <div className="mb-10 text-center max-w-[800px] mx-auto min-h-[100px] flex items-center justify-center">
            <AnimatePresence mode="wait">
               <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
               >
                  <p className="text-[17px] md:text-[19px] leading-relaxed text-[#666666]">
                     {activeTab === 'Apparel' && "A 1,500-worker factory generates 15,000 pages a month. Instantly digitize daily attendance, QC logs, cutting room sheets, and BOI export files. Ensure retention compliance without the massive warehouse overhead."}
                     {activeTab === 'Plantations' && "A single 2,000-hectare RPC division generates a wall of paper monthly. Seamlessly retain muster rolls, green-leaf weighbridge tickets, and mandated agrochemical records under strict regulatory requirements."}
                     {activeTab === 'FMCG' && "A mid-sized distributor handles hundreds of daily route delivery notes. Turn GRNs, route sheets, and sales returns into a searchable index, ensuring credit notes and expirations are always tracked."}
                     {activeTab === 'Logistics' && "Logistics runs on speed and paper. Track airway bills, customs declarations, container manifests, and delivery orders. Query cross-border operations instantaneously."}
                     {activeTab === 'Pharma' && "NMRA inspections can demand 5 years of records unpredictably. Perfect your compliance with digitized cold-chain records, batch trackers, and Schedule 2 narcotic registers."}
                  </p>
               </motion.div>
            </AnimatePresence>
         </div>

         <div className="bg-[#FBFBFB] border border-zinc-100/80 rounded-[32px] overflow-hidden p-[6px] md:p-2 shadow-[0_4px_40px_rgb(0,0,0,0.02)]">
            <div className="flex flex-col md:flex-row gap-2 h-full">
               
               {/* Left Panel - Widget area */}
               <div className="w-full md:w-1/2 rounded-[24px] overflow-hidden relative min-h-[350px] md:min-h-[500px] flex items-center justify-center p-6 md:p-12">
                  <div className={`absolute inset-0 z-0 bg-gradient-to-br opacity-80 ${
                     activeTab === 'Apparel' ? 'from-[#E3E8F0] to-[#EAE0EE]' : 
                     activeTab === 'Plantations' ? 'from-[#E2EBE5] to-[#EADDD0]' : 
                     activeTab === 'FMCG' ? 'from-[#F0DFDF] to-[#E9DFE2]' : 
                     activeTab === 'Logistics' ? 'from-[#E1EAF0] to-[#DFDFEA]' : 
                     'from-[#E8DFEA] to-[#E1EAF0]'
                  }`} />
                  
                  {/* The Widget */}
                  <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 w-full max-w-[340px] z-10 relative border border-white/50 backdrop-blur-sm">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activeTab}
                           initial={{ opacity: 0, scale: 0.96 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.96 }}
                           transition={{ duration: 0.3 }}
                           className="w-full"
                        >
                           {activeTab === 'Apparel' && (
                              <>
                                 <h4 className="text-[19px] font-medium text-[#222222] tracking-tight mb-0.5">BOI Export Pack</h4>
                                 <p className="text-[#888888] text-[15px] mb-6">Shipment #AX-992</p>
                                 <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F6F6]">
                                       <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-green-600"/></div><span className="text-[14px] font-medium text-[#222222]">Comm. Invoice</span></div>
                                       <span className="text-[12px] text-[#888888]">100% Match</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F6F6]">
                                       <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-green-600"/></div><span className="text-[14px] font-medium text-[#222222]">Packing List</span></div>
                                       <span className="text-[12px] text-[#888888]">Verified</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F6F6F6]">
                                       <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-orange-600"/></div><span className="text-[14px] font-medium text-[#222222]">CusDec Form</span></div>
                                       <span className="text-[12px] text-[#888888]">Pending</span>
                                    </div>
                                 </div>
                              </>
                           )}

                           {activeTab === 'Plantations' && (
                              <>
                                 <h4 className="text-[19px] font-medium text-[#222222] tracking-tight mb-0.5">Muster Rolls</h4>
                                 <p className="text-[#888888] text-[15px] mb-8">Estate Division A</p>
                                 <div className="flex items-end justify-between h-[140px] gap-2.5">
                                       {[50, 40, 70, 85, 55, 30].map((val, i) => (
                                          <div key={i} className="flex flex-col items-center w-full justify-end h-full"><div className={`w-full rounded-md transition-all ${i === 3 ? 'bg-[#222222] shadow-md shadow-black/10' : 'bg-[#F2F2F2]'}`} style={{ height: `${val}%` }}></div></div>
                                       ))}
                                 </div>
                                 <div className="flex justify-between items-center mt-4 text-[12px] font-medium text-[#A0A0A0] uppercase px-1">
                                   <span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
                                 </div>
                              </>
                           )}

                           {activeTab === 'FMCG' && (
                              <>
                                 <h4 className="text-[19px] font-medium text-[#222222] tracking-tight mb-0.5">Route Deliveries</h4>
                                 <p className="text-[#888888] text-[15px] mb-6">Central Province</p>
                                 <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-[#111111] p-4 rounded-xl">
                                       <div className="text-[24px] font-semibold text-white mb-1">1,240</div>
                                       <div className="text-[12px] text-zinc-400">GRNs Processed</div>
                                    </div>
                                    <div className="bg-[#F6F6F6] p-4 rounded-xl">
                                       <div className="text-[24px] font-semibold text-[#222222] mb-1">3.2m</div>
                                       <div className="text-[12px] text-[#888888]">Credit Notes (LKR)</div>
                                    </div>
                                    <div className="bg-[#F6F6F6] p-4 rounded-xl col-span-2 flex justify-between items-center">
                                       <span className="text-[13px] font-medium text-[#222222]">Reconciliation Rate</span>
                                       <span className="text-[13px] font-bold text-green-600">99.8%</span>
                                    </div>
                                 </div>
                              </>
                           )}

                           {activeTab === 'Logistics' && (
                              <>
                                 <h4 className="text-[19px] font-medium text-[#222222] tracking-tight mb-0.5">Customs Clearance</h4>
                                 <p className="text-[#888888] text-[15px] mb-6">AWB 299-10293</p>
                                 <div className="relative border-l-2 border-[#E5E5E5] ml-4 flex flex-col gap-6 py-2">
                                    <div className="relative"><div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#111111] border-[2.5px] border-white ring-1 ring-zinc-200"></div>
                                     <div className="pl-4"><div className="text-[13px] font-medium text-[#222222]">Manifest Extracted</div><div className="text-[11px] text-[#888888] mt-0.5">08:14 AM</div></div>
                                    </div>
                                    <div className="relative"><div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#111111] border-[2.5px] border-white ring-1 ring-zinc-200"></div>
                                     <div className="pl-4"><div className="text-[13px] font-medium text-[#222222]">Entities Matched</div><div className="text-[11px] text-[#888888] mt-0.5">08:15 AM</div></div>
                                    </div>
                                    <div className="relative"><div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#E5E5E5] border-[2.5px] border-white"></div>
                                     <div className="pl-4"><div className="text-[13px] text-[#888888]">Ready for Declaration</div></div>
                                    </div>
                                 </div>
                              </>
                           )}

                           {activeTab === 'Pharma' && (
                              <>
                                 <h4 className="text-[19px] font-medium text-[#222222] tracking-tight mb-0.5">Batch Tracker</h4>
                                 <p className="text-[#888888] text-[15px] mb-6">Schedule 2 Comply</p>
                                 <div className="flex flex-col gap-2">
                                    <div className="flex text-[11px] font-semibold text-[#A0A0A0] uppercase px-2"><span className="w-1/2">Batch</span><span className="w-1/2">Expiry</span></div>
                                    <div className="flex items-center text-[13px] bg-[#F6F6F6] rounded-lg p-3"><span className="w-1/2 font-medium">B-99214</span><span className="w-1/2 text-[#888888]">12/2026</span></div>
                                    <div className="flex items-center text-[13px] bg-[#F6F6F6] rounded-lg p-3"><span className="w-1/2 font-medium">B-99215</span><span className="w-1/2 text-[#888888]">01/2027</span></div>
                                    <div className="flex items-center text-[13px] bg-[#111111] text-white rounded-lg p-3"><span className="w-1/2 font-medium">B-99216</span><span className="w-1/2 text-red-400">05/2026</span></div>
                                 </div>
                              </>
                           )}

                        </motion.div>
                     </AnimatePresence>
                  </div>
               </div>
               
               {/* Right Panel - Text area */}
               <div className="w-full md:w-1/2 rounded-[24px] overflow-hidden relative min-h-[350px] md:min-h-[500px] bg-white border border-zinc-100 flex flex-col items-start justify-center p-8 md:p-14 lg:p-16">
                  <AnimatePresence mode="wait">
                     <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col w-full"
                     >
                        <h3 className="text-3xl md:text-4xl font-medium text-[#111111] tracking-tight leading-[1.15] mb-6">
                           {activeTab === 'Apparel' && "De-risk your BOI operations without changing workflows."}
                           {activeTab === 'Plantations' && "Empower compliance with a structured digital estate."}
                           {activeTab === 'FMCG' && "Minimize revenue leakage in the supply chain."}
                           {activeTab === 'Logistics' && "Clear shipments faster with unified document intelligence."}
                           {activeTab === 'Pharma' && "Achieve flawless NMRA audit readiness on demand."}
                        </h3>
                        
                        <p className="text-[16px] md:text-[17px] text-[#666666] leading-relaxed mb-10">
                           {activeTab === 'Apparel' && "Audit risks vanish when every lab dip approval, GRN, and export document is interlinked and instantly accessible. Free your management from administrative bottlenecks to focus on capacity utilization and buyer relationships."}
                           {activeTab === 'Plantations' && "Consolidate thousands of divisional records from checkrolls to mandatory agrochemical logs into a centralized, immediately queryable database. Gain unprecedented oversight across every hectare while maintaining strict regulatory adherence."}
                           {activeTab === 'FMCG' && "Lost GRNs or misplaced debit notes directly impact your bottom line. We transform your daily avalanche of route sheets and returns into verified data, bringing complete operational transparency to your distributor network."}
                           {activeTab === 'Logistics' && "Supply chain friction is built on misplaced paperwork. By extracting key data points automatically from container manifests to delivery orders, we help you reduce demurrage and streamline multi-party compliance."}
                           {activeTab === 'Pharma' && "The margins for error are zero. Maintain a structured system of record for cold-chain data, batch trackers, and sensitive medical logs, ensuring immediate recall capability and reliable regulatory trust."}
                        </p>

                        <div className="mt-auto">
                           <Link 
                              href={`/industries/${activeTab.toLowerCase()}`} 
                              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111] text-white text-[14.5px] font-medium hover:bg-zinc-800 transition-colors shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
                           >
                              Explore {activeTab} Solutions <ArrowRight className="w-4 h-4" />
                           </Link>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>

      {/* 8. FEATURE LIST */}
      <section className="py-24 md:py-32 px-6 bg-white border-y border-zinc-200 relative overflow-hidden">
         {/* Subtle Dotted Pattern and Mesh Glow */}
         <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
         <div className="absolute -top-[300px] -right-[300px] w-[800px] h-[800px] bg-[#E1EAF0]/40 mix-blend-multiply rounded-full blur-[120px] pointer-events-none" />

         <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
            <div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 md:mb-16 leading-tight text-zinc-900">Why enterprise teams <br/><span className="text-zinc-400">trust our process</span></h2>
               <div className="space-y-12 pr-8">
                  {[
                    { title: "Service over software", desc: "You don't need another subscription. We handle the scanning process from start to finish." },
                    { title: "Predictable timelines", desc: "Consistent turnarounds for processing your document batches." },
                    { title: "Secure handling", desc: "Your documents are securely tracked and processed from collection to final delivery." },
                    { title: "Clear proof of concept", desc: "We provide an initial index sample and demo before rolling out completely." }
                  ].map((feat, i) => (
                     <div key={i} className="group border-l-[3px] border-zinc-200 pl-8 hover:border-zinc-900 transition-colors pb-4 cursor-pointer">
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-zinc-900 text-zinc-700 transition-colors tracking-tight">{feat.title}</h3>
                        <p className="text-zinc-500 font-light text-lg leading-relaxed">{feat.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="aspect-[4/5] rounded-3xl bg-zinc-50/50 backdrop-blur-sm overflow-hidden relative hidden md:block border border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
                <FeatureListSnippet />
            </div>
         </div>
      </section>

      {/* 9. TRUST ARCHITECTURE */}
      <section className="py-24 md:py-32 px-6 bg-[#F8F9FA] border-b border-zinc-200 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
         <div className="absolute bottom-0 right-[15%] w-[600px] h-[600px] bg-[#EADDD0]/30 mix-blend-multiply rounded-full blur-[100px] pointer-events-none translate-y-1/2" />
         
         <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="mb-12 md:mb-16">
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-zinc-900">Built for modern <br className="block sm:hidden" />compliance</h2>
                 <p className="text-xl text-zinc-500 leading-relaxed font-light">Security isn&apos;t an add-on. It&apos;s the foundation of everything we do.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                   "Secure cloud storage and data handling",
                   "Standardized processing practices",
                   "Carefully tracked document custody",
                   "Reliable and regular system backups",
                   "Support for local regulatory requirements"
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-[8px] bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-zinc-50 transition-colors">
                         <svg className="w-4 h-4 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-[17px] text-zinc-700 font-medium leading-snug tracking-tight">{item}</span>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 md:py-32 border-b border-zinc-200 px-6 bg-white relative">
         <div className="max-w-[800px] mx-auto relative z-10">
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 md:mb-20 text-center text-zinc-900">Frequently asked questions</h2>
             <div className="space-y-4">
                {[
                  {
                    q: "How do I prove document chain of custody to my auditor?",
                    a: "Our process incorporates a trackable handling protocol with photographic evidence at every handover point, fully accessible via your digital portal."
                  },
                  {
                    q: "Can I push extracted data directly into CargoWise / SAP / our existing ERP?",
                    a: "Yes, Paperlogic provides structured data exports and API integrations to push extracted fields directly into your existing enterprise systems."
                  },
                  {
                    q: "What happens when an NMRA inspector arrives unannounced?",
                    a: "Your operations team simply logs into the Paperlogic portal and runs a full-text search. Within seconds, you can download or present the exact batch records and delivery notes requested."
                  },
                  {
                    q: "How long does a historical backlog take?",
                    a: "Most historical backlogs are processed at a predictable timeframe based on the specific volume. We'll set clear milestones during the kickoff."
                  }
                ].map((item, i) => (
                   <details key={i} className="group bg-white border border-zinc-200 hover:border-zinc-300 rounded-[24px] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                      <summary className="flex items-center justify-between p-6 md:p-8 font-medium text-lg md:text-[19px] tracking-tight list-none outline-none text-zinc-900">
                         <span className="pr-6">{item.q}</span>
                         <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-open:bg-zinc-100 transition-colors">
                            <ChevronRight className="w-5 h-5 shrink-0 text-zinc-400 group-open:rotate-90 transition-transform duration-300" />
                         </div>
                      </summary>
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-500 font-light text-[16px] md:text-[17px] border-t border-zinc-100 pt-6 hidden group-open:block leading-relaxed">
                         {item.a}
                      </div>
                   </details>
                ))}
             </div>
         </div>
      </section>

      {/* 11. BOTTOM CTA */}
      <section className="py-24 px-4 sm:px-6 mb-8 relative">
         <div className="max-w-[1200px] mx-auto bg-zinc-900 rounded-[40px] p-16 md:p-32 text-center relative overflow-hidden flex flex-col items-center border border-zinc-800 shadow-2xl">
            {/* Ambient subtle glow & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
            
            <h2 className="text-5xl md:text-[80px] font-medium tracking-tight text-white mb-10 relative z-10 max-w-4xl leading-[1.05]">
               Be ready for your <span className="text-zinc-500 block sm:inline mt-2 sm:mt-0">next audit.</span>
            </h2>
            
            <div className="flex justify-center relative z-10 w-full sm:w-auto mt-6">
               <Link href="/contact" className="bg-white text-zinc-900 hover:bg-zinc-100 hover:scale-105 active:scale-95 px-10 py-5 rounded-full font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] text-[17px] tracking-tight inline-block">
                  Book a free site survey
               </Link>
            </div>
         </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="pt-24 pb-12 px-6 border-t border-zinc-200 bg-white">
         <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-20 border-b border-zinc-100 pb-16 md:pb-20">
            <div className="md:w-1/3">
               <div className="mb-6">
                  <Image src="/paperlogic_logo.svg" alt="Paperlogic" width={160} height={30} />
               </div>
               <p className="text-zinc-500 font-light text-lg">Enterprise document intelligence engineered for scale, accuracy, and absolute security.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-24 text-base w-full md:w-auto">
               <div className="flex flex-col gap-5">
                  <div className="font-medium text-zinc-900 mb-2">Product</div>
                  <Link href="/platform" className="text-zinc-500 hover:text-zinc-900 transition-colors">Platform</Link>
                  <Link href="/login" className="text-zinc-500 hover:text-zinc-900 transition-colors">Log In</Link>
               </div>
               <div className="flex flex-col gap-5">
                  <div className="font-medium text-zinc-900 mb-2">Company</div>
                  <Link href="/contact" className="text-zinc-500 hover:text-zinc-900 transition-colors">Contact Us</Link>
               </div>
            </div>
         </div>
         
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
