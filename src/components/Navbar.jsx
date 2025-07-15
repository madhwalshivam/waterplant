import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// Material UI Icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Water Treatment Plant', path: '/water-treatment' },
  { label: 'Waste Water Treatment Plant', path: '/waste-water' },
  { label: 'Water Ionizer Machine', path: '/water-ionizer' },
  { label: 'Enagic Kangen Water Machine', path: '/enagic' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm text-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Hydro X Logo"
                className="h-10 w-auto object-contain bg-transparent"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="hover:text-blue-900 transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 border border-black text-black px-4 py-1 rounded-full hover:bg-blue-900 hover:text-black transition duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-7 h-7 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-blue-900 to-blue-700 px-4 py-4 space-y-2 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-white hover:text-blue-900 transition duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-3 border border-yellow-300 text-yellow-300 py-2 px-3 rounded-full text-center hover:bg-yellow-300 hover:text-black transition duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;




