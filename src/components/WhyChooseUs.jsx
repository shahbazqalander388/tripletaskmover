import React from 'react';
import { Clock, ShieldCheck, Users, DollarSign, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '24/7 Availability & Quick Dispatch',
      description: 'Morning, evening, or weekend moves — our flexible schedule adapts to your timeline with emergency same-day booking available.',
      icon: <Clock size={24} className="text-[#B08D57]" />
    },
    {
      title: 'Equipped & Sanitized Trucks',
      description: 'Our fleet is fully equipped with moving blankets, mattress covers, floor runners, heavy-duty dollies, and safety straps.',
      icon: <ShieldCheck size={24} className="text-[#B08D57]" />
    },
    {
      title: 'Experienced & Trained Crew',
      description: 'Our background-checked professionals are trained to maneuver tight staircases, heavy furniture, and fragile goods safely.',
      icon: <Users size={24} className="text-[#B08D57]" />
    },
    {
      title: '100% Transparent Pricing',
      description: 'No hidden fuel fees, no surprise stair charges, and no fine print. Upfront pricing before any work begins.',
      icon: <DollarSign size={24} className="text-[#B08D57]" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#B08D57]/10 text-[#B08D57] px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
              <span>Why Choose Triple Task</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-slate-900 tracking-tight leading-tight">
              Built on Trust, Care & Complete Reliability
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md">
            We treat your home and possessions with the utmost respect. Discover why families and businesses across Red Deer trust us with every move.
          </p>
        </div>

        {/* Bento Grid Presentation */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Showcase Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Subtle Gold Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#B08D57]/20 blur-3xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#B08D57]/20 border border-[#B08D57]/40 flex items-center justify-center mb-6">
                <Award size={28} className="text-[#B08D57]" />
              </div>
              
              <span className="text-xs font-bold uppercase tracking-widest text-[#B08D57]">
                Triple Task Promise
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold italic text-white mt-2 mb-4 leading-tight">
                Your Belongings Are Safe With Us
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                From high-value antiques to heavy appliances, we pack and protect everything with commercial-grade materials and utmost precision.
              </p>

              <div className="space-y-3 pt-2">
                {['Zero damage track record', 'Licensed, vetted & insured team', 'Direct owner accountability'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-[#B08D57] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800">
              <a 
                href="#estimate" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#B08D57] hover:text-white transition-colors group"
              >
                <span>Request your free quote today</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feat, index) => (
              <div 
                key={index} 
                className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/70 hover:border-[#B08D57]/40 hover:shadow-[0_10px_30px_rgba(176,141,87,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#B08D57]/10 flex items-center justify-center mb-5 group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                    {React.cloneElement(feat.icon, {
                      className: 'text-[#B08D57] group-hover:text-white transition-colors duration-300'
                    })}
                  </div>

                  <h3 className="text-lg font-bold italic text-slate-900 mb-2.5">
                    {feat.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
