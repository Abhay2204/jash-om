'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Founder', href: '#founder' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Feedback', href: '#feedback' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-md border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-50">
          <Image src="/image/logo.png" alt="Jash Om Standard" width={180} height={50} className="h-12 w-auto object-contain" priority />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-[#A68966] hover:text-[#D3211B] transition-colors">{link.label}</Link>
          ))}
          <Link href="#contact" className="px-6 py-2.5 rounded-full bg-[#A68966] text-white hover:bg-[#D3211B] transition-colors shadow-md">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden p-2 text-[#A68966] relative z-[60]"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Premium Solid Mobile Side Menu */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Solid Deep Gold Drawer */}
        <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#A68966] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image src="/image/logo square.png" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-lg bg-white p-1" />
              <span className="font-bold text-white tracking-[0.2em] text-lg uppercase">Jash Om</span>
            </div>
            <button 
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="p-8 flex flex-col gap-8 text-white text-xl font-bold tracking-widest uppercase mt-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="hover:text-[#D3211B] transition-colors flex items-center gap-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-[#D3211B] opacity-0 hover:opacity-100 transition-opacity"></span>
                {link.label}
              </Link>
            ))}
            <div className="pt-8 mt-4 border-t border-white/10">
              <Link 
                href="#contact" 
                className="block text-center px-8 py-4 rounded-full bg-[#D3211B] text-white hover:bg-white hover:text-[#A68966] transition-all shadow-lg font-black tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
