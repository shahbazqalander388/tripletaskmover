import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Navigation, 
  User, 
  Phone, 
  Mail, 
  Home, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function EstimateSection() {
  const [formData, setFormData] = useState({
    moveDate: '',
    serviceType: '1-2 Bedroom Home',
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
    
    const message = `*Free Estimate Request - Triple Task Movers*%0A
*Date:* ${formData.moveDate || 'Flexible'}%0A
*Service:* ${formData.serviceType}%0A
*Name:* ${formData.name}%0A
*Phone:* ${formData.phone}%0A
*Email:* ${formData.email || 'N/A'}%0A
*Pickup Address:* ${formData.fromAddress}%0A
*Dropoff Address:* ${formData.toAddress}`;

    const whatsappUrl = `https://wa.me/13654400188?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="estimate" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Mentioned Text Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B08D57]/10 text-[#B08D57] px-3.5 py-1.5 rounded-lg border border-[#B08D57]/20 shadow-sm">
              <ShieldCheck size={16} className="text-[#B08D57]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide">
                Top-Rated Movers in Red Deer & Area
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-slate-900 tracking-tight leading-tight">
              Moving Made <span className="text-[#B08D57]">Easy, Safe</span> & Stress-Free.
            </h2>

            {/* Subtitle / Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Trusted by hundreds of homeowners and businesses across Central Alberta. 
              We take care of every detail — from packing and heavy lifting to clean-up and transport.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <Clock size={16} className="text-[#B08D57] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <ShieldCheck size={16} className="text-[#B08D57] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">Insured Movers</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-[#B08D57] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">Zero Hidden Fees</span>
              </div>
            </div>

            {/* Trust Stats Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold italic text-slate-900">500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Successful Moves</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold italic text-[#B08D57]">4.9 / 5</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Customer Rating</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold italic text-slate-900">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">On-Time Arrival</div>
              </div>
            </div>

          </div>

          {/* Right Column: Moving Estimate Form (Placed right after the text) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-slate-200/80 relative overflow-hidden">
              
              {/* Form Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#B08D57] via-[#cba770] to-[#977647]" />

              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B08D57] mb-1">
                  <span>Fast & Free Quote</span>
                </div>
                <h3 className="text-2xl font-black italic text-slate-900 tracking-tight">
                  Free Moving Estimate
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below for an upfront, accurate estimate in minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Service Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <select 
                        name="serviceType" 
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full pl-9 pr-6 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all cursor-pointer"
                      >
                        <option>Studio Apartment</option>
                        <option>1-2 Bedroom Home</option>
                        <option>3-4 Bedroom Home</option>
                        <option>5+ Bedroom / Estate</option>
                        <option>Single Item / Small Move</option>
                        <option>Office / Commercial Move</option>
                        <option>Move-In/Out Cleaning</option>
                        <option>Junk Removal Service</option>
                        <option>Labor Only (Loading/Unloading)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Moving Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input 
                        type="date" 
                        name="moveDate" 
                        value={formData.moveDate} 
                        onChange={handleChange} 
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all placeholder:text-slate-400" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all placeholder:text-slate-400" 
                        placeholder="+1 (365) 440-0188" 
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all placeholder:text-slate-400" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                {/* Locations: Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Moving From *
                    </label>
                    <div className="relative">
                      <Navigation className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input 
                        type="text" 
                        name="fromAddress" 
                        required 
                        value={formData.fromAddress} 
                        onChange={handleChange} 
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all placeholder:text-slate-400" 
                        placeholder="Pickup address / City" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Moving To *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <input 
                        type="text" 
                        name="toAddress" 
                        required 
                        value={formData.toAddress} 
                        onChange={handleChange} 
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-[#B08D57] focus:border-[#B08D57] outline-none transition-all placeholder:text-slate-400" 
                        placeholder="Destination address" 
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full mt-2 bg-[#B08D57] hover:bg-[#977647] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get Free WhatsApp Estimate</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Privacy note */}
                <p className="text-[11px] text-center text-slate-400 font-medium">
                  Direct communication with our Red Deer dispatch team. Zero spam.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
