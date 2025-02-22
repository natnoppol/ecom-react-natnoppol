import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    console.log("Cart saved to localStorage:", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("Adding product:", product);

    if (!product || !product.data || !product.data.id) {
      console.error("Invalid product format", product);
      return;
    }

    setCart((prevCart) => {
      console.log("Current cart before update:", prevCart);

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

      console.log("Updated cart:", newCart);
      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.data.id !== productId));
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.data.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
