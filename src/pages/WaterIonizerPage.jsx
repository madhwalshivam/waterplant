import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgIntro from '../assets/ddd.jpg';
import Footer from '../components/Footer';
import PopularIozined from '../components/PopularIozined';
import WaterIonizerSlider from '../components/WaterIonizerProducts';
import bImage from '../assets/b.jpg';
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const WaterIonizer = () => (
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
           Water Ionizer Machine Manufacturers
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
            Why Are Water Ionizers Essential for Healthy Living?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Discover premium water ionizer machines from <strong>Hydro X Water Treatment Pvt. Ltd.</strong>, a leading manufacturer in Delhi. Our cutting-edge machines balance pH levels to deliver alkaline water, enhancing health and hydration for homes and businesses.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Superior Hydration:</strong> Alkaline water improves absorption and hydration.</li>
            <li><strong>Effective Detoxification:</strong> Efficiently removes impurities.</li>
            <li><strong>Durable Design:</strong> Built with high-quality materials for longevity.</li>
            <li><strong>Energy Efficiency:</strong> Eco-friendly with low power consumption.</li>
          </ul>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex justify-center"
        >
          <img
            src={imgIntro}
            alt="Water Ionizer Machine"
            className="rounded-xl shadow-2xl w-full max-w-md object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  </section>

    {/* Delhi Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Catering to Delhi’s Water Needs
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our water ionizer machines are tailored to address Delhi’s unique water quality challenges, providing reliable and customized solutions for residents and businesses.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Localized Expertise:</strong> Designed for Delhi’s water conditions.</li>
            <li><strong>User-Friendly:</strong> Intuitive controls suitable for all ages.</li>
            <li><strong>Compact Design:</strong> Perfect for small homes, kitchens, and offices.</li>
            <li><strong>Customizable Settings:</strong> Adjust pH levels to meet specific needs.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* National Supply Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Supporting Industries Across India
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of India’s top water ionizer machine suppliers, we cater to diverse industries, including healthcare and hospitality, with prompt delivery and professional support.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Versatile Applications:</strong> Ideal for clinics, hotels, homes, and more.</li>
            <li><strong>High Quality:</strong> Meets stringent international standards.</li>
            <li><strong>Expert Support:</strong> Comprehensive installation and maintenance services.</li>
            <li><strong>Nationwide Coverage:</strong> Reliable delivery across India.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Global Export Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          className="bg-gray-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={{ ...fadeIn, ...hoverEffect }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Meeting Global Water Ionization Needs
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As leading exporters, we deliver innovative, eco-friendly water ionizer machines to international clients, backed by efficient logistics and comprehensive support.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Standards:</strong> Compliant with international quality norms.</li>
            <li><strong>Custom Solutions:</strong> Tailored for local water conditions worldwide.</li>
            <li><strong>Efficient Logistics:</strong> Timely delivery and setup support.</li>
            <li><strong>Global Trust:</strong> Trusted by clients worldwide for quality and reliability.</li>
          </ul>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
              aria-label="Get a quote for water ionizer machines"
            >
              Get Best Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-blue-800 text-blue-800 px-6 py-3 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300"
              aria-label="Request a callback for water ionizer machines"
            >
              Request a Callback
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    <WaterIonizerSlider/>
     <PopularIozined/>
    <Footer />
  </div>
);

export default WaterIonizer;
