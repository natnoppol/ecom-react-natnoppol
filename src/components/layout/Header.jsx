import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../components/icon/CartIcon";
import {
  NavigationContainer,
  NavigationResponsive,
  NavigationMenu,
  NavigationLogo,
  NavigationMobile,
} from "../ui/navigation-menu";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === "/cart";

  useEffect(() => {
    if (!isMenuOpen) {
      document.getElementById("hamburger-menu-button")?.focus();
    }
  }, [isMenuOpen]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  }, []);

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
    console.log("Mobile Menu Open:", isMenuOpen);
    console.log("Current Path:", location.pathname);
  }, [isMenuOpen, location]);
  

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-primary-700 px-4 py-2 rounded-md font-semibold transition-all"
      : "text-black dark:text-white px-4 py-2 font-semibold transition-all";
  };

  return (
    <NavigationContainer>
      <NavigationLogo>
        <Link
          to="/"
          className=" text-primary-600 hover:text-primary-500 transition-colors self-center text-2xl font-bold whitespace-nowrap dark:text-white "
        >
          ShopHub
        </Link>
      </NavigationLogo>
      <NavigationResponsive>
        {/* Desktop Menu */}
        <NavigationMenu className="lg:flex hidden items-center space-x-6">
          <Link to="/" className={getNavLinkClass("/")}>
            Home
          </Link>
          <Link to="/contact" className={getNavLinkClass("/contact")}>
            Contact
          </Link>

          <CartIcon className={getNavLinkClass("/cart")} />

          {/* Display Search Bar and Dark Mode Button on Desktop */}
          <div className="flex items-center space-x-6 lg:ml-8">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-400 transition-all"
            />
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors group"
            >
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
              </svg>
            </button>
          </div>
        </NavigationMenu>

        {/* Mobile Menu */}
        <NavigationMobile
          className={`lg:hidden flex justify-between items-center w-full ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col mt-4 space-y-4">
            <li>
              <Link to="/" onClick={closeMenu} className={getNavLinkClass("/")}>
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
            <div className="flex items-center space-x-4 ">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary-400 transition-all"
              />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors group"
              >
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
                </svg>
              </button>
            </div>
          </ul>
        </NavigationMobile>
      </NavigationResponsive>

      {/* Hamburger Menu Button */}

      <button
        onClick={toggleMenu}
        id="hamburger-menu-button"
        className="lg:hidden p-2 rounded-md text-primary-600 hover:text-primary-700 dark:text-white dark:hover:text-primary-400 transition-colors"
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
    </NavigationContainer>
  );
}

export default Header;
