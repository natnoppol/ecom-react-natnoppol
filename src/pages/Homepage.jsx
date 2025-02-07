import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://v2.api.noroff.dev/online-shop');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProducts(data);
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1>Products</h1>
      <ul className="product-list">
        {products.data.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <h2>{product.title}</h2>
              <img
                src={product.image.url || '/default-image.jpg'} // Corrected image URL access
                alt={product.title || 'Product Image'} // Fallback alt text
                width="150"
                className="product-image"
              />
              <p>Price: {product.discountedPrice} NOK</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;