'use client';
import {motion} from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16 pb-0 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-12 md:pb-24 pt-8"
        >
          <div className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#F39200] opacity-90">
            <span className="w-12 h-[2px] bg-[#F39200]"></span>
            West-Bengal, India
          </div>
          
          <h1 className="mt-8 flex flex-col uppercase leading-[0.85] tracking-tighter">
            <span className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-[#0B2D5C]">
              JASH OM
            </span>
            <span className="mt-2 md:mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B2D5C]/90">
              Standard Services
            </span>
            <span className="mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-400">
              & Training
            </span>
          </h1>

          <div className="mt-12 pl-6 border-l-4 border-[#F39200]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2D5C] leading-snug">
              Building Audit-Ready <br className="hidden sm:block" /> Food Safety Systems.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
              Led by Ex-Nestlé Quality Head with 20+ years of industry expertise.
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <button className="px-8 py-4 rounded-full bg-[#0B2D5C] text-white font-medium hover:bg-[#0B2D5C]/90 transition-all">
              Book Consultation
            </button>
            <button className="px-8 py-4 rounded-full border border-[#0B2D5C] text-[#0B2D5C] font-medium hover:bg-[#0B2D5C]/5 transition-all">
              Explore Services
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full flex items-end justify-center lg:justify-end self-end"
        >
          <Image src="/image/model.png" alt="Food Safety Expert" width={1000} height={1200} className="w-full max-w-lg xl:max-w-xl h-auto object-bottom object-contain scale-[1.02] origin-bottom" priority />
        </motion.div>
      </div>
    </section>
  );
}
