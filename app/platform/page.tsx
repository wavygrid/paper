'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Box, Search, Shield, ArrowRight, ScanLine, BrainCircuit, FileSearch, Database, Server, ServerOff, Lock } from 'lucide-react';
import Link from 'next/link';
import { AIEngineSnippet, UniversalSearchSnippet } from '@/components/UISnippets';

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-orange-100 selection:text-orange-900 w-full overflow-x-hidden">
      <Navbar />

      {/* Spacer */}
      <div className="h-[76px] w-full"></div>
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 lg:pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Ambient Animated Blob Background */}
        <div className="absolute inset-0 overflow-hidden bg-[#FBFBFB]">
           <div className="absolute top-[0%] left-[10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
           <div className="absolute top-[20%] right-[10%] w-[40%] h-[60%] bg-orange-100/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
           
           {/* Modern Dotted Canvas Texture */}
           <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
           
           {/* Noise Overlay */}
           <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
        </div>

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div>
              <div className="inline-flex items-center gap-2 text-[12px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-100/50 px-4 py-2 rounded-full border border-zinc-200 mb-8 backdrop-blur-sm">
                 System Architecture
              </div>
              <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="text-5xl sm:text-6xl lg:text-[72px] tracking-tight leading-[1.05] font-medium text-zinc-900 mb-8"
              >
                 A digital tier <br />
                 <span className="text-zinc-400">
                    for physical records.
                 </span>
              </motion.h1>

              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[17px] md:text-[19px] text-zinc-600 font-light leading-relaxed mb-10 max-w-lg"
              >
                 The platform converts paper archives into a structured database. It applies optical character recognition and semantic indexing to securely organize documents entirely away from public networks.
              </motion.p>
              
              <div className="flex gap-4">
                 <button className="bg-zinc-900 text-white hover:bg-zinc-800 px-6 py-3 rounded-full font-medium transition-colors text-[15px]">
                    Technical Documentation
                 </button>
              </div>
           </div>
           
           <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden border border-zinc-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-zinc-50 hidden md:block">
              <AIEngineSnippet />
           </div>
        </div>
      </section>

      {/* 2. THE WORKFLOW VISUALIZATION */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
         <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Processing workflow</h2>
               <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-light">A structured method for ensuring physical records are digitized and indexed without data loss.</p>
            </div>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 z-0"></div>

               <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 rounded-[24px] bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-8 relative group-hover:border-zinc-300 group-hover:shadow-md transition-all duration-300">
                        <ScanLine className="w-8 h-8 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                        <div className="absolute -bottom-3 bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phase 1</div>
                     </div>
                     <h3 className="text-[19px] font-medium text-zinc-900 mb-3 tracking-tight">Physical Ingestion</h3>
                     <p className="text-[15px] text-zinc-500 leading-relaxed font-light">
                        Documents are processed through specialized scanners. The process is tracked sequentially to maintain clear records of custody.
                     </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center mt-0 md:mt-12 group">
                     <div className="w-24 h-24 rounded-[24px] bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-8 relative group-hover:border-zinc-300 group-hover:shadow-md transition-all duration-300">
                        <BrainCircuit className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors" />
                        <div className="absolute -bottom-3 bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phase 2</div>
                     </div>
                     <h3 className="text-[19px] font-medium text-zinc-900 mb-3 tracking-tight">Data Extraction</h3>
                     <p className="text-[15px] text-zinc-500 leading-relaxed font-light">
                        Text and layout information is captured. The system identifies tables and handwriting to preserve document structure.
                     </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center group">
                     <div className="w-24 h-24 rounded-[24px] bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-8 relative group-hover:border-zinc-300 group-hover:shadow-md transition-all duration-300">
                        <Search className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                        <div className="absolute -bottom-3 bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phase 3</div>
                     </div>
                     <h3 className="text-[19px] font-medium text-zinc-900 mb-3 tracking-tight">Semantic Classification</h3>
                     <p className="text-[15px] text-zinc-500 leading-relaxed font-light">
                        Language models categorize documents by type and extract relevant metadata like dates and reference numbers.
                     </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center mt-0 md:mt-12 group">
                     <div className="w-24 h-24 rounded-[24px] bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-8 relative group-hover:border-zinc-300 group-hover:shadow-md transition-all duration-300">
                        <Database className="w-8 h-8 text-teal-500 group-hover:text-teal-600 transition-colors" />
                        <div className="absolute -bottom-3 bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Phase 4</div>
                     </div>
                     <h3 className="text-[19px] font-medium text-zinc-900 mb-3 tracking-tight">Structured Output</h3>
                     <p className="text-[15px] text-zinc-500 leading-relaxed font-light">
                        Extracted information is formatted for database insertion. It becomes immediately available for queries or integration.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. SEMANTIC SEARCH DETAIL */}
      <section className="py-24 md:py-32 px-6 border-t border-zinc-200 bg-zinc-50 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
         
         <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden border border-zinc-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-white aspect-square md:aspect-[4/3]">
               <UniversalSearchSnippet />
            </div>
            <div className="order-1 lg:order-2">
               <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Concept based search</h2>
               <p className="text-[17px] text-zinc-600 font-light leading-relaxed mb-10">
                  Traditional systems rely on precise keyword matches. This platform utilizes semantic search models to interpret the meaning of queries. This enables users to locate related documents even if the terminology varies slightly across years or departments.
               </p>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0">
                        <FileSearch className="w-5 h-5 text-indigo-500" />
                     </div>
                     <div>
                        <h4 className="font-medium text-zinc-900 mb-1">Natural language queries</h4>
                        <p className="text-sm text-zinc-500 font-light">Ask direct questions rather than chaining exact technical terms.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center shrink-0">
                        <Database className="w-5 h-5 text-blue-500" />
                     </div>
                     <div>
                        <h4 className="font-medium text-zinc-900 mb-1">Cross referenced metadata</h4>
                        <p className="text-sm text-zinc-500 font-light">Dates and entities are linked allowing compound filtering.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. CAPABILITIES */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-zinc-200">
         <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 text-zinc-900 max-w-2xl">
               Infrastructure and security details.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10 w-full">
                {/* Local Deployment / LLMs */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-[32px] p-10 md:p-12 hover:bg-zinc-100/50 transition-colors">
                   <div className="w-14 h-14 bg-white border border-zinc-200 rounded-[20px] flex items-center justify-center mb-8 shadow-sm">
                      <ServerOff className="w-6 h-6 text-orange-500" />
                   </div>
                   <h3 className="text-2xl font-medium mb-4 text-zinc-900">Local deployment options</h3>
                   <p className="text-[17px] text-zinc-600 font-light leading-relaxed">
                     Certain compliance frameworks require data to remain on premise. The platform can operate using localized language models that do not connect to external cloud APIs. This ensures complete data isolation for sensitive sectors.
                   </p>
                </div>

                {/* Enterprise Security */}
                <div className="bg-zinc-50 border border-zinc-200/80 rounded-[32px] p-10 md:p-12 hover:bg-zinc-100/50 transition-colors flex flex-col justify-between">
                   <div>
                       <div className="w-14 h-14 bg-white border border-zinc-200 rounded-[20px] flex items-center justify-center mb-8 shadow-sm">
                          <Lock className="w-6 h-6 text-teal-600" />
                       </div>
                       <h3 className="text-2xl font-medium mb-4 text-zinc-900">Enterprise security standards</h3>
                       <p className="text-[17px] text-zinc-600 font-light leading-relaxed mb-8">
                         The infrastructure incorporates AES 256 encryption. Access is managed through strict role based permissions. All interaction with the documents is recorded in an immutable audit log.
                       </p>
                   </div>
                   <div className="flex gap-4 flex-wrap">
                      <div className="bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm font-medium text-zinc-700 shadow-sm flex items-center gap-2">
                         <Shield className="w-4 h-4 text-teal-500" /> PDPA Aligned
                      </div>
                      <div className="bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm font-medium text-zinc-700 shadow-sm flex items-center gap-2">
                         <Shield className="w-4 h-4 text-teal-500" /> Audit Logging
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
         <div className="max-w-[1200px] mx-auto bg-zinc-900 rounded-[40px] p-16 md:p-32 text-center relative overflow-hidden flex flex-col items-center border border-zinc-800 shadow-2xl">
            {/* Ambient subtle glow & Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <h2 className="text-5xl md:text-[60px] font-medium tracking-tight text-white mb-8 relative z-10 max-w-3xl leading-[1.05]">
               Start managing your records <span className="text-zinc-500 block sm:inline">more effectively.</span>
            </h2>
            
            <p className="text-[19px] text-zinc-400 mb-12 max-w-2xl relative z-10 font-light leading-relaxed">
               Review a demonstration or discuss requirements for your specialized data ingestion process.
            </p>

            <div className="flex justify-center relative z-10 w-full sm:w-auto">
               <Link href="/contact" className="bg-white text-zinc-900 hover:bg-zinc-100 hover:scale-105 active:scale-95 px-10 py-5 rounded-full font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] text-[17px] tracking-tight inline-block">
                  Schedule a Consultation
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

