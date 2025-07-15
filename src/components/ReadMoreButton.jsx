import React from "react";
import { Link } from "react-router-dom";

const ReadMoreButton = ({ to = "/about", text = "Read More About Us" }) => {
  return (
    <div className="flex justify-center mt-10 mb-6 animate-fadeInUp">
      <Link
        to={to}
        className="inline-block px-6 py-3 text-white bg-blue-900 rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-300"
      >
        {text}
      </Link>
    </div>
  );
};

export default ReadMoreButton;

