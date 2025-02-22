import Layout from "./components/layout/Layout";
import AppRoutes from "./routes";
import { CartProvider } from "./hooks/CartContext";

function App() {
  return (
    <CartProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </CartProvider>
  );
}

export default App;
