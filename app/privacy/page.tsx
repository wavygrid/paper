'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-orange-100 selection:text-orange-900 w-full overflow-x-hidden">
      <Navbar />
      <div className="h-[76px] w-full"></div>
      
      <section className="pt-24 lg:pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-[800px] mx-auto text-left relative z-10">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-zinc-900">Privacy Policy</h1>
          <p className="text-lg text-zinc-500 font-light mb-16">Last Updated: May 8, 2026</p>
          
          <div className="prose prose-zinc max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-zinc-600 prose-headings:font-medium prose-headings:text-zinc-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-li:text-zinc-600 prose-li:font-light">
            <h2>1. Information We Collect</h2>
            <p>
              Paperlogic Solutions PVT Limited collects only the information necessary to provide our services. This includes contact details provided through our communication forms, and the physical records handed to us for processing.
            </p>

            <h2>2. Processing of Client Data</h2>
            <p>
              The documents provided to us by clients for scanning and extraction are strictly processed as directed. Our platform does not use client data to train generalized models. Information is sandboxed and localized to the client's tenant.
            </p>

            <h2>3. Data Protection and Encryption</h2>
            <p>
              All data at rest is encrypted using AES-256 standard. Data in transit is secured using modern TLS. For enterprise clients requiring offline or on-premise execution, we facilitate hardware-based LLM deployments that ensure zero data leaves the client facility.
            </p>

            <h2>4. Third Party Services</h2>
            <p>
               We do not sell, rent, or trade your operational data. In certain deployments, if a cloud-based semantic service is utilized as agreed upon by the client, data may be processed through zero-retention API endpoints.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, your data handling, or our compliance standards, please contact us at <a href="mailto:privacy@paperlogic.io" className="text-blue-500 hover:underline">privacy@paperlogic.io</a>.
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
