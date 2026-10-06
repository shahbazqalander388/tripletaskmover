import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer full packing and unpacking services?",
      answer: "Yes! We can provide full packing supplies (boxes, tape, bubble wrap, shrink wrap, and moving blankets) and handle the entire packing and unpacking process to keep your belongings completely protected."
    },
    {
      question: "Are your moving services truly available 24 hours a day, 7 days a week?",
      answer: "Yes, our moving, cleaning, and junk removal teams operate around the clock. Whether you need an early morning 6 AM relocation, late-night move, or weekend emergency service, we are ready to assist you across Red Deer and nearby areas."
    },
    {
      question: "What service areas and cities do you cover?",
      answer: "We primarily serve Red Deer, and nearby communities."
    },
    {
      question: "How do you calculate your rates? Are there hidden fees?",
      answer: "We believe in 100% transparent pricing. For local moving, we offer clear hourly rates with no hidden fuel or surprise staircase fees. For large cleanouts, junk haul, or long-distance moves, we provide fixed flat-rate quotes upfront."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards via mobile POS terminal, Interac e-Transfer, and cash for your convenience upon completion of the move."
    },
    {
      question: "Do you offer combined moving and move-out cleaning packages?",
      answer: "Yes! We specialize in combined packages where we move your furniture out and immediately deep clean the vacated property, saving you the hassle of hiring two different companies."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#B08D57] relative text-white overflow-hidden">
      {/* Background Subtle Ambient Patterns */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-black/20 text-white px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 border border-white/20">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about our moving process, pricing, and 24/7 availability in Red Deer.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen 
                    ? 'bg-white text-slate-900 shadow-xl border-white' 
                    : 'bg-white/95 text-slate-900 hover:bg-white border-white/40 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold italic text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#B08D57] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 bg-black/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold italic text-white">Have a specific question not listed here?</h4>
            <p className="text-sm text-white/80 mt-1">Our dispatch team is online 24/7 to answer your calls and messages immediately.</p>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="https://wa.me/13654400188"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b958] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:+13654400188"
              className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <Phone size={16} className="text-[#B08D57]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
