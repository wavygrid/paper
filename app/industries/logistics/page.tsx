import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, FileText, Database, Anchor, FolderKanban, Stamp, Ship, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { LogisticsExtractionSnippet } from '@/components/UISnippets';

export default function LogisticsIndustryPage() {
  const documents = [
    "Four-copy CUSDEC sets with stampings",
    "Supplier invoice originals (bank-stamped)",
    "Original Bills of Lading (BL)",
    "Delivery Orders (DO) & Permits",
    "Trip sheets & fuel issue vouchers",
    "Vehicle service & weighbridge tickets"
  ];

  const faqs = [
    { q: "Can you recognize Customs stamps and signatures?", a: "Yes, our system tags documents that contain official stamps, making it easy to filter for 'stamped original' files." },
    { q: "Is this secure enough for bank-stamped invoices?", a: "Absolutely. We employ strict access controls and robust encryption for all financial trade documents." },
    { q: "Can I share a shipment file with my client securely?", a: "You can generate secure, time-limited links to specific document sets to share with your importers directly." },
    { q: "How are CUSDEC sets grouped?", a: "We use the unique CUSDEC entry number to stitch all related shipment documents into a single searchable dossier." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 flex flex-col relative overflow-x-hidden w-full">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-[76px] w-full"></div>

      {/* 1. HERO SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
         </div>
         
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-[800px]">
               <div className="inline-flex items-center gap-2 text-[11px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-4 py-2 rounded-full border border-orange-200/50 mb-8">
                  Customs House Agents
               </div>
               <h1 className="text-5xl md:text-[80px] font-medium tracking-tight text-slate-900 leading-[1.05] mb-8">
                  Clear shipments faster with document intelligence.
               </h1>
               <p className="text-[20px] md:text-[24px] leading-relaxed text-slate-600 max-w-[700px]">
                  Supply chain friction is built on misplaced paperwork. Reduce demurrage and streamline multi-party compliance by extracting key data points automatically.
               </p>
            </div>
            
            <div className="hidden md:flex shrink-0">
               <div className="w-32 h-32 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner">
                  <Ship className="w-12 h-12 text-slate-300" strokeWidth={1} />
               </div>
            </div>
         </div>
      </section>

      {/* 2. PROBLEM MATRIX (BENTO) */}
      <section className="py-16 md:py-24 px-6 bg-slate-50 border-y border-slate-100">
         <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-6">
            
            {/* Box 1: Retention & Scale */}
            <div className="w-full md:w-5/12 bg-white rounded-[32px] p-10 border border-slate-200 flex flex-col justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Anchor className="w-32 h-32 text-slate-900" />
               </div>
               <div className="mb-16 relative z-10">
                  <h3 className="text-2xl font-medium mb-4 tracking-tight">The Paper Avalanche</h3>
                  <p className="text-lg text-slate-500 leading-relaxed">
                     A clearing agent doing 200 shipments a month accumulates a serious archive of multi-copy CUSDEC sets, weighing tickets, and permits. 
                  </p>
               </div>
               <div className="bg-slate-900 rounded-2xl p-6 text-white relative z-10">
                  <h4 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wide">Legal Requirement</h4>
                  <p className="text-lg font-medium">Retention is mandated for 5 years under the Customs Ordinance.</p>
               </div>
            </div>

            {/* Box 2: Documents Grid */}
            <div className="w-full md:w-7/12 bg-white rounded-[32px] p-10 border border-slate-200 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                     <FolderKanban className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">Mandatory Documentation</h3>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                  {documents.map((doc, i) => (
                     <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                           <FileText className="w-5 h-5 text-slate-300" />
                        </div>
                        <span className="text-[15px] text-slate-700 font-medium leading-snug">{doc}</span>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* 3. VISUAL PIPELINE */}
      <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-[1200px] mx-auto w-full">
            <div className="mb-20 text-center flex flex-col items-center">
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Instantly searchable dossiers.</h2>
               <p className="text-xl text-slate-500 max-w-[600px] leading-relaxed">We use the unique CUSDEC entry number to stitch all related shipment documents into a single, unified digital thread.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center bg-slate-900 rounded-[40px] p-8 md:p-16 border border-slate-800 shadow-2xl relative">
               <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

               <div className="w-full lg:w-1/2 space-y-10 relative z-10">
                  <div className="space-y-4">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white font-medium">01</div>
                     <h3 className="text-3xl font-medium text-white tracking-tight">Ingest & Tag Stamps</h3>
                     <p className="text-lg text-slate-400 leading-relaxed">
                        Our specialized engine analyzes carbon setups and officially stamped bank invoices, cleanly separating originals from duplicate copies for auditing.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-white font-medium">02</div>
                     <h3 className="text-3xl font-medium text-white tracking-tight">CUSDEC Stitching</h3>
                     <p className="text-lg text-slate-400 leading-relaxed">
                        Delivery orders, transport vouchers, and supplier invoices are automatically identified and grouped underneath the master Customs Declaration number.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-medium shadow-[0_0_20px_rgba(249,115,22,0.4)]">03</div>
                     <h3 className="text-3xl font-medium text-white tracking-tight">Client Sharing Portal</h3>
                     <p className="text-lg text-slate-400 leading-relaxed">
                        Generate secure, time-limited sharing links for specific shipments, allowing importers to directly view their cleared documents without endless email threads.
                     </p>
                  </div>
               </div>

               <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
                  <LogisticsExtractionSnippet />
               </div>
            </div>
         </div>
      </section>

      {/* 4. TRUST ARCHITECTURE */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
         <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
             <Shield className="w-12 h-12 text-slate-800 mb-6" />
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-slate-900">Trade-Grade Security</h2>
             <p className="text-xl text-slate-500 max-w-[600px] mb-16">Customs and banking documents require the absolute highest level of protection and accountability.</p>
             
             <div className="grid sm:grid-cols-3 gap-8 w-full text-left">
                {[
                   { title: "Securely Encrypted", desc: "Secure encryption for all financial trade and customs documents at rest." },
                   { title: "Secure Handling", desc: "Carefully authorized handling from your dispatch door to our processing floor." },
                   { title: "Audit Logging", desc: "Every view, download, or share link generation is logged permanently in the system." }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                         <Stamp className="w-5 h-5 text-slate-600" />
                      </div>
                      <h4 className="text-lg font-medium text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 px-6 max-w-[900px] mx-auto w-full">
         <h2 className="text-4xl font-medium tracking-tight mb-12 text-center text-slate-900">Clearing & Logistics Questions</h2>
         <div className="space-y-4">
            {faqs.map((faq, i) => (
               <details key={i} className="group bg-white border border-slate-200 rounded-[20px] cursor-pointer shadow-sm hover:border-slate-300 transition-colors">
                  <summary className="flex items-center justify-between p-6 md:p-8 font-medium text-lg text-slate-900 list-none outline-none">
                     <span className="pr-6">{faq.q}</span>
                     <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-open:bg-slate-100 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                     </div>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 text-[15px] md:text-[17px] border-t border-slate-100 pt-6 hidden group-open:block leading-relaxed">
                     {faq.a}
                  </div>
               </details>
            ))}
         </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 md:py-32 px-6 bg-slate-900 text-white border-t border-slate-800 text-center flex flex-col items-center">
         <div className="w-20 h-20 bg-white/10 rounded-[28px] border border-white/20 flex items-center justify-center mb-10 backdrop-blur-md">
            <LayoutDashboard className="w-10 h-10 text-white" strokeWidth={1.5} />
         </div>
         <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Ready for instant clearance?</h2>
         <p className="text-xl text-slate-400 mb-12 max-w-[600px] leading-relaxed">
            Stop digging through physical filing cabinets when importers ask for document copies. Automate your archive today.
         </p>
         <Link href="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-full text-[17px] font-medium hover:bg-slate-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Schedule a Logistics Survey
         </Link>
      </section>

      <footer className="py-12 border-t border-slate-800 text-center text-[14px] text-slate-500 bg-slate-900 flex justify-center gap-6">
         <span>&copy; {new Date().getFullYear()} Paperlogic Solutions PVT Limited.</span>
         <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
         <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
      </footer>
    </div>
  );
}
