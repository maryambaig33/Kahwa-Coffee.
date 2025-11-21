import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AiBarista from './components/AiBarista';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-coffee-200 selection:text-coffee-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <AiBarista />
      </main>
      <Footer />
    </div>
  );
};

export default App;