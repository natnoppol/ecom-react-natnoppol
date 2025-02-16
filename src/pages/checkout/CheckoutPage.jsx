import { useCart } from '../../hooks/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckoutBackground, CheckoutContainer, CheckoutResponsive} from '../../components/ui/checkout';

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  function handleCheckout() {
    clearCart();
    navigate('/CheckoutSuccess');
  }

  console.log(cart)
  return (
    <CheckoutBackground>
      <CheckoutContainer>
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <CheckoutResponsive>
        {cart.data.map((item) => (
          <div key={item.id}>
            {item.image?.url}
            {item.title}
          </div>
        ))}
        <button onClick={handleCheckout}>Checkout</button>
      </CheckoutResponsive>
      </CheckoutContainer>
    </CheckoutBackground>
  );
}

export default CheckoutPage;