import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { Button } from '../../components/ui/button';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

 
  // Async function to fetch the product data
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  // Call the fetchProduct function when the component mounts
  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.data.image?.url || '/default-image.jpg'}
        alt={product.data.image?.alt || 'Product Image'}
        width="200"
      />
      <p>{product.description}</p>
      <p>Price: {product.discountedPrice} NOK</p>
      {product.discountedPrice < product.price && (
        <p style={{ color: 'red' }}>
          Discount: {((1 - product.discountedPrice / product.price) * 100).toFixed(0)}% OFF
        </p>
      )}
      <Button  onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
}

export default ProductPage;