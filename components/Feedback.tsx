'use client';

import * as motion from 'motion/react-client';

export default function Feedback() {
  const testimonials = [
    { 
      text: 'Jash Om\'s expertise in BRCGS V9 was pivotal for our export certification. Highly professional.',
      name: 'Ramesh Kumar', 
      company: 'Heritage Foods',
    },
    { 
      text: 'The mock audits transformed our team\'s understanding of food safety. Unmatched senior-level guidance.',
      name: 'Anita Sharma', 
      company: 'Spice Masters Exporters',
    },
    { 
      text: 'Practical implementation at its best. They didn\'t just point out gaps; they bridged them.',
      name: 'David Wilson', 
      company: 'Zenith Logistics',
    },
    { 
      text: 'Clear guidance that saved us months of preparation for our FSSC 22000 audit. Professional and reliable.',
      name: 'Priya Verma', 
      company: 'Verma Bakery Solutions',
    },
    { 
      text: 'Exceptional auditing standards ensuring peak operational excellence across all our facilities.',
      name: 'Sunil Mehta', 
      company: 'Global Tea Estates',
    },
    { 
      text: 'Strategic insights that turned our complex regulatory challenges into measurable growth.',
      name: 'Arjun Das', 
      company: 'Blue Water Beverages',
    },
  ];

  // Double the array for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  return (
    <section id="feedback" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-16">
         <div className="w-16 h-1 bg-[#D3211B] mx-auto mt-6 rounded-full"></div>
         <h2 className="text-sm font-bold tracking-[0.3em] text-[#D3211B] uppercase mb-4">Market Perspective</h2>
         <h3 className="text-3xl font-extrabold tracking-tight text-[#A68966]">What Clients Say</h3>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap animate-marquee"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {items.map((t, i) => (
            <div 
              key={i} 
              className="inline-block w-[350px] mx-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow shrink-0"
            >
              <p className="text-[#A68966] font-medium leading-relaxed mb-6 whitespace-normal italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#D3211B] uppercase tracking-wider">{t.name}</span>
                <span className="text-xs text-gray-400 font-medium mt-1">{t.company}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1920px); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
