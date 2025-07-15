import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import imgWastewater from '../assets/Sewage-Treatment.jpg';
import imgWastewater1 from '../assets/Effluent-Treatment.jpg';
import Footer from '../components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from '../components/Testimonials';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
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

const  WastewaterTreatmentPage = () => (
  <div className="font-sans antialiased text-gray-800 bg-gray-100">
    <section className="bg-cover bg-center h-24 flex items-center justify-center text-white relative">
               <div className="absolute inset-0 bg-blue-900"></div>
               <motion.h1
                 className="text-2xl md:text-4xl font-bold z-10 px-4 py-2 rounded-lg"
                 initial="hidden"
                 animate="visible"
                 variants={fadeIn}
               >
                  Wastewater Treatment Plant Manufacturers
               </motion.h1>
             </section>
    {/* Why Wastewater Treatment Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              How Can We Help You Manage Wastewater Efficiently?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Hydro X Water Treatment Pvt. Ltd.</strong>, a leading wastewater treatment plant manufacturer in Delhi, we design advanced systems for effective wastewater treatment and recycling, ensuring eco-friendly solutions for industries.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Filtration:</strong> Cutting-edge technology for clean, safe water.</li>
              <li><strong>Tailored Solutions:</strong> Industry-specific systems for optimal performance.</li>
              <li><strong>Eco-Friendly Operations:</strong> Low energy consumption for sustainability.</li>
              <li><strong>Durable Design:</strong> Built to withstand challenging conditions.</li>
            </ul>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex justify-center"
          >
            <img
              src={imgWastewater}
              alt="Wastewater Treatment Plant"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Delhi Needs Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Why Are We Your Choice for Wastewater Treatment in Delhi?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our wastewater treatment plants are customized to meet Delhi’s industrial needs, ensuring compliance with local regulations and offering cost-effective, sustainable solutions.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Local Expertise:</strong> Tailored for Delhi’s water treatment challenges.</li>
            <li><strong>Regulatory Compliance:</strong> Meets all local wastewater standards.</li>
            <li><strong>Economical Operation:</strong> High performance with low operating costs.</li>
            <li><strong>Rapid Installation:</strong> Quick setup to minimize downtime.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* National Market Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Serving the National Market
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of the best industrial wastewater treatment plant suppliers in India, we provide efficient, scalable solutions for industries like textiles, pharmaceuticals, and manufacturing.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>All India Coverage:</strong> Timely delivery through a robust supply chain.</li>
            <li><strong>Scalable Solutions:</strong> Suitable for small to large-scale operations.</li>
            <li><strong>Comprehensive Service:</strong> Full lifecycle support, including installation and maintenance.</li>
            <li><strong>Cost-Effective:</strong> High ROI with energy-efficient systems.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Global Reach Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Expanding Our Reach Globally
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As leading exporters of industrial wastewater treatment plants in India, we deliver state-of-the-art systems meeting global environmental standards to industries worldwide.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Compliance:</strong> Meets international environmental and safety standards.</li>
            <li><strong>International Reach:</strong> Exported to countries worldwide.</li>
            <li><strong>Tailored for Global Needs:</strong> Customized for diverse water treatment challenges.</li>
            <li><strong>Efficient Delivery:</strong> Fast and reliable export process.</li>
          </ul>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              aria-label="Get a quote for wastewater treatment plants"
            >
              Get Best Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300"
              aria-label="Request a callback for wastewater treatment plants"
            >
              Request a Callback
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* All Category Range Slider */}
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
          <motion.div
            className="px-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img
                src={imgWastewater}
                alt="Sewage Treatment Plant"
                className="w-full h-64 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sewage Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hydro X Water Treatment Pvt. Ltd. specializes in advanced sewage treatment plants for industries and municipalities, ensuring efficient treatment with minimal environmental impact and promoting water reuse.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Get a quote for Sewage Treatment Plant"
                >
                  Get Best Quote
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Effluent Treatment Plant */}
          <motion.div
            className="px-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img
                src={imgWastewater1}
                alt="Effluent Treatment Plant"
                className="w-full h-64 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Effluent Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our high-quality effluent treatment plants are designed for industrial sectors, effectively treating and recycling effluent water to meet environmental regulations and enhance sustainability.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Get a quote for Effluent Treatment Plant"
                >
                  Get Best Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </Slider>
      </div>
    </section>
    <Testimonials/>
    <Footer />
  </div>
);

export default WastewaterTreatmentPage;

