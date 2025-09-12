import React from "react";
import HeroImage1 from "../assets/DSC3.jpg";
import HeroImage2 from "../assets/DSC.jpg";
import HeroImage3 from "../assets/DSC4.jpg";
import HeroImage4 from "../assets/IMG_7963.jpg";
import herobg from "../assets/DSC2.jpg";
import { motion } from "framer-motion";

function Hero() {
  const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];

  // إعدادات الحاوية للـ stagger animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // إعدادات الصور الفردية
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center mt-20 lg:mt-0"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* المحتوى فوق الـ overlay */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between text-white h-full gap-10">
        
        {/* النص */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-orange-950">
            Haylo
          </h1>
          <p className="text-sm mb-6 text-amber-950">
            My brand Haylo is my statement of intent. It carries what I stand for, my values, my determination,
            my passion and my development of management, marketing and sales. I consistently develop my knowledge
            through higher education papers and surrounding myself with a network of high achievers in business,
            marketing and sales. Overall the journey of building Haylo has contributed immeasurable personnel
            development that I have identified clear business philosophies and objectives which will ensure your business success.
          </p>
        </div>

        {/* الصور مع انيميشن */}
        <motion.div
          className="flex flex-wrap justify-center lg:justify-end gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-50 h-50 object-cover bg-center rounded-xl shadow-lg"
              variants={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
