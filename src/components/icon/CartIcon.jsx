import { Link } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";
import { useMemo } from "react";

function CartIcon() {
  const { cart } = useCart();

  
  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  return (
    <Link to="/cart" style={{ position: "relative", padding: "10px",  fontWeight: "600"}}>
      🛒 Cart
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: -10,
            background: "#b91c1c",
            borderRadius: "50%",
            padding: "5px",
            color: "white",
            fontSize: "12px",  
            minWidth: "20px",  
            textAlign: "center",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
