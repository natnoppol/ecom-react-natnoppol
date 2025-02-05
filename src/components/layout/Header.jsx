import { Link } from 'react-router-dom';
import { CartProvider } from '../../hooks/CartContext';
import CartIcon from '../../components/icon/CartIcon';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <CartProvider>
          <CartIcon />
        </CartProvider>
      </nav>
    </header>
  );
}

export default Header;