import React from 'react';
import { Clock, ShieldCheck, UserCheck, BadgeDollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '24/7 Availability',
      description: 'Day or night, rain or shine, we are always ready to take you to your destination safely.',
      icon: <Clock size={32} className="text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Clean & Sanitized',
      description: 'Our fleet is meticulously cleaned and maintained to ensure a comfortable and safe ride for every passenger.',
      icon: <ShieldCheck size={32} className="text-white" />,
      color: 'bg-emerald-500'
    },
    {
      title: 'Professional Drivers',
      description: 'Experienced, vetted, and courteous drivers who know the local routes to get you there on time.',
      icon: <UserCheck size={32} className="text-white" />,
      color: 'bg-amber-500'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surge surprises. We offer honest, upfront pricing for all our services.',
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
              We go above and beyond to ensure our customers are satisfied. From our well-maintained vehicles to our professional team, Triple Task Movers sets the standard for transportation.
            </p>
            <a href="#home" className="inline-flex bg-slate-900 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-slate-800 transition-colors">
              Pre-Book Your Ride
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
