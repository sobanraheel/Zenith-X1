
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Promo Banner */}
      <div className="bg-indigo-600 text-white text-center py-2 px-4 text-xs font-bold tracking-wide">
        FREE WORLDWIDE SHIPPING ON ALL ORDERS OVER $200
      </div>
      
      <Navbar cartCount={cartCount} />
      
      <main className="flex-grow">
        {/* Main Product Section */}
        <section id="product" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <ProductHero onAddToCart={handleAddToCart} />
        </section>
        
        {/* Features Section */}
        <section id="features" className="bg-slate-50 py-24">
          <Features />
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="bg-white py-24">
          <Testimonials />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-24 border-t border-slate-100">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
