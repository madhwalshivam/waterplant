import React, { useEffect, useState } from "react";
import aboutImg from "../assets/about.jpg";
import aboutBg from "../assets/worker-banner.jpg";
import CompanyInfo from "../components/CompanyInfo";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-white text-gray-800`}
    >
      {/* Banner Section with Background Image */}
      <section
        className="relative py-20 px-4  md:px-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-70"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-xl md:text-4xl font-bold text-blue-900 mb-4">
            About Hydro X Water Treatment Pvt Ltd.
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-700 text-lg md:text-xl">
            Discover who we are and how we’re transforming water treatment in India.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-xl p-8">
          {/* Left Image */}
          <div className="p-4 rounded-xl shadow-md bg-white">
            <img
              src={aboutImg}
              alt="Hydro X Team"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

     {/* Right Text */}
<div>
  <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug tracking-tight mb-4">
    Top 5 Best Effluent Treatment Plant Manufacturers in Delhi, India
  </h2>

  <p className="mb-3 text-gray-700 leading-relaxed text-[16px]">
    <strong>Hydro X Water Treatment</strong>, a pioneering force in the water treatment industry committed to delivering innovative solutions since our establishment in 2016. Founded by visionary CEO <strong>Mr. Rahul Tiwari</strong>, we have evolved into a trusted name synonymous with excellence and sustainability in water management.
  </p>

  <p className="mb-3 text-gray-700 leading-relaxed text-[16px]">
    As a privately held company, we operate under the legal status of a Private Limited entity, ensuring a focus on quality, integrity, and customer satisfaction.
  </p>

  <p className="text-gray-700 leading-relaxed text-[16px]">
    We provide cutting-edge Water Treatment Plants, high-quality Mineral Water Plants, and the revolutionary Enagic Kangen Machines.
  </p>
</div>

        </div>
      </section>

      {/* Company Factsheet */}
      <section className="text-center bg-white py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Company Factsheet
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto px-4 text-lg">
          Hydro X Water Treatment excels in advanced water purification, providing
          sustainable, efficient solutions for pristine water quality.
        </p>
      </section>

      {/* Reusable Components */}
      <CompanyInfo />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutUs;

