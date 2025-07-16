import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bottlingImg from '../assets/machine3.jpeg'; 
import CategorySliderPage from '../components/WaterProducts';
import Testimonials from '../components/Testimonials';
import OneLitreBottlingProductSlider from '../components/OneLitreBottlingProductSlider';
import bImage from '../assets/b.jpg';
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const OneLitreBottlingPlant = () => (
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
                          1 Litre Bottling Plant Manufacturers
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
              Get Premium Products Directly from Top 1 Litre Bottling Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> specializes in high-end bottling system solutions. As one of the Top 1 Litre Bottling Plant Manufacturers in Delhi, we design highly efficient plants to meet the needs of any business that requires very high precision and speed of bottling. All this is built with the latest technologies to ensure minimal downtime and maximum output, which creates a reliable solution for bottling water and so much more.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>High-Speed Operations:</strong> It ensures bottling quickly with minimal downtime.</li>
              <li><strong>Compact Design:</strong> This system is optimized for space-saving installations.</li>
              <li><strong>Precision Filling:</strong> Accurate and consistent filling levels for each bottle.</li>
              <li><strong>Durable Construction:</strong> Built to withstand long-term operational demands.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="1 Litre Bottling Plant"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Choose Us for Delhi's Needs?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a well-known leader in advanced bottling solutions. Our Top 1 Litre Bottling Plant in Delhi is designed to address the needs of local businesses with state-of-the-art technology and performance.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Economical Setup:</strong> Installation is quick and hassle-free by experts.</li>
            <li><strong>User-friendly Interface:</strong> Controls are intuitive, making it easy to operate.</li>
            <li><strong>Energy Efficient:</strong> Low power consumption while maintaining high output.</li>
            <li><strong>Local Expertise:</strong> In-depth understanding of Delhi’s market and requirements.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">What Makes Us a Trusted Supplier Nationwide?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants are engineered to perform and designed to perfection for handling large quantities and delivering the highest quality. As one of the Best 1 Litre Mineral Water Bottle Plant Suppliers in India, we offer high-quality bottling solutions all over the country.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Scalable Solutions:</strong> Tailored plants that grow with your business.</li>
            <li><strong>Eco-Friendly:</strong> Features energy-saving and water-saving technologies.</li>
            <li><strong>Widely Available:</strong> Strong supply chain to deliver products on time across India.</li>
            <li><strong>Industry Compliance:</strong> Meets national safety and quality regulations.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Deliver Global-Quality Bottling Systems?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants are engineered on global standards for efficient and reliable performance. As one of the Best 1 Litre Mineral Water Bottle Plant Exporters in India, we expand our high-performance bottling system and deliver to international markets.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Standards:</strong> Compliance with safety and regulatory standards around the world.</li>
            <li><strong>Custom Solutions:</strong> Accommodates various regional needs and bottle sizes.</li>
            <li><strong>Efficient Export Process:</strong> Logistics streamlined for fast delivery worldwide.</li>
            <li><strong>Proven Success:</strong> Exported to several countries with happy customers.</li>
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
    <OneLitreBottlingProductSlider/>
    <CategorySliderPage />
    <Testimonials/>
    <Footer />
  </div>
);

export default OneLitreBottlingPlant;
