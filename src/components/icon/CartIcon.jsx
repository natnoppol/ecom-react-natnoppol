import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";

function CartIcon() {
  const { cart } = useCart();
  const location = useLocation(); 

  const uniqueItemCount = new Set(cart.map((item) => item.data.id)).size;

  
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-primary-700 px-4 py-2 rounded-md font-semibold transition-all"
      : "text-black dark:text-white px-4 py-2 font-semibold transition-all";
  };

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
      className={getNavLinkClass("/cart")} 
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
