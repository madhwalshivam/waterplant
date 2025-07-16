import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import SewageSlider from '../components/SewageSlider';
import effluentMainImg from '../assets/image.png';
import bImage from '../assets/b.jpg';
import imgEffluent1 from '../assets/Effluent-Treatment.jpg';
import imgEffluent2 from '../assets/Sewage-Treatment.jpg';
import EffluentSlider from '../components/EffluentSlider';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const hoverEffect = {
  hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
};

const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const EffluentTreatmentPage = () => (
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
                          Effluent Treatment Plant Manufacturers
                      </motion.h1>
                    </section>
    {/* Intro Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Get Premium Products Directly from Top Effluent Treatment Plant Manufacturers in Delhi
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hydro X Water Treatment Pvt. Ltd. offers a range of high-quality effluent treatment plants designed to meet the diverse needs of industrial sectors. We are proud to be recognized as one of the Top Effluent Treatment Plant Manufacturers in Delhi. Our systems are engineered to effectively treat and recycle effluent water, helping industries comply with environmental regulations and improve sustainability.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Technology:</strong> Latest filtration and treatment methods are used.</li>
              <li><strong>Eco-Friendly:</strong> Designed to cause minimum environmental impact.</li>
              <li><strong>Customized Systems:</strong> Solutions tailored for various industry needs.</li>
              <li><strong>Cost-Effective:</strong> Reduces water wastage and lowers operational costs.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={effluentMainImg} alt="Effluent Treatment Plant" className="rounded-xl shadow-2xl w-full max-w-[500px] h-[350px] object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Us Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Why Us for Effluent Treatment in Delhi?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our Top Effluent Treatment Plant in Delhi is designed to tackle specific wastewater challenges, ensuring compliance with environmental standards and energy-efficient processing.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Expertise in Local Challenges:</strong> Knowledge of effluent treatment requirements.</li>
            <li><strong>Energy Efficient:</strong> Systems designed for optimal energy use.</li>
            <li><strong>Regulatory Compliance:</strong> Meets government standards for effluent discharge.</li>
            <li><strong>Quick Setup:</strong> Fast installation to minimize downtime for businesses.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* National Reach Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-white p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Can We Help with Nationwide Effluent Treatment?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We offer scalable, reliable effluent treatment plants suited for industries like textiles, pharmaceuticals, and food processing.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Widest Network:</strong> Treatment solutions across India.</li>
            <li><strong>Scalable Systems:</strong> Ideal for both small and large operations.</li>
            <li><strong>Services:</strong> Installation, maintenance, and support after sales.</li>
            <li><strong>Efficiency in Costs:</strong> Highest savings through superior treatment processes.</li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Global Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div className="bg-gray-50 p-8 rounded-xl shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">How Do We Extend Our Global Effluent Treatment Solution Network?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our systems satisfy international water treatment requirements and are exported globally for effective and sustainable treatment.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>International Compliance:</strong> Satisfies global environmental standards.</li>
            <li><strong>Tailor Made:</strong> Country- and industry-specific solutions.</li>
            <li><strong>Delivered Worldwide:</strong> Shipped and installed globally.</li>
            <li><strong>Efficient Delivery:</strong> Timely logistics and professional setup.</li>
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
 <EffluentSlider/>

    {/* Category Slider */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center" initial="hidden" animate="visible" variants={fadeIn}>
          All Category Range
        </motion.h2>

        <Slider {...sliderSettings}>
          {/* Effluent Treatment Plant */}
          <div className="px-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img src={imgEffluent1} alt="Effluent Treatment Plant" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Effluent Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                High-performance effluent treatment solutions for industrial wastewater reuse.
              </p>
              <div className="mt-auto">
                <Link to="/contact" className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Get Best Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Sewage Treatment Plant */}
          <div className="px-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col h-full">
              <img src={imgEffluent2} alt="Sewage Treatment Plant" className="w-full h-64 object-cover rounded-lg mb-4" loading="lazy" />
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sewage Treatment Plant</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Designed to minimize impact and promote water recycling in municipal sectors.
              </p>
              <div className="mt-auto">
                <Link to="/contact" className="bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Get Best Quote
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>

    <Testimonials />
    <Footer />
  </div>
);

export default EffluentTreatmentPage;
