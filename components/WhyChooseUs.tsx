import { Award, UserCheck, BookOpen, Target, CheckCircle, Briefcase, HandHelping, Factory, Wheat, Salad, Warehouse, Coffee, GlassWater, Truck, GraduationCap, Laptop, Ship } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function WhyChooseUs() {
  const reasons = [
    { title: '20+ Years Industry Experience', icon: Award, description: 'Deep-rooted expertise in quality standards and regulatory compliance.' },
    { title: 'Ex-Quality Head (Multi-Factory)', icon: UserCheck, description: 'Direct experience managing large-scale operations across multiple facilities.' },
    { title: 'Nestlé Guideline Expertise', icon: BookOpen, description: 'Specialized knowledge in world-class quality and safety protocols.' },
    { title: 'Certified Lead Auditor', icon: Target, description: 'Rigorous auditing standards to ensure peak operational excellence.' },
    { title: 'Practical Implementation', icon: CheckCircle, description: 'Hands-on approach that turns strategy into measurable results.' },
    { title: 'Senior-level Guidance', icon: Briefcase, description: 'Direct access to strategic insights from industry veterans.' },
  ];

  const expertise = [
    'ISO 22000 (Food Safety Management)', 
    'FSSC 22000 (Food Safety Certification)',
    'BRCGS V9 (Global Standard)', 
    'HACCP (Hazard Analysis)',
    'ISO 9001 (Quality Management)', 
    'ISO 14001 (Environmental)',
    'SEDEX Audit & Multi-site', 
    'HALAL Certification'
  ];

  const industries = [
    { name: 'Food Processing', icon: Factory },
    { name: 'Export Manufacturers', icon: Ship },
    { name: 'Rice & Spice Mills', icon: Wheat },
    { name: 'Bakery & RTE', icon: Salad },
    { name: 'Cold Storage', icon: Warehouse },
    { name: 'Tea Industry', icon: Coffee },
    { name: 'Beverage', icon: GlassWater },
    { name: 'Logistics', icon: Truck },
    { name: 'Education', icon: GraduationCap },
    { name: 'IT Farms', icon: Laptop },
    { name: 'Service Orgs', icon: HandHelping },
    { name: 'Healthcare', icon: GraduationCap }
  ];

  return (
    <section id="why-us" className="pb-24 md:pb-36 bg-[#F8FAFC]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#D3211B] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Unmatched Excellence</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#A68966]">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-[#D3211B] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <r.icon size={120} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#A68966]/5 flex items-center justify-center mb-8 group-hover:bg-[#D3211B]/10 transition-colors">
                <r.icon className="w-7 h-7 text-[#D3211B]" />
              </div>
              <h3 className="text-xl font-bold text-[#A68966] group-hover:text-[#D3211B] transition-colors">{r.title}</h3>
              <p className="mt-4 text-gray-500 leading-relaxed text-sm">{r.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 grid lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#A68966] p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-bold mb-8">Specialized Expertise</h3>
            <div className="space-y-4 relative z-10">
              {expertise.map((e, i) => (
                <motion.div 
                  key={e}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 py-3 border-b border-white/10 group cursor-default"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D3211B] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#A68966]" />
                  </div>
                  <span className="font-medium group-hover:translate-x-1 transition-transform">{e}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-10 lg:pl-4">
              <h3 className="text-3xl font-bold text-[#A68966]">Industry Coverage</h3>
              <p className="mt-4 text-gray-600">Diverse experience across multiple sectors, providing tailored solutions for every industry challenge.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <motion.div 
                  key={ind.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#D3211B]/30 hover:shadow-lg transition-all group"
                >
                  <ind.icon className="w-8 h-8 text-[#A68966] group-hover:text-[#D3211B] transition-colors mb-4" />
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{ind.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-gray-200 text-center relative"
        >
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-serif text-[#A68966]/5 select-none leading-none">"</div>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-[#A68966] leading-tight relative z-10 italic">
            "Our commitment to international quality standards ensures that your organization not only <span className="text-[#D3211B]">complies but excels</span> in the global marketplace."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
