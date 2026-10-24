import React from 'react';
import { ShieldCheck, DollarSign, ThumbsUp, Phone, Star, CheckCircle2 } from 'lucide-react';

const PHONE_NUMBER = "587-377-24-52";
const PHONE_TEL = "tel:+15873772452";

export default function Hero() {
  return (
    <div id="home" className="w-full bg-[#0e1317]">
      {/* Visual Hero Banner Section */}
      <section className="relative w-full bg-[#0e1317] overflow-hidden flex flex-col items-center">
        {/* Subtle Dark Radial Atmosphere */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#121619] via-[#0e1317] to-[#0a0e11] pointer-events-none" />

        {/* Hero Visual Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto">
          <div className="w-full relative">
            <img 
              src="/hero-pristine.jpg" 
              alt="Triple Task Movers - One Team. Three Tasks. Total Satisfaction. Moving, Cleaning, Junk Removal."
              className="w-full h-auto block select-none"
              onError={(e) => {
                e.currentTarget.src = "/hero-main.jpg";
              }}
            />
          </div>
        </div>

        {/* Mobile Quick Direct Call Bar (Quote button removed as requested, clean tactile call bar) */}
        <div className="md:hidden relative z-20 w-full px-5 pt-2 pb-4">
          <a 
            href={PHONE_TEL}
            className="w-full inline-flex items-center justify-center gap-3 bg-[#141b21] hover:bg-[#1a232b] active:bg-[#202b35] text-white border border-white/15 px-4 py-3 rounded-2xl font-black text-sm tracking-wide shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all active:scale-[0.98]"
          >
            <span className="w-8 h-8 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(34,197,94,0.6)]">
              <Phone size={15} className="text-white fill-white" />
            </span>
            <span className="font-extrabold italic text-sm tracking-wider">CALL {PHONE_NUMBER}</span>
          </a>
        </div>
      </section>

      {/* Feature / Trust Bar (Explicitly Left-Aligned on mobile as requested, 3 columns on tablet/desktop) */}
      <section className="w-full bg-[#0a0e11] border-t border-b border-white/10 py-6 sm:py-7 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-start sm:items-center">
            
            {/* Feature 1: Professional You Can Trust (Left-aligned on mobile) */}
            <div className="flex items-center justify-start gap-4 w-full group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22c55e] border-2 border-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(34,197,94,0.35)] group-hover:scale-105 transition-transform duration-300">
                <ShieldCheck size={25} className="text-white stroke-[2.4]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight">
                  PROFESSIONAL
                </span>
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight mt-0.5">
                  YOU CAN TRUST
                </span>
              </div>
            </div>

            {/* Feature 2: Affordable Pricing (Left-aligned on mobile) */}
            <div className="flex items-center justify-start gap-4 w-full sm:border-x sm:border-white/15 sm:px-4 lg:px-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22c55e] border-2 border-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(34,197,94,0.35)] group-hover:scale-105 transition-transform duration-300">
                <DollarSign size={25} className="text-white stroke-[3]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight">
                  AFFORDABLE
                </span>
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight mt-0.5">
                  PRICING
                </span>
              </div>
            </div>

            {/* Feature 3: Satisfaction Guaranteed (Left-aligned on mobile) */}
            <div className="flex items-center justify-start gap-4 w-full group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22c55e] border-2 border-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(34,197,94,0.35)] group-hover:scale-105 transition-transform duration-300">
                <ThumbsUp size={23} className="text-white fill-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight">
                  SATISFACTION
                </span>
                <span className="font-black italic text-white text-base sm:text-sm md:text-base lg:text-lg tracking-wider uppercase leading-tight mt-0.5">
                  GUARANTEED
                </span>
              </div>
            </div>

          </div>

          {/* Desktop Trust Highlights Strip */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 pt-6 mt-6 border-t border-white/10 text-white/70 text-xs font-semibold tracking-wide">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold">5.0 Star Rated Local Service</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#22c55e]" />
              <span>Licensed & Fully Insured Crew</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>24/7 Availability Across Central Alberta</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
