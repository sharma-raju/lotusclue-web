import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HumanInLoop from './components/HumanInLoop';
import AiShowcase from './components/AiShowcase';
import RoiCalculator from './components/RoiCalculator';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectServiceForContact = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-pink-500 selection:text-white">
      <Navbar onOpenContact={() => handleSelectServiceForContact('')} />
      
      <main>
        <Hero onExploreServices={() => handleSelectServiceForContact('')} />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <HumanInLoop />
        <AiShowcase onSelectAiSolution={(solution) => handleSelectServiceForContact(`AI Solution (${solution})`)} />
        <RoiCalculator onClaimQuote={(info) => handleSelectServiceForContact(info)} />
        <About />
        <Faq />
        <Contact preselectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
