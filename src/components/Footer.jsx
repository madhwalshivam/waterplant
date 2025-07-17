import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* About */}
        <div className="lg:col-span-2 animate-fadeInUp delay-[100ms]">
          <h4 className="text-xl font-bold mb-4 text-white border-b-2 border-blue-500 inline-block">
            About Hydro X Water Treatment Pvt. Ltd.
          </h4>
          <p className="text-gray-400 mb-6">
            Hydro X Water Treatment, a pioneering force in the water treatment industry committed to delivering
            innovative solutions since <strong>2016</strong>. Founded by <strong>Mr. Rahul Tiwari</strong>, we’ve become a trusted name for sustainability and innovation.
          </p>
          <Link
            to="/about"
            className="inline-block border border-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Read More About
          </Link>
        </div>

        {/* Important Links */}
        <div className="animate-fadeInUp delay-[200ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Important Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">› Home</Link></li>
            <li><Link to="/about" className="hover:text-white">› About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">› Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="animate-fadeInUp delay-[300ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Our Products
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/water-treatment" className="hover:text-white">› Water Treatment Plant</Link></li>
            <li><Link to="/waste-water" className="hover:text-white">› Wastewater Treatment Plant</Link></li>
            <li><Link to="/water-ionizer" className="hover:text-white">› Water Ionizer Machine</Link></li>
            <li><Link to="/enagic" className="hover:text-white">› Enagic Kangen Water Machine</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fadeInUp delay-[400ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Get in Touch
          </h4>
          <p className="text-gray-400">
            B 97 NOIDA SECTOR 64,<br />
            Gautam Buddha Nagar - 201301,<br />
            Uttar Pradesh, India
          </p>
          <p className="mt-3 text-blue-400 font-semibold">
            Phone: <br />
            <a href="tel:+919838600270" className="hover:underline">+91-983-860-0270</a>
          </p>

          <div className="flex gap-4 mt-4 text-gray-800">
            <a
              href="https://www.facebook.com/people/Hydro-X-Water-Treatment-Pvt-Ltd/61554922692496/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxwBekVxPJhebudTf4kDS9g"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition duration-300"
            >
              <YouTubeIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/hydroxwatertreatmentpvt.ltd.2/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 animate-fadeInUp delay-[500ms]">
        <p>© 2025 Hydro X Water Treatment Pvt. Ltd. All Rights Reserved.</p>
        <p>
          Crafted with <span className="text-white">♥</span> by{" "}
          <Link to="/advertisement-india" className="text-blue-400 hover:underline">Advertising India</Link> – Web & Branding Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
