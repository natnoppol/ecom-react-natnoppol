import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  // check if this is the cart page
  const isCartPage = location.pathname === "/cart";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`${
          isCartPage ? "flex-1 p-10" : "flex-1 py-8 flex justify-center items-center"
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
