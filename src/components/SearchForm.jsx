import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

      return (
      <div className="flex justify-center px-6">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="relative">
          <div className="">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Wallet Address"
              className="w-full px-3 py-4  pr-32 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
            />
            
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 md:py-4 rounded-md transition-colors duration-200 font-medium"
            >
              <BsSearch />
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default SearchForm; 