import React from 'react';
import { CarFront, Plane, Truck, ArrowRight, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: '24/7 Taxi Service',
      description: 'Reliable and prompt local taxi rides across Blackfalds and neighboring areas. Safe, clean, and always on time.',
      icon: <CarFront size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Airport Shuttle',
      description: 'Stress-free airport transfers. Pre-book your ride to ensure you never miss a flight. Punctual pick-up and drop-off guaranteed.',
      icon: <Plane size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Transport Services',
      description: 'Need help moving luggage or local transport solutions? We provide spacious vehicles for your belongings.',
      icon: <Truck size={40} className="text-amber-500" />,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const additionalServices = [
    "House Shifting",
    "Home Relocation",
    "Office Relocation",
    "Packers and Movers",
    "Furniture Moving",
    "Loading and Unloading",
    "Local Moving",
    "Intercity Moving",
    "Long Distance Moving",
    "Commercial Moving",
    "Residential Moving",
    "Storage and Warehousing",
    "Packing Services",
    "Unpacking Services",
    "Vehicle Transportation",
    "Logistics and Relocation Services"
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

        {/* Additional Services List */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Complete Moving & Relocation Services</h3>
            <p className="text-slate-600 mt-3 text-lg">Comprehensive logistics and moving solutions tailored for every kind of move.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group">
                <Package className="text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-slate-700 font-medium group-hover:text-amber-700 transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
