import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Search, Scan, FileDigit, Server, ArrowRight, CheckCircle2, Shield, LayoutDashboard, BrainCircuit, LineChart, ChevronRight, FileText } from 'lucide-react';
import { AutomatedExtractionSnippet } from '@/components/UISnippets';

export default function ApparelIndustryPage() {
  const content = {
    hero: {
      title: "De-risk your BOI operations without changing workflows.",
      subtitle: "Apparel Manufacturing",
      desc: "Audit risks vanish when every lab dip approval, GRN, and export document is interlinked and instantly accessible. Free your management from administrative bottlenecks to focus on capacity utilization and buyer relationships."
    },
    retention: "BOI requires you to maintain export records for five years for duty drawback and audit purposes. IRD and EPF/ETF compliance demand up to 6 years of documentation.",
    volume: "A typical 1,500-worker factory generates 8,000 to 15,000 pages organically every month.",
    documents: [
       "Attendance cards & piece-rate calculations",
       "Daily production line output sheets",
       "QC reject logs & AQL inspection reports",
       "Fabric GRNs & inspection reports",
       "Lab dip approvals & buyer correspondence",
       "BOI export shipment files & EPF returns"
    ],
    faqs: [
      { q: "How do we handle confidential buyer designs?", a: "We process all IP restricted documents within an isolated, camera-monitored zone. All output is encrypted at rest." },
      { q: "Does the system integrate with our ERP?", a: "Yes, we can push GRN and shipment extracted data directly into standard apparel ERPs. " },
      { q: "Can you manage multi-factory collections?", a: "We provide scheduled pickups across all Export Processing Zones." },
      { q: "What about old thermal prints that are fading?", a: "Our scanners use AI enhancement to retrieve text from degraded thermal paper commonly used for scale tickets." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900 flex flex-col relative overflow-x-hidden w-full">
      <Navbar />
      
      {/* Spacer for fixed nav */}
      <div className="h-[76px] w-full"></div>

      {/* 1. HERO SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-8 md:mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
         </div>
         <div className="max-w-[1000px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-zinc-500 uppercase tracking-widest bg-[#F6F6F6] px-4 py-2.5 rounded-full border border-zinc-200/60 mb-8">
               <span>Industry Solutions</span>
               <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
               <span>{content.hero.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-[#111111] leading-[1.05] mb-8">
               {content.hero.title}
            </h1>
            <p className="text-[19px] md:text-[24px] leading-relaxed text-[#666666] max-w-[850px]">
               {content.hero.desc}
            </p>
         </div>
      </section>

      {/* 2. THE PROBLEM MATRIX */}
      <section className="py-24 md:py-32 bg-[#FBFBFB] border-y border-zinc-200 px-6">
         <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24">
            
            <div className="flex flex-col">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E6E4DD] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                   <FileText className="w-6 h-6 md:w-7 md:h-7 text-[#222222]" strokeWidth={1.5} />
               </div>
               <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#111111] tracking-tight">The Paper Avalanche</h3>
               <p className="text-[17px] md:text-[19px] text-[#666666] leading-relaxed mb-8">
                  {content.volume}
               </p>
               <div className="p-8 bg-white border border-zinc-200 rounded-3xl shadow-sm">
                  <h4 className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest mb-6">Mandatory Document Types</h4>
                  <ul className="space-y-4 md:space-y-5">
                     {content.documents.map((doc: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                              <FileText className="w-3.5 h-3.5 text-zinc-600" />
                           </div>
                           <span className="text-[16px] text-[#222222] font-medium leading-snug">{doc}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="flex flex-col">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E6E4DD] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                   <Shield className="w-6 h-6 md:w-7 md:h-7 text-[#222222]" strokeWidth={1.5} />
               </div>
               <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#111111] tracking-tight">Compliance & Retention</h3>
               <p className="text-[17px] md:text-[19px] text-[#666666] leading-relaxed mb-10 border-l-[3px] border-zinc-200 pl-5">
                  {content.retention}
               </p>
               
               <div className="bg-[#111111] rounded-[32px] p-10 md:p-12 text-white relative overflow-hidden mt-auto shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  <h4 className="text-2xl md:text-3xl font-medium mb-4 relative z-10 tracking-tight">Stop paying for empty space</h4>
                  <p className="text-zinc-400 text-[16px] leading-relaxed mb-10 max-w-[320px] relative z-10">
                     We turn your storage rooms back into operational space while keeping you 100% compliant and ready for your next audit.
                  </p>
                  <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-white text-[#111111] px-8 py-4 rounded-full text-[15px] font-medium hover:bg-zinc-100 transition-colors relative z-10">
                     Request a site survey <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 3. HIGHLY VISUALIZED PROCESS PIPELINE */}
      <section className="py-24 md:py-40 px-6 max-w-[1200px] mx-auto w-full relative overflow-hidden">
         <div className="mb-20 md:mb-32 max-w-[800px]">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#111111] mb-6">Converting historical backlog to intelligence.</h2>
            <p className="text-lg md:text-2xl text-[#666666] leading-relaxed">
               We process complex apparel documents into highly structured, searchable data points completely hands-free for your teams.
            </p>
         </div>

         <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div className="order-2 md:order-1 bg-[#F6F6F6] rounded-[32px] p-10 md:p-16 border border-zinc-200">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                        <Scan className="w-8 h-8 text-zinc-900 mb-4" />
                        <h4 className="font-medium text-zinc-900 mb-1">High-Speed Scan</h4>
                        <p className="text-sm text-zinc-500">200 pages per minute</p>
                     </div>
                     <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100">
                        <Server className="w-8 h-8 text-zinc-900 mb-4" />
                        <h4 className="font-medium text-zinc-900 mb-1">Encrypted Staging</h4>
                        <p className="text-sm text-zinc-500">Securely stored</p>
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 font-medium mb-6">01</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900">Physical Ingestion & Auditable Chain</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                     Your documents never leave a secure ecosystem. We deploy locked transport, apply barcode indexing at the box level, and run industrial-grade scanning to handle mixed batches like thin carbon copies and thick GRN cardstock.
                  </p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 font-medium mb-6">02</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900">AI-Powered Data Extraction</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                     Our custom engine identifies document types, whether it is a piece-rate calculation sheet, a fabric inspection report, or a BOI shipment file. We extract PO numbers, styles, dates, and vendor names perfectly.
                  </p>
               </div>
               <div className="bg-[#FBFBFB] rounded-[32px] p-6 border border-zinc-200">
                  <AutomatedExtractionSnippet />
               </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div className="order-2 md:order-1 bg-[#111111] rounded-[32px] p-10 border border-zinc-800 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  
                  <div className="relative z-10 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800 p-6">
                     <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                        <div className="flex items-center gap-3">
                           <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                           <span className="font-medium">Fabric GRN Search</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500">Found 24 matches</span>
                     </div>
                     <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                           <div key={item} className="flex justify-between items-center bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50">
                              <div className="flex flex-col">
                                 <span className="text-sm font-medium text-zinc-200 mb-1">PO-883{item}2</span>
                                 <span className="text-xs text-zinc-500">MAS Holdings Line A</span>
                              </div>
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 text-zinc-900 font-medium mb-6">03</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900">C-Suite Intelligence & Audit Readiness</h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">
                     When an auditor from BOI or IRD walks in, you don&apos;t panic. You log into the dashboard, type in a PO number or date range, and pull up thousands of associated documents instantly in compliant PDF format. Your data is structured, searchable, and always audit-ready.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. TRUST ARCHITECTURE */}
      <section className="py-24 md:py-32 px-6 bg-[#FBFBFB] border-y border-zinc-200">
         <div className="max-w-[1000px] mx-auto">
             <div className="mb-12 md:mb-16">
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#111111]">Apparel-Grade Security</h2>
                 <p className="text-xl text-[#666666] max-w-[600px]">Enterprise-grade protection for confidential buyer IP and designs.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                   "Secure encryption at rest and in transit",
                   "ISO 27001 aligned workflow",
                   "Isolated zones for IP restricted documents (Lab Dips / Patterns)",
                   "Monitored facility with access limits",
                   "Two person chain of custody handling",
                   "Data privacy compliant processing rules"
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-zinc-200 transition-all">
                      <div className="w-8 h-8 rounded-full bg-[#E6E4DD] flex items-center justify-center shrink-0 mt-0.5">
                         <Shield className="w-4 h-4 text-[#111111]" strokeWidth={2} />
                      </div>
                      <span className="text-[17px] text-[#222222] font-medium leading-snug pt-1">{item}</span>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[800px] mx-auto w-full">
         <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-center text-[#111111]">Industry specific Questions</h2>
         <div className="space-y-4">
            {content.faqs.map((faq: { q: string, a: string }, i: number) => (
               <details key={i} className="group bg-white border border-zinc-200 rounded-2xl cursor-pointer shadow-sm hover:border-zinc-300 transition-colors">
                  <summary className="flex items-center justify-between p-6 md:p-8 font-medium text-lg md:text-xl list-none outline-none">
                     <span className="pr-6 text-[#222222]">{faq.q}</span>
                     <ChevronRight className="w-6 h-6 shrink-0 text-zinc-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-[#666666] text-base md:text-lg border-t border-zinc-100 pt-6 hidden group-open:block leading-relaxed">
                     {faq.a}
                  </div>
               </details>
            ))}
         </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#111111] text-white">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
             <div className="w-20 h-20 bg-white/10 rounded-[24px] border border-white/20 flex items-center justify-center mb-10 rotate-3 backdrop-blur-md">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={1.5} />
             </div>
             <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Ready to digitize?</h2>
             <p className="text-[19px] md:text-[22px] text-zinc-400 mb-12 max-w-[600px] leading-relaxed">
                Book a free site survey. We will assess your box volume, explain the SLA, and give you a clear cost framework.
             </p>
             <Link href="/contact" className="bg-white text-[#111111] px-10 py-5 rounded-full text-[17px] font-medium hover:bg-zinc-200 transition-colors shadow-xl">
                Get Your Estimate Today
             </Link>
          </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 border-t border-zinc-800 text-center text-[14px] text-zinc-500 bg-[#111111] flex justify-center gap-6">
         <span>&copy; {new Date().getFullYear()} Paperlogic Solutions PVT Limited.</span>
         <Link href="/privacy" className="hover:text-zinc-300">Privacy Policy</Link>
         <Link href="/terms" className="hover:text-zinc-300">Terms of Service</Link>
      </footer>
    </div>
  );
}
