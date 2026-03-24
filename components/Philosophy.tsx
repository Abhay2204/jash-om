export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-48 relative overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[800px]">
      
      {/* Sticky Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed w-full h-full"
        style={{ backgroundImage: "url('/image/PHILOSOPHY.png')" }}
      >
        {/* Blurring & Navy Dark Overlay */}
        <div className="absolute inset-0 bg-[#0B2D5C]/70 backdrop-blur-md"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-sm font-bold text-[#F39200] uppercase tracking-[0.4em] mb-12 drop-shadow-md">Our Philosophy</h2>
        
        <blockquote className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight drop-shadow-2xl">
          “Compliance is not <span className="text-[#F39200] italic font-extrabold pr-2">paperwork</span>— <br className="hidden md:block"/> it is <span className="underline decoration-[#F39200] decoration-[4px] underline-offset-[10px]">system discipline.</span>”
        </blockquote>
        
        <p className="mt-14 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-lg leading-snug">
          Building <span className="text-[#F39200] italic border-b-[3px] border-[#F39200]/30 pb-1">Practical</span> & <span className="text-[#F39200] italic border-b-[3px] border-[#F39200]/30 pb-1">Audit-Ready</span> <br className="hidden sm:block"/> <span className="mt-4 inline-block tracking-wide">Food Safety Systems.</span>
        </p>
        
        <div className="w-24 h-1.5 bg-[#F39200] mx-auto mt-14 mb-10 rounded-full shadow-[0_0_15px_rgba(243,146,0,0.5)]"></div>
        
        <p className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light tracking-wide">
          We focus on <span className="font-bold text-[#F39200]">practical, sustainable</span>, and <span className="font-bold text-[#F39200] italic pr-1">audit-ready</span> systems <br className="hidden lg:block"/>that add real <span className="font-bold text-white border-b-2 border-[#F39200] pb-1">business value</span>.
        </p>
      </div>
    </section>
  );
}
