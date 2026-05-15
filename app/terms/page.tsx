'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-orange-100 selection:text-orange-900 w-full overflow-x-hidden">
      <Navbar />
      <div className="h-[76px] w-full"></div>
      
      <section className="pt-24 lg:pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto text-left relative z-10">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-zinc-900">Terms of Service</h1>
          <p className="text-lg text-zinc-500 font-light mb-16">Last Updated: May 8, 2026</p>
          
          <div className="prose prose-zinc max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-zinc-600 prose-headings:font-medium prose-headings:text-zinc-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-li:text-zinc-600 prose-li:font-light">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by Paperlogic Solutions PVT Limited ("Paperlogic", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Paperlogic Solutions PVT Limited provides physical document digitization, semantic indexing, structural extraction, and optional local LLM deployment services. We act solely as a technology vendor and physical processor.
            </p>

            <h2>3. Document Custody and Security</h2>
            <p>
              We maintain strict chain-of-custody protocols during the physical transit and storage of documents. However, Paperlogic Solutions PVT Limited assumes no legal liability for any consequential damages arising from unforeseen physical destruction out of our reasonable control. Our digital security relies on AES-256 encryption and industry-standard access management.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Paperlogic Solutions PVT Limited makes no claim of ownership over the content of the data and physical documents submitted by the client. The original documents, as well as the digitized output, remain the sole property of the client.
            </p>

            <h2>5. Service Adjustments</h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the services (or any part thereof) with or without notice. You agree that Paperlogic Solutions PVT Limited will not be liable to you or to any third party for any modification, suspension, or discontinuance of the service.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Colombo, Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      <footer className="pt-24 pb-12 px-6 border-t border-zinc-200 bg-white relative z-10">
         <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-[15px] font-medium text-zinc-400">
            <div>&copy; 2026 Paperlogic Solutions PVT Limited.</div>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
