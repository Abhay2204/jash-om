import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="py-20 md:py-32 bg-[#A68966] text-white">
      <div className="max-w-[1000px] mx-auto px-6 text-center flex flex-col items-center">
        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#D3211B] mb-10 shadow-2xl">
          <Image 
            src="/image/FOUNDER.png" 
            alt="Debasis Jash - Founder" 
            fill 
            sizes="(max-width: 768px) 160px, 224px" 
            className="object-cover object-top" 
          />
        </div>
        <h2 className="text-sm font-bold text-[#D3211B] uppercase tracking-widest">Founder&apos;s Focus</h2>
        <p className="mt-6 text-xl md:text-2xl font-bold text-white max-w-2xl">
          Ex-Quality Head (Nestlé CP) & ISO Coordinator. <br className="hidden md:block"/> <span className="text-[#D3211B] font-medium">Premium category experience.</span>
        </p>
        <blockquote className="mt-8 text-3xl md:text-4xl font-medium italic leading-relaxed">
          “My focus is not just certification — but sustainable compliance systems that strengthen operational discipline and global market credibility.”
        </blockquote>
        <p className="mt-8 text-xl font-bold tracking-widest">— Debasis Jash, Founder</p>
      </div>
    </section>
  );
}
