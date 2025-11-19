import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import CaseStudySection from './components/CaseStudySection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-primary selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob filter opacity-50"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000 filter opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-blob animation-delay-4000 filter opacity-30"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <CaseStudySection />
        <WorkflowSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;