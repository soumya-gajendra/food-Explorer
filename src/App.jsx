import React, { useEffect, useState, useCallback } from 'react';
import ProductList from './PreferencesToggle.jsx'; 
import Header from './header.jsx'; 
function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const handleSearchChange = useCallback((newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }, []); 
useEffect(() => {
  setLoading(true); 
  setError(null); 
fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&json=true`)
      .then((res) =>res.json())
      .then((data) => setProducts(data.products))
    
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]); 

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
         searchInputValue={searchTerm}
         onSearchChange={handleSearchChange}
      />

<main className="p-5">
        {loading && <p className="text-center text-gray-700">Loading products...</p>}
       {!loading && !error && products.length > 0 && (
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
}

export default App;