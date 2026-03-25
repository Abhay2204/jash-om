'use client';
import {motion} from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Youtube, MessageCircle, Facebook } from 'lucide-react';

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
          <div className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#D3211B] opacity-90">
            <span className="w-12 h-[2px] bg-[#D3211B]"></span>
            West-Bengal, India
          </div>
          
          <h1 className="mt-8 flex flex-col uppercase leading-[0.85] tracking-tighter">
            <span className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-[#A68966]">
              JASH OM
            </span>
            <span className="mt-2 md:mt-4 text-3xl md:text-5xl lg:text-6xl font-bold text-[#A68966]/90">
              Standard Services
            </span>
            <span className="mt-1 md:mt-2 text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-400">
              & Training
            </span>
          </h1>

          <div className="mt-12 pl-6 border-l-4 border-[#D3211B]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A68966] leading-snug">
              Building Audit-Ready <br className="hidden sm:block" /> Food Safety Systems.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-md">
              Led by Ex-Nestlé Quality Head with 20+ years of industry expertise.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-8">
            <div className="flex gap-4">
              <Link href="#contact" className="px-8 py-4 rounded-full bg-[#A68966] text-white font-medium hover:bg-[#A68966]/90 transition-all text-center">
                Book Consultation
              </Link>
              <Link href="#services" className="px-8 py-4 rounded-full border border-[#A68966] text-[#A68966] font-medium hover:bg-[#A68966]/5 transition-all text-center">
                Explore Services
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100 max-w-fit">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#D3211B] opacity-80">Follow Us</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.youtube.com/@ISO%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%B6%E0%A6%BE%E0%A6%B2%E0%A6%BE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#A68966]/5 flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all duration-300 group shadow-md"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5 text-[#A68966] group-hover:text-white" />
                </a>

                <a 
                  href="https://wa.me/919331874296" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#A68966]/5 flex items-center justify-center hover:bg-[#25D366] hover:scale-110 transition-all duration-300 group shadow-md"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-[#A68966] group-hover:text-white" />
                </a>

                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#A68966]/5 flex items-center justify-center hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 group shadow-md"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 text-[#A68966] group-hover:text-white" />
                </a>
              </div>
            </div>
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
