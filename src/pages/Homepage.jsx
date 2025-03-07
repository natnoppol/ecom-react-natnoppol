import { useEffect, useState } from "react";
import {
  CardTitle,
} from "../components/ui/card"; 
import Product from "../components/ui/product";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        if (!Array.isArray(data.data)) {
          throw new Error("Invalid data format from API");
        }
        setProducts(data.data);
        console.log("data of product on Homepage",data.data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <CardTitle>Our Products</CardTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
