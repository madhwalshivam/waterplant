import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/watertreatment.jpg";
import img2 from "../assets/Sewage.jpg";
import img5 from "../assets/effluent.jpg";
import { Link } from 'react-router-dom'; 

const products = [
  {
    title: "Water Treatment Plant",
    description:
      "At Hydro X Water Treatment Pvt. Ltd., we engineer innovative solutions that turn water into a safe and sustainable resource.",
    image: img1,
  },
  {
    title: "Sewage Treatment Plant",
    description:
      "We specialize in advanced and reliable solutions for the treatment of sewage water, protecting ecosystems.",
    image: img2,
  },
  
  {
    title: "Effluent Treatment Plant",
    description:
      "We offer a range of high-quality effluent treatment plants designed for efficient wastewater handling and disposal.",
    image: img5,
  },
];

const PopularProducts = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-fadeInUp">
          Our Popular Products
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md border overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                    {product.description}
                  </p>
                  <Link
  to="/contact"
  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
>
  Contact Us
</Link>

                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="swiper-button-prev !text-blue-700 !text-xl !left-0"></div>
          <div className="swiper-button-next !text-blue-700 !text-xl !right-0"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;
