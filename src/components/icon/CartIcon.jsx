import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';

function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" style={{ position: 'relative', padding: '10px' }}>
      🛒 Cart
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'red',
            borderRadius: '50%',
            padding: '5px',
            color: 'white',
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;