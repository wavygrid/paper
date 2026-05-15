import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Search, Scan, FileDigit, Server, ArrowRight, CheckCircle2, Shield, LayoutDashboard, Database, ChevronRight, FileText, Leaf, Trello } from 'lucide-react';
import { PlantationExtractionSnippet } from '@/components/UISnippets';

export default function PlantationsIndustryPage() {
  const content = {
    hero: {
      title: "Empower compliance with a structured digital estate.",
      subtitle: "Regional Plantation Companies",
      desc: "Consolidate thousands of divisional records from checkrolls to mandatory agrochemical logs into a centralized, immediately queryable database. Gain unprecedented oversight across every hectare while maintaining strict regulatory adherence."
    },
    retention: "Wages Boards Ordinance and EPF Act require wage and attendance records to be retained, and the Tea Board can demand production records at any time.",
    volume: "A single 2,000-hectare RPC division generates a wall of paper organically every month, from field books to factory logs.",
    documents: [
       "Daily muster rolls & weekly checkrolls",
       "Green-leaf weighbridge tickets",
       "Factory production logs",
       "Withering trough & fermentation records",
       "Fertilizer & agrochemical logs",
       "Pesticide registers & dispatch notes"
    ],
    faqs: [
      { q: "Can we search checkrolls by worker ID?", a: "Yes, our OCR maps standard checkroll columns, allowing you to search by EPF number or worker name instantly." },
      { q: "How do you collect from remote estates?", a: "We coordinate with regional managers for consolidated monthly pickups at the central packing or factory location." },
      { q: "Are Tea Board inspectors satisfied with digital copies?", a: "Digital copies with a verifiable audit trail of scanning are legally compliant for standard operational audits." },
      { q: "What happens if a field book is damaged by rain?", a: "We use specialized flatbed processing for weather-damaged field books to extract maximum legible information." }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#2C2A25] font-sans selection:bg-[#7C9A74]/20 selection:text-[#2C2A25] flex flex-col relative overflow-x-hidden w-full">
      <Navbar />
      
      {/* Spacer for fixed nav */}
      <div className="h-[76px] w-full"></div>

      {/* 1. HERO SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[1200px] mx-auto w-full">
         <div className="mb-8 md:mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#8B8878] hover:text-[#2C2A25] transition-colors">
               <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
         </div>
         <div className="max-w-[1000px]">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#8B8878] uppercase tracking-widest bg-[#F4EFE6] px-4 py-2.5 rounded-full border border-[#EAE7DF] mb-8">
               <span>Industry Solutions</span>
               <span className="w-1 h-1 rounded-full bg-[#D3D0C5]"></span>
               <span>{content.hero.subtitle}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-[#1C1B18] leading-[1.05] mb-8">
               {content.hero.title}
            </h1>
            <p className="text-[19px] md:text-[24px] leading-relaxed text-[#5C5A52] max-w-[850px]">
               {content.hero.desc}
            </p>
         </div>
      </section>

      {/* 2. THE PROBLEM MATRIX */}
      <section className="py-24 md:py-32 bg-[#FAF9F6] border-y border-[#EAE7DF] px-6">
         <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24">
            
            <div className="flex flex-col">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EEECE2] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                   <Leaf className="w-6 h-6 md:w-7 md:h-7 text-[#2C2A25]" strokeWidth={1.5} />
               </div>
               <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#1C1B18] tracking-tight">The Paper Avalanche</h3>
               <p className="text-[17px] md:text-[19px] text-[#5C5A52] leading-relaxed mb-8">
                  {content.volume}
               </p>
               <div className="p-8 bg-white border border-[#EAE7DF] rounded-3xl shadow-sm">
                  <h4 className="text-[12px] font-semibold text-[#8B8878] uppercase tracking-widest mb-6">Mandatory Estate Records</h4>
                  <ul className="space-y-4 md:space-y-5">
                     {content.documents.map((doc: string, i: number) => (
                        <li key={i} className="flex items-start gap-4">
                           <div className="w-6 h-6 rounded-full bg-[#F4EFE6] flex items-center justify-center shrink-0 mt-0.5">
                              <FileText className="w-3.5 h-3.5 text-[#5C5A52]" />
                           </div>
                           <span className="text-[16px] text-[#2C2A25] font-medium leading-snug">{doc}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="flex flex-col">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#EEECE2] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                   <Shield className="w-6 h-6 md:w-7 md:h-7 text-[#2C2A25]" strokeWidth={1.5} />
               </div>
               <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#1C1B18] tracking-tight">Compliance & Retention</h3>
               <p className="text-[17px] md:text-[19px] text-[#5C5A52] leading-relaxed mb-10 border-l-[3px] border-[#EAE7DF] pl-5">
                  {content.retention}
               </p>
               
               <div className="bg-[#1C1B18] rounded-[32px] p-10 md:p-12 text-[#FDFDFB] relative overflow-hidden mt-auto shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C9A74]/20 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  <h4 className="text-2xl md:text-3xl font-medium mb-4 relative z-10 tracking-tight">Digitize Your Divisions</h4>
                  <p className="text-[#A3A092] text-[16px] leading-relaxed mb-10 max-w-[320px] relative z-10">
                     Eliminate estate office clutter. We transform musty records into secure, cloud-hosted intelligence while securing your historical footprint.
                  </p>
                  <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-[#FDFDFB] text-[#1C1B18] px-8 py-4 rounded-full text-[15px] font-medium hover:bg-[#F4EFE6] transition-colors relative z-10">
                     Request a site survey <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* 3. HIGHLY VISUALIZED PROCESS PIPELINE */}
      <section className="py-24 md:py-40 px-6 max-w-[1200px] mx-auto w-full relative overflow-hidden">
         <div className="mb-20 md:mb-32 max-w-[800px]">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-[#1C1B18] mb-6">Converting historical backlog to intelligence.</h2>
            <p className="text-lg md:text-2xl text-[#5C5A52] leading-relaxed">
               We process complex plantation documents into highly structured, searchable data points completely hands-free for your teams.
            </p>
         </div>

         <div className="space-y-32">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div className="order-2 md:order-1 bg-[#FAF9F6] rounded-[32px] p-10 md:p-16 border border-[#EAE7DF]">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAE7DF]">
                        <Trello className="w-8 h-8 text-[#2C2A25] mb-4" />
                        <h4 className="font-medium text-[#2C2A25] mb-1">Estate Pickups</h4>
                        <p className="text-sm text-[#8B8878]">Regional coordination</p>
                     </div>
                     <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EAE7DF]">
                        <Server className="w-8 h-8 text-[#2C2A25] mb-4" />
                        <h4 className="font-medium text-[#2C2A25] mb-1">Encrypted Staging</h4>
                        <p className="text-sm text-[#8B8878]">Securely stored</p>
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4EFE6] text-[#2C2A25] font-medium mb-6">01</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#1C1B18]">Physical Ingestion & Logistics</h3>
                  <p className="text-lg text-[#5C5A52] leading-relaxed">
                     Your documents travel securely from the estate to our facility. We deploy locked transport, apply barcode indexing at the box level, and use specialized flatbed processing for weather-damaged field books and rugged checkrolls.
                  </p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7C9A74]/10 text-[#5F7A58] font-medium mb-6">02</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#1C1B18]">AI-Powered Data Extraction</h3>
                  <p className="text-lg text-[#5C5A52] leading-relaxed">
                     Our custom engine is trained for plantation layouts. Whether it is a green-leaf weighing ticket or a handwritten checkroll, we capture employee EPF numbers, names, dates, and weights accurately.
                  </p>
               </div>
               <div className="bg-[#FAF9F6] rounded-[32px] p-6 border border-[#EAE7DF]">
                  <PlantationExtractionSnippet />
               </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
               <div className="order-2 md:order-1 bg-[#1C1B18] rounded-[32px] p-10 border border-[#2C2A25] text-[#FDFDFB] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C9A74]/20 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
                  
                  <div className="relative z-10 bg-[#2C2A25]/50 backdrop-blur-md rounded-2xl border border-[#3D3A32] p-6">
                     <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3D3A32]">
                        <div className="flex items-center gap-3">
                           <LayoutDashboard className="w-5 h-5 text-[#88A680]" />
                           <span className="font-medium">Checkroll Search</span>
                        </div>
                        <span className="text-xs font-mono text-[#A3A092]">EPF: 83291</span>
                     </div>
                     <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                           <div key={item} className="flex justify-between items-center bg-[#1C1B18]/50 p-3 rounded-lg border border-[#3D3A32]/50">
                              <div className="flex flex-col">
                                 <span className="text-sm font-medium text-[#EAE7DF] mb-1">Checkroll Oct 202{item}</span>
                                 <span className="text-xs text-[#A3A092]">S. Perera Bogawantalawa Div</span>
                              </div>
                              <CheckCircle2 className="w-4 h-4 text-[#88A680]" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4EFE6] text-[#2C2A25] font-medium mb-6">03</div>
                  <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[#1C1B18]">Oversight & Query Capability</h3>
                  <p className="text-lg text-[#5C5A52] leading-relaxed">
                     Empower your corporate office to instantly locate any historical checkroll across disparate estates without placing ad-hoc requests to the regional manager. View verified, compliant PDFs straight from the dashboard.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. TRUST ARCHITECTURE */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF9F6] border-y border-[#EAE7DF]">
         <div className="max-w-[1000px] mx-auto">
             <div className="mb-12 md:mb-16">
                 <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#1C1B18]">Robust Logistics</h2>
                 <p className="text-xl text-[#5C5A52] max-w-[600px]">Dependable document processing architecture designed for regional dispersion.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                   "Secure encryption at rest and in transit",
                   "ISO 27001 aligned workflow",
                   "Specialized flatbed handling for damaged books",
                   "Structured checkroll data mapping",
                   "Two person chain of custody transport",
                   "Data privacy compliant processing rules"
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-[#EAE7DF] transition-all">
                      <div className="w-8 h-8 rounded-full bg-[#EEECE2] flex items-center justify-center shrink-0 mt-0.5">
                         <Shield className="w-4 h-4 text-[#1C1B18]" strokeWidth={2} />
                      </div>
                      <span className="text-[17px] text-[#2C2A25] font-medium leading-snug pt-1">{item}</span>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 md:py-32 px-6 max-w-[800px] mx-auto w-full">
         <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-center text-[#1C1B18]">Industry specific Questions</h2>
         <div className="space-y-4">
            {content.faqs.map((faq: { q: string, a: string }, i: number) => (
               <details key={i} className="group bg-white border border-[#EAE7DF] rounded-2xl cursor-pointer shadow-sm hover:border-[#D3D0C5] transition-colors">
                  <summary className="flex items-center justify-between p-6 md:p-8 font-medium text-lg md:text-xl list-none outline-none">
                     <span className="pr-6 text-[#2C2A25]">{faq.q}</span>
                     <ChevronRight className="w-6 h-6 shrink-0 text-[#A3A092] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-[#5C5A52] text-base md:text-lg border-t border-[#FAF9F6] pt-6 hidden group-open:block leading-relaxed">
                     {faq.a}
                  </div>
               </details>
            ))}
         </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#1C1B18] text-[#FDFDFB]">
          <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
             <div className="w-20 h-20 bg-white/5 rounded-[24px] border border-white/10 flex items-center justify-center mb-10 rotate-3 backdrop-blur-md">
                <CheckCircle2 className="w-10 h-10 text-[#FDFDFB]" strokeWidth={1.5} />
             </div>
             <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Ready to digitize?</h2>
             <p className="text-[19px] md:text-[22px] text-[#A3A092] mb-12 max-w-[600px] leading-relaxed">
                Connect with our team to organize an estate-wide collection strategy and get a transparent estimate based on your volume.
             </p>
             <Link href="/#contact" className="bg-[#FDFDFB] text-[#1C1B18] px-10 py-5 rounded-full text-[17px] font-medium hover:bg-[#F4EFE6] transition-colors shadow-xl">
                Get Your Estimate Today
             </Link>
          </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 border-t border-[#2C2A25] text-center text-[14px] text-[#8B8878] bg-[#1C1B18]">
         &copy; 2026 Paperlogic&trade; HQ.
      </footer>
    </div>
  );
}
