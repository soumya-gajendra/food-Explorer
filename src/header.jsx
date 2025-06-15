import React, { useState, useEffect } from 'react';
function Header({ searchInputValue, onSearchChange }) {
const [localSearchTerm, setLocalSearchTerm] = useState(searchInputValue);
useEffect(() => {
    setLocalSearchTerm(searchInputValue);
  }, [searchInputValue]);
const handleInputChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };
const handleSearchSubmit = (event) => {
    event.preventDefault(); 
if (onSearchChange) {
      onSearchChange(localSearchTerm);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 md:px-8 bg-[#F7F3F0] shadow-md font-sans">
      <div className="flex items-center space-x-2">
        <div className="bg-white text-black px-2 py-1 rounded text-sm font-bold">
          FOOD
        </div>
        <span className="text-gray-700 font-semibold text-lg">Explorer</span>
      </div>
    <form onSubmit={handleSearchSubmit} className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white flex-grow max-w-lg mx-4">
        <input
          type="text"
          id="search-input" 
          placeholder="Search Open Food Facts..."
          className="flex-grow border-none px-4 py-2 text-base outline-none bg-transparent placeholder-gray-500"
          value={localSearchTerm} 
          onChange={handleInputChange}
        />
        <button
          type="submit" 
          className="bg-[#5B2B00] text-white px-4 py-2 text-xl cursor-pointer flex items-center justify-center h-full rounded-r-full hover:bg-[#7A3A00] transition-colors duration-200"
        >
          🔍
        </button>
      </form>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-700 font-semibold text-lg relative group">
          Category
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B2B00] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="text-gray-700 font-semibold text-lg relative group">
          Barcode
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B2B00] group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="text-gray-700 font-semibold text-lg relative group">
          GitHub
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B2B00] group-hover:w-full transition-all duration-300"></span>
        </a>
      </nav>
      <div className="md:hidden">
        <button className="text-gray-700 text-2xl">
          &#9776; 
        </button>
      </div>
    </header>
  );
}

export default Header;