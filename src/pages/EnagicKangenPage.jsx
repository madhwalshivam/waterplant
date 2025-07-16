import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../assets/enagic.jpg";
import img2 from "../assets/banner machine.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.png";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ProductCardsSection from '../components/ProductCardsSection';
import bImage from '../assets/b.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hoverEffect = {
  hover: { scale: 1.02, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' },
};

const sliderProducts = [
  {
    name: "Enagic Kangen Water Machine",
    image: img1,
    details: [
      ["Capacity Inlet Flow Rate", "500 LPH"],
      ["Purification Capacity", "2 LPM"],
      ["Automation Grade", "Fully Automatic"],
      ["Material", "Stainless Steel"],
      ["No. of Plates", "7 Plates"],
    ],
  },
  {
    name: "Enagic Kangen Machine for Household",
    image: img6,
    details: [
      ["Brand", "Hydro X Water Treatment"],
      ["Usage", "Household"],
      ["Model", "Customized"],
      ["Color", "Any"],
      ["Condition", "New Only"],
    ],
  },
];

const EnagicKangenPage = () => {
  return (
    <div className="text-gray-800 font-sans">


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
    Enagic Kangen Water Machine Manufacturers
  </motion.h1>
</section>



      {/* Intro Section */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-blue-900 mb-6" initial="hidden" animate="visible" variants={fadeIn}>
            How Does Our Advanced Technology Promote Healthier Living?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-white p-6 rounded-lg shadow-lg" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
              <p className="mb-6 text-lg">
                <strong>Hydro X Water Treatment Pvt. Ltd.</strong> is one of the top Enagic Kangen Water Machine Manufacturers in Delhi,
                revolutionizing water purification with innovative, health-boosting alkaline water solutions.
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700">
                <li><strong>Health Benefits:</strong> Enhances immunity and aids digestion.</li>
                <li><strong>Efficient Performance:</strong> High water conversion with low wastage.</li>
                <li><strong>Long-Lasting Build:</strong> Premium quality stainless steel.</li>
                <li><strong>User-Friendly:</strong> Simple interface and controls.</li>
              </ul>
            </motion.div>
            <motion.div className="hidden md:block" initial="hidden" animate="visible" variants={fadeIn}>
              <img src={img2} alt="Water Purification Technology" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-blue-900 mb-10 border-b-2 pb-2 border-blue-600 inline-block" initial="hidden" animate="visible" variants={fadeIn}>
            Products Related to Enagic Kangen Water Machine
          </motion.h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {sliderProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <motion.div className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row" initial="hidden" animate="visible" whileHover="hover" variants={{ ...fadeIn, ...hoverEffect }}>
                  <div className="md:w-1/2 w-full bg-white p-4 flex items-center justify-center border-r">
                    <img src={product.image} alt={product.name} className="w-full h-auto max-h-72 md:max-h-96 object-contain" />
                  </div>
                  <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">{product.name}</h3>
                    <table className="text-sm w-full mb-6 border border-gray-200">
                      <tbody>
                        {product.details.map(([label, value], i) => (
                          <tr className="border-b" key={i}>
                            <td className="p-2 font-semibold text-gray-700">{label}</td>
                            <td className="p-2 text-gray-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex gap-4 flex-wrap">
                      <Link
                        to="/contact"
                        className="ml-4 border border-black text-black px-4 py-1 rounded-full hover:bg-blue-900 hover:text-black transition duration-300"
                      >
                        Get Best Quote
                      </Link>
                      <Link
                        to="/contact"
                        className="ml-4 border border-black text-black px-4 py-1 rounded-full hover:bg-blue-900 hover:text-black transition duration-300"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ProductCardsSection />
      <Footer />
    </div>
  );
};

export default EnagicKangenPage;


