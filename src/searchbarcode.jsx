import React, { useState, useEffect } from 'react';
import ProductList from './PreferencesToggle.jsx'; // Assuming PreferencesToggle.jsx contains ProductList

function Barcode() {
  const [searchTerm, setSearchTerm] = useState(''); // Renamed for clarity
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState(''); // Renamed for clarity
  const [products, setProducts] = useState([]); // This will be an array of found products
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to store any error messages

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSubmittedSearchTerm(searchTerm); // Trigger the useEffect
  };

  useEffect(() => {
   
    if (!submittedSearchTerm) {
      setProducts([]);
      return;
    }
     setLoading(true);
    setProducts([]);
  fetch( `https://world.openfoodfacts.org/api/v0/product/${submittedSearchTerm}.json`)
      .then((res) =>  res.json()
      )
      .then((data) => setProducts([data.product]) )
     .finally(() => {
        setLoading(false);
      });
  }, [submittedSearchTerm]); 

  return (
    <>
      <header className="bg-gradient-to-r from-[#E0F7FA] to-[#F1FAEE] p-6 rounded-lg border border-[#CDE9EC] shadow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#027A80] font-bold text-xl">
            <span className="bg-white px-3 py-1 rounded shadow-sm">FOOD</span>
            Explorer
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white border border-[#B8E4E2] rounded-full max-w-lg w-full"
          >
            <input
              type="text"
              className="flex-grow px-4 py-2 text-[#027A80] placeholder-[#84BDBB] bg-transparent rounded-l-full focus:outline-none"
              placeholder="Enter Barcode (e.g., 3017620422003)" 
              value={searchTerm}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#029E9D] text-white px-4 py-2 rounded-r-full hover:bg-[#027A80] transition"
            >
              🔍
            </button>
          </form>
        </div>
      </header>

      
      {loading && <p className="text-center mt-4 text-green-700">Loading...</p>}

  
{!loading && products.length > 0 && (
        <ProductList products={products} />
      )}

    </>
  );
}

export default Barcode;