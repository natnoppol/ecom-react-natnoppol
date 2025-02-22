import { useState } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../hooks/CartContext";
import CartIcon from "../../components/icon/CartIcon";
import {
  NavigationContainer,
  NavigationResonsive,
  NavigationMenu,
  NavigationLogo,
} from "../ui/navigation-menu"

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <NavigationContainer>
      <NavigationResonsive>
      <NavigationMenu>
        <NavigationLogo>
          <Link to="/" className="text-2xl font-bold text-primary-600 hover:text-primary-500 transition-colors">
              ShopHub
          </Link>
        </NavigationLogo>
        <Link to="/" className="font-semibold">Home</Link>
        <Link to="/contact" className="font-semibold">Contact</Link>
        <CartProvider>
          <CartIcon />
        </CartProvider>
        <div className="flex items-center space-x-4">
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
                className="h-6 w-6 group-hover:rotate-180 transition-transform"
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
      </NavigationResonsive>
    </NavigationContainer>

  );
}

export default Header;
