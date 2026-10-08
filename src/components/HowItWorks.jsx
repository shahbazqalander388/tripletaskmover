import React from 'react';
import { FileText, CalendarCheck, Truck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Request a Free Quote',
      description: 'Fill out our quick estimate form or email us directly with your move dates, items, and locations.',
      icon: <FileText size={26} className="text-[#B08D57]" />
    },
    {
      step: '02',
      title: 'Confirm & Schedule',
      description: 'Receive an upfront, transparent quote with zero hidden charges. Choose a convenient time slot that fits your schedule.',
      icon: <CalendarCheck size={26} className="text-[#B08D57]" />
    },
    {
      step: '03',
      title: 'Sit Back & We Handle It',
      description: 'Our punctual, professional crew arrives equipped to protect, pack, load, transport, and unpack your belongings securely.',
      icon: <Truck size={26} className="text-[#B08D57]" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#B08D57]/10 text-[#B08D57] px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-slate-900 tracking-tight mb-4">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We've eliminated the typical moving stress with a streamlined, transparent 3-step moving experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-[#B08D57]/50 hover:bg-white hover:shadow-[0_12px_30px_rgba(176,141,87,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Watermark */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/15 flex items-center justify-center group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(item.icon, {
                    className: 'text-[#B08D57] group-hover:text-white transition-colors duration-300'
                  })}
                </div>
                <span className="text-3xl sm:text-4xl font-black italic text-slate-300 group-hover:text-[#B08D57]/40 transition-colors">
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold italic text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#B08D57] uppercase tracking-wider">
                <span>Step {item.step}</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-14 text-center">
          <a 
            href="#estimate"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#B08D57] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Step 1: Get Your Free Estimate</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
