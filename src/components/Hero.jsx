import React, { useState } from 'react';
import { Calendar, MapPin, Navigation, User, Phone, Mail, Home } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    moveDate: '',
    moveSize: '1 Bedroom Home',
    name: '',
    email: '',
    phone: '',
    fromAddress: '',
    toAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*Free Moving Estimate Request*%0A
*Move Date:* ${formData.moveDate}%0A
*Move Size:* ${formData.moveSize}%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*From:* ${formData.fromAddress}%0A
*To:* ${formData.toAddress}`;

    const whatsappUrl = `https://wa.me/13654400188?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[750px] w-full flex items-center justify-center bg-slate-900 bg-cover bg-center overflow-hidden py-16 lg:py-0"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070')" }}
    >
      {/* Dark Overlay - 55% Opacity */}
      <div className="absolute inset-0 bg-black/55"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <h1 className="text-white font-[800] text-5xl lg:text-[76px] leading-[1.1] lg:leading-[1.05] mb-6 drop-shadow-md">
            Top-Rated Movers in Blackfalds
          </h1>
          <p className="text-[#F2F2F2] text-lg lg:text-[22px] leading-[1.6] lg:leading-[1.7] max-w-[600px] mx-auto lg:mx-0 drop-shadow">
            Experience a stress-free move with our trusted professionals. We provide premium shifting and relocation services tailored to your needs, whether local or long-distance.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[40%] max-w-[650px] bg-white rounded-[12px] p-6 lg:p-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 text-center lg:text-left">Free Moving Estimate</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Move Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="date" name="moveDate" required value={formData.moveDate} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Move Size</label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <select 
                    name="moveSize" 
                    value={formData.moveSize}
                    onChange={handleChange}
                    className="w-full pl-10 pr-8 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700 bg-white"
                  >
                    <option>Small Move / Single Items</option>
                    <option>1 Bedroom Home</option>
                    <option>2 Bedroom Home</option>
                    <option>3+ Bedroom Home</option>
                    <option>Office / Commercial</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" placeholder="John Doe" />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" placeholder="+1 (365) 000-0000" />
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" placeholder="john@example.com" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 mb-1">From Address</label>
              <div className="relative">
                <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" name="fromAddress" required value={formData.fromAddress} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" placeholder="Pickup location" />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 mb-1">To Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" name="toAddress" required value={formData.toAddress} onChange={handleChange} className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all text-slate-700" placeholder="Destination location" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#B08D57] hover:bg-[#977647] text-white font-bold text-lg py-3.5 rounded-md mt-6 shadow-md transition-all transform hover:-translate-y-0.5">
              Get Free Quote
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
