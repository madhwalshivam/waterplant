import React from "react";

const features = [
  {
    title: "How Do We Revolutionize Water and Waste Solutions?",
    description:
      "Welcome to Hydro X Water Treatment Pvt. Ltd., where we pride ourselves on bringing world-class water and waste management solutions.",
    points: [
      "Cutting-Edge Technology: Advanced filtration and biological treatment processes.",
      "Sustainability-Driven: Maximize efficiency while reducing environmental footprint.",
      "Tailored Systems: Customized plants for varied industrial & domestic needs.",
      "Expert Support: End-to-end support from consultation to installation.",
    ],
    delay: "delay-[100ms]",
  },
  {
    title: "What Makes Our Systems Perfect for Urban Areas?",
    description:
      "Our systems offer high capacity, energy efficiency, and compact designs suited for both residential and commercial urban setups.",
    points: [
      "Space Optimization: Compact and powerful for tight urban areas.",
      "Energy Efficiency: Reduces power usage without loss of performance.",
      "Compliance Assured: Fully meets environmental regulations.",
      "Cost Savings: Long-term savings on operations and maintenance.",
    ],
    delay: "delay-[200ms]",
  },
  {
    title: "Why Do Companies In India Look At Us?",
    description:
      "We offer alkaline water solutions for better health. As trusted Enagic Kangen Machine Suppliers, our machines support hydration and wellness.",
    points: [
      "Health-Oriented Solutions: Encourages wellness and detoxification.",
      "Ease of Use: Simple to operate and maintain.",
      "Diverse Applications: Suitable for homes, clinics, and institutions.",
      "India-Wide Network: Pan-India support and distribution.",
    ],
    delay: "delay-[300ms]",
  },
  {
    title: "How Do We Deliver Excellence to Global Clients?",
    description:
      "As top Enagic Kangen Machine Exporters in India, we meet international standards with quality and consistency.",
    points: [
      "Global Standards: Top-quality exports approved worldwide.",
      "Timely Delivery: Strong logistics & international presence.",
      "Customized Offerings: Solutions for different water conditions.",
      "Exceptional Support: Complete after-sales care globally.",
    ],
    delay: "delay-[400ms]",
  },
];

const SewageFeatures = () => {
  return (
    <section className="bg-gray-50 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6 animate-fadeInUp">
          Top Sewage Treatment Plant Manufacturers in Delhi
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl animate-fadeInUp ${feature.delay}`}
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-3">{feature.description}</p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {feature.points.map((point, idx) => {
                  const [strong, ...rest] = point.split(":");
                  return (
                    <li key={idx}>
                      <strong>{strong}:</strong> {rest.join(":").trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SewageFeatures;
