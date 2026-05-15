import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldCheck, MapPin, Database, Server, Settings, Focus, AlertCircle, FileText, ScanSearch, Archive, HardDrive } from 'lucide-react';
import { ReactNode } from 'react';

type ServiceData = {
  title: string;
  subtitle: string;
  heroDesc: string;
  icon: any;
  challenge: string;
  approach: string;
  features: { title: string, desc: string }[];
  deliverables: string[];
  useCases: string[];
};

const servicesData: Record<string, ServiceData> = {
  'document-scanning': {
    title: 'Bulk Document Scanning',
    subtitle: 'Industrial scale imaging services with total accuracy.',
    heroDesc: 'Convert rooms of file cabinets into instantly searchable digital assets. Our high-throughput facility processes millions of pages monthly, handling fragile archival records and perfectly structured invoices with equal precision.',
    icon: FileText,
    challenge: 'Physical archives are expensive to store, vulnerable to physical damage, and prohibitively slow to search. Manual digitization usually leads to missing pages and poor image quality.',
    approach: 'We utilize robotic-feed scanners with ultrasonic double-feed detection ensuring 0% document loss. Every image passes through edge-compute arrays to verify contrast and clarity in real-time.',
    features: [
      { title: 'Mixed-Batch Handling', desc: 'No need to sort documents by size. We scan receipts, legal-size contracts, and cardstock in the same batch.' },
      { title: 'Optical Character Recognition (OCR)', desc: 'We don\'t just create images; we create searchable data. Every word becomes indexed and queryable instantly.' },
      { title: 'Metadata Extraction', desc: 'Key fields like Date, Invoice Number, and Client Name are extracted and appended natively to the file.' }
    ],
    deliverables: ['Searchable PDF/A Master Files', 'Structured JSON/CSV Metadata', 'Detailed Audit Log via PrimeCloud'],
    useCases: ['Accounts Payable Archives', 'Employee HR Files', 'Legal Discovery & Case Files']
  },
  'large-format': {
    title: 'Large Format & Engineering',
    subtitle: 'Architectural drawings, maps, and blueprints digitized.',
    heroDesc: 'Specialized wide-format scanning up to A0+ size and beyond. We digitize fragile engineering plans, municipal maps, and architectural blueprints without risking damage to the delicate originals.',
    icon: ScanSearch,
    challenge: 'Large format documents are extremely difficult to transport, share, and review collaboratively. They degrade quickly over time and standard scanners cannot accommodate their dimensions.',
    approach: 'Using specialized flat-track wide-format optical scanners, we capture immense detail without bending or stressing the original document, preserving exact scale and fidelity.',
    features: [
      { title: 'High-Fidelity Resolution', desc: 'Scan at extreme optical resolutions to ensure even the finest engineering tolerances are perfectly legible.' },
      { title: 'Delicate Handling', desc: 'Zero-tension feed paths and glass-plate options for severely degraded or historical maps.' },
      { title: 'Color Profiling', desc: 'Exact color matching for topographic maps and marked-up architectural revisions.' }
    ],
    deliverables: ['High-Res TIFF Masters', 'Compressed Multi-page PDFs', 'AutoCAD Compatible Vectors (On Request)'],
    useCases: ['Municipal Land Registries', 'Architectural Blueprints', 'Topographical Surveys']
  },
  'data-entry': {
    title: 'Managed Data Entry',
    subtitle: 'Hybrid AI and human-verified data processing.',
    heroDesc: 'When standard OCR isn\'t enough, our managed specialized teams verify and structure complex datasets, handwriting, and legacy forms into perfect digital databases.',
    icon: Server,
    challenge: 'Handwritten forms, heavily stamped documents, and poorly printed legacy texts often defeat standard AI extraction, leaving companies with incomplete or corrupted databases.',
    approach: 'We pass documents through PrimeExtract AI first, then securely route low-confidence segments to vetted data-entry specialists for secondary and tertiary blind verification.',
    features: [
      { title: 'Sinhala & Tamil Specialization', desc: 'Native experts validating complex regional dialects and scripts that standard OCR software routinely fails on.' },
      { title: 'Blind Dual-Entry Verification', desc: 'Critical data points are entered blindly by two separate operators to ensure mathematical certainty of correctness.' },
      { title: 'Legacy Formatting', desc: 'Translating old, unstructured tabular layouts into clean relational databases.' }
    ],
    deliverables: ['Validated SQL Datasets', 'Clean CSV/Excel Exports', 'Direct API Inject to your ERP'],
    useCases: ['Historical Census Data', 'Handwritten Patient Intake Forms', 'Logistics Waybills']
  },
  'microfilm-conversion': {
    title: 'Microfilm & Book Scanning',
    subtitle: 'Non-destructive preservation of historical records.',
    heroDesc: 'Convert legacy microfilm, microfiche, aperture cards, and fragile bound books into accessible digital formats using specialized non-destructive imaging equipment.',
    icon: Archive,
    challenge: 'Micro-formats require specialized, obsolete hardware to read, creating severe bottlenecks. Historical books cannot be unbound for standard flatbed scanning without destroying them.',
    approach: 'We deploy V-shaped cradles for book scanning to capture pages without opening the spine past 120-degrees, and use continuous-roll microfilm scanners to digitize entire spools at once.',
    features: [
      { title: 'Non-Destructive Capture', desc: 'V-cradles and laser alignment ensure books remain perfectly intact during the process.' },
      { title: 'Film Restoration Filters', desc: 'Digital enhancement to remove scratches, dust, and degradation from old microfiche records.' },
      { title: 'Positive/Negative Inversion', desc: 'Automatic conversion of negatives into highly legible positive digital formats.' }
    ],
    deliverables: ['Restored Digital Images', 'Searchable PDF output', 'Preservation Master Metadata'],
    useCases: ['Library Archives', 'Registrar General Records', 'Historical Land Deeds']
  },
  'secure-destruction': {
    title: 'Secure Document Destruction',
    subtitle: 'Certified, compliant cross-cut shredding.',
    heroDesc: 'The final step in the digitization lifecycle. Once physical records are perfectly digitized and verified, we provide industrial cross-cut shredding, issuing official Certificates of Destruction.',
    icon: ShieldCheck,
    challenge: 'Holding onto digitized physical records creates unnecessary storage costs and maintains an unprotected vector for data breaches.',
    approach: 'We securely transport digitized documents directly to industrial cross-cut shredders. The entire process is CCTV-recorded, and we issue mathematically verifiable certificates for legal compliance.',
    features: [
      { title: 'P-4 Security Level', desc: 'Cross-cut shredding ensuring particles are small enough that reassembly is physically impossible.' },
      { title: 'Chain of Custody', desc: 'GPS-tracked transport and unbroken custody logs from the scanner directly to the shredder.' },
      { title: 'Eco-Friendly Recycling', desc: 'All destroyed paper pulp is securely recycled in accordance with local environmental regulations.' }
    ],
    deliverables: ['Official Certificate of Destruction', 'CCTV Video Evidence (Optional)', 'Chain of Custody Audit Log'],
    useCases: ['Expired Financial Ledgers', 'Digitized Medical Records', 'Redundant Legal Copies']
  },
  'on-site': {
    title: 'Secure On-Site Deployments',
    subtitle: 'We bring the technology to your secure premises.',
    heroDesc: 'For highly classified documents that legally or operationally cannot leave your facility. We deploy our scanning hardware, extraction software, and vetted personnel directly into your secure environment.',
    icon: HardDrive,
    challenge: 'Government intelligence, proprietary R&D, and specific financial instruments are strictly forbidden from leaving their localized secure network.',
    approach: 'We temporarily convert a room in your facility into a PrimeScan mini-hub. We bring the scanners, air-gapped servers, and cleared staff to digitize everything in place.',
    features: [
      { title: 'Air-Gapped Processing', desc: 'None of our equipment connects to the external internet. All OCR and data extraction runs locally on shipped hardware.' },
      { title: 'Cleared Personnel', desc: 'Our strictly vetted operators pass comprehensive background checks before entering your facility.' },
      { title: 'Zero Data Retention', desc: 'Once the project is complete, all internal drives in our equipment are wiped to DoD standards before leaving your premises.' }
    ],
    deliverables: ['Locally Deployed Software', 'Encrypted Hard Drive Turnover', 'Hardware Wipe Certification'],
    useCases: ['Defense Contractors', 'Central Bank Vaults', 'Pharmaceutical R&D Labs']
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug] || servicesData['document-scanning'];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      <Navbar />
      
      {/* HERO */}
      <main className="pt-40 pb-20 px-6 lg:px-12 bg-zinc-900 text-white relative">
        {/* Subtle patterned background or gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowRight className="w-4 h-4 rotate-180" /> Core Services
          </Link>
          
          <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8">
             <service.icon className="w-8 h-8 text-blue-400" />
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            {service.title}
          </h1>
          <h2 className="text-xl text-zinc-400 mb-8 max-w-3xl leading-relaxed">
            {service.subtitle}
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-12">
            {service.heroDesc}
          </p>

          <div className="flex gap-4">
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgb(37,99,235,0.4)]">
               Request Service Pricing
             </button>
          </div>
        </div>
      </main>

      {/* CONTENT SPLIT */}
      <section className="py-24 px-6 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Col - The Challenge & Approach */}
            <div>
               <div className="mb-16">
                 <div className="flex items-center gap-3 mb-4">
                   <AlertCircle className="w-5 h-5 text-amber-500" />
                   <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">The Challenge</h3>
                 </div>
                 <h4 className="text-2xl font-bold text-zinc-900 mb-4 leading-snug">Why standard methodologies fail.</h4>
                 <p className="text-zinc-600 leading-relaxed text-lg">{service.challenge}</p>
               </div>

               <div className="relative">
                 {/* Visual connector */}
                 <div className="absolute -left-[27px] top-4 bottom-4 w-px bg-blue-100 hidden md:block"></div>
                 
                 <div className="flex items-center gap-3 mb-4 relative">
                   {/* Node on the connecting line */}
                   <div className="absolute -left-8 w-2 h-2 rounded-full bg-blue-600 hidden md:block"></div>
                   <Settings className="w-5 h-5 text-blue-600" />
                   <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Methodology</h3>
                 </div>
                 <h4 className="text-2xl font-bold text-zinc-900 mb-4 leading-snug">How we solve it.</h4>
                 <p className="text-zinc-600 leading-relaxed text-lg">{service.approach}</p>
               </div>
            </div>

            {/* Right Col - Details */}
            <div>
               <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 lg:p-10 mb-12">
                 <h3 className="text-xl font-bold text-zinc-900 mb-6">Service Features</h3>
                 <div className="space-y-6">
                   {service.features.map((feat, i) => (
                     <div key={i} className="flex gap-4">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-zinc-900 mb-1">{feat.title}</h5>
                          <p className="text-zinc-600 text-sm leading-relaxed">{feat.desc}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="grid sm:grid-cols-2 gap-6">
                 <div className="border border-zinc-200 rounded-2xl p-6">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Standard Deliverables</h4>
                   <ul className="space-y-3">
                     {service.deliverables.map((item, i) => (
                        <li key={i} className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div> {item}
                        </li>
                     ))}
                   </ul>
                 </div>
                 <div className="border border-zinc-200 rounded-2xl p-6">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Common Use Cases</h4>
                   <ul className="space-y-3">
                     {service.useCases.map((item, i) => (
                        <li key={i} className="text-sm font-medium text-zinc-700 flex items-center gap-2">
                          <div className="w-1 h-1 bg-zinc-400 rounded-full"></div> {item}
                        </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>

         </div>
      </section>

      {/* COMPLIANCE / SECURITY BOX */}
      <section className="py-24 px-6 lg:px-12 bg-zinc-50 border-t border-zinc-100">
         <div className="max-w-7xl mx-auto bg-white border border-zinc-200 rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                 <ShieldCheck className="w-6 h-6 text-blue-600" />
                 <span className="text-sm font-bold uppercase tracking-widest text-zinc-900">Strict Compliance</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">Built for heavily regulated industries.</h2>
              <p className="text-zinc-500 leading-relaxed max-w-xl">
                 All services are rendered in strict compliance with the Personal Data Protection Act (PDPA) No. 9 of 2019 and ensure legal admissibility under the Electronic Transactions Act of Sri Lanka.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 shrink-0 w-full md:w-auto">
               <div className="border border-zinc-100 bg-zinc-50 rounded-xl p-4 text-center">
                 <div className="text-xl font-bold text-zinc-900 mb-1">ISO</div>
                 <div className="text-[10px] uppercase font-bold text-zinc-500">Certified Process</div>
               </div>
               <div className="border border-zinc-100 bg-zinc-50 rounded-xl p-4 text-center">
                 <div className="text-xl font-bold text-zinc-900 mb-1">PDPA</div>
                 <div className="text-[10px] uppercase font-bold text-zinc-500">Compliant</div>
               </div>
               <div className="border border-zinc-100 bg-zinc-50 rounded-xl p-4 text-center">
                 <div className="text-xl font-bold text-zinc-900 mb-1">P-4</div>
                 <div className="text-[10px] uppercase font-bold text-zinc-500">Shredding Std</div>
               </div>
               <div className="border border-zinc-100 bg-zinc-50 rounded-xl p-4 text-center">
                 <div className="text-xl font-bold text-zinc-900 mb-1">AES</div>
                 <div className="text-[10px] uppercase font-bold text-zinc-500">Data Transit</div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-white text-center border-t border-zinc-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6 tracking-tight">Need a custom scope of work?</h2>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
            Every digitization project is unique. Contact our solutions team to discuss your document volume, complexity, and security requirements to receive a detailed technical proposal and quotation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-md">
              Talk to a Solutions Architect
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

