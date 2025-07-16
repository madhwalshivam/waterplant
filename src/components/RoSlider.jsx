import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/ro.jpg";  
import img2 from "../assets/ro1.jpg"; 

const categoryData = [
  {
    name: "FRP RO Plant",
    image: img1,
    description:
      "Hydro X Water Treatment Pvt. Ltd. is committed to premium water treatment systems backed with the latest technology. As one of the Top FRP RO Plant Manufacturers in Delhi, our company specializes in designing as well as manufacturing plants that are tough, efficient, and long-lasting. They are made from fiber-reinforced plastic material with good corrosion resistance.",
  },
  {
    name: "SS RO Plant",
    image: img2,
    description:
      "Hydro X Water Treatment Pvt. Ltd. specializes in making long-lasting, efficient, stainless steel reverse osmosis plants. As one of the Best SS RO Plant Manufacturers in Delhi, we deliver comprehensive solutions that bring forth powerful technology and strong material features.",
  },
];

const RoSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          All Category Range
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {categoryData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="md:flex gap-8 bg-gray-50 rounded-xl p-6 shadow-md">               
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-md w-full h-auto max-w-md object-contain"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      to="/contact"
                      className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800"
                    >
                      Get Best Quote
                    </Link>
                    <Link
                      to="/products"
                      className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoSlider;
