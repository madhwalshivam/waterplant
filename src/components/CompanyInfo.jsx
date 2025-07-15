import React from "react";
import natureIcon from "../assets/nature.png";
import establishmentIcon from "../assets/establishment.png";
import firmIcon from "../assets/Firm.png";
import gstIcon from "../assets/gst.png";

const companyData = [
  {
    icon: natureIcon,
    title: "Nature of Business",
    value: "Manufacturer, Supplier & Exporter",
  },
  {
    icon: establishmentIcon,
    title: "Year of Establishment",
    value: "2016",
  },
  {
    icon: firmIcon,
    title: "Legal Status of Firm",
    value: "Private Limited",
  },
  {
    icon: gstIcon,
    title: "GST Number",
    value: "09AAECH0061M1ZJ",
  },
];

const CompanyInfo = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {companyData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-6 animate-fadeInUp"
            >
              <img
                src={item.icon}
                alt={`${item.title} Icon`}
                className="mx-auto w-12 h-12 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
