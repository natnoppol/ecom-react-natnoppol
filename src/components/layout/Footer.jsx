import { Link } from "react-router-dom";
import { CartProvider } from "../../hooks/CartContext";
import CartIcon from "../../components/icon/CartIcon";
import {
  FooterContainer,
  FooterResonsive,
  FooterMenu,
} from "../ui/footer";

const navLinks = [
  { to: "/", label: "Home"},
  { to: "/contact", label: "contact"},
];

function Footer() {
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
                  <li key ={index}>
                    <Link to = {link.to} className="hover:text-primary-500 transition-colors">
                    {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
          <CartProvider>
            <h3 class="text-lg font-semibold text-primary-800 dark:text-white mb-4">Contact Us</h3>
            <CartIcon />
          </CartProvider>
          </div>
        </FooterMenu>
      </FooterResonsive>
    </FooterContainer>
  );
}

export default Footer;
