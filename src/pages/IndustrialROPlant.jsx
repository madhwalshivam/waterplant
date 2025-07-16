import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import softeningImg from '../assets/industrial.jpg';
import CategorySliderPage from '../components/WaterProducts';
import Testimonials from '../components/Testimonials';
import IndustrialROProductSlider from '../components/IndustrialROProductSlider';
import bImage from '../assets/b.jpg';
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const IndustrialROPlant = () => (
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
                         Industrial Ro Water Plant Manufacturers
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
              Get Premium Products Directly from Top Industrial Ro Water Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> is one of the top leaders in the high-end solution providers for water treatment, mainly industrial applications. As one of the Top Industrial Ro Water Plant Manufacturers in Delhi, we have developed high-tech RO plants to ensure proper purification of water for huge industrial applications. Our systems are engineered to handle a large quantity of water with a high-quality output to meet a wide range of industries such as pharmaceuticals, food and beverages, and manufacturing.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>High-Efficiency Filtration:</strong> It is designed to adequately and efficiently remove impurities.</li>
              <li><strong>Customizable Capacity:</strong> Designed to cater to various industries.</li>
              <li><strong>Low Maintenance:</strong> Built with long-life parts to cut downtime.</li>
              <li><strong>Cost-Effective Operation:</strong> Operated to minimize waste of energy and water.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={softeningImg}
              alt="Industrial RO Plant"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Should You Trust Us for Your Operations?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We have a strong reputation for offering reliable water treatment systems. Our Top Industrial Ro Water Plant in Delhi is built with the latest technology, which ensures excellent performance and cost-effectiveness.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Advanced Technology:</strong> It is built with the latest advances in water treatment technology.</li>
            <li><strong>Space-Saving Design:</strong> Compact and efficient, perfect for urban industrial setups.</li>
            <li><strong>Energy Efficient:</strong> Lower operating costs without sacrificing high output.</li>
            <li><strong>Quick Installation:</strong> Installation by expert professionals with minimal disruption.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Meet National Demands for Purification Systems?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of the Best Industrial Ro System Suppliers in India, we provide efficient, high-performance water treatment solutions throughout the country.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Widespread Availability:</strong> Strong supply chain ensuring prompt delivery across India.</li>
            <li><strong>Durable Materials:</strong> Parts that ensure long-term reliability and durability.</li>
            <li><strong>Scalable Solutions:</strong> It can be adapted to any small or large operation.</li>
            <li><strong>Compliance with Industry Standards:</strong> Meets national and international quality standards.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Revolutionize the Water Treatment Industry Globally?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our RO system is prepared with international standards and designed to deliver precise, efficient, and value-for-money solutions from India to industries across the world.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>International Presence:</strong> We export our systems to numerous nations and have installed them there successfully.</li>
            <li><strong>International Compliance:</strong> Compliant to global safety, quality, and performance standards.</li>
            <li><strong>Customized Systems:</strong> Solutions developed on regional-specific water treatment requirements.</li>
            <li><strong>Expeditious Export Process:</strong> Facilitates smooth, faster international deliveries.</li>
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

    <IndustrialROProductSlider/>
    <CategorySliderPage />
    <Testimonials />
    <Footer />
  </div>
);

export default IndustrialROPlant;
