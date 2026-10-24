import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Michael R.',
      location: 'Red Deer, AB',
      service: '3 Bedroom Home Move',
      rating: 5,
      comment: 'Triple Task Movers made our move completely painless. The crew was polite, punctual, and wrapped our furniture with extraordinary care. No scratches, zero hidden charges. Highly recommend them!',
      date: '2 weeks ago'
    },
    {
      name: 'Sarah Jenkins',
      location: 'Blackfalds, AB',
      service: 'Apartment Move & Deep Cleaning',
      rating: 5,
      comment: 'I booked both their moving and move-out cleaning bundle. They left my old rental spotless for the final walkthrough and moved everything into my new place in record time. Saved me so much stress!',
      date: '1 month ago'
    },
    {
      name: 'David Tremblay',
      location: 'Sylvan Lake, AB',
      service: 'Commercial Office & Junk Haul',
      rating: 5,
      comment: 'We needed our commercial office relocated over the weekend, plus disposal of old desks. They showed up early with a clean truck and worked non-stop until the job was done. 5 stars all around!',
      date: '3 weeks ago'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#22c55e]/10 text-[#16a34a] px-3.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp size={13} className="text-[#22c55e]" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-slate-900 tracking-tight leading-tight mb-4">
            Loved by Homeowners Across Red Deer
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See what our clients have to say about our moving, cleaning, and junk removal services in Central Alberta.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(34,197,94,0.12)] hover:border-[#22c55e]/40 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Rating stars & Quote mark */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400" />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center group-hover:bg-[#22c55e] transition-colors duration-300">
                    <Quote size={20} className="text-[#22c55e] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm sm:text-base">
                    <span>{rev.name}</span>
                    <CheckCircle2 size={15} className="text-[#22c55e]" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{rev.location}</div>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-[#22c55e]/10 text-[#16a34a] text-[11px] font-bold px-3 py-1 rounded-full border border-[#22c55e]/20">
                    {rev.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary pill */}
        <div className="mt-14 max-w-xl mx-auto text-center bg-white rounded-2xl py-4 px-6 border border-slate-200/80 shadow-sm flex items-center justify-center gap-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400" />
            ))}
          </div>
          <span className="text-slate-800 text-xs sm:text-sm font-bold">
            Rated 4.9/5 by 120+ happy Central Alberta clients
          </span>
        </div>

      </div>
    </section>
  );
}
