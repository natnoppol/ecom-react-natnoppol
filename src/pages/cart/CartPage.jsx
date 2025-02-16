import { useCart } from "../../hooks/CartContext";
import {
  CheckoutBackground,
  CheckoutContainer,
  CheckoutResponsive,
} from "../../components/ui/checkout";

import { Button } from "../../components/ui/button";
import {
  PriceTagForCartPage,
  PriceTagTotalForCartPage,
} from "../../components/ui/priceTag";
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => {
    const priceToUse = item.data.price - item.data.discountedPrice ; 
    return sum + (priceToUse * item.quantity); 
  }, 0);
  

  const total = subtotal;
  

  const handleQuantityChange = (itemId, newQuantity) => {
    const validQuantity = Math.max(1, parseInt(newQuantity, 10) || 1);
    updateCartQuantity(itemId, validQuantity);
  };

  function handleCheckout() {
    clearCart();
    navigate('/CheckoutPage');
  }

  return (
    <CheckoutBackground>
      <CheckoutContainer>
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <CheckoutResponsive>
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.length > 0 ? (
                    cart.map((item, index) => {
                      const price = parseFloat(item.data.price) || 0; // Ensure price is a valid number
                      const discountedPrice =
                        parseFloat(item.data.discountedPrice) || 0; // Ensure discounted price is valid
                      const quantity =
                        item.quantity && !isNaN(item.quantity)
                          ? item.quantity
                          : 1; // Ensure quantity is valid, fallback to 1 if invalid

                      return (
                        <tr
                          key={`${item.data.id}-${index}`}
                          className="border-t"
                        >
                          <td className="py-4">
                            <div className="flex items-center">
                              <img
                                src={item.data.image?.url}
                                alt={item.data.image?.alt}
                                className="h-16 w-16 mr-4"
                              />
                              <span className="font-semibold">
                                {item.data.title}
                              </span>
                            </div>
                          </td>
                          <PriceTagForCartPage
                            price={item.data.price}
                            discountedPrice={item.data.discountedPrice}
                            quantity={quantity}
                          />
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                className="border rounded-md py-2 px-4 mr-2"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.data.id,
                                    quantity - 1
                                  )
                                }
                                disabled={quantity <= 1}
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {quantity}
                              </span>
                              <button
                                className="border rounded-md py-2 px-4 ml-2"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.data.id,
                                    quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <PriceTagTotalForCartPage
                            price={price}
                            discountedPrice={discountedPrice}
                            quantity={quantity} // Pass quantity to calculate total correctly
                          />
                          <td className="py-4">
                            <Button
                              variant="destructive"
                              onClick={() => removeFromCart(item.data.id)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        Your cart is empty.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {cart.length > 0 && (
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <Button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                  onClick={handleCheckout} 
                >
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </CheckoutResponsive>
      </CheckoutContainer>
    </CheckoutBackground>
  );
}

export default CartPage;
