import React, { useState } from 'react';
import { CheckCircle2, Calendar, MapPin, Navigation, User, Phone } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    serviceType: 'Taxi',
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    datetime: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Booking Request*%0A
*Service Type:* ${formData.serviceType}%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Pickup:* ${formData.pickup}%0A
*Dropoff:* ${formData.dropoff}%0A
*Date & Time:* ${formData.datetime.replace('T', ' ')}`;

    const whatsappUrl = `https://wa.me/13654400188?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative bg-slate-900 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-sm mb-6 border border-amber-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              24/7 Available in Blackfalds & Surrounding Areas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Top-Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">24/7 Taxi</span>,<br />
              Airport Shuttle &<br />
              Transport Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 font-light">
              Experience safe, reliable, and prompt transportation solutions. Whether it's a quick city ride, an airport drop-off, or moving luggage, Triple Task Movers has you covered.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Clean & Sanitized Vehicles', 'Professional & Vetted Drivers', 'On-Time Guarantee Always'].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-500" size={24} />
                  <span className="text-lg font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Ride</h3>
            <p className="text-slate-500 mb-6 text-sm">Fill out the form below for a quick estimate or to pre-book.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                <select 
                  name="serviceType" 
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full pl-3 pr-10 py-2.5 text-base border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-lg border bg-slate-50"
                >
                  <option>Taxi Service</option>
                  <option>Airport Shuttle</option>
                  <option>Transport / Luggage</option>
                  <option>House Shifting</option>
                  <option>Home Relocation</option>
                  <option>Office Relocation</option>
                  <option>Packers and Movers</option>
                  <option>Furniture Moving</option>
                  <option>Loading and Unloading</option>
                  <option>Local Moving</option>
                  <option>Intercity Moving</option>
                  <option>Long Distance Moving</option>
                  <option>Commercial Moving</option>
                  <option>Residential Moving</option>
                  <option>Storage and Warehousing</option>
                  <option>Packing Services</option>
                  <option>Unpacking Services</option>
                  <option>Vehicle Transportation</option>
                  <option>Logistics and Relocation Services</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="+1 (365) 000-0000" />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location</label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" name="pickup" required value={formData.pickup} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter pickup address" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Dropoff Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" name="dropoff" required value={formData.dropoff} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter dropoff address" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Date & Time</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="datetime-local" name="datetime" required value={formData.datetime} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                </div>
              </div>

              <button type="submit" className="w-full bg-amber-500 text-slate-900 font-bold text-lg py-3 rounded-lg mt-4 shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Get Estimate / Pre-Book
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
