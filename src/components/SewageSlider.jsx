import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/see.jpg";
import img2 from "../assets/see1.jpg";
import img3 from "../assets/see2.jpg";
import img4 from "../assets/see3.jpg";

const productData = [
  {
    name: "Biological Sewage Treatment Plant",
    image: img1,
    specs: [
      ["Treatment Stages", "Preliminary, Primary, Secondary, Tertiary"],
      ["Deliver Type", "PAN India"],
      ["Capacity", "50 KLD"],
      ["Capacity (KLD/MLD)", "5-120 KLD"],
      ["Application Industry", "Food, Pharmaceutical, Residential, Commercial"],
      ["Material of Construction", "Mild Steel"],
      ["Feed Flow Rate (m3/day)", "Up to 50 m3/day"],
      ["Impurities Removed", "Oil & Grease, Turbidity, Dissolved Minerals, TDS"],
      ["Technology", "Mixed Bed Bio Reactor (MBBR)"],
      ["Installation Type", "Prefabricated"],
      ["Country of Origin", "Made in India"],
      ["AMC Provided", "Yes"],
    ],
  },
  {
    name: "Twin Lobe Air Blower",
    image: img2,
    specs: [
      ["Power", ">20 HP"],
      ["Fan Speed", "2000-3000 rpm"],
      ["Material", "Cast Iron"],
      ["Blower Type", "Twin Lobe"],
      ["Air Pressure", "0.1 - 0.7 KG/CM2"],
      ["Capacity", "20M3/HR - 500M3/HR"],
      ["Flow Rate", "20M3/HR - 500 M3/HR"],
    ],
  },
  {
    name: "Plant For Sewage Treatment",
    image: img3,
    specs: [
      ["Capacity (KLD)", "100 KLD"],
      ["Feed Flow Rate", "51-100 m3/day"],
      ["Technology", "Mixed Bed Bio Reactor (MBBR)"],
      ["Automation Grade", "Semi-Automatic"],
      ["Flow Rate", "500 m3/day"],
      ["Material", "Mild Steel"],
      ["Air Blower Power", "1.5 KW"],
      ["Water Pump Power", "5 KW"],
      ["Treatment Stages", "Preliminary Treatment"],
      ["Air Blower Count", "1 Blower"],
      ["Warranty", "2 Years"],
      ["Core Component Warranty", "1 Year"],
    ],
  },
  {
    name: "Prefabricated Sewage Treatment Plant",
    image: img4,
    specs: [
      ["Capacity", "0-200 KLD"],
      ["AMC Provided", "No"],
      ["Industry", "Food & Residential Area"],
      ["Technology", "Mixed Bed Bio Reactor (MBBR)"],
      ["Flow Rate", "1-50 m3/day"],
      ["Pump Power", "2 KW"],
      ["Material", "Mild Steel"],
      ["Automation Grade", "Semi-Automatic"],
      ["Impurities Removed", "Oil & Grease, Dissolved Minerals, TDS, Turbidity"],
      ["Deliver Type", "PAN India"],
      ["Treatment Stages", "Primary, Secondary, Tertiary"],
    ],
  },
];

const SewageSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to Sewage Treatment Plant
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

export default SewageSlider;
