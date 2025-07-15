import React from "react";
import maleImg from "../assets/male.webp";
import femaleImg from "../assets/women.jpg";
import bgImg from "../assets/Sewage.jpg";

const Testimonials = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-[#1e293b]/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          check what’s <span className="text-blue-300">our client say</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white text-gray-700 rounded-xl shadow-xl p-6 relative animate-fadeInUp">
            <div className="absolute top-0 left-0 -mt-5 -ml-5 bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <span className="text-white text-xl font-bold">“</span>
            </div>
            <p className="mb-4">
              Our business flourished with Hydro X Water Treatments Industrial RO Plant.
              Crystal-clear water, unmatched purity! A game-changer for our operations.
              Kudos to the Hydro X team!
            </p>
            <div className="text-yellow-500 mb-4 text-lg">★★★★★</div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={maleImg}
                alt="Shashank Shekhar"
                className="w-12 h-12 rounded-full border-2 border-blue-400 shadow"
              />
              <div>
                <p className="font-bold text-blue-700">Shashank Shekhar</p>
              </div>
            </div>
          </div>
        
          <div className="bg-white text-gray-700 rounded-xl shadow-xl p-6 relative animate-fadeInUp delay-100">
            <div className="absolute top-0 left-0 -mt-5 -ml-5 bg-blue-900 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <span className="text-white text-xl font-bold">“</span>
            </div>
            <p className="mb-4">
              Transformative health journey with the Enagic Kangen Machine from Hydro X Water Treatment.
              Energizing alkaline water, rejuvenating every cell. Grateful for the positive impact on our well-being.
            </p>
            <div className="text-yellow-500 mb-4 text-lg">★★★★★</div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={femaleImg}
                alt="Anshika Sharma"
                className="w-12 h-12 rounded-full border-2 border-pink-400 shadow"
              />
              <div>
                <p className="font-bold text-pink-700">Anshika Sharma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
