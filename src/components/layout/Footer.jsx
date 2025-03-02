import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../components/icon/CartIcon";
import {
  FooterContainer,
  FooterResonsive,
  FooterMenu,
} from "../ui/footer";

// Navigation links
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
];

// Get the class based on the active route
const getNavLinkClass = (path, location) => {
  return location.pathname === path
    ? "text-white bg-primary-700 px-4 py-2 rounded-md font-semibold transition-all"
    : "text-black dark:text-white px-4 py-2 font-semibold transition-all";
};

function Footer() {
  const location = useLocation();

  return (
    <FooterContainer>
      <FooterResonsive>
        <FooterMenu>
          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">About Us</h3>
            <p className="text-primary-700 dark:text-gray-300">Online shopping for your own business</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-700 dark:text-gray-300">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className={getNavLinkClass(link.to, location)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">Contact Us</h3>
            <CartIcon /> {/* CartIcon will handle its own styling internally */}
          </div>
        </FooterMenu>
      </FooterResonsive>
    </FooterContainer>
  );
}

export default Footer;

