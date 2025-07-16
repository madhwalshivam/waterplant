import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/k.jpg"; 
import img2 from "../assets/k1.jpg"; 
import img3 from "../assets/k2.jpg"; 

const productData = [
  {
    name: "Industrial Mineral Water Plant",
    image: img1,
    details: [
      ["Filling Material", "Mineral Water"],
      ["Water Purification Process", "RO"],
      ["Brand", "Hydro X Water Treatment"],
      ["Container Type", "Bottle"],
      ["Automation Grade", "Automatic"],
    ],
  },
  {
    name: "Water Purification Plant",
    image: img2,
    details: [
      ["Type of Machines", "Water Purification System"],
      ["Water Purification Process", "RO"],
      ["Bottle Filling Capacity", "30 Bottle/Min"],
      ["Water Filling Method", "Bottle Filling"],
      ["Brand", "Hydro X Water Treatment"],
    ],
  },
  {
    name: "Automatic Mineral Water Plant",
    image: img3,
    details: [
      ["Water Purification Process", "RO"],
      ["Filling Material", "Mineral Water"],
      ["Brand", "Hydro X Water Treatment"],
      ["Container Type", "Bottle"],
      ["Automation Grade", "Automatic"],
    ],
  },
];

const MineralSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to Mineral Water Plant
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {productData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="md:flex gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
                {/* Image */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-md w-full h-auto max-w-md object-contain"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {product.name}
                  </h3>
                  <table className="text-sm w-full mb-4 text-gray-700">
                    <tbody className="divide-y divide-gray-300">
                      {product.details.map(([label, value], i) => (
                        <tr key={i}>
                          <td className="py-2 pr-4 font-medium">{label}</td>
                          <td className="py-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex gap-4 flex-wrap">
                    <Link
                      to="/contact"
                      className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800"
                    >
                      Get Best Quote
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-blue-700 text-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white"
                    >
                      Request a Callback
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

export default MineralSlider;
