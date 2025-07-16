import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import softeningImg from '../assets/softning.jpg';
import WaterSofteningSlider from '../components/WaterSofteningSlider';
import CategorySliderPage from '../components/WaterProducts';
import Testimonials from '../components/Testimonials';
import bImage from '../assets/b.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const WaterSofteningPlant = () => (
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
                         Water Softening Plant Manufacturers
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
      {/* ✅ Left Text Content */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Get Premium Products Directly from Top Water Softening Plant Manufacturers in Delhi
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          At <strong>Hydro X Water Treatment Pvt. Ltd.</strong>, we specialize in offering high-quality water treatment solutions, particularly water softening systems. As one of the Top Water Softening Plant Manufacturers in Delhi, we offer plants customized to the specific needs of industrial and commercial clients. Our water-softening plants make use of advanced technology to remove all the minerals that cause scaling and corrosion in machinery.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600">
          <li><strong>Effective Hardness Removal:</strong> Reduces calcium and magnesium to prevent scaling.</li>
          <li><strong>Customizable Designs:</strong> Tailored to meet specific water quality needs.</li>
          <li><strong>Low Maintenance:</strong> Easy to operate and maintain for long-term use.</li>
          <li><strong>Cost-Effective:</strong> Helps to reduce operational costs by improving equipment lifespan.</li>
        </ul>
      </div>
    <div className="flex justify-center">
        <img
          src={softeningImg}
          alt="Water Softening Plant"
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Choose Us for Water Softening Solutions?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our Top Water Softening Plant in Delhi is set up for domestic as well as industrial purposes that assure dependable performance in the removal of hard minerals from the water.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Superior Quality:</strong> It ensures excellent quality, giving excellent performances in areas having hard water.</li>
            <li><strong>Compact Installation:</strong> Ideal for cities, as they have less area to use.</li>
            <li><strong>Energy Efficient:</strong> Optimally consumes less power with efficient performance.</li>
            <li><strong>Expert Support:</strong> Offers installation and after-sales services so that the user enjoys problem-free operation.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Are We A Market Leader Throughout India?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of the Best Industrial Water Softener Suppliers in India, we provide technologically advanced water softening systems for big industrial applications.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Wide Range of Uses:</strong> Suitable for different organizations that require soft water.</li>
            <li><strong>High-performance systems:</strong> Designed to give users a long-lasting result with lesser maintenance.</li>
            <li><strong>All-India coverage:</strong> Providing timely, prompt delivery and installation in different regions of India.</li>
            <li><strong>Competition in Standards:</strong> It delivers the industrial water-treatment standards and regulations requirements.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Cater to International Requirements for Water Softening?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our export operation allows businesses across the world to avail themselves of our latest water treatment technology.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>International Standards:</strong> Compliance with International Water Treatment and Quality Norms.</li>
            <li><strong>Tailored Solutions:</strong> Systems designed to address regional water quality issues.</li>
            <li><strong>Effective Export Process:</strong> Logistics designed to ensure fast and reliable delivery across the globe.</li>
            <li><strong>Proven Expertise:</strong> Long-term solutions for clients worldwide.</li>
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

    <WaterSofteningSlider/>
    <CategorySliderPage/>
    <Testimonials/>
    <Footer />
  </div>
);

export default WaterSofteningPlant;
