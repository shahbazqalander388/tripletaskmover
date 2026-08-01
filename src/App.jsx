import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <Header />
        <Navbar />
      </div>
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
