import { ShieldCheck, FileCheck, ClipboardList, BookOpenText, Target } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Food Safety Consulting',
    desc: 'Expert guidance to build robust compliance frameworks and audit-ready systems aligned with global standards.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'ISO Certification Support',
    desc: 'End-to-end preparation for ISO 22000, FSSC 22000, BRCGS V9, HACCP, ISO 9001, 14001 and more.',
    icon: FileCheck,
  },
  {
    num: '03',
    title: 'Audit Readiness',
    desc: 'Comprehensive mock audits, gap analysis and structured corrective action plans for seamless certification.',
    icon: Target,
  },
  {
    num: '04',
    title: 'Internal Audit Outsourcing',
    desc: 'Independent, senior-level verification of your compliance protocols and systematic risk mitigation.',
    icon: ClipboardList,
  },
  {
    num: '05',
    title: 'Professional Training',
    desc: 'Corporate capacity building and operational discipline training across multi-site manufacturing facilities.',
    icon: BookOpenText,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16 md:mb-24">
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-[#F39200]"></span>
              <span className="text-sm font-bold text-[#F39200] uppercase tracking-widest">Core Capabilities</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0B2D5C] leading-tight">
              What We Deliver
            </h3>
          </div>
          <p className="text-xl md:text-2xl text-[#F39200] font-medium leading-relaxed lg:pb-2 italic tracking-tight">
            From gap analysis to full certification readiness — we bring 21+ years of hands-on food safety expertise to every engagement.
          </p>
        </div>

        {/* Service List */}
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group py-8 md:py-10 grid md:grid-cols-12 gap-6 md:gap-10 items-center hover:bg-[#F5F7FA] px-4 md:px-8 rounded-2xl transition-all duration-300 -mx-4 md:-mx-8 cursor-default"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-[#F39200]/30 transition-colors duration-300 select-none">
                    {s.num}
                  </span>
                </div>

                {/* Icon */}
                <div className="md:col-span-1 hidden md:flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B2D5C]/5 group-hover:bg-[#0B2D5C] flex items-center justify-center transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#0B2D5C] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-[#0B2D5C] group-hover:text-[#F39200] transition-colors duration-300 tracking-tight leading-tight">
                    {s.title}
                  </h4>
                </div>

                {/* Divider line */}
                <div className="md:col-span-1 hidden md:flex justify-center">
                  <div className="w-[1px] h-12 bg-gray-200 group-hover:bg-[#F39200]/30 transition-colors"></div>
                </div>

                {/* Desc */}
                <div className="md:col-span-5">
                  <p className="text-gray-500 font-medium leading-relaxed text-base md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

