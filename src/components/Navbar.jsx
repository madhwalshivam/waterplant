import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navLinks } from './NavLinks';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [mobileSubDropdowns, setMobileSubDropdowns] = useState({});

  const dropdownTimeout = useRef(null);
  const subDropdownTimeout = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 200);
  };

  const handleSubDropdownEnter = (label) => {
    clearTimeout(subDropdownTimeout.current);
    setActiveSubDropdown(label);
  };

  const handleSubDropdownLeave = () => {
    subDropdownTimeout.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 200);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleMobileSubDropdown = (label) => {
    setMobileSubDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-sm shadow-lg text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         <Link to="/" className="flex items-center">
  <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
</Link>


          {/* Desktop */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
            {navLinks.map((link) =>
              link.subMenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={link.path}
                    className="hover:text-blue-900 cursor-pointer flex items-center gap-1"
                  >
                    {link.label}
                    <KeyboardArrowDownIcon fontSize="small" />
                  </Link>

                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-60 bg-white shadow-md rounded-md z-50">
                      {link.subMenu.map((sublink) =>
                        sublink.subMenu ? (
                          <div
                            key={sublink.label}
                            className="relative"
                            onMouseEnter={() => handleSubDropdownEnter(sublink.label)}
                            onMouseLeave={handleSubDropdownLeave}
                          >
                            <Link
                              to={sublink.path}
                              className="w-full text-left px-4 py-2 hover:bg-blue-100 hover:text-blue-900 flex justify-between items-center cursor-pointer"
                            >
                              {sublink.label}
                              <KeyboardArrowRightIcon fontSize="small" />
                            </Link>

                            {activeSubDropdown === sublink.label && (
                              <div className="absolute top-0 left-full ml-1 w-60 bg-white shadow-md rounded-md z-50">
                                {sublink.subMenu.map((nested) => (
                                  <Link
                                    key={nested.label}
                                    to={nested.path}
                                    className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-900"
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={sublink.label}
                            to={sublink.path}
                            className="block px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-900"
                          >
                            {sublink.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="hover:text-blue-900 transition duration-300"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="ml-4 border border-black text-black px-4 py-1 rounded-full hover:bg-blue-900 hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-2 text-sm font-medium">
          {navLinks.map((link) =>
            link.subMenu ? (
              <div key={link.label}>
                <div className="flex justify-between items-center">
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-grow py-2 px-3 hover:bg-blue-100 hover:text-blue-900"
                  >
                    {link.label}
                  </Link>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="py-2 px-3"
                  >
                    <KeyboardArrowDownIcon fontSize="small" />
                  </button>
                </div>

                {mobileDropdowns[link.label] && (
                  <div className="pl-4">
                    {link.subMenu.map((sublink) =>
                      sublink.subMenu ? (
                        <div key={sublink.label}>
                          <div className="flex justify-between items-center">
                            <Link
                              to={sublink.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex-grow py-2 px-3 hover:bg-blue-100 hover:text-blue-900"
                            >
                              {sublink.label}
                            </Link>
                            <button
                              onClick={() => toggleMobileSubDropdown(sublink.label)}
                              className="py-2 px-3"
                            >
                              <KeyboardArrowRightIcon fontSize="small" />
                            </button>
                          </div>

                          {mobileSubDropdowns[sublink.label] && (
                            <div className="pl-4">
                              {sublink.subMenu.map((nested) => (
                                <Link
                                  key={nested.label}
                                  to={nested.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-1 px-3 hover:bg-blue-100 hover:text-blue-900"
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={sublink.label}
                          to={sublink.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 hover:bg-blue-100 hover:text-blue-900"
                        >
                          {sublink.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 hover:bg-blue-100 hover:text-blue-900"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-3 border border-black py-2 px-3 rounded-full text-center hover:bg-blue-900 hover:text-white"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;







