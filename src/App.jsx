import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EstimateSection from './components/EstimateSection';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col selection:bg-[#B08D57]/20 selection:text-slate-900">
      <Header />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <EstimateSection />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}


export default App;
