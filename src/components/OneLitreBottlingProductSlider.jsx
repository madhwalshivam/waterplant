import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/O1.jpg"; 
import img2 from "../assets/O.jpg"; 

const productData = [
  {
    name: "1 Litre Bottling Plant 50 BPM",
    image: img1,
    details: [
      ["Production Capacity", "50 BPM"],
      ["Filling Material", "Liquid"],
      ["Automation Grade", "Automatic"],
      ["Warranty", "1 Year"],
      ["Container Type", "Bottle"],
    ],
  },
  {
    name: "Water Bottle Filling Plant 12HP",
    image: img2,
    details: [
      ["Power Consumption", "12 HP"],
      ["Capacity", "90 BPM"],
      ["Brand", "Hydro X Water Treatment"],
      ["Filling Head", "18"],
      ["Plant Dimensions", "3 KW"],
    ],
  },
];

const OneLitreBottlingProductSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to 1 Litre Bottling Plant
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

export default OneLitreBottlingProductSlider;
