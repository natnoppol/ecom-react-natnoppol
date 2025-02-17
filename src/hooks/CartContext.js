import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    console.log("Adding product:", product);

    setCart((prevCart) => {
      console.log("Current cart:", prevCart);

      const existingItemIndex = prevCart.findIndex((item) => item.data.id === product.data.id);
  
      if (existingItemIndex !== -1) {
        // if item exist, add only quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        // If no item in the card, add a new item
        return [...prevCart, { ...product, quantity: 1 }];
      }
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

  const clearCart =() =>{
    setCart([]); 
  }
  



  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,  updateCartQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}