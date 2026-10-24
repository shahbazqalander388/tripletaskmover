import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const NEW_LOGO_URL = "https://res.cloudinary.com/dai2g47e4/image/upload/v1784746169/WhatsApp_Image_2026-07-22_at_11.45.42_PM_pb3awd.jpg";
const PHONE_NUMBER = "587-377-24-52";
const PHONE_TEL = "tel:+15873772452";

export default function Footer() {
  const serviceAreas = [
    'Red Deer, and nearby communities',
    'Blackfalds',
    'Sylvan Lake',
    'Lacombe',
    'Innisfail',
    'Penhold',
    'Central Alberta'
  ];

  return (
    <footer id="contact" className="bg-[#0a0e11] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1317]/50 to-black pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#22c55e]/10 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Google Maps Card */}
        <div className="mb-16 bg-white/5 backdrop-blur-md rounded-3xl p-3 sm:p-4 border border-white/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 gap-2 mb-2 text-white">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#22c55e]" />
              <span className="font-bold italic text-sm sm:text-base">Headquarters & Service Hub: Red Deer, Alberta</span>
            </div>
            <span className="text-xs bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 rounded-md font-semibold">
              Serving Red Deer & Central Alberta
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full shadow-inner relative">
            <iframe
              title="Triple Task Movers Location"
              src="https://maps.google.com/maps?q=Red%20Deer,%20AB,%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Profile with New Logo */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all">
                <img 
                  src="/logo-badge.png" 
                  alt="Triple Task Movers Logo" 
                  className="h-full w-auto object-contain filter drop-shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = NEW_LOGO_URL;
                  }}
                />
              </div>
              <div className="text-xl font-black italic tracking-tight text-white drop-shadow-sm">
                TRIPLE TASK <span className="text-[#22c55e]">MOVERS</span>
              </div>
            </a>
            <p className="text-white/80 text-sm leading-relaxed font-medium">
              Your premier all-in-one provider for stress-free residential & commercial moves, post-move deep cleaning, and efficient junk removal across Red Deer and Central Alberta.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.tiktok.com/@triple.task.mover?_r=1&_t=ZS-98CEkqjPUhh" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#22c55e] text-white flex items-center justify-center transition-all shadow-sm" 
                title="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/tripletaskmovers?utm_source=qr" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#22c55e] text-white flex items-center justify-center transition-all shadow-sm" 
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="text-white font-black italic text-lg mb-5 flex items-center gap-2">
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-white/80">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Moving Services', href: '#services' },
                { name: 'Cleaning & Junk Removal', href: '#services' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Frequently Asked Questions', href: '#faqs' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="hover:text-[#22c55e] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight size={13} className="text-[#22c55e]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details with Updated Phone Number */}
          <div>
            <h4 className="text-white font-black italic text-lg mb-5">Contact Details</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#22c55e] mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://maps.app.goo.gl/6BaTZtDFPnMbSdKM8?g_st=ic" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/90 hover:text-white transition-colors leading-relaxed"
                >
                  Red Deer, and nearby communities
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#22c55e] flex-shrink-0" size={18} />
                <a 
                  href="mailto:Tripletaskmovers@gmail.com" 
                  className="text-white/90 hover:text-white transition-colors break-all"
                >
                  Tripletaskmovers@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#22c55e] flex-shrink-0" size={18} />
                <a 
                  href={PHONE_TEL} 
                  className="text-[#22c55e] hover:text-[#4ade80] transition-colors font-extrabold text-base tracking-wide"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#22c55e] flex-shrink-0" size={18} />
                <span className="text-white/90">
                  Available 24 Hours / 7 Days
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Rapid Booking Box */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/15 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/30 px-2.5 py-1 rounded-md text-xs font-bold mb-3">
                <span>Fast Response</span>
              </div>
              <h4 className="text-white font-extrabold italic text-lg mb-2">Need an Urgent Move?</h4>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-5">
                Our moving crew is on standby 24/7 across Red Deer. Call or request a free quote online.
              </p>
            </div>

            <div className="space-y-2.5">
              <a 
                href={PHONE_TEL}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white py-3.5 px-5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <Phone size={16} className="fill-white" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <a 
                href="mailto:Tripletaskmovers@gmail.com?subject=Rapid%20Estimate%20Request%20-%20Triple%20Task%20Movers"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-2.5 px-5 rounded-xl font-bold text-xs transition-colors"
              >
                <Mail size={15} />
                <span>Email Our Dispatch</span>
              </a>
            </div>
          </div>

        </div>

        {/* Service Areas Badge Pills */}
        <div className="pt-8 pb-10 border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-wider text-white/70 mb-3 text-center sm:text-left">
            Areas We Proudly Service Across Alberta:
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {serviceAreas.map((area, i) => (
              <span 
                key={i} 
                className="bg-white/5 hover:bg-white/10 transition-colors text-white/85 text-xs px-3 py-1 rounded-full font-medium border border-white/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/70 font-medium gap-3">
          <p>&copy; {new Date().getFullYear()} Triple Task Movers & Transport. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#22c55e]" />
              <span>Licensed & Insured</span>
            </span>
            <span>•</span>
            <span>Red Deer, Alberta</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
