import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../components/icon/CartIcon";
import {
  NavigationContainer,
  NavigationResponsive,
  NavigationMenu,
  NavigationLogo,
  NavigationMobile,
} from "../ui/navigation-menu";

import FilteredProducts from "../../components/ui/filteredProducts";
import { debounce } from "lodash";

function Header() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // useRef to hold the search term value for debouncing
  const searchInputRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(
    debounce((e) => {
      setSearchTerm(e.target.value);
    }, 500),
    [setSearchTerm] 
  );

  // Filter products based on the debounced search term
  useEffect(() => {
    const results = searchTerm
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;

    setFilteredProducts(results);
  }, [searchTerm, products]); // Only run this effect when `searchTerm` or `products` change

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched products:", data);

        if (Array.isArray(data.data)) {
          setProducts(data.data);
          setFilteredProducts(data.data); // Update filteredProducts to fetched data
        } else {
          console.error("Expected an array of products but got:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    if (!isMenuOpen) {
      document.getElementById("hamburger-menu-button")?.focus();
    }
  }, [isMenuOpen]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }, [setIsDarkMode]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const firstLink = document.getElementById("mobile-menu-link");
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-primary-700 px-4 py-2 rounded-md font-semibold transition-all"
      : "text-black dark:text-white px-4 py-2 font-semibold transition-all";
  };

  return (
    <NavigationContainer>
      <FilteredProducts
        filteredProducts={filteredProducts}
        searchTerm={searchTerm}
        allProducts={products}
      />
      <NavigationLogo>
        <Link
          to="/"
          className="text-primary-600 hover:text-primary-500 transition-colors self-center text-2xl font-bold whitespace-nowrap dark:text-white"
        >
          ShopHub
        </Link>
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          id="hamburger-menu-button"
          className="lg:hidden md:hidden p-2 rounded-md text-primary-600 hover:text-primary-700 dark:text-white dark:hover:text-primary-400 transition-colors"
          aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </NavigationLogo>
      <NavigationResponsive>
        {/* Desktop Menu */}
        <NavigationMenu>
          <Link to="/" className={getNavLinkClass("/")}>
            Home
          </Link>
          <Link to="/contact" className={getNavLinkClass("/contact")}>
            Contact
          </Link>

          <CartIcon className={getNavLinkClass("/cart")} />

          {/* Display Search Bar and Dark Mode Button on Desktop */}
          <div className="lg:flex md:flex hidden items-center space-x-6">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                // Manually trigger debounced change
                setSearchTerm(e.target.value);
                handleSearchChange(e);
              }}
              className="px-4 py-2 rounded-lg border border-gray-300  dark:text-black focus:ring-2 focus:ring-primary-400 transition-all"
            />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors group"
            >
             {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg> // Sun icon for light mode
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg> // Moon icon for dark mode
              )}
            </button>
          </div>
        </NavigationMenu>

        {/* Mobile Menu */}
        <NavigationMobile
          ref={menuRef}
          className={`lg:hidden ${
            isMenuOpen ? "flex" : "hidden"
          } justify-between items-center w-full`}
        >
          <ul className="flex flex-col mt-4 space-y-4">
            <li>
              <Link
                id="mobile-menu-link"
                to="/"
                onClick={closeMenu}
                className={getNavLinkClass("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={getNavLinkClass("/contact")}
              >
                Contact
              </Link>
            </li>

            <li>
              <CartIcon className={getNavLinkClass("/cart")} />
            </li>
            {/* Search Bar and Dark Mode Button for Mobile */}
            <div className="flex items-center space-x-4">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  // Manually trigger debounced change
                  setSearchTerm(e.target.value);
                  handleSearchChange(e);
                }}
                className="px-4 py-2 rounded-lg border border-gray-300  dark:text-black focus:ring-2  focus:ring-primary-400  transition-all"
              />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors group"
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg> // Sun icon for light mode
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 group-hover:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg> // Moon icon for dark mode
                )}
              </button>
            </div>
          </ul>
        </NavigationMobile>
      </NavigationResponsive>
    </NavigationContainer>
  );
}

export default Header;
