import { useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";
import {
  CheckoutContainer,
  CheckoutBackground,
  CheckoutResponsive,
} from "../../components/ui/checkout";

function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState("card");
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => {
    const priceToUse = item.data.price - item.data.discountedPrice;
    return sum + priceToUse * item.quantity;
  }, 0);
  const total = subtotal;

  // จัดการกับการส่งฟอร์ม (checkout)
  function handleCheckout(e) {
    e.preventDefault();
    clearCart();
    navigate("/checkout-success");
  }

  // นำทางกลับไปที่หน้าตะกร้า
  function prevToCart() {
    navigate("/cart");
  }

  return (
    <CheckoutContainer>
      <CheckoutBackground>
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Checkout
        </h2>
        <CheckoutResponsive>
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-800">
              Choose your payment method
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="card"
                  value="card"
                  checked={selectedPayment === "card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label
                  htmlFor="card"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                  />
                  <img
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="card2"
                  />
                  <img
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="card3"
                  />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="paypal"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                />
                <label
                  htmlFor="paypal"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/paypal.webp"
                    className="w-20"
                    alt="paypalCard"
                  />
                </label>
              </div>
            </div>
            <form className="mt-8" onSubmit={handleCheckout}>
              <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name of card holder"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Postal code"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Card number"
                    className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="px-7 py-3.5 text-sm tracking-wide bg-white hover:bg-gray-50 text-gray-800 rounded-md"
                  onClick={prevToCart}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white p-6 rounded-md max-lg:-order-1">
            <h3 className="text-lg font-bold text-gray-800">Summary</h3>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">
                Sub total{" "}
                <span className="ml-auto font-bold">
                  {subtotal.toFixed(2)}NOK
                </span>
              </li>
              <hr />
              <li className="flex flex-wrap gap-4 text-base font-bold">
                Total <span className="ml-auto">{total.toFixed(2)}NOK</span>
              </li>
            </ul>
          </div>
        </CheckoutResponsive>
      </CheckoutBackground>
    </CheckoutContainer>
  );
}

export default CheckoutPage;
