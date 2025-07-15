import React, { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { BsTextRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-gray-600 px-6 py-6 relative bg-[#1A1A1A] ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-2xl font-bold">SeisScan</h1>
          <button className='hidden md:flex bg-gray-800 border border-white rounded-xl p-3'>$0.32</button>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
            Trades
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
            Tokens
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
            Leaderboards
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
          </a>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full border-b border-gray-600 transition-all duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0 overflow-hidden'}`} style={{backgroundColor: '#1a1a1a'}}>
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 relative group py-2">
              Trades
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 relative group py-2">
              Tokens
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 relative group py-2">
              Leaderboards
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></div>
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-6">
          <BsSearch className='text-white text-xl cursor-pointer' />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium">
            Connect Wallet
          </button>
          <button 
            className="md:hidden text-white text-3xl cursor-pointer transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <RxCross1 className="transition-transform duration-300 rotate-90" />
            ) : (
              <BsTextRight className="transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 