import Image from 'next/image';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-40 relative overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[850px] bg-white">
      
      {/* Parallax Background (Crystal Clear) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed w-full h-full opacity-60"
        style={{ backgroundImage: "url('/image/PHILOSOPHY.png')" }}
      >
        {/* Subtle white tint - NO general blur here */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* Top frame accent border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#A68966]/20 z-10"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Blurry Glass Text Area */}
        <div className="relative p-10 md:p-20 bg-white/60 backdrop-blur-[10px] rounded-[48px] border border-white/40 shadow-2xl flex flex-col items-center text-center max-w-5xl">
          
          {/* Label */}
          <h2 className="text-xs font-bold text-[#A68966] uppercase tracking-[0.5em] mb-12">
            Our Philosophy
          </h2>
          
          {/* Main Quote in Bold Serif */}
          <blockquote className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#A68966] leading-[1.2] mb-12">
            “Compliance is not <span className="text-gray-500 font-light block mt-2 md:inline md:mt-0 underline decoration-[#D3211B]/20 underline-offset-8 decoration-2">paperwork</span>— <br className="hidden md:block"/> it is <span className="text-[#D3211B] italic">system discipline.</span>”
          </blockquote>
          
          {/* Teardrop Divider Icon from Logo */}
          <div className="flex items-center justify-center mb-12 scale-1 pointer-events-none">
            <div className="w-12 h-[1px] bg-[#A68966]/30"></div>
            <div className="px-6 flex items-center gap-1 drop-shadow-sm">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="#D3211B">
                  <path d="M12 2C12 2 6 9.5 6 15C6 18.3 8.7 21 12 21C15.3 21 18 18.3 18 15C18 9.5 12 2Z" />
               </svg>
            </div>
            <div className="w-12 h-[1px] bg-[#A68966]/30"></div>
          </div>
          
          {/* Supporting Text */}
          <div className="space-y-10">
            <p className="text-xl md:text-2xl font-medium tracking-[0.05em] text-[#A68966]/90 leading-relaxed uppercase">
              Building Practical & <span className="text-[#D3211B]">Audit-Ready</span> <br className="hidden sm:block"/> Food Safety Systems.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-[1.8] font-light tracking-[0.08em] font-sans">
              We believe in bridging the gap between complexity and clarity. Our focus is on <span className="font-bold text-[#A68966]">practical</span>, sustainable, and <span className="text-[#D3211B] font-bold">certified</span> systems that add real long-term business value to your organization.
            </p>
          </div>

          {/* Bronze CTA Accent */}
          <div className="mt-16">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-[#A68966] text-white font-bold rounded-full hover:bg-[#D3211B] transition-all shadow-xl shadow-[#A68966]/30 flex items-center gap-3 uppercase tracking-widest text-sm"
            >
              Connect with an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
