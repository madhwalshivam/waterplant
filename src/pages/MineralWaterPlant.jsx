import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bottlingImg from '../assets/machine.jpg'; 
import CategorySliderPage from '../components/WaterProducts';
import Testimonials from '../components/Testimonials';
import bImage from '../assets/b.jpg';
import MineralSlider from '../components/MineralSlider';
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const MineralWaterPlant = () => (
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
            Mineral Water Plant Manufacturers
          </motion.h1>
        </section>
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
              Get Premium Products Directly from Top Mineral Water Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro</strong> specializes in providing advanced solutions where clean, safe, mineral-rich water is available and assured. As one of the Top Mineral Water Plant Manufacturers in Delhi, we take pride in designing innovative systems that match the most efficient and environmentally friendly requirements. Whether in industry, commercial, or domestic use, our plants cater to the highest standards and quality assurance so that one drop of water is made in nature's purest mold.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Filtration Technology:</strong> Effectively removes contaminants while preserving essential minerals.</li>
              <li><strong>Customizable Designs:</strong> Flexible configurations to meet diverse water treatment needs.</li>
              <li><strong>Energy-Efficient Operations:</strong> Optimized systems that reduce power consumption and costs.</li>
              <li><strong>Robust Durability:</strong> Built with high-quality materials for long-term performance.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="Mineral Water Plant"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Are We the Best Choice in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Delhi's unique water problems require specific solutions, which we deliver with precision. Our Top Mineral Water Plant in Delhi caters to the specific needs of the metropolis. Combining advanced technology with practical design solutions, we deliver compact, reliable, and easy-to-operate solutions. Businesses and communities rely on our experience for consistent high-quality mineral water.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Space-Saving Designs:</strong> Suitable for urban environments where space is limited.</li>
            <li><strong>Efficient Installation:</strong> Rapid installation by experts with minimum inconvenience.</li>
            <li><strong>User-Friendly Features:</strong> Easy to operate and has low maintenance.</li>
            <li><strong>Local Expertise:</strong> Wide knowledge of water quality problems and their solutions.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">What Sets Us Apart in India?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Looking for Best Mineral Water Purification Plant Suppliers in India?
            Our plants ensure quality performance and adherence to stringent quality standards. As one of the Best Mineral Water Purification Plant Suppliers in India, we provide the industries, businesses, and residents of the country with clean water. From massive industrial projects to small-scale commercial setups, our systems are adjustable to meet any requirement.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Nationwide Coverage:</strong> A good supply chain ensures timely delivery along with support.</li>
            <li><strong>Eco-friendly Solutions:</strong> Water-saving technology that minimizes water waste and negative impact on the environment.</li>
            <li><strong>Flexible Uses:</strong> Suitable for factories, offices, schools, and residential buildings.</li>
            <li><strong>Quality Control:</strong> Each system meets very strict national standards and regulations.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Deliver International-Quality Mineral Water Solutions?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our systems are built according to the most stringent international standards, ensuring that you get safe and pure mineral water, irrespective of your location. As one of the Best Mineral Water Purification Plant Exporters in India, we offer world-class solutions to clients across the globe. With our excellent logistics and commitment to excellence, we provide tailor-made solutions that address the particular challenges of water quality specific to different regions.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>International Certifications:</strong> Compliance with international safety standards and quality standards.</li>
            <li><strong>Customized systems:</strong> Developed in accordance with regional needs regarding water purification.</li>
            <li><strong>Smooth Logistics:</strong> An efficient export process that sends goods to clients in time.</li>
            <li><strong>Proven Expertise:</strong> Successful projects in multiple countries, meeting diverse industry demands.</li>
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
   <MineralSlider/>
    <CategorySliderPage />
    <Testimonials/>
    <Footer />
  </div>
);

export default MineralWaterPlant;
