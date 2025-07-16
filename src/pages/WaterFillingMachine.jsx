import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import fillingImg from '../assets/machine2.jpg'; 
import CategorySliderPage from '../components/WaterProducts';
import Testimonials from '../components/Testimonials';
import WaterFillingProductSlider from '../components/WaterFillingProductSlider';
import bImage from '../assets/b.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 },
  },
};

const WaterFillingMachine = () => (
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
        Water Filling Machine Manufacturers
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
              Get Premium Products Directly from Top Water Filling Machine Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> develops the latest systems that make it possible for businesses of all sizes to achieve streamlined water-filling operations. As one of the Top Water Filling Machine Manufacturers in Delhi, we have high-quality machines that come with precision, efficiency, and durability. Our solutions are varied enough to suit different requirements that deliver optimal performance for industrial and commercial purposes.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Technology:</strong> Features the exact filling mechanism to give accurate results.</li>
              <li><strong>Customizable Options:</strong> Machines designed to accommodate different sizes and capacities of bottles.</li>
              <li><strong>Energy Efficiency:</strong> Designed to minimize energy consumption while maximizing output.</li>
              <li><strong>Durable Materials:</strong> Durable components for long-term performance.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={fillingImg}
              alt="Water Filling Machine"
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
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Should You Choose Us in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We have emerged as the one-stop source for filling solutions in Delhi. Our state-of-the-art Top Water Filling Machine in Delhi serves all the region's varied demands through innovative design and better working efficiency.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Space-Saving Designs:</strong> Space-saving designs without sacrificing efficiency.</li>
            <li><strong>Installation:</strong> Trouble-free installation by professional workers to start usage instantly.</li>
            <li><strong>User-Friendly Interface:</strong> Easy control and management functions.</li>
            <li><strong>Comprehensive Support:</strong> Service team for maintenance and troubleshooting.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">What Makes Us a Reliable Supplier Nationwide?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our machines have been built for consistent performance that ensures precision and speed at every filling cycle. As one of the Best Bottles Filling Machine Suppliers in India, we give reliable solutions to industries throughout the country.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Variety:</strong> Machines suitable for all types of bottles and capacities.</li>
            <li><strong>Eco-Friendly Design:</strong> Minimizes water loss and maximizes resource utilization.</li>
            <li><strong>National Presence:</strong> Strong local supply chain with prompt supply to all parts of the country.</li>
            <li><strong>Compliance Standards:</strong> Strict industrial quality and safety standards.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Deliver Excellence Internationally?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of the Best Bottles Filling Machine Exporters in India, we thrive in delivering world-class solutions to international markets. Striding ahead with a rigid policy on quality and deliveries within time, we also support clients across various industries worldwide.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Standards:</strong> Compliant with International Quality/Performance Standards.</li>
            <li><strong>Customized Equipment Designs:</strong> Specific regional and industrial requirements.</li>
            <li><strong>Efficient Logistics:</strong> Time-bound and streamlined procedures for export and delivery.</li>
            <li><strong>Established Expertise:</strong> Installed successfully in countries around the world.</li>
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

    <WaterFillingProductSlider/>
    <CategorySliderPage />
    <Testimonials />
    <Footer />
  </div>
);

export default WaterFillingMachine;
