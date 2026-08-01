import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Can I pre-book a ride for an early morning airport drop-off?",
      answer: "Yes, absolutely! We highly encourage pre-booking for airport shuttles to guarantee your driver is there right on time. You can book days or even weeks in advance."
    },
    {
      question: "Are you really open 24 hours a day?",
      answer: "Yes, our taxi and transport services operate 24/7. Whether it's 2 PM or 2 AM, you can count on Triple Task Movers to be available in Blackfalds and the surrounding areas."
    },
    {
      question: "What areas do you cover?",
      answer: "We primarily serve Blackfalds, AB and the surrounding regions. If you need a long-distance transport or airport run (e.g., to Calgary or Edmonton), please contact us for a free estimate."
    },
    {
      question: "How do you calculate your pricing?",
      answer: "We believe in transparent pricing. For local rides, we use a standard metered rate. For long-distance trips or transport services, we can provide a fixed flat-rate quote upfront so there are no surprises."
    },
    {
      question: "Do you accept card payments?",
      answer: "Yes, our drivers carry POS terminals. We accept all major credit/debit cards, as well as cash and digital payments for your convenience."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-900 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-800' : 'bg-slate-900 hover:bg-slate-800/50'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-amber-500 flex-shrink-0 ml-4" size={24} />
                ) : (
                  <ChevronDown className="text-slate-500 flex-shrink-0 ml-4" size={24} />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
