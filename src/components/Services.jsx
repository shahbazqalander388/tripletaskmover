import React from 'react';
import { Brush, Trash2, Truck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const PHONE_NUMBER = "587-377-24-52";
const PHONE_TEL = "tel:+15873772452";

export default function Services() {
  const services = [
    {
      title: 'Residential & Commercial Moving',
      badge: 'Core Service',
      description: 'Reliable moving solutions for apartments, houses, and business offices across Red Deer and Central Alberta.',
      icon: <Truck size={28} className="text-[#22c55e]" />,
      image: '/service-moving.png',
      features: [
        'Local Red Deer & Long Distance Moves',
        'Padded truck & heavy furniture blankets',
        'Disassembly & careful reassembly',
        'Same-day emergency moves available'
      ]
    },
    {
      title: 'Move-In & Move-Out Cleaning',
      badge: 'Deep Cleaning',
      description: 'Professional cleaning services to ensure your old or new property is sparkling clean and inspection-ready.',
      icon: <Brush size={28} className="text-[#22c55e]" />,
      image: '/service-cleaning.png',
      features: [
        'Move-in / move-out detailed cleaning',
        'Kitchen appliance & cabinet scrubbing',
        'Bathroom sanitization & polishing',
        'Eco-friendly cleaning supplies'
      ]
    },
    {
      title: 'Junk Removal & Hauling',
      badge: 'Eco Disposal',
      description: 'Quick and responsible removal of old furniture, unwanted clutter, appliances, and renovation debris.',
      icon: <Trash2 size={28} className="text-[#22c55e]" />,
      image: '/service-junk.png',
      features: [
        'Furniture, mattress & appliance haul',
        'Basement, garage & yard cleanouts',
        'Responsible recycling & donation',
        'Labor & loading included'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Recreated from User Screenshot Visual Reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-4 mb-2">
            <div className="flex items-center gap-1">
              <span className="block h-[2px] w-4 sm:w-10 bg-[#22c55e] rounded-full" />
              <span className="block h-[2px] w-2 sm:w-5 bg-[#22c55e] rounded-full" />
            </div>
            
            <h2 className="text-xl sm:text-3xl lg:text-4xl tracking-tight flex items-center gap-1.5 sm:gap-2">
              <span className="font-light italic text-slate-400">OUR</span>
              <span className="font-black italic text-slate-900 uppercase">MOVING SERVICES</span>
            </h2>

            <div className="flex items-center gap-1">
              <span className="block h-[2px] w-2 sm:w-5 bg-[#22c55e] rounded-full" />
              <span className="block h-[2px] w-4 sm:w-10 bg-[#22c55e] rounded-full" />
            </div>
          </div>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            We handle the hard work, so you can focus on what matters.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-[#22c55e] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_45px_rgba(34,197,94,0.18)] transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="h-60 sm:h-64 overflow-hidden relative border-b-2 border-slate-100 bg-slate-900">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Brand Badge */}
                <span className="absolute top-4 left-4 bg-[#22c55e] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-lg shadow-md border border-white/20">
                  {service.badge}
                </span>

                {/* Floating Emblem Icon */}
                <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-2xl shadow-[0_8px_25px_rgba(34,197,94,0.25)] border-2 border-[#22c55e] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col pt-8">
                <h3 className="text-xl font-extrabold italic text-slate-900 mb-3 group-hover:text-[#22c55e] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Features Checklist */}
                <div className="space-y-2.5 mb-8 border-t border-slate-100 pt-5 flex-1">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 size={16} className="text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Book Link */}
                <a 
                  href="#estimate" 
                  className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-[#22c55e] text-white text-sm font-bold py-3.5 px-5 rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold italic text-slate-900">
              Need a Custom or Combination Service?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Bundle moving, junk removal, and post-move cleaning together for exclusive package rates.
            </p>
          </div>
          <a 
            href={PHONE_TEL} 
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Phone size={16} className="fill-white" />
            <span>Call {PHONE_NUMBER}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
