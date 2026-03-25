import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="py-24 md:py-36 bg-[#A68966] text-white relative overflow-hidden">
      {/* Premium Decorative elements */}
      <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-[#D3211B] opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-white opacity-5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-[1100px] mx-auto px-6 text-center flex flex-col items-center relative z-10">
        
        {/* Profile Image with vibrant red ring and shadow */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-[#D3211B] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
            <Image 
              src="/image/FOUNDER.png" 
              alt="Debasis Jash - Founder" 
              fill 
              sizes="(max-width: 768px) 176px, 240px" 
              className="object-cover object-top scale-105" 
            />
          </div>
          {/* Accent red ring */}
          <div className="absolute -inset-2 border-2 border-[#D3211B] rounded-full opacity-50"></div>
        </div>

        {/* Branding Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D3211B] text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-[#D3211B]/20 mb-10">
          Founder&apos;s Focus
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold text-white max-w-3xl leading-tight tracking-tight mb-8">
          Ex-Quality Head (Nestlé CP) & ISO Coordinator. <br className="hidden md:block"/> 
          <span className="text-white/80 font-medium block mt-4 text-xl md:text-2xl italic border-l-2 border-[#D3211B] pl-6 md:pl-0 md:border-l-0">
             &ldquo;Premium category experience.&rdquo;
          </span>
        </h3>

        <div className="relative max-w-4xl mx-auto py-12 px-8 md:px-16 bg-black/10 backdrop-blur-md rounded-[40px] border border-white/10 shadow-2xl mb-12">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#D3211B] rounded-2xl flex items-center justify-center shadow-xl">
             <span className="text-3xl font-serif leading-none mt-2">&ldquo;</span>
          </div>
          
          <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed font-serif">
            My focus is not just certification — but sustainable compliance systems that strengthen operational discipline and global market credibility.
          </blockquote>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <p className="text-lg md:text-xl font-black tracking-widest uppercase text-white">
              Debasis Jash
            </p>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
          <p className="mt-2 text-[10px] font-black text-white px-3 py-1 bg-white/10 rounded-full inline-block uppercase tracking-[0.3em]">Strategic Founder</p>
        </div>
      </div>
    </section>
  );
}
