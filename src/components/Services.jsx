import React from 'react';
import { CarFront, Plane, Truck, ArrowRight, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Moving Services',
      description: 'Professional moving services for residential and commercial needs across Red Deer and nearby communities. Safe and reliable.',
      icon: <Truck size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Cleaning Services',
      description: 'Thorough cleaning services to make your space shine. We offer move-in, move-out, and general cleaning solutions.',
      icon: <CarFront size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Junk Removal',
      description: 'Efficient junk removal to declutter your space. We handle all the heavy lifting and responsible disposal.',
      icon: <Plane size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Premium Transportation Solutions</h3>
          <p className="text-lg text-slate-600">
            We provide a range of services designed to get you where you need to go safely and comfortably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full transform hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center -mt-12 relative z-20 shadow-md">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 flex-1">
                  {service.description}
                </p>
                <a href="#home" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group/link mt-auto">
                  Book Now
                  <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
