import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <h2>{product.title}</h2>
              <img
                src={product.image?.url || '/default-image.jpg'} // Accessing the image URL
                alt={product.image?.alt || 'Product Image'} // Fallback alt text
                width="150"
                className="product-image"
              />
              <p>Price: ${product.discountedPrice}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;