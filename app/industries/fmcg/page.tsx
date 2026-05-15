import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Shield, FileText, Database, Layers, CheckCircle2, Factory, PackageOpen, Truck, Receipt } from 'lucide-react';
import { FMCGExtractionSnippet } from '@/components/UISnippets';

export default function FMCGIndustryPage() {
  const documents = [
    "Daily route delivery notes",
    "Sales returns and damage notes",
    "GRNs against principal invoices",
    "Debit notes and credit notes",
    "Sales rep daily journey reports",
    "Expiry write-off registers"
  ];

  const faqs = [
    { q: "Our delivery notes are carbon copies. Can you read them?", a: "Yes, our processing engine is specifically trained to enhance and extract data from blue and pink carbon copy sheets confidently." },
    { q: "Can we reconcile GRNs against supplier invoices?", a: "We extract the GRN number and amount, which you can export via CSV to run automated reconciliations in your accounting software." },
    { q: "How quickly can we view a returned damage note?", a: "Once scanned and indexed, notes are immediately available via the secure cloud portal for your credit control team." },
    { q: "Do you handle the physical destruction?", a: "Yes, post-digitization, we provide certified secure shredding for all processed documents upon your explicit approval." }
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col relative overflow-x-hidden w-full">
      <Navbar />
      
      {/* Spacer */}
      <div className="h-[76px] w-full"></div>

      {/* 1. MINIMAL HERO */}
      <section className="py-24 md:py-32 px-6 max-w-[1000px] mx-auto w-full flex flex-col items-center text-center">
         <div className="mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
         </div>
         <div className="inline-flex items-center gap-2 text-[12px] font-bold text-zinc-600 uppercase tracking-widest bg-zinc-100 px-5 py-2.5 rounded-full border border-zinc-200 mb-8">
            FMCG Distribution
         </div>
         <h1 className="text-5xl md:text-[88px] font-medium tracking-tight text-[#111111] leading-[1.02] mb-8">
            Minimize revenue leakage.
         </h1>
         <p className="text-[20px] md:text-[26px] leading-snug text-[#666666] max-w-[800px]">
            Lost GRNs or misplaced debit notes directly impact your bottom line. We transform your daily avalanche of route sheets and returns into verified data.
         </p>
      </section>

      {/* 2. BENTO GRID CAPABILITIES */}
      <section className="py-16 md:py-24 px-6 max-w-[1200px] mx-auto w-full">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Box 1: Scale */}
            <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm flex flex-col justify-between group hover:border-zinc-300 transition-colors">
               <div className="mb-12">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                     <Layers className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Distributor Scalability</h3>
                  <p className="text-lg text-zinc-500 leading-relaxed max-w-[500px]">
                     A mid-sized distributor generating LKR 200M to 500M in monthly turnover naturally creates 20,000 to 40,000 retainable documents a month. We handle this scale effortlessly.
                  </p>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {documents.slice(0,3).map((doc, i) => (
                     <div key={i} className="text-[13px] font-medium text-zinc-600 bg-[#FBFBFB] px-4 py-3 rounded-xl border border-zinc-100">
                        {doc}
                     </div>
                  ))}
               </div>
            </div>

            {/* Bento Box 2: Compliance */}
            <div className="bg-[#111111] rounded-3xl p-10 border border-zinc-800 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                     <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Strict Audit Retention</h3>
                  <p className="text-zinc-400 leading-relaxed">
                     Inland Revenue can issue an assessment up to four years back, and your supporting documents must be available under the Companies Act for 6 years. We ensure 100% compliant storage.
                  </p>
               </div>
               <div className="relative z-10 flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Ready for IRD checks
               </div>
            </div>

         </div>
      </section>

      {/* 3. VISUAL PIPELINE (STICKY CARDS) */}
      <section className="py-24 px-6 bg-white border-y border-zinc-200">
         <div className="max-w-[1200px] mx-auto w-full">
            <div className="mb-20">
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111111] mb-6">The supply chain data pipeline.</h2>
               <p className="text-xl text-[#666666] max-w-[600px]">We bring complete operational transparency to your distributor network through structured extraction.</p>
            </div>

            <div className="space-y-6">
               <div className="sticky top-24 bg-[#FBFBFB] border border-zinc-200 rounded-[32px] p-10 md:p-14 shadow-sm flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 text-zinc-900 font-bold mb-6">1</div>
                     <h3 className="text-3xl font-medium mb-4">Route Collection & Sorting</h3>
                     <p className="text-lg text-zinc-500 leading-relaxed">
                        Instead of piling driver return sheets in a corner, we securely ingest the daily influx. We process everything from damp route sheets to crumpled debit notes directly from the loading bay.
                     </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                     <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col items-center text-center">
                           <Truck className="w-8 h-8 text-zinc-900 mb-3" />
                           <span className="font-medium text-sm">Delivery Notes</span>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col items-center text-center">
                           <PackageOpen className="w-8 h-8 text-zinc-900 mb-3" />
                           <span className="font-medium text-sm">Damage Returns</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="sticky top-28 bg-[#111111] text-white border border-zinc-800 rounded-[32px] p-10 md:p-14 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-white font-bold mb-6">2</div>
                     <h3 className="text-3xl font-medium mb-4 text-white">Extraction Engine</h3>
                     <p className="text-lg text-zinc-400 leading-relaxed">
                        Our intelligent system reads carbon copies and handwritten remarks. It captures the GRN number, invoice amounts, and relevant distributor codes without manual keying.
                     </p>
                  </div>
                  <div className="w-full md:w-1/2">
                     <FMCGExtractionSnippet />
                  </div>
               </div>

               <div className="sticky top-32 bg-blue-500 border border-blue-600 rounded-[32px] p-10 md:p-14 shadow-md flex flex-col md:flex-row gap-12 items-center text-white">
                  <div className="w-full md:w-1/2">
                     <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold mb-6">3</div>
                     <h3 className="text-3xl font-medium mb-4 text-white">Instant Reconciliation</h3>
                     <p className="text-lg text-blue-100 leading-relaxed">
                        Search your database instantly. Verify distributor claims against digital GRNs, clear debit notes faster, and eliminate prolonged disputes that tie up your working capital.
                     </p>
                  </div>
                  <div className="w-full md:w-1/2">
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center justify-between border-b border-blue-400/30 pb-4 mb-4">
                           <span className="font-medium">Distributor Claim #294</span>
                           <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div className="space-y-3">
                           <div className="flex justify-between text-sm">
                              <span className="text-blue-200">Scanned GRN</span>
                              <span className="font-medium">Verified</span>
                           </div>
                           <div className="flex justify-between text-sm">
                              <span className="text-blue-200">Debit Note</span>
                              <span className="font-medium">Matched</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. FAQ GRID */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto w-full">
         <h2 className="text-4xl font-medium tracking-tight mb-16 text-[#111111]">Common integrations.</h2>
         <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
               <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-zinc-300 transition-colors">
                  <h4 className="text-xl font-medium text-zinc-900 mb-4">{faq.q}</h4>
                  <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 px-6 bg-white border-t border-zinc-200 text-center flex flex-col items-center">
         <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">Stop chasing paper.</h2>
         <p className="text-xl text-zinc-500 mb-10 max-w-[500px]">
            Organize an assessment with our FMCG specialist to map out your warehouse document flow today.
         </p>
         <Link href="/contact" className="bg-[#111111] text-white px-10 py-5 rounded-full text-[17px] font-medium hover:bg-zinc-800 transition-colors shadow-lg">
            Request an Assessment
         </Link>
      </section>

      <footer className="py-12 text-center text-[14px] text-zinc-500 bg-[#FBFBFB] flex justify-center gap-6">
         <span>&copy; {new Date().getFullYear()} Paperlogic Solutions PVT Limited.</span>
         <Link href="/privacy" className="hover:text-zinc-800">Privacy Policy</Link>
         <Link href="/terms" className="hover:text-zinc-800">Terms of Service</Link>
      </footer>
    </div>
  );
}
