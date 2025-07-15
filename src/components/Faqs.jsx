import React, { useState } from "react";

const faqs = [
  {
    question:
      "1. What distinguishes a mineral water plant from regular water treatment?",
    answer:
      "A mineral water plant not only purifies water but also enhances it with essential minerals, providing a healthier and more refreshing drinking experience.",
  },
  {
    question: "2. Why is water softening necessary for households?",
    answer:
      "It removes excess calcium and magnesium, preventing scale buildup and improving cleaning efficiency of soaps and detergents.",
  },
  {
    question: "3. How does a water treatment plant work?",
    answer:
      "It uses filtration, sedimentation, and disinfection to remove impurities and ensure water meets safety standards.",
  },
  {
    question: "4. What is the purpose of a Kangen machine?",
    answer:
      "A Kangen machine adjusts the pH of water to make it more alkaline, promoting better hydration and potential health benefits.",
  },
  {
    question:
      "5. How does an effluent treatment plant contribute to environmental sustainability?",
    answer:
      "It treats industrial wastewater before discharge, protecting ecosystems and enabling reuse of water.",
  },
  {
    question:
      "6. What features should be considered when choosing a water filling machine for a bottling plant?",
    answer:
      "Capacity, speed, hygiene, bottle compatibility, automatic capping, and labeling should be considered for efficient bottling.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg transition-all"
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between group"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-900">
                  {item.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-800 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`px-6 pb-4 text-gray-700 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0 invisible"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
