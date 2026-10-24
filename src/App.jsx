import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EstimateSection from './components/EstimateSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col selection:bg-emerald-500/20 selection:text-slate-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <EstimateSection />
        <WhyChooseUs />
        <Testimonials />
        <HowItWorks />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
