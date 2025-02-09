import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Buy Tickets", path: "/Purchase" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-gray-900 tracking-wide">
            Eventicket
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-base font-medium text-gray-800 hover:text-blue-600 transition-all duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/Sign">
            <button className="px-6 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
              Sign Up
            </button>
          </Link>

          <button className="px-6 py-2 text-sm font-bold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <FaTimes className="text-gray-900 w-6 h-6" />
          ) : (
            <FaBars className="text-gray-900 w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute left-0 right-0 top-16">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  onClick={toggleMenu}
                  className="block text-gray-800 font-medium hover:text-blue-600 transition-all duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <Link to="/Sign">
              <button className="w-full py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
                Sign Up
              </button>
            </Link>
            <button className="w-full py-2 text-sm font-bold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
