import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bottlingImg from '../assets/sss1.jpg';
import Testimonials from '../components/Testimonials';
import bImage from '../assets/b.jpg';
import PopularProduct from '../components/New';
import SsSlider from '../components/SsSlider';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const SSPage = () => (
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
        SS RO Plant Manufacturers
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
              Get Premium Products Directly from Top SS RO Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> specializes in making long-lasting, efficient, stainless steel reverse osmosis plants. As one of the Top SS RO Plant Manufacturers in Delhi, we deliver comprehensive solutions that bring forth powerful technology and strong material features. Our plants meet the most difficult operating situations and provide long-term reliability with excellent water purification for your industrial and commercial requirements.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Corrosion Resistance:</strong> SS materials offer better durability and longevity.</li>
              <li><strong>Advanced Filtration:</strong> Removes impurities efficiently for safe, clean water.</li>
              <li><strong>Customizable Designs:</strong> Designed to suit different industrial requirements.</li>
              <li><strong>Energy Efficient:</strong> Reduces operational costs with optimized systems.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="SS RO Plant"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Choose Us for Delhi-Based RO Systems?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our knowledge of local conditions means compliance with local regulations and optimized performance delivery. We understand the special water purification needs of Delhi. Our Top SS RO Plant in Delhi is designed with regard to the specific problems regarding the water quality of the region, giving industries and businesses dependable and efficient solutions.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Localized Expertise:</strong> Knowledge of Delhi's water treatment standards and issues.</li>
            <li><strong>Quick Installation:</strong> Hassle-free setup to minimize downtime.</li>
            <li><strong>Low Maintenance:</strong> Durable material construction for low maintenance.</li>
            <li><strong>Energy Optimization:</strong> High efficiency and low energy use.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Serve the Nation's Stainless Steel RO Needs?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants are ideal for the manufacturing process, pharmaceutical industries, and food processing. As one of the Best Industrial SS RO Plant Suppliers in India, we provide exceptional water treatment facilities throughout India. Because we are using stainless steel, we can ensure that these systems would work well under different types of industrial settings and for a long time with minimal issues.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Delivery Across All India:</strong> Reputable service and installation all over India.</li>
            <li><strong>Versatile Applications:</strong> Suitable for various industries.</li>
            <li><strong>Expert Support:</strong> Complete support and maintenance for all installations.</li>
            <li><strong>Sustainability:</strong> Helps reduce water wastage and improves recycling processes.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Take RO Technology Global?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants correspond to international standards with high efficiency and reliability. As one of the Best Industrial SS RO Plant Exporters in India, we render world-class water purification solutions to clients all around the globe. Our organization provides door-to-door facilities, such as delivery, installation, and after-sales servicing, so that global clients do not have to worry about smooth operation.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Standards:</strong> Complies with International Standards of Conformity.</li>
            <li><strong>Customized Solutions:</strong> Designed to the specific requirements of regions.</li>
            <li><strong>Efficient Transportation:</strong> Delivered on schedule and installed by professionals.</li>
            <li><strong>Exceptional Durability:</strong> Built to perform in challenging global conditions.</li>
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

   <SsSlider/>
    <PopularProduct />
    <Testimonials />
    <Footer />
  </div>
);

export default SSPage;
