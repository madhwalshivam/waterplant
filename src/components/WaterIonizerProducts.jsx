import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../assets/water-lonizer.jpg";
import img2 from "../assets/imgg.jpg";
import img3 from "../assets/imgg1.jpg";
import img4 from "../assets/imgg2.jpg";
import img5 from "../assets/imgg3.jpg";
import img6 from "../assets/imgg4.jpg";
import img7 from "../assets/imgg5.jpg";


const productData = [
  {
    name: "Water Ionizer for Household",
    image: img1,
    details: [
      ["Purification Capacity", "4 LPM"],
      ["Material", "Stainless Steel"],
      ["No. of Plates", "8"],
      ["Voltage", "240 V"],
      ["pH Range", "2.5 – 11.5"],
      ["Features", "Fully automatic, wall mount, no installation required"],
      ["Delivery", "PAN India & International"],
      ["Warranty", "3 years"],
    ],
  },
  {
    name: "Leveluk Jriv",
    image: img2,
    details: [
      ["Electrode Plates", "4 (135 x 75 mm)"],
      ["Negative ORP", "-450 mV"],
      ["pH Range", "2.5 – 11.5"],
      ["Generates", "4 water types"],
      ["Production Rate", "3.0 – 4.9 l/min"],
      ["Wattage", "160 W"],
      ["Dimensions", "264 x 338 x 171 mm"],
      ["Weight", "5.3 kg"],
    ],
  },
  {
    name: "Anespa DX",
    image: img3,
    details: [
      ["Generates", "Mineral ion water for bath/shower"],
      ["Production Rate", "2.6 l/min"],
      ["Dimensions", "130 x 346 mm"],
      ["Weight", "2.5 kg"],
      ["Features", "Dual cartridge system, removes chlorine"],
      ["Ease of Use", "Simple to install and operate"],
      ["Warranty", "3 years"],
    ],
  },
  {
    name: "LeveLuk K8",
    image: img4,
    details: [
      ["Electrode Plates", "8 (135 x 75 mm)"],
      ["Negative ORP", "-850 mV"],
      ["pH Range", "2.5 – 11.5"],
      ["Generates", "5 water types"],
      ["Production Rate", "4.5 – 7.6 l/min"],
      ["Wattage", "230 W"],
      ["Dimensions", "345 x 279 x 147 mm"],
      ["Weight", "5 kg"],
    ],
  },
  {
    name: "LeveLuk SD501",
    image: img5,
    details: [
      ["Electrode Plates", "7 (135 x 75 mm)"],
      ["Negative ORP", "-800 mV"],
      ["pH Range", "2.5 – 11.5"],
      ["Generates", "5 water types"],
      ["Production Rate", "4.5 – 7.6 l/min"],
      ["Wattage", "230 W"],
      ["Dimensions", "264 x 338 x 171 mm"],
      ["Weight", "6.3 kg"],
    ],
  },
  {
    name: "LeveLuk Super 501",
    image: img6,
    details: [
      ["Electrode Plates", "7 & 5 (135 x 75 mm)"],
      ["Negative ORP", "-800 mV"],
      ["pH Range", "2.5 – 11.5"],
      ["Production Rate", "4.9 – 7.9 l/min"],
      ["Wattage", "200 W"],
      ["Dimensions", "352 x 384 x 250 mm"],
      ["Weight", "10.2 kg"],
    ],
  },
  {
    name: "LeveLuk SD501 Platinum",
    image: img7,
    details: [
      ["Electrode Plates", "7 (135 x 75 mm)"],
      ["Negative ORP", "-800 mV"],
      ["pH Range", "2.5 – 11.5"],
      ["Production Rate", "4.5 – 7.6 l/min"],
      ["Wattage", "230 W"],
      ["Dimensions", "264 x 338 x 171 mm"],
      ["Weight", "6.3 kg"],
    ],
  },
];

const WaterIonizerSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to  Water Ionizer Machine
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

export default WaterIonizerSlider;


