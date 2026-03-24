'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, LayoutGrid, MessageSquare, User, CheckCircle2 } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Contact() {
  const [sendWhatsApp, setSendWhatsApp] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!sendWhatsApp) return; // Let standard form submission handle or do nothing
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    const whatsappMsg = `*New Inquiry via Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message}`;
    window.open(`https://wa.me/919331874296?text=${whatsappMsg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0B2D5C] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -m-24 w-96 h-96 bg-[#F39200] opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 -m-24 w-80 h-80 bg-[#1a4b8a] opacity-30 rounded-full blur-[100px]"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-[#F39200] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Connect With Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">Ready to <span className="text-[#F39200]">Optimize</span> Your Standards?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">Whether you're looking for audit readiness, ISO preparation, or specialized training, our experts are ready to guide you towards excellence.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F39200] group-hover:border-[#F39200] transition-all">
                  <Phone className="w-6 h-6 text-[#F39200] group-hover:text-[#0B2D5C]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Mobile Hotline</p>
                  <a href="tel:9331874296" className="text-2xl font-bold hover:text-[#F39200] transition-colors tracking-tight">9331874296</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F39200] group-hover:border-[#F39200] transition-all">
                  <Mail className="w-6 h-6 text-[#F39200] group-hover:text-[#0B2D5C]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Inquiry</p>
                  <a href="mailto:debasisjashap@gmail.com" className="text-2xl font-bold hover:text-[#F39200] transition-colors tracking-tight">debasisjashap@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F39200] group-hover:border-[#F39200] transition-all">
                  <MapPin className="w-6 h-6 text-[#F39200] group-hover:text-[#0B2D5C]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Strategic Location</p>
                  <p className="text-2xl font-bold tracking-tight">West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[40px] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B2D5C] uppercase tracking-widest flex items-center gap-2">
                  <User size={14} className="text-[#F39200]" /> Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#0B2D5C] focus:outline-none focus:border-[#F39200]/50 focus:ring-4 focus:ring-[#F39200]/5 transition-all outline-none" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B2D5C] uppercase tracking-widest flex items-center gap-2">
                  <Phone size={14} className="text-[#F39200]" /> Mobile Number *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  placeholder="e.g. +91 93318 XXX XX" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#0B2D5C] focus:outline-none focus:border-[#F39200]/50 focus:ring-4 focus:ring-[#F39200]/5 transition-all outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B2D5C] uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} className="text-[#F39200]" /> Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="e.g. rahul@example.com" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#0B2D5C] focus:outline-none focus:border-[#F39200]/50 focus:ring-4 focus:ring-[#F39200]/5 transition-all outline-none" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0B2D5C] uppercase tracking-widest flex items-center gap-2">
                  <LayoutGrid size={14} className="text-[#F39200]" /> Service Needed
                </label>
                <input 
                  type="text" 
                  name="service"
                  placeholder="e.g. ISO 22000 Audit" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#0B2D5C] focus:outline-none focus:border-[#F39200]/50 focus:ring-4 focus:ring-[#F39200]/5 transition-all outline-none" 
                />
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold text-[#0B2D5C] uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} className="text-[#F39200]" /> Your Message
                </label>
                <textarea 
                  name="message"
                  placeholder="How can we help you today?" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 text-[#0B2D5C] focus:outline-none focus:border-[#F39200]/50 focus:ring-4 focus:ring-[#F39200]/5 transition-all h-32 outline-none resize-none" 
                />
              </div>

              <div className="sm:col-span-2 flex items-center gap-4 bg-[#0B2D5C]/5 p-4 rounded-2xl border border-[#0B2D5C]/10 cursor-pointer group" onClick={() => setSendWhatsApp(!sendWhatsApp)}>
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${sendWhatsApp ? 'bg-[#25D366] border-[#25D366]' : 'border-gray-300'}`}>
                   {sendWhatsApp && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0B2D5C]">Send inquiry via WhatsApp</span>
                  <span className="text-[10px] text-gray-500 font-medium">Faster response & direct communication with our experts.</span>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="w-full py-5 rounded-2xl bg-[#F39200] text-[#0B2D5C] text-lg font-black uppercase tracking-[0.2em] shadow-lg shadow-[#F39200]/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  <Send className="w-6 h-6" /> {sendWhatsApp ? 'Send via WhatsApp' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
