import Image from 'next/image';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-4 mb-4 justify-center">
            <span className="w-8 h-[2px] bg-[#D3211B]"></span>
            <h2 className="text-sm font-bold text-[#D3211B] uppercase tracking-widest leading-none">About Company</h2>
            <span className="w-8 h-[2px] bg-[#D3211B]"></span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#A68966] leading-tight mt-2">
            Independent Food Safety & Compliance Experts
          </h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
            Jash Om Standard Services & Training is a professional Independent Food Safety & Compliance consultancy ensuring total regulatory compliance across diverse processing operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Circular Dashed "Orbit" Image Design */}
          <div className="relative flex justify-center items-center py-10 min-h-[400px]">
            {/* Outer dashed ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] border-[1.5px] border-dashed border-gray-300 rounded-full animate-[spin_60s_linear_infinite]" />
            {/* Inner dashed ring */}
            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] border-[1.5px] border-dashed border-gray-300 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            
            {/* Main Central Image Circle */}
            <div className="relative w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-full bg-white shadow-2xl flex items-center justify-center z-10 outline outline-8 outline-white/80">
              <div className="relative w-[70%] h-[70%]">
                <Image 
                  src="/image/logo square.png" 
                  alt="Jash Om Standard Services" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-contain" 
                  priority 
                />
              </div>
            </div>

            {/* Orbiting Icon Nodes (Clamped exactly to the outer 480px ring) */}
            <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] pointer-events-none">
              {/* Top-Left */}
              <div className="absolute top-[14.6%] left-[14.6%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20 pointer-events-auto -translate-x-1/2 -translate-y-1/2">
                 <ShieldCheck className="w-6 h-6 text-[#A68966]" />
              </div>
              {/* Bottom-Left */}
              <div className="absolute bottom-[14.6%] left-[14.6%] w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-20 pointer-events-auto -translate-x-1/2 translate-y-1/2">
                 <Award className="w-5 h-5 text-[#D3211B]" />
              </div>
              {/* Top-Right */}
              <div className="absolute top-[14.6%] right-[14.6%] w-14 h-14 bg-[#A68966] rounded-full shadow-lg flex items-center justify-center z-20 pointer-events-auto translate-x-1/2 -translate-y-1/2">
                 <FileText className="w-6 h-6 text-white" />
              </div>
              {/* Bottom-Right */}
              <div className="absolute bottom-[14.6%] right-[14.6%] w-12 h-12 bg-[#D3211B] rounded-full shadow-lg flex items-center justify-center z-20 pointer-events-auto translate-x-1/2 translate-y-1/2">
                 <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Side: Info and Stats */}
          <div className="flex flex-col justify-center">
            <div className="w-10 h-[3px] bg-[#D3211B] mb-6"></div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#A68966]">
              We believe in excellence
            </h4>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed font-medium">
              We specialize in building practical, audit-ready food safety systems seamlessly aligned with international standards. We believe in doing the right thing, always.
            </p>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A68966] mt-2.5 shrink-0"></span>
                <span className="text-gray-700 font-medium text-lg">System implementation & regulatory compliance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A68966] mt-2.5 shrink-0"></span>
                <span className="text-gray-700 font-medium text-lg">Supplier quality assurance and certification readiness.</span>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <div className="flex items-baseline gap-1 min-w-[120px]">
                  <span className="text-4xl xl:text-5xl font-black text-[#A68966]">21+</span>
                  <span className="text-sm font-bold text-gray-400">/years</span>
                </div>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                  Extensive industry experience ensuring total regulatory compliance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-6 border-t border-gray-50">
                <div className="flex items-baseline gap-1 min-w-[120px]">
                  <span className="text-4xl xl:text-5xl font-black text-[#A68966]">100%</span>
                  <span className="text-sm font-bold text-gray-400">/ready</span>
                </div>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                  Building completely practical, audit-ready food safety systems.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="px-8 py-4 bg-[#A68966] text-white font-bold rounded-md flex items-center gap-3 hover:bg-[#D3211B] transition-all shadow-md">
                Learn More 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
