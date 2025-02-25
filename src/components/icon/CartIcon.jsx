import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

function CartIcon() {
  const { cart } = useCart();

  const uniqueItemCount = new Set(cart.map((item) => item.data.id)).size;

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
      aria-label={`View cart, ${uniqueItemCount > 0 ? `${uniqueItemCount} items` : "empty"}`}
    >
      🛒 Cart
      {uniqueItemCount > 0 && <span style={badgeStyle}>{uniqueItemCount}</span>}
    </Link>
  );
}

export default CartIcon;
