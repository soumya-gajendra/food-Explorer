import React, { useEffect, useState, useCallback } from 'react';
import ProductList from './PreferencesToggle.jsx'; 
import Header from './header.jsx';
import Category from './searchbycategory.jsx'; 
import { Routes , Route } from 'react-router-dom';

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
      

<main className="p-5 max-w-7xl mx-auto">
        <Routes>
         
          <Route path="/"element={
              <>
              <Header
         searchInputValue={searchTerm}
         onSearchChange={handleSearchChange}
      />

                {loading && <p className="text-center text-gray-700">Loading products...</p>}
                {!loading && !error && products.length > 0 && (
                  <ProductList products={products} />
                )}
               
              </>
            } />

          
          <Route path="/category" element={<Category />} />

        </Routes>
      </main>
      </div>
  );
}

export default App;