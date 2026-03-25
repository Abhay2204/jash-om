export default function TrustStrip() {
  const certifications = ['ISO 22000', 'FSSC 22000', 'HACCP', 'BRCGS', 'ISO 9001', 'ISO 14001', 'HALAL', 'SEDEX'];
  return (
    <section className="py-6 bg-[#A68966] overflow-hidden border-t-8 border-[#D3211B]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
      <div className="animate-marquee items-center gap-16 md:gap-32 pr-16 md:pr-32">
        {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, i) => (
          <span key={i} className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest whitespace-nowrap shrink-0">
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
