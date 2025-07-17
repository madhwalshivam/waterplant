import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 Import Link from React Router

import img1 from "../assets/s.jpg";
import img1Mob from "../assets/sm-1.jpg";
import img2 from "../assets/ban1.jpg";
import img2Mob from "../assets/sm-2.jpg";
import img3 from "../assets/wws.jpg";
import img3Mob from "../assets/sm-3.jpg";

import Footer from "../components/Footer";
import SewageFeatures from "../components/SewageFeatures";
import ReadMoreButton from "../components/ReadMoreButton";
import CompanyInfo from "../components/CompanyInfo";
import PopularProducts from "../components/PopularProducts";
import Testimonials from "../components/Testimonials";
import ProductHighlights from "../components/Product";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { desktop: img1, mobile: img1Mob },
    { desktop: img2, mobile: img2Mob },
    { desktop: img3, mobile: img3Mob },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      {isMobile ? (
        // 📱 Mobile: Image inside card
        <div className="w-full px-4 py-6 flex justify-center bg-gray-100">
          <Link to="/contact" className="max-w-sm w-full overflow-hidden shadow-lg bg-white">
            <img
              src={slides[current].mobile}
              alt={`Slide ${current}`}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>
      ) : (
        // 🖥 Desktop: Fullscreen background slider
        <div className="relative w-full h-screen overflow-hidden">
          {slides.map((slide, index) => (
            <Link
              to="/contact"
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.desktop}
                alt={`Slide ${index}`}
                className="w-full h-screen object-cover"
              />
            </Link>
          ))}
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Hydro X?
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Here’s why we are trusted by industries and institutions across India.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Premium Quality Standards",
              desc: "Our systems are engineered with unmatched precision to meet international benchmarks.",
            },
            {
              title: "Domain Expertise",
              desc: "Decades of hands-on experience in complex water treatment technologies and compliance.",
            },
            {
              title: "Simplified Visual Communication",
              desc: "Well-documented with illustrations for clarity, even in technical workflows.",
            },
            {
              title: "Extensive Product Range",
              desc: "From RO to STP – find every solution under one roof, with end-to-end integration.",
            },
            {
              title: "Robust Warranty & Service",
              desc: "All installations come with extensive coverage and prompt support for peace of mind.",
            },
            {
              title: "On-Time Project Delivery",
              desc: "We adhere to strict timelines without compromising on quality and safety.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <ProductHighlights />
      <SewageFeatures />
      <ReadMoreButton />
      <CompanyInfo />
      <PopularProducts />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
