import { useCart } from '../../hooks/CartContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    clearCart();
    navigate('/checkout-success');
  }

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default CheckoutPage;