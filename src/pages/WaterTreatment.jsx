import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import imgWaterTreatment from '../assets/Water-Treatment-Plant-thumb.jpg';
import Footer from '../components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion} from 'framer-motion';
import Testimonials from '../components/Testimonials';
import CategorySliderPage from '../components/WaterProducts';

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const WaterTreatment = () => (
  <div className="font-sans antialiased text-gray-800 bg-gray-100">
    {/* Hero Section */}
     <section className="bg-cover bg-center h-24 flex items-center justify-center text-white relative">
               <div className="absolute inset-0 bg-blue-900"></div>
               <motion.h1
                 className="text-2xl md:text-4xl font-bold z-10 px-4 py-2 rounded-lg"
                 initial="hidden"
                 animate="visible"
                 variants={fadeIn}
               >
                  Water Treatment Plant Manufacturers
               </motion.h1>
             </section>

    {/* Why Water Treatment Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center animate-fadeInUp delay-[300ms]">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              How Do We Make Your Water Crystal Clear?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <strong>Hydro X Water Treatment Pvt. Ltd.</strong>, a leading water treatment plant manufacturer in Delhi, we engineer innovative systems to deliver safe, reliable water for industries, municipalities, and commercial use.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li><strong>Advanced Technology:</strong> Modern filtration and purification systems.</li>
              <li><strong>Customizable Designs:</strong> Tailored to specific water treatment challenges.</li>
              <li><strong>Energy Efficiency:</strong> Reduced consumption with maximum performance.</li>
              <li><strong>Durable Materials:</strong> Engineered for long-lasting, low-maintenance operation.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={imgWaterTreatment}
              alt="Water Treatment Plant"
              className="rounded-xl shadow-2xl w-full max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Delhi Needs Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg animate-fadeInUp delay-[400ms]">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Why Trust Us for Delhi’s Water Treatment Needs?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our water treatment plants are designed with Delhi’s unique water quality challenges in mind, offering efficient, compact, and user-friendly solutions for urban and industrial settings.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Compact Designs:</strong> Space-saving systems for urban and industrial setups.</li>
            <li><strong>Expert Installation:</strong> Hassle-free setup by skilled professionals.</li>
            <li><strong>User-Friendly Operation:</strong> Simplified controls for easy management.</li>
            <li><strong>Round-the-Clock Support:</strong> Dedicated service for uninterrupted performance.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* National Leader Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg animate-fadeInUp delay-[500ms]">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            What Makes Us a National Leader in Water Solutions?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As one of the best industrial water treatment plant suppliers in India, we deliver sustainable, high-performance systems for diverse industries across the country.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Versatile Applications:</strong> Effective for industrial, municipal, and commercial purposes.</li>
            <li><strong>Eco-Friendly Systems:</strong> Minimize water wastage and environmental impact.</li>
            <li><strong>Extensive Reach:</strong> Nationwide supply network for timely delivery.</li>
            <li><strong>Quality Assurance:</strong> Meets the highest industrial standards.</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Global Challenges Section */}
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg animate-fadeInUp delay-[600ms]">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            How Do We Meet Global Water Challenges?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            As leading exporters of industrial water treatment plants in India, we provide globally certified systems that meet international standards for quality and reliability.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li><strong>Global Compliance:</strong> Meets international performance and safety standards.</li>
            <li><strong>Custom Solutions:</strong> Configurable for regional water challenges.</li>
            <li><strong>Efficient Logistics:</strong> Streamlined supply chains for global delivery.</li>
            <li><strong>Proven Track Record:</strong> Successful implementations in international markets.</li>
          </ul>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
              aria-label="Get a quote for water treatment plants"
            >
              Get Best Quote
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-primary text-blue-900 px-6 py-3 rounded-full hover:bg-accent hover:text-gray-800 transition-colors duration-300"
              aria-label="Request a callback for water treatment plants"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </div>
    </section>
    <CategorySliderPage/>
    <Testimonials/>
    <Footer />
  </div>
);

export default WaterTreatment;