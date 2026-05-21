import { useState } from "react";
import { Link } from "react-router-dom";
import kLogo from "../assets/Klogo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b112c]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img
            src={kLogo}
            alt="KaiStudio Logo"
            className="w-10 h-10 object-contain [filter:invert(65%)_sepia(89%)_saturate(2421%)_hue-rotate(145deg)_brightness(108%)_contrast(108%)] hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            KAI<span className="text-white">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-cyan-400 transition-colors relative group py-2">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors relative group py-2">
            Founder
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/services" className="hover:text-cyan-400 transition-colors relative group py-2">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/portfolio" className="hover:text-cyan-400 transition-colors relative group py-2">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Desktop Request Demo Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold text-sm rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all inline-block hover:scale-105 active:scale-95"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-350 ease-in-out border-b border-white/5 bg-[#0b112c]/95 backdrop-blur-lg overflow-hidden ${
          isOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 space-y-3 flex flex-col pb-4">
          <Link to="/" className="text-gray-300 hover:text-cyan-400 py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-cyan-400 py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>
            Founder
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-cyan-400 py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-cyan-400 py-2 text-base font-medium border-b border-white/5" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="w-full text-center py-2.5 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg shadow-md"
            onClick={closeMenu}
          >
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
