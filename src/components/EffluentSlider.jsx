import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/Effluent-Treatment.jpg"; 

const effluentProduct = {
  name: "Effluent Treatment Plant",
  image: img,
  specs: [
    ["Installation Type", "Prefabricated"],
    ["Capacity (KLD)", "50 KLD"],
    ["Application Industry", "Food Industry"],
    ["Inlet Flow Rate (m3/day)", "50 m3/day"],
    ["Air Blower Count", "1 Blower"],
    ["Automation Grade", "Semi-Automatic"],
    ["Material Of Construction", "Mild Steel"],
    ["AMC Provided", "Yes"],
    ["Warranty of Core Components", "2 Years"],
    ["Warranty", "2 Years"],
    ["Plant Type", "Treatment"],
  ],
};

const EffluentSlider = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Products Related to Effluent Treatment Plant
        </h2>

        <div className="md:flex gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={effluentProduct.image}
              alt={effluentProduct.name}
              className="rounded-md w-full h-auto max-w-md object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              {effluentProduct.name}
            </h3>
            <table className="text-sm w-full mb-4 text-gray-700">
              <tbody className="divide-y divide-gray-300">
                {effluentProduct.specs.map(([label, value], i) => (
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
      </div>
    </section>
  );
};

export default EffluentSlider;
