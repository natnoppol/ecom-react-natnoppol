import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"; // Corrected import path

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
        setProducts(data);
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
      <CardTitle>Products</CardTitle>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.data.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="block">
              <Card className="h-full">
                <CardContent>
                  <img
                    src={product.image.url || "/default-image.jpg"}
                    alt={product.title || "Product Image"}
                    className="w-full h-48 object-cover mb-4"
                    />
                    <div className="p-6">
                      <CardHeader>
                        <h3>{product.title}</h3>
                      </CardHeader>
                      <CardDescription>
                        <p className="text-primary-600 font-bold">Price: {product.discountedPrice} NOK</p>
                      </CardDescription>
                    </div>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
