import { Phone, Mail, MapPin, Send, LayoutGrid, MessageSquare, User, Building2, MessageCircle } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#A68966] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -m-24 w-96 h-96 bg-[#D3211B] opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -m-24 w-80 h-80 bg-[#8c7456] opacity-30 rounded-full blur-[100px]"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-white font-black tracking-[0.3em] text-[10px] uppercase mb-4 block opacity-60">Connect With Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">Ready to <span className="text-[#D3211B]">Optimize</span> Your Standards?</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-12 font-medium">Whether you're looking for audit readiness, ISO preparation, or specialized training, our experts are ready to guide you towards excellence.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#D3211B] group-hover:border-[#D3211B] transition-all">
                  <Phone className="w-6 h-6 text-white group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">Mobile Hotline</p>
                  <a href="tel:9331874296" className="text-2xl font-bold hover:text-[#D3211B] transition-colors tracking-tight text-white">9331874296</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#D3211B] group-hover:border-[#D3211B] transition-all">
                  <Mail className="w-6 h-6 text-white group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">Email Inquiry</p>
                  <a href="mailto:debasisjashap@gmail.com" className="text-2xl font-bold hover:text-[#D3211B] transition-colors tracking-tight text-white">debasisjashap@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#D3211B] group-hover:border-[#D3211B] transition-all">
                  <MapPin className="w-6 h-6 text-white group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">Strategic Location</p>
                  <p className="text-2xl font-bold tracking-tight text-white">West Bengal, India</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-6">
                <a 
                  href="https://wa.me/919331874296" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#25D366]/90 transition-all shadow-lg shadow-[#25D366]/20 group w-fit"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[40px] shadow-2xl"
          >
            <form className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A68966] uppercase tracking-widest flex items-center gap-2">
                  <User size={14} className="text-[#D3211B]" /> Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#A68966] focus:outline-none focus:border-[#D3211B]/50 focus:ring-4 focus:ring-[#D3211B]/5 transition-all outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A68966] uppercase tracking-widest flex items-center gap-2">
                  <Phone size={14} className="text-[#D3211B]" /> Mobile Number *
                </label>
                <input 
                  type="tel" 
                  required 
                  placeholder="e.g. +91 93318 XXX XX" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#A68966] focus:outline-none focus:border-[#D3211B]/50 focus:ring-4 focus:ring-[#D3211B]/5 transition-all outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A68966] uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} className="text-[#D3211B]" /> Email Address *
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="e.g. rahul@example.com" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#A68966] focus:outline-none focus:border-[#D3211B]/50 focus:ring-4 focus:ring-[#D3211B]/5 transition-all outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#A68966] uppercase tracking-widest flex items-center gap-2">
                  <LayoutGrid size={14} className="text-[#D3211B]" /> Service Needed
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. ISO 22000 Audit" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#A68966] focus:outline-none focus:border-[#D3211B]/50 focus:ring-4 focus:ring-[#D3211B]/5 transition-all outline-none" 
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold text-[#A68966] uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} className="text-[#D3211B]" /> Your Message
                </label>
                <textarea 
                  placeholder="How can we help you today?" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#A68966] focus:outline-none focus:border-[#D3211B]/50 focus:ring-4 focus:ring-[#D3211B]/5 transition-all h-32 outline-none resize-none" 
                />
              </div>

              <div className="sm:col-span-2">
                <button className="w-full py-5 rounded-2xl bg-[#A68966] text-white text-lg font-black uppercase tracking-[0.2em] shadow-lg shadow-[#A68966]/30 hover:bg-[#D3211B] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  <Send className="w-6 h-6" /> Request Free Consultation
                </button>
                <p className="text-center mt-6 text-xs text-gray-400 font-medium">
                  By submitting this form, you agree to being contacted regarding your inquiry.
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
