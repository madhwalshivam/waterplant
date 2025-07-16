import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import bottlingImg from '../assets/fo1.jpg';
import Testimonials from '../components/Testimonials';
import bImage from '../assets/b.jpg';
import FoSlider from '../components/FpoSlider';
import PopularProduct from '../components/New';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const FPOPage = () => (
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
        FRP RO Plant Manufacturers
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
              Get Premium Products Directly from Top FRP RO Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Hydro X Water Treatment Pvt. Ltd.</strong> is committed to premium water treatment systems backed with the latest technology. As one of the Top FRP RO Plant Manufacturers in Delhi, our company specializes in designing as well as manufacturing plants that are tough, efficient, and long-lasting. They are made from fiber-reinforced plastic material with good corrosion resistance.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Durable Materials:</strong> FRP offers excellent resistance to corrosion and harsh conditions.</li>
              <li><strong>Efficient Performance:</strong> Designed for optimal water purification results.</li>
              <li><strong>Energy-Saving Design:</strong> Cost-effective operation with reduced energy consumption.</li>
              <li><strong>Versatile Applications:</strong> Perfect for multiple industrial needs, from manufacturing to healthcare.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={bottlingImg}
              alt="FRP RO Plant"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Address the Water Purification Needs in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We know what an industry or business establishment exactly needs in terms of the water treatment requirement. From years of experience in the purification of water and also, being aware of the specific requirements of the water quality in the place, we provide a consistent, reliable, and pure system of water. For drinking or industrial purposes, our Top FRP RO Plant in Delhi ensures high-quality water with the least maintenance.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Local Expertise:</strong> Familiarity with the special challenges of water purification in Delhi.</li>
            <li><strong>Quick Setup:</strong> Fast commissioning and easy installation to minimize downtime.</li>
            <li><strong>Low Maintenance:</strong> Describes reliable and easy-to-use systems that also require fewer repairs.</li>
            <li><strong>Cost-Effective:</strong> Maximize water quality while minimizing operational costs.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 3 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Meet Industrial Needs Across the Country?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our plants hold large volumes of water purification efficiency and reliability. As one of the Best Industrial FRP RO Plant Suppliers in India, we provide good-quality water treatment solutions to all industries across the country. Our plants are mostly applied in textiles, food and beverage, and pharmaceuticals.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>National Network:</strong> We offer high-class solutions to industries across India.</li>
            <li><strong>Application Versatility:</strong> Our solutions can be used in any industry, whether pharmaceutical or manufacturing.</li>
            <li><strong>Tailor-made Solutions:</strong> Each solution is customized according to the requirements of the industry.</li>
            <li><strong>All-around Support:</strong> After-sales service, maintenance, and training.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Section 4 */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Ensure Global Water Treatment Solutions?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our systems abide by all the international standards related to water treatment. As one of the Best Industrial FRP RO Plant Exporters in India, we believe in serving top-grade RO plants to all clients around the globe. They are capable enough to work under extreme and changing environmental conditions. We proudly provide successful and efficient water treatment solutions for global industries.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>International Quality Standards:</strong> Adheres to the global regulations and standards in water treatment norms.</li>
            <li><strong>Custom Solutions:</strong> Customized to international markets' specific needs.</li>
            <li><strong>Effective Logistics:</strong> Smooth delivery and installation for international customers.</li>
            <li><strong>Durability Long Lasting:</strong> Engineered to perform in tough global conditions.</li>
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
    <FoSlider/>
     <PopularProduct/>
    <Testimonials />
    <Footer />
  </div>
);

export default FPOPage;
