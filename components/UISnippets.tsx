'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, FileText, CheckCircle2, Box, Command, Sparkles, Filter, MoreHorizontal, FileJson, LayoutDashboard, Shield } from 'lucide-react';

export const WatercolorBackground = ({ color1 = 'bg-blue-200', color2 = 'bg-purple-200', color3 = 'bg-pink-200', opacity = 'opacity-40' }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className={`absolute top-[-10%] left-[-10%] w-3/4 h-3/4 ${color1} rounded-full mix-blend-multiply filter blur-[80px] ${opacity} animate-blob`}></div>
    <div className={`absolute top-[-10%] right-[-10%] w-3/4 h-3/4 ${color2} rounded-full mix-blend-multiply filter blur-[80px] ${opacity} animate-blob animation-delay-2000`}></div>
    <div className={`absolute bottom-[-20%] left-[10%] w-3/4 h-3/4 ${color3} rounded-full mix-blend-multiply filter blur-[80px] ${opacity} animate-blob animation-delay-4000`}></div>
  </div>
);

export const HeroDashboard = () => (
  <div className="absolute inset-0 bg-white flex items-center justify-center font-sans overflow-hidden z-10 w-full h-full">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zinc-100/80 to-transparent rounded-full filter blur-[100px] opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-zinc-100/80 to-transparent rounded-full filter blur-[100px] opacity-70"></div>
    
    <div className="relative w-[90%] max-w-[800px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-zinc-100 p-8 flex flex-col gap-8">
       {/* Sleek App Shell Header */}
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="h-10 w-10 bg-[#111111] rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center">
                 <Sparkles className="w-4 h-4 text-white" />
             </div>
             <div>
                <div className="h-2 w-24 bg-zinc-200 rounded-full mb-2"></div>
                <div className="h-1.5 w-16 bg-zinc-100 rounded-full"></div>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="h-8 w-24 bg-zinc-50 rounded-full border border-zinc-100 hidden md:block"></div>
             <div className="h-8 w-8 bg-zinc-100 rounded-full"></div>
          </div>
       </div>

       {/* Visual Canvas / Content Area */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
              {/* Abstract Chart / Extraction Overview */}
              <div className="bg-zinc-50/50 rounded-xl p-6 border border-zinc-100">
                  <div className="flex items-end justify-between mb-8">
                     <div className="space-y-2">
                        <div className="h-1.5 w-12 bg-zinc-200 rounded-full"></div>
                        <div className="h-6 w-32 bg-[#111111] rounded-full"></div>
                     </div>
                     <div className="h-4 w-16 bg-emerald-100 rounded-full"></div>
                  </div>
                  {/* Abstract bars */}
                  <div className="flex items-end gap-3 h-24">
                     {[40, 70, 45, 90, 65, 80, 50, 100, 75].map((val, i) => (
                        <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           animate={{ height: `${val}%` }}
                           transition={{ duration: 0.8, delay: i * 0.05 + 0.2, ease: "easeOut" }}
                           className={`w-full rounded-t-md ${i === 7 ? 'bg-[#111111] shadow-[0_0_12px_rgba(0,0,0,0.1)]' : 'bg-zinc-200/80 hover:bg-zinc-300 transition-colors cursor-pointer'}`}
                        ></motion.div>
                     ))}
                  </div>
              </div>

              {/* Document Rows */}
              <div className="space-y-3">
                 {[1, 2].map(i => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-white p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
                             <FileText className="w-4 h-4" />
                          </div>
                          <div>
                             <div className="h-2 w-32 bg-zinc-800 rounded-full mb-2.5"></div>
                             <div className="h-1.5 w-20 bg-zinc-200 rounded-full"></div>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <div className="h-6 w-16 bg-zinc-50 rounded-full border border-zinc-200"></div>
                          <div className="h-6 w-6 bg-[#111111] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center">
                             <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
          </div>

          <div className="space-y-6">
              {/* Right Panel Card */}
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5, duration: 0.4 }}
                 className="bg-[#111111] text-white rounded-xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] relative overflow-hidden"
              >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-[20px] -translate-y-10 translate-x-10"></div>
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mb-10">
                     <Command className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  <div className="space-y-3 mb-8">
                     <div className="h-1.5 w-16 bg-zinc-500 rounded-full"></div>
                     <div className="h-4 w-3/4 bg-white rounded-full"></div>
                     <div className="h-4 w-1/2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full h-10 bg-white/10 rounded-lg flex items-center justify-center text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                     Process Queue
                  </div>
              </motion.div>
          </div>
       </div>
    </div>
  </div>
);

export const AutomatedExtractionSnippet = () => (
   <div className="bg-white rounded-2xl md:rounded-[32px] w-full min-h-[350px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-zinc-100 flex flex-col justify-center p-6 md:p-10 mb-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="space-y-4 max-w-[280px] w-full mx-auto">
         {/* Entity Extracted 1 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-xl border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
         >
            <div className="flex justify-between items-start mb-2">
               <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase">Vendor Match</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-[15px] font-medium text-[#222222]">Advantis Freight Ltd.</div>
         </motion.div>

         {/* Entity Extracted 2 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-xl border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
         >
            <div className="flex justify-between items-start mb-2">
               <span className="text-[11px] font-semibold text-zinc-400 tracking-wider uppercase">Extracted Value</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-[20px] font-semibold tracking-tight text-[#111111]">LKR 1,245,000.00</div>
         </motion.div>

         {/* Entity Extracted 3 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111111] p-4 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex justify-between items-start mb-2 relative z-10">
               <span className="text-[11px] font-medium tracking-wide text-zinc-400">Expiration Clause</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[14px] text-white leading-relaxed relative z-10">
               Automatically flag for renewal by Oct 2026.
            </div>
         </motion.div>
      </div>
   </div>
);

export const PlantationExtractionSnippet = () => (
   <div className="bg-[#FAF9F6] rounded-2xl md:rounded-[32px] w-full min-h-[350px] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#EAE7DF] flex flex-col justify-center p-6 md:p-10 mb-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#7C9A74]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="space-y-4 max-w-[280px] w-full mx-auto">
         {/* Entity Extracted 1 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-xl border border-[#EAE7DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
         >
            <div className="flex justify-between items-start mb-2">
               <span className="text-[11px] font-semibold text-[#8B8878] tracking-wider uppercase">Worker Found</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-[#5F7A58]" />
            </div>
            <div className="text-[15px] font-medium text-[#2C2A25]">EPF No: 83291 (S. Perera)</div>
         </motion.div>

         {/* Entity Extracted 2 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-xl border border-[#EAE7DF] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
         >
            <div className="flex justify-between items-start mb-2">
               <span className="text-[11px] font-semibold text-[#8B8878] tracking-wider uppercase">Green Leaf Weight</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-[#5F7A58]" />
            </div>
            <div className="text-[20px] font-semibold tracking-tight text-[#111111]">1,204.5 kg</div>
         </motion.div>

         {/* Entity Extracted 3 */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#2C2A25] p-4 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#F4EFE6]/5 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex justify-between items-start mb-2 relative z-10">
               <span className="text-[11px] font-medium tracking-wide text-[#A3A092]">Checkroll Validation</span>
               <CheckCircle2 className="w-3.5 h-3.5 text-[#88A680]" />
            </div>
            <div className="text-[14px] text-[#F4EFE6] leading-relaxed relative z-10">
               Automated reconciliation with daily pluckers ledger.
            </div>
         </motion.div>
      </div>
   </div>
);

export const FMCGExtractionSnippet = () => (
   <div className="bg-[#111111] rounded-2xl md:rounded-[32px] w-full min-h-[400px] shadow-2xl border border-zinc-800 flex flex-col justify-center p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[400px] w-full mx-auto">
         {/* Analysis Header */}
         <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
               <span className="text-[13px] font-medium tracking-wide text-zinc-300 uppercase">Document Intelligence</span>
            </div>
            <span className="text-xs font-mono text-zinc-500">GRN-84B2</span>
         </div>

         {/* Data Grid */}
         <div className="grid grid-cols-2 gap-4 mb-6">
             <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 backdrop-blur-sm"
             >
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Debit Note No.</div>
                <div className="text-[16px] font-mono font-medium text-zinc-100 flex items-center gap-2">
                   DN-29381 <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 backdrop-blur-sm"
             >
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Value Extracted</div>
                <div className="text-[18px] font-semibold tracking-tight text-white flex items-center gap-2">
                   LKR 45,200 <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                </div>
             </motion.div>
         </div>

         {/* Verification Alert */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-blue-500/10 p-5 rounded-xl border border-blue-500/20 flex flex-col gap-2"
         >
            <div className="flex justify-between items-center">
               <span className="text-[13px] font-medium text-blue-300">Reconciliation Status</span>
               <span className="text-[11px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full font-medium">Matched</span>
            </div>
            <div className="text-[14px] text-blue-100/70 leading-relaxed">
               Successfully reconciled against Supplier Invoice <span className="text-white font-mono">INV-8832</span> without human intervention.
            </div>
         </motion.div>
      </div>
   </div>
);

export const LogisticsExtractionSnippet = () => (
   <div className="bg-[#111111] rounded-2xl md:rounded-[32px] w-full min-h-[400px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-zinc-800 flex flex-col justify-center p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="max-w-[420px] w-full mx-auto space-y-5">
         {/* Top Meta */}
         <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"></div>
               <span className="text-[12px] font-medium tracking-wider text-zinc-400 uppercase">CUSDEC Extraction</span>
            </div>
            <div className="px-2.5 py-1 bg-zinc-800 rounded-full text-[11px] font-mono text-zinc-300 border border-zinc-700/50">
               Confidence: 99.8%
            </div>
         </div>

         {/* Extracted Fields */}
         <div className="grid grid-cols-2 gap-4">
             <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800"
             >
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest mb-1.5">Entry Number</div>
                <div className="text-[15px] font-mono font-medium text-zinc-100">
                   CUS-832-A9
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800"
             >
                <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest mb-1.5">BL Reference</div>
                <div className="text-[15px] font-mono font-medium text-zinc-100">
                   MSC-UV9281
                </div>
             </motion.div>
         </div>

         {/* Verification Alert */}
         <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-orange-500/10 p-5 rounded-xl border border-orange-500/20 relative"
         >
            <div className="absolute top-0 right-0 p-4">
               <CheckCircle2 className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-[13px] font-medium text-orange-300 mb-1">Manifest Tied Successfully</div>
            <div className="text-[14px] text-orange-100/70 leading-relaxed pr-6">
               Commercial invoice and packing list automatically grouped under Master BL. Ready for customs audit.
            </div>
         </motion.div>
      </div>
   </div>
);

export const PharmaExtractionSnippet = () => (
   <div className="bg-[#F8F9FA] rounded-2xl md:rounded-[32px] w-full min-h-[400px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-[#E9ECEF] flex flex-col justify-between p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-100/50 rounded-full blur-[60px] -z-10"></div>
      
      <div className="max-w-[400px] w-full mx-auto flex flex-col gap-5">
         <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-teal-700 tracking-wider uppercase bg-teal-50 px-3 py-1.5 rounded-full border border-teal-100">
               NMRA Batch Tracker
            </span>
         </div>

         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-4"
         >
            <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
               <div>
                  <div className="text-[12px] text-zinc-500 mb-1">Scanned GRN</div>
                  <div className="text-[18px] font-semibold text-zinc-900 tracking-tight">Amoxicillin 500mg</div>
               </div>
               <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1">Batch ID</div>
                  <div className="text-[14px] font-mono font-medium text-zinc-800">
                     BX-9932-O
                  </div>
               </div>
               <div>
                  <div className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider mb-1">Expiry Date</div>
                  <div className="text-[14px] font-mono font-medium text-amber-600">
                     2027-11-20
                  </div>
               </div>
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#111111] p-5 rounded-2xl shadow-xl flex items-start gap-4"
         >
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
               <Shield className="w-4 h-4 text-teal-400" />
            </div>
            <div>
               <div className="text-[13px] font-medium text-white mb-1.5">Schedule 2 Restrictive Audit</div>
               <div className="text-[13px] text-zinc-400 leading-relaxed">
                  Cold-chain delivery logs verified. Temperature variances within NMRA thresholds.
               </div>
            </div>
         </motion.div>
      </div>
   </div>
);

export const AIEngineSnippet = () => (
  <div className="absolute inset-0 w-full h-full relative bg-zinc-950 p-4 font-mono text-xs overflow-hidden flex flex-col text-left">
     <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[40px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[40px]"></div>
     </div>
     <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-zinc-500 mb-4 pb-2 border-b border-zinc-800">
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>extraction_pipeline.py</span>
           </div>
           <span>100% SECURE</span>
        </div>
        <div className="flex-1 space-y-2 text-zinc-400">
           <div><span className="text-pink-400">import</span> paperlogic.ai</div>
           <br/>
           <div><span className="text-blue-400">@model</span>(&quot;finance-ocr-v2&quot;)</div>
           <div><span className="text-purple-400">def</span> <span className="text-amber-200">extract_invoice</span>(document):</div>
           <div className="pl-4 text-zinc-500"># Auto-detecting tabular data...</div>
           <div className="pl-4">fields = paperlogic.extract(</div>
           <div className="pl-8">document=document,</div>
           <div className="pl-8">schema=[</div>
           <div className="pl-12 text-green-300">&quot;invoice_number&quot;,</div>
           <div className="pl-12 text-green-300">&quot;total_amount&quot;,</div>
           <div className="pl-12 text-green-300">&quot;line_items&quot;</div>
           <div className="pl-8">]</div>
           <div className="pl-4">)</div>
           <br/>
           <div className="pl-4 flex items-center">
              <span className="text-pink-400 mr-2">return</span> fields.to_json()
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                 className="w-1.5 h-3 bg-zinc-400 ml-1"
              />
           </div>
        </div>
     </div>
  </div>
);

export const UniversalSearchSnippet = () => (
   <div className="absolute inset-0 w-full h-full relative bg-zinc-950 p-4 font-sans overflow-hidden flex flex-col justify-center items-center text-left">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[50px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm space-y-4">
         <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 flex items-center shadow-lg">
            <Search className="w-4 h-4 text-emerald-400 mr-3 ml-1" />
            <span className="text-zinc-200 text-sm font-medium">Acme Corp standard terms</span>
            <div className="ml-auto bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-[10px] text-zinc-400 font-mono">↵</div>
         </div>
         <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 shadow-lg flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
               <div className="text-[10px] font-semibold text-zinc-500 uppercase">Top Result</div>
               <div className="text-[10px] text-zinc-500 font-mono">98% match</div>
            </div>
            <div className="flex items-start gap-3">
               <div className="mt-1 bg-zinc-800 p-1.5 rounded">
                  <FileText className="w-4 h-4 text-emerald-400" />
               </div>
               <div>
                  <div className="text-zinc-200 text-sm font-medium mb-1">MSA_AcmeCorp_2019.pdf</div>
                  <div className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                     ...agrees to the <strong className="text-emerald-400 font-medium">standard terms</strong> set forth in this Master Services Agreement between PaperLogic and <strong className="text-emerald-400 font-medium">Acme Corp</strong>...
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);

export const BentoSnippetOne = () => (
   <div className="absolute inset-0 bg-zinc-50 w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden text-left">
      <WatercolorBackground color1="bg-blue-100" color2="bg-cyan-100" color3="bg-sky-100" opacity="opacity-50" />
      <div className="relative z-10 w-full max-w-[200px] border border-zinc-200 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-sm transform -rotate-3 hover:rotate-0 transition-transform duration-500">
         <div className="h-2 w-12 bg-zinc-200 rounded-full mb-3"></div>
         <div className="space-y-2 mb-3">
            <div className="h-1.5 w-full bg-zinc-100 rounded-full"></div>
            <div className="h-1.5 w-5/6 bg-zinc-100 rounded-full"></div>
            <div className="h-1.5 w-full bg-zinc-100 rounded-full"></div>
         </div>
         <div className="flex justify-end pt-2 border-t border-zinc-100">
            <div className="w-4 h-4 rounded bg-blue-50 flex items-center justify-center">
               <CheckCircle2 className="w-2.5 h-2.5 text-blue-500" />
            </div>
         </div>
      </div>
      <div className="relative z-20 w-full max-w-[220px] mt-[-30px] border border-zinc-200 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-500">
         <div className="flex justify-between items-center mb-3">
            <div className="h-2 w-16 bg-blue-200 rounded-full"></div>
            <div className="h-4 w-10 bg-zinc-100 rounded flex items-center justify-center text-[8px] font-mono text-zinc-400">PDF</div>
         </div>
         <div className="aspect-[3/2] w-full bg-zinc-50 rounded border border-zinc-100 mb-2 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></div>
         </div>
      </div>
   </div>
);

export const BentoSnippetTwo = () => (
   <div className="absolute inset-0 w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-4 overflow-hidden text-left">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[40px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-[240px] space-y-3">
         <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs font-mono">
             <div className="text-zinc-500 mb-1">{"{"}</div>
             <div className="pl-4 text-purple-400">&quot;document_type&quot;: <span className="text-green-300">&quot;invoice&quot;</span>,</div>
             <div className="pl-4 text-purple-400">&quot;confidence&quot;: <span className="text-amber-300">0.99</span>,</div>
             <div className="pl-4 text-purple-400">&quot;entities&quot;: <span className="text-zinc-500">[</span></div>
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="pl-8 flex items-center"
             >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                <span className="text-blue-300">&quot;buyer_name&quot;</span>
             </motion.div>
             <div className="text-zinc-500 pl-4">{"]"}</div>
             <div className="text-zinc-500">{"}"}</div>
         </div>
      </div>
   </div>
);

export const BentoSnippetThree = () => (
   <div className="absolute inset-0 bg-emerald-950 w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden text-left">
       <div className="absolute inset-0 z-0">
         <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[40px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-[240px] border border-emerald-800/50 bg-emerald-900/40 backdrop-blur-md rounded-xl p-4 shadow-xl">
         <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-800/50">
            <div className="flex items-center gap-2">
               <Search className="w-4 h-4 text-emerald-400" />
               <span className="text-xs font-medium text-emerald-100">Index Ready</span>
            </div>
            <div className="text-[10px] text-emerald-400/70 font-mono">200ms</div>
         </div>
         <div className="space-y-2">
            {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center justify-between bg-emerald-800/30 border border-emerald-700/30 rounded p-2">
                  <div className="flex items-center gap-2">
                     <FileJson className="w-3.5 h-3.5 text-emerald-400" />
                     <div className="h-1.5 w-16 bg-emerald-600/50 rounded-full"></div>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/50" />
               </div>
            ))}
         </div>
      </div>
   </div>
);

export const FeatureListSnippet = () => (
   <div className="absolute inset-0 bg-[#FBFBFB] w-full h-full overflow-hidden flex font-sans text-left">
      <WatercolorBackground color1="bg-blue-200" color2="bg-violet-200" color3="bg-fuchsia-200" opacity="opacity-40" />
      <div className="relative z-10 flex-1 flex items-center justify-center p-6">
         <div className="w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] shadow-2xl p-6">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white">
                      <LayoutDashboard className="w-5 h-5" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-zinc-900 leading-tight">Pipeline Status</h3>
                      <p className="text-[11px] text-zinc-500">Live processing metrics</p>
                   </div>
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
             </div>
             
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-zinc-600">Ingestion</span>
                      <span className="text-zinc-900">4,200 / hr</span>
                   </div>
                   <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-zinc-600">AI Extraction</span>
                      <span className="text-zinc-900">99.8% Acc</span>
                   </div>
                   <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[95%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-zinc-600">Secure Vault</span>
                      <span className="text-zinc-900">Encrypted</span>
                   </div>
                   <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden flex">
                      <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                   </div>
                </div>
             </div>
             
             <div className="mt-8 pt-5 border-t border-zinc-200/50 flex justify-between items-center text-xs text-zinc-500">
                <span className="font-mono">SYS.OK.992</span>
                <span className="bg-zinc-100 px-2 py-1 rounded text-[10px] font-semibold text-zinc-600">View Logs</span>
             </div>
         </div>
      </div>
   </div>
);
