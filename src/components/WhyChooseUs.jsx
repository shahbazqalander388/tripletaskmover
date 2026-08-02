import React from 'react';
import { Clock, ShieldCheck, UserCheck, BadgeDollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '24/7 Availability',
      description: 'Day or night, rain or shine, we are always ready to handle your moving, cleaning, and junk removal needs.',
      icon: <Clock size={32} className="text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Clean & Sanitized',
      description: 'Our trucks are meticulously cleaned and maintained to ensure your belongings are transported safely and securely.',
      icon: <ShieldCheck size={32} className="text-white" />,
      color: 'bg-emerald-500'
    },
    {
      title: 'Professional Movers',
      description: 'Experienced, vetted, and courteous movers who know how to handle your belongings with care.',
      icon: <UserCheck size={32} className="text-white" />,
      color: 'bg-amber-500'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or unexpected charges. We provide honest, upfront quotes for all our moving and cleaning services.',
      icon: <BadgeDollarSign size={32} className="text-white" />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Best Moving Experience in Red Deer
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              We go above and beyond to ensure our customers are satisfied. From our well-maintained trucks to our professional team, Triple Task Movers sets the standard for moving and cleaning services.
            </p>
            <a href="#home" className="inline-flex bg-slate-900 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-slate-800 transition-colors">
              Book Your Service
            </a>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
            {features.map((feat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-md ${feat.color} transform group-hover:scale-110 transition-transform`}>
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
