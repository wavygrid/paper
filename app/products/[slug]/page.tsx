import { Navbar } from '@/components/Navbar';
import { FileText, Search, Scan, Database, Server, Archive, CheckCircle, ArrowRight, Zap, Shield, Cpu, Clock, Focus, Network, Key, Layers, Lock, FileKey2 } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

// --- PRODUCT SPECIFIC SNIPPETS ---

const ScannerSnippet = () => (
  <div className="relative w-full h-[300px] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl p-6 overflow-hidden flex flex-col items-center justify-center">
     <div className="absolute top-4 left-4 flex gap-1.5">
       <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
       <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
       <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
     </div>
     <div className="text-[10px] text-zinc-500 uppercase tracking-widest absolute top-4 right-4 animate-pulse">Running: 120ppm</div>
     
     <div className="relative w-48 h-32 flex items-center justify-center">
       {/* Scanner Base */}
       <div className="w-full h-8 bg-zinc-800 rounded-md absolute bottom-0 z-20 border border-zinc-700 shadow-[0_0_15px_theme(colors.blue.500/20)] flex items-center justify-between px-4">
         <div className="flex gap-1">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <div className="w-2 h-2 rounded-full bg-blue-500"></div>
         </div>
         <div className="w-8 h-1 rounded-full bg-zinc-600"></div>
       </div>
       
       {/* Paper Path */}
       <div className="w-32 h-[1px] bg-blue-500/30 absolute bottom-8 z-10"></div>
       
       {/* Animated Papers */}
       <div className="absolute inset-0 overflow-hidden flex flex-col items-center justify-end pb-8">
          <div className="w-24 h-32 bg-white rounded-md shadow-lg border border-zinc-200 mt-auto origin-bottom transform translate-y-2 translate-x-2 rotate-6 opacity-30"></div>
          <div className="w-24 h-32 bg-white rounded-md shadow-lg border border-zinc-200 mt-auto origin-bottom absolute translate-y-1 translate-x-1 rotate-3 opacity-60"></div>
          <div className="w-24 h-32 bg-white rounded-md shadow-lg border border-zinc-200 mt-auto origin-bottom absolute z-10 animate-[bounce_1s_infinite] pt-4 px-2">
            <div className="w-1/2 h-1 bg-zinc-200 mb-2 rounded"></div>
            <div className="w-full h-1 bg-zinc-100 mb-1 rounded"></div>
            <div className="w-full h-1 bg-zinc-100 mb-1 rounded"></div>
            <div className="w-3/4 h-1 bg-zinc-100 rounded"></div>
          </div>
       </div>

       {/* Scan Beam */}
       <div className="w-32 h-1 bg-blue-500 absolute bottom-8 z-30 opacity-80 blur-[1px] animate-[pulse_1s_infinite] shadow-[0_0_10px_theme(colors.blue.500)]"></div>
     </div>
  </div>
);

const ExtractSnippet = () => (
  <div className="w-full h-[300px] bg-white rounded-2xl border border-zinc-100 shadow-xl overflow-hidden flex flex-col md:flex-row relative">
    <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 px-3 py-1 text-[10px] font-bold uppercase rounded-bl-lg tracking-widest border-b border-l border-blue-100 z-10">Network Active</div>
    
    <div className="w-full md:w-1/2 h-full bg-zinc-50 border-r border-zinc-100 p-6 flex flex-col">
       <div className="text-xs font-semibold text-zinc-400 mb-4 uppercase">Source Document</div>
       <div className="flex-1 border border-zinc-200 rounded-lg bg-white relative overflow-hidden p-4 shadow-sm">
         <div className="w-16 h-2 bg-zinc-200 rounded mb-4"></div>
         <div className="flex gap-4 mb-2">
           <div className="w-10 h-2 bg-zinc-100 rounded relative"><div className="absolute inset-0 bg-blue-400/20 rounded mix-blend-multiply border border-blue-400/50"></div></div>
           <div className="w-20 h-2 bg-zinc-200 rounded"></div>
         </div>
         <div className="flex gap-4 mb-2">
           <div className="w-10 h-2 bg-zinc-100 rounded"></div>
           <div className="w-24 h-2 bg-zinc-200 rounded relative"><div className="absolute inset-0 bg-emerald-400/20 rounded mix-blend-multiply border border-emerald-400/50"></div></div>
         </div>
         <div className="flex gap-4 mb-2">
           <div className="w-10 h-2 bg-zinc-100 rounded"></div>
           <div className="w-16 h-2 bg-zinc-200 rounded relative"><div className="absolute inset-0 bg-amber-400/20 rounded mix-blend-multiply border border-amber-400/50"></div></div>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none"></div>
       </div>
    </div>
    <div className="w-full md:w-1/2 h-full bg-[#0a0a0a] p-6 flex flex-col font-mono relative overflow-hidden">
       {/* Scan line effect */}
       <div className="absolute w-full h-px bg-emerald-500/50 shadow-[0_0_10px_theme(colors.emerald.500)] top-0 left-0 animate-[ping_3s_linear_infinite] opacity-50 z-20"></div>

       <div className="flex items-center gap-2 mb-4">
         <Cpu className="w-4 h-4 text-emerald-500" />
         <div className="text-xs font-semibold text-zinc-400 uppercase">JSON Output</div>
       </div>
       <div className="flex-1 text-[10px] sm:text-xs text-zinc-300 leading-loose">
         <span className="text-zinc-500">{'{'}</span><br/>
         &nbsp;&nbsp;<span className="text-blue-400">&quot;invoice_no&quot;</span>: <span className="text-emerald-400">&quot;INV-2991&quot;</span>,<br/>
         &nbsp;&nbsp;<span className="text-blue-400">&quot;date&quot;</span>: <span className="text-emerald-400">&quot;2026-04-21&quot;</span>,<br/>
         &nbsp;&nbsp;<span className="text-blue-400">&quot;amount&quot;</span>: <span className="text-amber-400">4520.00</span>,<br/>
         &nbsp;&nbsp;<span className="text-blue-400">&quot;currency&quot;</span>: <span className="text-emerald-400">&quot;LKR&quot;</span>,<br/>
         &nbsp;&nbsp;<span className="text-blue-400">&quot;confidence&quot;</span>: <span className="text-emerald-500 animate-pulse">0.998</span><br/>
         <span className="text-zinc-500">{'}'}</span>
       </div>
    </div>
  </div>
);

const VaultSnippet = () => (
  <div className="relative w-full h-[300px] bg-white rounded-2xl border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex">
    {/* Sidebar */}
    <div className="w-1/3 bg-zinc-50 border-r border-zinc-200 p-4 hidden sm:block">
       <div className="w-20 h-3 bg-zinc-200 rounded mb-6"></div>
       <div className="space-y-3">
         <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-100 rounded border border-blue-200 shrink-0"></div><div className="w-16 h-2 bg-zinc-300 rounded"></div></div>
         <div className="flex items-center gap-2 pl-4"><div className="w-3 h-3 bg-zinc-200 rounded shrink-0"></div><div className="w-12 h-2 bg-zinc-200 rounded"></div></div>
         <div className="flex items-center gap-2 pl-4"><div className="w-3 h-3 bg-zinc-200 rounded shrink-0"></div><div className="w-20 h-2 bg-zinc-200 rounded"></div></div>
       </div>
    </div>
    {/* Content */}
    <div className="flex-1 p-4 sm:p-6 bg-white relative">
       {/* Search bar mock */}
       <div className="w-full h-8 border border-zinc-200 bg-zinc-50 rounded-lg mb-6 flex items-center px-3 gap-2">
         <Search className="w-3 h-3 text-zinc-400" />
         <div className="w-24 h-1.5 bg-zinc-200 rounded"></div>
       </div>

       {/* Grid mock */}
       <div className="grid grid-cols-2 gap-4">
         {[1,2,3,4].map(i => (
           <div key={i} className="border border-zinc-100 rounded-xl p-3 flex gap-3 items-start hover:border-blue-200 transition-colors group">
              <div className="w-8 h-10 bg-blue-50 rounded border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 transition-colors"></div>
              <div>
                <div className="w-16 h-2 bg-zinc-800 rounded mb-1.5"></div>
                <div className="w-12 h-1.5 bg-zinc-300 rounded mb-3"></div>
                <div className="flex gap-1 text-[8px] font-bold text-emerald-600 bg-emerald-50 w-max px-1 rounded">ACCESS: ADMIN</div>
              </div>
           </div>
         ))}
       </div>
       
       <div className="absolute bottom-4 right-4 bg-zinc-900 border border-zinc-800 text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce">
         <Shield className="w-5 h-5 text-emerald-400" />
         <div>
           <div className="text-xs font-bold">End-to-End Encrypted</div>
           <div className="text-[10px] text-zinc-400 tracking-wider">AES-256 ACTIVE</div>
         </div>
       </div>
    </div>
  </div>
);

// --- PRODUCT DATA MAP ---

type ProductData = {
  title: string;
  badge: string;
  subtitle: string;
  heroDesc: string;
  Snippet:React.FC;
  featuresTitle: string;
  features: { icon: any, title: string, desc: string }[];
  metrics: { value: string, label: string }[];
  process: { step: string, title: string, desc: string }[];
};

const productsData: Record<string, ProductData> = {
  'primescan-industrial': {
    title: 'PrimeScan Industrial',
    badge: 'Hardware & Capture',
    subtitle: 'High-speed robotic document capture systems built for enterprise scale.',
    heroDesc: 'Stop dealing with manual feed errors and slow desktop scanners. Our industrial hubs digitize millions of pages per month with perfect clarity, handling everything from fragile A0 architectural blueprints to massive stacks of mixed A4 invoices without breaking a sweat.',
    Snippet: ScannerSnippet,
    featuresTitle: 'Capture without limits.',
    features: [
      { icon: Zap, title: 'Extreme Velocity', desc: 'Capable of scanning up to 210 pages per minute with dual-lens technology capturing both sides simultaneously.' },
      { icon: Focus, title: 'Ultrasonic Double-Feed Detection', desc: 'Hardware-level sensors ensure no page is ever missed, even when sheets are stapled, sticky, or statically bound.' },
      { icon: Layers, title: 'Mixed-Batch Processing', desc: 'Throw receipts, A4 contracts, and thick cardstock into the same batch. The system self-adjusts pressure and optics on the fly.' },
      { icon: CheckCircle, title: 'Real-Time QA Validation', desc: 'Every captured frame passes through a local edge-compute module to verify resolution, contrast, and alignment before saving.' },
    ],
    metrics: [
      { value: '10M+', label: 'Pages Processed Monthly' },
      { value: '0%', label: 'Document Loss Rate' },
      { value: '600', label: 'DPI Optical Resolution' }
    ],
    process: [
      { step: '01', title: 'Preparation & Sorting', desc: 'We remove staples, paperclips, and mend torn pages to prepare for high-speed transit.' },
      { step: '02', title: 'Robotic Capture', desc: 'Documents pass through industrial optics, creating perfect uncompressed archival master files.' },
      { step: '03', title: 'Reassembly or Destruction', desc: 'Physical files are either rebound and returned, or certified shredded via cross-cut destruction.' }
    ]
  },
  'primeextract-ai': {
    title: 'PrimeExtract AI',
    badge: 'Machine Learning',
    subtitle: 'Context-aware data parsing, engineered for the Sri Lankan market.',
    heroDesc: 'Legacy OCR just converts images to dumb text. PrimeExtract AI actually understands what it reads. It identifies the difference between a total amount, a tax subtotal, and an invoice number - even if the document layout changes entirely or is written in Sinhala or Tamil.',
    Snippet: ExtractSnippet,
    featuresTitle: 'Intelligence beyond OCR.',
    features: [
      { icon: Cpu, title: 'Spatial Relationship Mapping', desc: 'Understands tabular structures. It knows that a price belongs to the line item beside it, not just the text block above it.' },
      { icon: Scan, title: 'Local Language Mastery', desc: 'Trained extensively on Sri Lankan NICs, Sinhala/Tamil fonts, regional handwriting, and complex rubber stamps.' },
      { icon: Network, title: 'Continuous Learning', desc: 'When humans correct edge-case errors, the models adapt. The system gets exponentially smarter the more you use it.' },
      { icon: FileKey2, title: 'Automated Meta-Tagging', desc: 'Documents are automatically classified (e.g., "Invoice", "CUSDEC", "Legal Deed") and tagged with key searchable entities.' },
    ],
    metrics: [
      { value: '99.8%', label: 'Extraction Accuracy' },
      { value: '1.2s', label: 'Processing per Page' },
      { value: '30+', label: 'Supported Doc Types' }
    ],
    process: [
      { step: '01', title: 'Ingestion pipeline', desc: 'PDFs or raw TIFs are fed into the encrypted cloud or local edge processing cue.' },
      { step: '02', title: 'Neural analysis', desc: 'Vision models straighten, de-noise, and perform spatial mapping before extracting text.' },
      { step: '03', title: 'Structured Payload', desc: 'Raw text is transformed into perfectly structured JSON/XML payloads delivered directly to your ERP.' }
    ]
  },
  'primecloud-vault': {
    title: 'PrimeCloud Vault',
    badge: 'Software Platform',
    subtitle: 'The impenetrable, zero-trust digital archive for your enterprise.',
    heroDesc: 'Searching for a specific clause in a 500-page contract shouldn\'t take hours. PrimeCloud Vault provides Google-like search across your entire historical archive, wrapped in bank-grade security protocols.',
    Snippet: VaultSnippet,
    featuresTitle: 'Your data, completely secure.',
    features: [
      { icon: Search, title: 'Full-Text Deep Search', desc: 'Search not just file names, but every single printed or handwritten word contained within millions of pages in milliseconds.' },
      { icon: Lock, title: 'Zero-Trust Architecture', desc: 'Every user, API call, and device must be explicitly authenticated. AES-256 encryption at rest and TLS 1.3 in transit.' },
      { icon: Key, title: 'Granular Access Control', desc: 'Define exactly who can view, download, or share specific document classes down to the individual folder or file level.' },
      { icon: Clock, title: 'Immutable Audit Trails', desc: 'Every view, search, export, and login is permanently logged, making compliance audits instantaneous and painless.' },
    ],
    metrics: [
      { value: '<50ms', label: 'Query Response Time' },
      { value: 'Tier 3', label: 'Data Center Standard' },
      { value: '256-bit', label: 'Hardware Encryption' }
    ],
    process: [
      { step: '01', title: 'Secure Login', desc: 'Authenticate via Azure AD, Google Workspace, or standard SAML 2.0 Identity Providers.' },
      { step: '02', title: 'Instant Retrieval', desc: 'Use natural phrasing to locate specific records, clauses, or invoice numbers instantly.' },
      { step: '03', title: 'Secure Collaboration', desc: 'Create time-expiring, view-only secure links for external auditors or legal counsel.' }
    ]
  }
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug] || productsData['primescan-industrial'];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <main className="pt-40 pb-24 px-6 lg:px-12 relative border-b border-zinc-100 bg-zinc-50/50">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-blue-50/40 via-transparent to-transparent -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8">
               <ArrowRight className="w-4 h-4 rotate-180" /> Back to Platform Overview
             </Link>
             
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
               {product.badge}
             </div>
             
             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
               {product.title}
             </h1>
             <h2 className="text-xl lg:text-2xl text-zinc-500 mb-8 leading-snug">
               {product.subtitle}
             </h2>
             <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-lg">
               {product.heroDesc}
             </p>
             
             <div className="flex flex-wrap items-center gap-4">
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_8px_20px_rgb(37,99,235,0.2)] hover:shadow-[0_12px_25px_rgb(37,99,235,0.3)] hover:-translate-y-0.5">
                 Request Demo
               </button>
               <button className="bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 px-8 py-4 rounded-xl font-medium text-sm transition-all shadow-sm">
                 Download Spec Sheet
               </button>
             </div>
           </div>

           <div className="relative z-10 w-full flex justify-center lg:justify-end">
              <product.Snippet />
           </div>
        </div>
      </main>

      {/* METRICS STRIP */}
      <section className="bg-zinc-900 text-white py-12 px-6 lg:px-12 border-b border-zinc-800">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {product.metrics.map((m, i) => (
              <div key={i} className="flex-1 w-full text-center md:px-8 pt-8 md:pt-0 first:pt-0">
                 <div className="text-4xl md:text-5xl font-light tracking-tight mb-2 text-white">{m.value}</div>
                 <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">{m.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6">{product.featuresTitle}</h2>
            <p className="text-zinc-500 text-lg">Engineered for the demands of modern Sri Lankan enterprises, eliminating bottlenecks and securing data.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {product.features.map((feat, i) => (
              <div key={i} className="flex gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                   <feat.icon className="w-6 h-6 text-zinc-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-zinc-900 mb-3">{feat.title}</h3>
                   <p className="text-zinc-600 leading-relaxed">{feat.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PROCESS */}
      <section className="py-32 px-6 lg:px-12 bg-zinc-50 border-y border-zinc-100">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4">How it integrates.</h2>
               <p className="text-zinc-500">A streamlined workflow with zero disruption to your daily operations.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {product.process.map((step, i) => (
                 <div key={i} className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="text-6xl font-black text-zinc-100 mb-6 tracking-tighter">{step.step}</div>
                    <h4 className="text-lg font-bold text-zinc-900 mb-3">{step.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 px-6 lg:px-12 bg-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to see {product.title} in action?</h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Schedule a personalized technical demo with our engineering team, or run a free pilot test using a sample of your own documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all w-full sm:w-auto shadow-[0_0_20px_rgb(37,99,235,0.4)]">
              Schedule Technical Demo
            </button>
            <Link href="/contact" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl font-medium text-sm w-full sm:w-auto transition-colors flex items-center justify-center">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

