import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import SewageSlider from '../components/SewageSlider';

import bottlingImg from '../assets/s1.jpg';
import bImage from '../assets/b.jpg';
import imgWastewater from '../assets/Sewage-Treatment.jpg';
import imgWastewater1 from '../assets/Effluent-Treatment.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const SewageTreatmentPage = () => (
  <div className="font-sans antialiased text-gray-800 bg-gray-100">
   
 <section
                      className="bg-center bg-cover h-48 flex items-center justify-center text-white"
                      style={{ backgroundImage: `url(${bImage})` }}
                    >
                      <motion.h1
                        className="text-2xl md:text-4xl font-bold z-10 px-4 py-2 rounded-lg"
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                      >
                         Sewage Treatment Plant Manufacturers
                      </motion.h1>
                    </section>
    {/* Section 1 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Get Premium Products Directly from Top Sewage Treatment Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hydro X Water Treatment Pvt. Ltd. offers reliable and advanced sewage treatment solutions for industries and municipalities. As a top manufacturer in Delhi, we design eco-friendly, high-capacity systems that ensure efficient treatment, water reuse, and long-term cost savings.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Filtration:</strong> Highly efficient filtration processes that produce cleaner treated water.</li>
              <li><strong>Custom Solutions:</strong> Tailored to meet the specific requirements of each client.</li>
              <li><strong>Environmentally Friendly:</strong> Reduces pollutants and promotes eco-sustainability.</li>
              <li><strong>Low Maintenance:</strong> Designed for minimal maintenance and operational ease.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="Sewage Treatment Plant"
              className="rounded-xl shadow-2xl w-full max-w-[500px] h-[350px] object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 2 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Us for Sewage Treatment Solutions in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Utilizing the latest technology, we ensure that our sewage treatment plants are highly effective and energy-efficient. Our systems help clients meet Delhi's water treatment standards while reducing operating costs.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Local Expertise:</strong> Knowledge of regional water challenges.</li>
            <li><strong>High Efficiency:</strong> Designed to save energy and maximize output.</li>
            <li><strong>Regulatory Compliance:</strong> Built to meet local regulations.</li>
            <li><strong>Fast Installation:</strong> Quick setup and minimal downtime.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Meet National Demand for Sewage Treatment?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We deliver scalable, high-performance sewage treatment plants across India — from industries to municipalities and residential sectors.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Pan India Reach:</strong> Timely delivery and installation across the country.</li>
            <li><strong>Multi-Site Use:</strong> Suitable for industrial, residential, and civic applications.</li>
            <li><strong>Expert Assistance:</strong> From consultation to maintenance.</li>
            <li><strong>Cost Efficient:</strong> Reduces operational costs and water waste.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Are We Expanding Globally?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our export-quality systems meet global standards and are trusted worldwide. From shipment to setup, we ensure smooth international installations.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Compliance:</strong> Meets international water treatment norms.</li>
            <li><strong>Custom Designs:</strong> Regional customization available.</li>
            <li><strong>Fast Delivery:</strong> Timely logistics and setup support.</li>
            <li><strong>Durability:</strong> Built to withstand tough global environments.</li>
          </ul>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link to="/contact" className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Get Best Quote
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
              Request a Callback
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Slider Section */}
    <SewageSlider />

    {/* Category Range Slider */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          All Category Range
        </motion.h2>

        <Slider {...sliderSettings}>
          {/* Sewage Treatment Plant */}
          <div className="px-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img
                src={imgWastewater}
                alt="Sewage Treatment Plant"
                className="w-full h-64 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sewage Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced STPs built to minimize environmental impact and promote water reuse.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Best Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Effluent Treatment Plant */}
          <div className="px-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img
                src={imgWastewater1}
                alt="Effluent Treatment Plant"
                className="w-full h-64 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Effluent Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                High-quality effluent treatment for industrial use with efficient recycling systems.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Best Quote
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>

    <Testimonials />
    <Footer />
  </div>
);

export default SewageTreatmentPage;

