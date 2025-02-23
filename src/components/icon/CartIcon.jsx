import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";
import { useEffect, useState } from "react";

function CartIcon() {
  const { cart } = useCart();
  const [totalItems, setTotalItems] = useState(0);

  // Update totalItems whenever cart changes
  useEffect(() => {
    if (Array.isArray(cart)) {
      const newTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(newTotal);
    }
  }, [cart]); // This effect will run when the cart changes

  // Memoized badge styles
  const badgeStyle = {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    background: "#b91c1c",
    borderRadius: "50%",
    padding: "5px",
    color: "white",
    fontSize: "12px",
    minWidth: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Link
      to="/cart"
      style={{
        position: "relative",
        padding: "10px",
        fontWeight: "600",
      }}
      aria-label={`View cart, ${totalItems > 0 ? `${totalItems} items` : "empty"}`}
    >
      🛒 Cart
      {totalItems > 0 && (
        <span style={badgeStyle} aria-live="polite">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
