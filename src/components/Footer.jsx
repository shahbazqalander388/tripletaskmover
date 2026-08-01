import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#B08D57] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Embed */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 w-full border-4 border-white/20">
          <iframe
            title="Triple Task Movers Location"
            src="https://maps.google.com/maps?q=Red%20Deer,%20AB,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Bio */}
          <div>
            <a href="#home" className="inline-block text-2xl font-extrabold tracking-tight text-white mb-6 drop-shadow-sm">
              TRIPLE TASK <span className="text-amber-900">MOVERS</span>
            </a>
            <p className="text-white/90 mb-6 leading-relaxed font-medium">
              Your trusted partner for moving, cleaning, and junk removal services in Red Deer and nearby communities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@triple.task.mover?_r=1&_t=ZS-98CEkqjPUhh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center hover:bg-white hover:text-[#B08D57] transition-colors shadow-sm" title="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="https://www.instagram.com/tripletaskmovers?utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center hover:bg-white hover:text-[#B08D57] transition-colors shadow-sm" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6 drop-shadow-sm">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              {['Home', 'Services', 'Why Choose Us', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/90 hover:text-amber-900 transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6 drop-shadow-sm">Contact Us</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-900 mt-1 flex-shrink-0" size={20} />
                <a href="https://maps.app.goo.gl/6BaTZtDFPnMbSdKM8?g_st=ic" target="_blank" rel="noreferrer" className="text-white/90 hover:text-amber-900 transition-colors">
                  Red Deer,<br />
                  and nearby communities
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-900 flex-shrink-0" size={20} />
                <a href="mailto:Tripletaskmovers@gmail.com" className="text-white/90 hover:text-amber-900 transition-colors">
                  Tripletaskmovers@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-900 flex-shrink-0" size={20} />
                <a href="tel:+13654400188" className="text-white/90 hover:text-amber-900 transition-colors">
                  +1 (365) 440-0188
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp / CTA */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-6 drop-shadow-sm">Available 24/7</h4>
            <p className="text-white/90 mb-6 font-medium">Need a ride right now? Reach out to us directly on WhatsApp for instant booking.</p>
            <a 
              href="https://wa.me/13654400188"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#20b958] transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/80 text-sm flex flex-col md:flex-row justify-between items-center font-medium">
          <p>&copy; {new Date().getFullYear()} Triple Task Movers & Transport. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for reliability.</p>
        </div>
      </div>
    </footer>
  );
}
