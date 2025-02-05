import { useCart } from '../../hooks/CartContext';
import { Button } from '../../components/ui/button';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <Button variant="destructive" onClick={clearCart}>Clear Cart</Button>
      )}
    </div>
  );
}

export default CartPage;