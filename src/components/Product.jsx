import { motion } from "framer-motion";
import mineral from "../assets/mineralwater.jpg";
import metal from "../assets/metal.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProductHighlights = () => {
  const products = [
    {
      image: mineral,
      alt: "Mineral Water Plant",
      title: "Mineral Water Plant",
      delay: 0.2,
      description: (
        <>
          At <strong>Hydro X</strong>, we design mineral water solutions that
          deliver <em>purity</em>, <em>taste</em>, and full <em>compliance</em>.
          Trusted by hospitality, corporate, and retail clients across India.
        </>
      ),
    },
    {
      image: metal,
      alt: "Industrial RO Water Plant",
      title: "Industrial RO Water Plant",
      delay: 0.4,
      description: (
        <>
          <strong>Hydro X Water Treatment Pvt. Ltd.</strong> leads in
          high-capacity RO systems for industries, delivering
          <em> sustainable</em> and <em>scalable</em> water purification
          technologies.
        </>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 tracking-tight">
            Our Premium Water Treatment Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our cutting-edge technologies that deliver clean, safe, and sustainable water—designed to meet modern industrial and commercial needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: product.delay }}
            >
              <div className="md:w-1/2 h-64 md:h-full">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-800">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;

