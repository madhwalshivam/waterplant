import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/sss2.jpg";
import img2 from "../assets/sss3.jpg";

const productData = [
  {
    name: "Semi Automatic Dialysis RO Plant",
    image: img1,
    specs: [
      ["RO Capacity", "1500 Ltr/Hr"],
      ["Material", "FRP"],
      ["Material of Construction", "SS Powder Coating"],
      ["Automatic Grade", "Semi-Automatic"],
      ["Usage/Application", "Water Purification"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Automation Grade", "Semi-Automatic"],
      ["Voltage", "220 V"],
      ["Frequency", "60 Hz"],
      ["Power Consumption", "30 KW"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Phase", "3 Phase"],
    ],
  },
  {
    name: "Ultrafiltration Plant",
    image: img2,
    specs: [
      ["Filter Type", "Activated Carbon Filters"],
      ["Type of Machines", "Sand Filtration"],
      ["Outside Diameter", "100-120 mm"],
      ["Country of Origin", "Made in India"],
      ["Usage/Application", "Industrial"],
      ["Flow Rate", "1000-4000 LPH"],
      ["Filter Medium Material", "Activated Carbon"],
      ["Inside Diameter", "60-80 mm"],
      ["Maximum Differential Pressure", "30 psi (2.1 Bar)"],
    ],
  },
];

const SsSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to SS RO Plant
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
        >
          {productData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="md:flex gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-md w-full h-auto max-w-md object-contain"
                  />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {product.name}
                  </h3>
                  <table className="text-sm w-full mb-4 text-gray-700">
                    <tbody className="divide-y divide-gray-300">
                      {product.specs.map(([label, value], i) => (
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
                      Request A Callback
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

export default SsSlider;
