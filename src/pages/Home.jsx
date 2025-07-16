import React, { useEffect, useState } from "react";
import img1 from "../assets/Sewage1.jpg";
import img2 from "../assets/s.jpg";
import img3 from "../assets/s1.jpg";
import Footer from "../components/Footer";
import SewageFeatures from "../components/SewageFeatures";
import ReadMoreButton from "../components/ReadMoreButton";
import CompanyInfo from "../components/CompanyInfo";
import PopularProducts from "../components/PopularProducts";
import Testimonials from "../components/Testimonials";
import ProductHighlights from "../components/Product";

const slides = [
  {
    image: img1,
    heading: "WATER TREATMENT PLANTS",
    subtext: "Transforming Every Drop with Our Advanced Water Treatment Plants!",
  },
  {
    image: img2,
    heading: "SEWAGE TREATMENT SOLUTIONS",
    subtext: "Clean Water. Clean Future. Reliable Sewage Technologies You Can Trust.",
  },
  {
    image: img3,
    heading: "WASTE WATER MANAGEMENT",
    subtext: "Turning Wastewater into Worth — Sustainably & Smartly.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Slider Section with pt-16 to offset navbar height */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-6 text-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide drop-shadow-md mb-4">
                {slide.heading}
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl drop-shadow">
                {slide.subtext}
              </p>
            </div> */}
          </div>
        ))}
      </div>

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
      {/* Remaining Components */}
      <ProductHighlights/>
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
