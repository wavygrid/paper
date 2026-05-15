import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, FileText, Database, Snowflake, Activity, FileCheck, CheckCircle2, FlaskConical, Thermometer } from 'lucide-react';
import { PharmaExtractionSnippet } from '@/components/UISnippets';

export default function PharmaIndustryPage() {
  const documents = [
    "Goods Received Notes (GRN)",
    "Batch number registers",
    "Expiry tracking sheets",
    "NMRA-mandated cold-chain records",
    "Pharmacy delivery notes",
    "Controlled substance logs"
  ];

  const faqs = [
    { q: "How do you handle sensitive records?", a: "Sensitive records are processed by cleared personnel in secure access zones." },
    { q: "Can we search by batch number for product recalls?", a: "Yes. Simply type a batch number into the portal, and instantly see every delivery note associated with that exact batch." },
    { q: "Are your processes compliant with local data privacy laws?", a: "Yes, we are fully compliant with Sri Lanka's Personal Data Protection Act (PDPA)." },
    { q: "Can we verify cold chain temperature logs?", a: "We digitize printed temperature logs from transport monitors and can extract outlier data points via OCR for immediate flagging." }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-teal-100 selection:text-teal-900 flex flex-col relative overflow-x-hidden w-full">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-[76px] w-full"></div>

      {/* 1. HERO SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
         </div>
         
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-[750px]">
               <div className="inline-flex items-center gap-2 text-[11px] font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-4 py-2 rounded-full border border-teal-200/60 mb-8">
                  Pharmaceutical Distribution
               </div>
               <h1 className="text-5xl md:text-[76px] font-medium tracking-tight text-zinc-900 leading-[1.05] mb-8">
                  Flawless NMRA audit readiness on demand.
               </h1>
               <p className="text-[20px] md:text-[24px] leading-relaxed text-zinc-600 max-w-[650px]">
                  The margins for error are zero. Maintain a structured system of record for cold-chain data, batch trackers, and sensitive medical logs.
               </p>
            </div>
            
            <div className="hidden md:flex shrink-0">
               <div className="w-32 h-32 rounded-full bg-teal-50 border-[4px] border-teal-100 flex items-center justify-center relative shadow-[0_0_40px_rgba(20,184,166,0.15)]">
                  <Activity className="w-12 h-12 text-teal-600" />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-100 shadow-sm">
                     <Shield className="w-5 h-5 text-teal-500" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 2. PROBLEM MATRIX (BENTO) */}
      <section className="py-16 md:py-24 px-6 bg-[#F8F9FA] border-y border-zinc-100">
         <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Retention info */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
               <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-zinc-800" />
               </div>
               <div className="mb-4">
                  <h3 className="text-2xl font-medium mb-3">Regulatory Retention</h3>
                  <p className="text-[17px] text-zinc-500 leading-relaxed">
                     NMRA inspections require you to produce five full years of distribution records on demand.
                  </p>
               </div>
            </div>

            {/* Box 2: Volume */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 border border-zinc-200 shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
               <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-6">
                  <FlaskConical className="w-6 h-6 text-teal-600" />
               </div>
               <div className="mb-4">
                  <h3 className="text-2xl font-medium mb-3">Daily Operations</h3>
                  <p className="text-[17px] text-zinc-500 leading-relaxed">
                     Distributors manage critically high daily volumes of batch records, delivery notes, and strict compliance logs.
                  </p>
               </div>
            </div>

            {/* Box 3: Documents list */}
            <div className="md:col-span-1 md:row-span-2 bg-[#111111] text-white rounded-[32px] p-8 md:p-10 border border-zinc-900 shadow-xl flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -translate-y-10 translate-x-10"></div>
               
               <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-8 relative z-10">
                  <FileCheck className="w-6 h-6 text-teal-400" />
               </div>
               
               <h3 className="text-2xl font-medium mb-8 relative z-10">Mandatory Core Files</h3>
               
               <div className="space-y-5 relative z-10 mt-auto">
                  {documents.map((doc, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <div className="mt-1">
                           <CheckCircle2 className="w-4 h-4 text-teal-500/80" />
                        </div>
                        <span className="text-[15px] font-medium text-zinc-200 leading-snug">{doc}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Wide Box 4: The Threat */}
            <div className="md:col-span-2 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-[32px] p-8 md:p-10 flex items-center justify-between shadow-lg relative overflow-hidden text-white">
               <div className="relative z-10 max-w-[400px]">
                  <h3 className="text-3xl font-medium mb-4 tracking-tight text-white">Immediate Recall Capability</h3>
                  <p className="text-teal-100 text-lg leading-relaxed">
                     When an emergency recall happens, you cannot spend days locating physical delivery sheets. Digitize for instant traceability.
                  </p>
               </div>
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
            </div>

         </div>
      </section>

      {/* 3. VISUAL PIPELINE */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full relative overflow-hidden">
         <div className="mb-20 md:mb-32">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6 max-w-[700px]">The pharmaceutical data timeline.</h2>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-[600px]">
               We transform highly sensitive medical distribution paperwork into structured, auditable, and easily retrievable digital assets.
            </p>
         </div>

         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-16">
               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 font-bold shrink-0">1</div>
                     <div className="w-px h-full bg-zinc-200 mt-4 hidden md:block"></div>
                  </div>
                  <div className="pb-8">
                     <h3 className="text-2xl font-medium mb-3 text-zinc-900">Secure Ingestion Zones</h3>
                     <p className="text-[17px] text-zinc-600 leading-relaxed">
                        Sensitive medical logs and IP-restricted formulations are handled exclusively in dedicated, access-controlled zones.
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 font-bold shrink-0">2</div>
                     <div className="w-px h-full bg-zinc-200 mt-4 hidden md:block"></div>
                  </div>
                  <div className="pb-8">
                     <h3 className="text-2xl font-medium mb-3 text-zinc-900">Intelligent Field Extraction</h3>
                     <p className="text-[17px] text-zinc-600 leading-relaxed">
                        Our engine automatically identifies and logs exact batches, verifying expiry dates across thousands of delivery notes to build a perfectly accurate digital ledger.
                     </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 font-bold shrink-0">3</div>
                  </div>
                  <div>
                     <h3 className="text-2xl font-medium mb-3 text-zinc-900">Cold Chain Validation</h3>
                     <p className="text-[17px] text-zinc-600 leading-relaxed">
                        We digitize printed transport temperature logs, reading outlier data points via OCR to instantly flag deliveries that fell outside NMRA thresholds.
                     </p>
                  </div>
               </div>
            </div>

            <div className="relative">
               <PharmaExtractionSnippet />
            </div>
         </div>
      </section>

      {/* 4. TRUST ARCHITECTURE */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
         <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Thermometer className="w-8 h-8 text-white" />
             </div>
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Medical-Grade Isolation</h2>
             <p className="text-xl text-zinc-400 max-w-[700px] mb-16">
                Pharmaceutical record digitization requires airtight data privacy and processing isolation protocols. We are PDPA and ISO 27001 aligned.
             </p>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-left">
                {[
                   "Cleared personnel background checks",
                   "Monitored processing environments",
                   "Secure data encryption",
                   "Multi-factor authentication for portals",
                   "Certified document destruction",
                   "Immutable digital audit trails"
                ].map((item, i) => (
                   <div key={i} className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                      <Shield className="w-5 h-5 text-teal-400 mb-4" />
                      <span className="text-[15px] text-zinc-100 font-medium leading-snug">{item}</span>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 px-6 max-w-[800px] mx-auto w-full">
         <h2 className="text-4xl font-medium tracking-tight mb-12 text-center text-zinc-900">Pharma Specific Queries</h2>
         <div className="space-y-4">
            {faqs.map((faq, i) => (
               <details key={i} className="group bg-white border border-zinc-200 rounded-[24px] cursor-pointer shadow-sm hover:border-teal-200 hover:shadow-md transition-all">
                  <summary className="flex items-center justify-between p-6 md:p-8 font-medium text-lg text-zinc-900 list-none outline-none">
                     <span className="pr-6">{faq.q}</span>
                     <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 group-open:bg-teal-50 transition-colors border border-zinc-100">
                        <ArrowRight className="w-4 h-4 text-zinc-400 group-open:text-teal-600 group-open:rotate-90 transition-all" />
                     </div>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-600 text-[16px] border-t border-zinc-100 pt-6 hidden group-open:block leading-relaxed">
                     {faq.a}
                  </div>
               </details>
            ))}
         </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#F8F9FA] text-zinc-900 border-t border-zinc-200 text-center flex flex-col items-center">
         <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Ready for your next NMRA audit?</h2>
         <p className="text-[20px] text-zinc-500 mb-12 max-w-[600px] leading-relaxed">
            Eliminate the anxiety of regulatory document checks. Digitize your batch and delivery records securely today.
         </p>
         <Link href="/contact" className="bg-teal-600 text-white px-10 py-5 rounded-full text-[17px] font-medium hover:bg-teal-700 transition-colors shadow-[0_0_30px_rgba(13,148,136,0.3)]">
            Schedule a Pharma Survey
         </Link>
      </section>

      <footer className="py-12 border-t border-zinc-200 text-center text-[14px] text-zinc-500 bg-white flex justify-center gap-6">
         <span>&copy; {new Date().getFullYear()} Paperlogic Solutions PVT Limited.</span>
         <Link href="/privacy" className="hover:text-zinc-800">Privacy Policy</Link>
         <Link href="/terms" className="hover:text-zinc-800">Terms of Service</Link>
      </footer>
    </div>
  );
}
