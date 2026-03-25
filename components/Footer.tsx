import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#A68966] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-12 h-12 bg-[#A68966]/5 rounded-xl flex items-center justify-center p-2">
                <Image 
                  src="/image/logo square.png" 
                  alt="Jash Om Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tighter leading-none text-[#A68966]">Jash Om</h2>
                <p className="text-[10px] font-bold text-[#D3211B] uppercase tracking-widest mt-1">Standard Services</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
              Empowering organizations through elite food safety consulting, certification readiness, and operational discipline since 21+ years.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#D3211B] transition-all group">
                <Linkedin className="w-5 h-5 text-[#A68966] group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#D3211B] transition-all group">
                <Facebook className="w-5 h-5 text-[#A68966] group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#D3211B] transition-all group">
                <Instagram className="w-5 h-5 text-[#A68966] group-hover:text-white" />
              </a>
              <a href="https://wa.me/919331874296" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#25D366] transition-all group">
                <MessageCircle className="w-5 h-5 text-[#A68966] group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A68966] mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">Home Overview</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">About The Company</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">Core Capabilities</a></li>
              <li><a href="#why-us" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">Why Partner With Us</a></li>
              <li><a href="#feedback" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">Global Success Stories</a></li>
              <li><a href="#education" className="text-gray-500 hover:text-[#D3211B] transition-colors text-sm font-bold">Educational Videos</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A68966] mb-8">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#A68966] transition-colors text-sm font-bold">ISO 22000 Preparation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#A68966] transition-colors text-sm font-bold">FSSC 22000 Compliance</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#A68966] transition-colors text-sm font-bold">Mock Audit Services</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#A68966] transition-colors text-sm font-bold">HACCP Gap Analysis</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#A68966] transition-colors text-sm font-bold">Senior Training Programs</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-[#A68966] mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D3211B]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black mb-1">Direct Line</p>
                  <a href="tel:9331874296" className="text-sm font-black text-[#A68966] hover:text-[#D3211B] transition-colors tracking-tight">+91 93318 74296</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#D3211B]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black mb-1">Official Inquiry</p>
                  <a href="mailto:debasisjashap@gmail.com" className="text-sm font-black text-[#A68966] hover:text-[#D3211B] transition-colors tracking-tight">debasisjashap@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#D3211B]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-black mb-1">HQ Location</p>
                  <p className="text-sm font-black text-[#A68966] tracking-tight">West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            &copy; {currentYear} Jash Om Standard Services. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#A68966] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#A68966] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#A68966] transition-colors">Compliance</a>
          </div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            Expertise with <span className="text-[#D3211B]">Integrity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
