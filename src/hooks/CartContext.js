import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      console.log("Cart loaded from localStorage:", savedCart); // Debug log
      setCart(JSON.parse(savedCart)); // Set the cart from localStorage
    } else {
      console.log("No cart found in localStorage"); // Debug log if there's no cart in localStorage
    }
  }, []);

  // Keep localStorage in sync with state
  useEffect(() => {
    if (cart.length > 0) {
      console.log("Updating localStorage with cart:", cart); // Debug log
      localStorage.setItem("cart", JSON.stringify(cart)); // Sync with localStorage
    }
  }, [cart]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const addToCart = (product) => {
    console.log("Adding product to cart:", product); // Debug log
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.data.id === product.data.id);
      let newCart;

      if (existingItem) {
        newCart = prevCart.map((item) =>
          item.data.id === product.data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { data: product.data, quantity: 1 }];
      }

      console.log("New cart after add:", newCart); // Debug log
      localStorage.setItem("cart", JSON.stringify(newCart)); // Update localStorage
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    console.log("Removing product from cart:", productId); // Debug log
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.data.id !== productId);
      console.log("New cart after remove:", updatedCart); // Debug log
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    console.log("Updating quantity for item:", itemId, "New quantity:", newQuantity); // Debug log
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.data.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      );
      console.log("New cart after quantity update:", updatedCart); // Debug log
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  const clearCart = () => {
    console.log("Clearing cart"); // Debug log
    setCart([]); 
    localStorage.removeItem("cart"); // Remove cart from localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
