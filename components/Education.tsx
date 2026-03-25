'use client';

import { Youtube, ExternalLink, Play } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Education() {
  const videos = [
    {
      id: '8V1-gcP6tk8',
      title: 'Expert Guidance on Quality Standards',
      desc: 'Deep dive into ISO implementation and manufacturing excellence.'
    },
    {
      id: 'eMFqERTSHsg',
      title: 'Audit Readiness & Compliance',
      desc: 'Key strategies for passing international quality audits with confidence.'
    }
  ];

  return (
    <section id="education" className="py-24 md:py-36 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A68966]/20 to-transparent"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#D3211B]"></span>
              <span className="text-sm font-bold text-[#D3211B] uppercase tracking-widest">Educational Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#A68966] leading-tight">
              Mastering <span className="text-[#D3211B]">Standards</span> Through Knowledge.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
              Explore our intensive resource library where we break down complex regulatory requirements into practical, implementable steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end"
          >
            <div className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-[#FF0000]/10 flex items-center justify-center group-hover:bg-[#FF0000] transition-colors duration-500">
                <Youtube className="w-8 h-8 text-[#FF0000] group-hover:text-white transition-colors duration-500" />
              </div>
              <div>
                <p className="text-xs font-black text-[#A68966] uppercase tracking-widest mb-1">Our Official Channel</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2">ISO পাঠশালা</h4>
                <a
                  href="https://www.youtube.com/@ISO%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%B6%E0%A6%BE%E0%A6%B2%E0%A6%BE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D3211B] font-bold text-sm group-hover:underline"
                >
                  Visit Channel <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-[#A68966]/10 border border-white/40">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay that disappears on hover or when playing (simplified) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all pointer-events-none duration-500"></div>

                {/* Aesthetic Play Icon Mockup */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
              </div>

              <div className="mt-8 px-4">
                <h3 className="text-2xl font-bold text-[#A68966] group-hover:text-[#D3211B] transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="mt-3 text-gray-500 font-medium leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating background element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#A68966]/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 w-80 h-80 bg-[#D3211B]/5 rounded-full blur-[100px] -z-10"></div>
      </div>
    </section>
  );
}
