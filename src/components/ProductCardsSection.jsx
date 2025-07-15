import { motion } from "framer-motion";
import plant1 from "../assets/Water-Treatment-Plant-thumb.jpg"; 
import plant2 from "../assets/Sewage1.jpg";
import plant3 from "../assets/Water-Ionizer-Machine-thumbs.jpg";
import { Link } from "react-router-dom";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const cards = [
  {
    title: "Water Treatment Plant",
    description:
      "At Hydro X Water Treatment Pvt. Ltd., we engineer innovative solutions that turn water into a safe and reliable source of supply for various purposes. As one of the Top Water Treatment Plant Manufacturers in Delhi, we present state-of-the-art systems for industries, municipalities, and commercials.",
    image: plant1,
    delay: 0.1,
  },
  {
    title: "Wastewater Treatment Plant",
    description:
      "Hydro X Water Treatment Pvt. Ltd. specializes in high-technology solutions for wastewater treatment. As one of the Top Wastewater Treatment Plant Manufacturers in Delhi, we design and build systems that ensure effective wastewater treatment and recycling processes.",
    image: plant2,
    delay: 0.3,
  },
  {
    title: "Water Ionizer Machine",
    description:
      "Hydro X Water Treatment Pvt. Ltd. specializes in water purification solutions. As one of the Top Water Ionizer Machine Manufacturers in Delhi, we design and produce cutting-edge machines that balance pH levels for better health and hydration.",
    image: plant3,
    delay: 0.5,
  },
];

const ProductCardsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          All Category Range
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: card.delay }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full object-cover rounded-t-3xl"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>
                <div className="flex flex-wrap items-center justify-between mt-auto">
                 <Link
                to="/contact"
                className="ml-4 border border-black text-black px-4 py-1 rounded-full hover:bg-blue-900 hover:text-black transition duration-300"
              >
                Get Best Quote
              </Link>
                  <button className="text-blue-600 text-sm font-medium hover:underline ml-4">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardsSection;
