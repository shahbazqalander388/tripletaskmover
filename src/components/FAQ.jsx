import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you offer packing services?",
      answer: "Yes, we offer full packing and unpacking services to ensure your items are safely transported."
    },
    {
      question: "Are you really open 24 hours a day?",
      answer: "Yes, our moving, cleaning and junk removal services operate 24/7. Whether it's 2 PM or 2 AM, you can count on Triple Task Movers to be available in Red Deer and the surrounding areas."
    },
    {
      question: "What areas do you cover?",
      answer: "We primarily serve Red Deer, AB and the surrounding regions. If you need a long-distance move (e.g., to Calgary or Edmonton), please contact us for a free estimate."
    },
    {
      question: "How do you calculate your pricing?",
      answer: "We believe in transparent pricing. For local moves, we use an hourly rate. For large cleanouts or long-distance moves, we can provide a fixed flat-rate quote upfront so there are no surprises."
    },
    {
      question: "Do you accept card payments?",
      answer: "Yes, our team carries POS terminals. We accept all major credit/debit cards, as well as cash and digital payments for your convenience."
    }
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#B08D57]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-amber-900 font-bold tracking-wide uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${openIndex === index ? 'bg-white shadow-md' : 'bg-white/95 hover:bg-white'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#B08D57] flex-shrink-0 ml-4" size={24} />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" size={24} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
