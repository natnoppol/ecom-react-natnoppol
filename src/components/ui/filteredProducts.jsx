import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FilteredProducts = ({ filteredProducts, searchTerm, allProducts }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const displayProducts = searchTerm ? filteredProducts : [];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm && displayProducts.length > 0) {
      setIsDropdownOpen(true);
    }
  }, [searchTerm, displayProducts]);

  return (
    <>
      {searchTerm && displayProducts.length > 0 && isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="search-results absolute mt-2 w-full max-w-full bg-white shadow-lg rounded-md dark:text-black transition-all ease-in-out"
        >
          <ul>
            {displayProducts.map((product) => (
              <li key={product.id} className="p-2 hover:bg-gray-200 transition-all ease-in-out">
                <Link to={`/product/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchTerm && displayProducts.length === 0 && (
        <div className="no-results mt-2 text-gray-500 dark:text-white text-center">
          <p>No results found for "{searchTerm}"</p>
        </div>
      )}
    </>
  );
};

export default FilteredProducts;
