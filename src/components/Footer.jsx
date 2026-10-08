import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Red Deer, and nearby communities'
  ];

  return (
    <footer id="contact" className="bg-[#B08D57] text-white pt-20 pb-10 relative overflow-hidden border-t border-[#977647]/50">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Google Maps Card */}
        <div className="mb-16 bg-white/10 backdrop-blur-md rounded-3xl p-3 sm:p-4 border border-white/25 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 gap-2 mb-2 text-white">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              <span className="font-bold italic text-sm sm:text-base">Headquarters & Service Hub: Red Deer, Alberta</span>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-md font-semibold">
              Serving Red Deer, and nearby communities
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
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <a href="#home" className="inline-block text-2xl font-black italic tracking-tight text-white drop-shadow-sm">
              TRIPLE TASK <span className="text-amber-950">MOVERS</span>
            </a>
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              Your premier all-in-one provider for stress-free residential & commercial moves, post-move deep cleaning, and efficient junk removal across Red Deer and Central Alberta.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://www.tiktok.com/@triple.task.mover?_r=1&_t=ZS-98CEkqjPUhh" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl bg-black/25 hover:bg-white hover:text-[#B08D57] flex items-center justify-center transition-all shadow-sm" 
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
                className="w-10 h-10 rounded-xl bg-black/25 hover:bg-white hover:text-[#B08D57] flex items-center justify-center transition-all shadow-sm" 
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
            <ul className="space-y-2.5 text-sm font-semibold text-white/90">
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
                    className="hover:text-amber-950 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight size={13} className="text-white/60" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="text-white font-black italic text-lg mb-5">Contact Details</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-950 mt-1 flex-shrink-0" size={18} />
                <a 
                  href="https://maps.app.goo.gl/6BaTZtDFPnMbSdKM8?g_st=ic" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/95 hover:text-amber-950 transition-colors leading-relaxed"
                >
                  Red Deer, and nearby communities
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-950 flex-shrink-0" size={18} />
                <a 
                  href="mailto:Tripletaskmovers@gmail.com" 
                  className="text-white/95 hover:text-amber-950 transition-colors break-all"
                >
                  Tripletaskmovers@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-950 flex-shrink-0" size={18} />
                <a 
                  href="tel:+13654400188" 
                  className="text-white/95 hover:text-amber-950 transition-colors font-bold text-base"
                >
                  +1 (365) 440-0188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-amber-950 flex-shrink-0" size={18} />
                <span className="text-white/95">
                  Available 24 Hours / 7 Days
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Rapid Booking Box */}
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white border border-white/30 px-2.5 py-1 rounded-md text-xs font-bold mb-3">
                <span>Fast Response</span>
              </div>
              <h4 className="text-white font-extrabold italic text-lg mb-2">Email for Fast Quote</h4>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-5">
                Need urgent assistance or an immediate quote? Send us your move details or photos directly via email.
              </p>
            </div>

            <a 
              href="mailto:Tripletaskmovers@gmail.com?subject=Rapid%20Estimate%20Request%20-%20Triple%20Task%20Movers"
              className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 py-3.5 px-5 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Mail size={18} className="text-[#B08D57]" />
              <span>Email Our Dispatch</span>
            </a>
          </div>

        </div>

        {/* Service Areas Badge Pills */}
        <div className="pt-8 pb-10 border-t border-white/20">
          <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 text-center sm:text-left">
            Areas We Proudly Service Across Alberta:
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {serviceAreas.map((area, i) => (
              <span 
                key={i} 
                className="bg-white/10 hover:bg-white/20 transition-colors text-white text-xs px-3 py-1 rounded-full font-medium border border-white/15"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-xs text-white/80 font-medium gap-3">
          <p>&copy; {new Date().getFullYear()} Triple Task Movers & Transport. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-white" />
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
