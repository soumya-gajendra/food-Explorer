import React from "react";
function Category () {
return (    <header className="flex items-center justify-between p-4 md:px-8 bg-[#F7F3F0] shadow-md font-sans">
      <div className="flex items-center space-x-2">
        <div className="bg-white text-black px-2 py-1 rounded text-sm font-bold">
          FOOD
        </div>
        <span className="text-gray-700 font-semibold text-lg">Explorer</span>
      </div>
    <form className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white flex-grow max-w-lg mx-4">
        <input
          type="text"
          id="search-input" 
          placeholder="Search Open Food Facts..."
          className="flex-grow border-none px-4 py-2 text-base outline-none bg-transparent placeholder-gray-500"
        
        />
        <button
          type="submit" 
          className="bg-[#5B2B00] text-white px-4 py-2 text-xl cursor-pointer flex items-center justify-center h-full rounded-r-full hover:bg-[#7A3A00] transition-colors duration-200"
        >
          🔍
        </button>
      </form>
     </header>
)
}
export  default Category