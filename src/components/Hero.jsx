import React from 'react';
import { ArrowDown, Phone, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[600px] lg:min-h-[700px] w-full flex items-center justify-center bg-slate-950 overflow-hidden py-12 lg:py-20"
    >
      {/* Background Graphic & Accent Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900" />
        {/* Warm Golden Glows matching #B08D57 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[45rem] h-[30rem] rounded-full bg-[#B08D57]/20 blur-[140px] pointer-events-none" />
      </div>

      {/* Front Hero Content: Official Logo Showcase */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main Logo Image Displayed in Front */}
        <div className="relative group max-w-[340px] sm:max-w-[460px] lg:max-w-[520px] w-full mb-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#B08D57] via-[#cba770] to-[#977647] rounded-3xl opacity-40 blur-xl group-hover:opacity-60 transition duration-500"></div>
          
          <div className="relative bg-white rounded-3xl p-3 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 border-[#B08D57]/50 overflow-hidden">
            <img 
              src="/icon-512.png" 
              alt="Triple Task Movers - Moving, Cleaning & Junk Removal" 
              className="w-full h-auto object-contain rounded-2xl shadow-inner transform hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "https://res.cloudinary.com/dai2g47e4/image/upload/v1784754839/WhatsApp_Image_2026-07-23_at_1.52.49_AM_cdyvk3.jpg";
              }}
            />
          </div>
        </div>

        {/* Quick Actions & Subtitle */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          <a 
            href="#estimate"
            className="inline-flex items-center gap-2 bg-[#B08D57] hover:bg-[#977647] text-white px-6 sm:px-8 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Free Estimate</span>
            <ArrowDown size={18} />
          </a>

          <a 
            href="tel:+13654400188"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <Phone size={18} className="text-[#B08D57]" />
            <span>+1 (365) 440-0188</span>
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-300 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-[#B08D57]" />
            <span>Licensed & Insured</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-[#B08D57]" />
            <span>24/7 Red Deer & Central Alberta</span>
          </div>
        </div>

      </div>
    </section>
  );
}
