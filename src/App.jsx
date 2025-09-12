import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* الهيدر */}
      <Header />

      {/* الهيرو */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      {/* عني */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* الخدمات */}
      <section id="services" className="min-h-screen">
        <Services />
      </section>

      {/* البورتفوليو */}
      <section id="portfolio" className="min-h-screen">
        <Portfolio />
      </section>

      {/* التواصل */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>

      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default App;
