import React, { useState, useEffect } from 'react';
import ProductList from './PreferencesToggle.jsx';

function Category() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(''); // final submitted value
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Input change handler
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search); // triggers the API call
  };

  // Fetch data when query (submitted search term) changes
  useEffect(() => {
    if (!query) return; // don't run on first load

    setLoading(true);
    setError(null);

    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`)
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
        } else {
          setProducts([]);
          setError("No products found.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch products.");
      })
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:px-8 bg-[#E6F4EA] shadow-md font-sans text-gray-800">
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
            FOOD
          </div>
          <span className="text-green-900 font-semibold text-lg">Explorer</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-green-300 rounded-full overflow-hidden bg-white flex-grow max-w-lg mx-4"
        >
          <input
            type="text"
            placeholder="Search Open Food Facts..."
            className="flex-grow px-4 py-2 text-base outline-none bg-transparent placeholder-green-600"
            value={search}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 text-xl h-full rounded-r-full hover:bg-green-800 transition-colors duration-200"
          >
            🔍
          </button>
        </form>
      </header>

      {/* Status */}
      {loading && <p className="text-center mt-4 text-green-700">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      {/* Product List */}
      <div className="p-4">
        <ProductList products={products} />
      </div>
    </>
  );
}

export default Category;
