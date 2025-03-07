import { useCart } from "../../hooks/CartContext";
import {
  CartContainer,
  CartLeftContainer,
  CartRightContainer,
} from "../../components/ui/cart";
import {
  PriceTagTotalForCartPage,
} from "../../components/ui/priceTag";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => {
    const priceToUse = item.data.price - item.data.discountedPrice;
    return sum + priceToUse * item.quantity;
  }, 0);
  const total = subtotal;

  const handleQuantityChange = (itemId, newQuantity) => {
    const validQuantity = Math.max(1, parseInt(newQuantity, 10) || 1);
    updateCartQuantity(itemId, validQuantity);
  };

  function handleCart() {
    navigate("/checkout");
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        <CartContainer>
          <CartLeftContainer>
            <div className="space-y-6">
              {cart?.length > 0 ? (
                cart.map((item, index) => {
                  const price = parseFloat(item.data.price) || 0;
                  const discountedPrice =
                    parseFloat(item.data.discountedPrice) || 0;
                  const quantity =
                    item.quantity && !isNaN(item.quantity) ? item.quantity : 1;

                  return (
                    <div
                      key={`${item.data.id}-${index}`}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        {/* Product Image */}
                        <Link
                          to={`/product/${item.data.id}`}
                          className="shrink-0 md:order-1"
                        >
                          <img
                            src={item.data.image?.url}
                            alt={item.data.image?.alt}
                            className="h-20 w-20 dark:hidden"
                          />
                          <img
                            src={item.data.image?.url}
                            alt={item.data.image?.alt}
                            className="hidden h-20 w-20 dark:block"
                          />
                        </Link>
                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                              onClick={() =>
                                handleQuantityChange(item.data.id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                              value={quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.data.id,
                                  e.target.value
                                )
                              }
                              placeholder=""
                              required
                            />
                          </div>

                          <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            onClick={() =>
                              handleQuantityChange(item.data.id, quantity + 1)
                            }
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                          <div className="text-end md:order-4 md:w-32">
                            <PriceTagTotalForCartPage
                              price={price}
                              discountedPrice={discountedPrice}
                              quantity={quantity} // Pass quantity to calculate total correctly
                            />
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <Link
                            to={`/product/${item.data.id}`}
                            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {item.data.title}
                          </Link>
                          <div className="flex items-center gap-4">
                          <button type="button" 
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          onClick={() => removeFromCart(item.data.id)}>
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <p className="text-center py-8 text-xl text-gray-600">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </div>
          </CartLeftContainer>
          <CartRightContainer>
            {cart.length > 0 && (
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">{subtotal.toFixed(2)}NOK</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">0 NOK</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">{total.toFixed(2)}NOK</dd>
                    </dl>
                  </div>
                  <button href="#" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleCart}>Proceed to Checkout</button>
                </div>
              </div>
            )}
          </CartRightContainer>
        </CartContainer>
      </div>
    </section>
  );
}

export default CartPage;
