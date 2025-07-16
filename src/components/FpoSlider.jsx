import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/fo1.jpg";
import img2 from "../assets/fo2.jpg";
import img3 from "../assets/fo3.jpg";
import img4 from "../assets/fo4.jpg";
import img5 from "../assets/fo5.jpg";


const productData = [
  {
    name: "1000 LPH RO Plant",
    image: img1,
    specs: [
      ["RO Capacity", "1000 Ltr/Hr"],
      ["Material", "FRP"],
      ["Operation Mode", "Semi-Automatic"],
      ["Usage/Application", "Water Purification"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Automation Grade", "Semi-Automatic"],
      ["Number of Membranes In RO", "2"],
      ["Voltage", "240 V"],
      ["Frequency", "50 Hz"],
      ["Power Consumption", "15 KW"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Phase", "Single Phase"],
    ],
  },
  {
    name: "Ultra Filtration Plant",
    image: img2,
    specs: [
      ["RO Capacity", "1000 - 25000 LPH"],
      ["Material", "FRP"],
      ["Plant Application", "Industrial RO Plant"],
      ["Usage/Application", "Water Purification"],
      ["Number of Membranes in RO", "2"],
      ["Voltage", "240 V"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Phase", "Single Phase"],
      ["Power Consumption", "20 KW"],
      ["Automatic Grade", "Semi-Automatic"],
      ["Finishing", "Polished"],
      ["Material Grade", "SS303"],
    ],
  },
  {
    name: "3000 LPH RO Plant",
    image: img3,
    specs: [
      ["RO Capacity", "3000 Ltr/Hr"],
      ["Material", "FRP"],
      ["Types of Machines", "Reverse Osmosis Unit"],
      ["Usage/Application", "Water Purification"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Automation Grade", "Semi-Automatic"],
      ["Number of Membranes In RO", "2"],
      ["Voltage", "380 V"],
      ["Frequency", "60 Hz"],
      ["Power Consumption", "25 KW"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Phase", "3 Phase"],
    ],
  },
  {
    name: "250 LPH RO Plant",
    image: img4,
    specs: [
      ["RO Capacity", "250 Ltr/Hr"],
      ["Material", "FRP"],
      ["Type of Purification Plants", "Reverse Osmosis"],
      ["Usage/Application", "Water Purification"],
      ["Automation Grade", "Semi-Automatic"],
      ["Number of Membranes in RO", "1"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Voltage", "240 V"],
      ["Frequency", "50 Hz"],
      ["Installation Type", "Prefabricated"],
      ["Power Consumption", "10 KW"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Phase", "Single Phase"],
    ],
  },
  {
    name: "500 LPH RO Plant",
    image: img5,
    specs: [
      ["RO Capacity", "500 Ltr/Hr"],
      ["Material", "FRP"],
      ["Type of Purification Plants", "Reverse Osmosis"],
      ["Material of Construction", "SS Powder Coating"],
      ["Number of Membranes in RO", "2"],
      ["Max Water Recovery Rate", "50-55 %"],
      ["Voltage", "380 V"],
      ["Frequency", "60 Hz"],
      ["Power Consumption", "12 KW"],
      ["Power Source", "Electric"],
      ["Warranty", "1 Year"],
      ["Phase", "Single Phase"],
    ],
  },
];

const FoSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to FRP RO Plant
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

export default FoSlider;
