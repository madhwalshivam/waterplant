import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bottlingImg from '../assets/machine4.jpg'; 
import Testimonials from '../components/Testimonials';
import bImage from '../assets/b.jpg';
import RoSlider from '../components/RoSlider';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const ROPlantPage = () => (
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
        RO Plant Manufacturers
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
              Get Premium Products Directly from Top RO Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> specializes in providing top-tier reverse osmosis services for industries and commercial usages. As one of the Top RO Plant Manufacturers in Delhi, we design and build high-performance RO plants that vary according to diverse water treatment needs. Our systems are specially designed to purify water so that impurities, dissolved salts, and contaminants from the water are removed while producing high-quality water output. The focus is on sustainability and long-term operational efficiency.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>High-Efficiency Purification:</strong> State-of-the-art membranes for exceptional water filtration.</li>
              <li><strong>Custom Designs:</strong> Solutions tailored to various industrial and commercial requirements.</li>
              <li><strong>Environmentally Friendly:</strong> Prevents water wastage and reduces energy consumption.</li>
              <li><strong>Robust Build:</strong> Durable components with a long operational life.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="RO Plant"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Choose Us for RO Solutions in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We have committed ourselves to finding innovative solutions to solving challenges around Delhi water purification. Our Top RO Plant in Delhi is designed to cater to industries, businesses, and homes—ensuring clean and safe water. With detailed knowledge of local water conditions, we deliver cost-effective, compliance-based systems.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Regional Expertise:</strong> Understanding of Delhi's specific water quality challenges.</li>
            <li><strong>Energy-Efficient Systems:</strong> Designed to minimize operation costs.</li>
            <li><strong>Regulatory Compliance:</strong> Designed to meet local water safety and discharge standards.</li>
            <li><strong>Easy Installation:</strong> Provides fast and hassle-free installation to begin operation immediately.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Serve Nationwide Water Treatment Needs?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our solutions are widely used in the pharmaceuticals, food and beverage industries, and in manufacturing and more. As one of the Best RO Water Treatment Plant Suppliers in India, we provide reliable and efficient water treatment systems throughout India. Every plant is designed to the specifications of water quality and quantity that businesses need to ensure sustainable water use.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Pan-India Service:</strong> We deliver our solutions to industries all across the nation.</li>
            <li><strong>Adaptable Systems:</strong> We can be scaled to suit different industry requirements.</li>
            <li><strong>Comprehensive Support:</strong> Installation, maintenance, and training for hassle-free operations.</li>
            <li><strong>Cost-Efficiency:</strong> Advanced technology for significant cost savings over time.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Deliver Global RO Water Solutions?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants are tailored according to global standards in water treatment to achieve maximum performance and reliability in varied environmental conditions. As one of the Best RO Water Treatment Plant Exporters in India, we offer the finest quality systems to clients globally. We deliver timely as well as hassle-free installation to our customers around the globe.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Standards:</strong> Adheres to international water quality norms.</li>
            <li><strong>Tailored Designs:</strong> Customized solutions for varied global requirements.</li>
            <li><strong>International Reach:</strong> Delivering service to customers in various countries.</li>
            <li><strong>Effective Logistics:</strong> Efficient delivery and installation.</li>
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

    <RoSlider/>
    <Testimonials />
    <Footer />
  </div>
);

export default ROPlantPage;
