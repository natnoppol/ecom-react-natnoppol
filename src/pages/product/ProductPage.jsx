import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import { Button } from '../../components/ui/button';

import {
  SingleProductContainer,
  SingleProductResponsive,} from '../../components/ui/singleProduct'

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
    <SingleProductContainer>
      <SingleProductResponsive>
        <div className='space-y-4'>
          <div className="aspect-square bg-gray-100 dark:bg-gray-800 
          rounded-xl overflow-hidden">
          <img
            src={product.data.image?.url || '/default-image.jpg'}
            alt={product.data.image?.alt || 'Product Image'}
            className='w-full h-full object-cover'
          />
          </div>
          
          <h1>{product.data.title}</h1>
          <p>{product.description}</p>
          <p>Price: {product.discountedPrice} NOK</p>
          {product.discountedPrice < product.price && (
            <p style={{ color: 'red' }}>
              Discount: {((1 - product.discountedPrice / product.price) * 100).toFixed(0)}% OFF
            </p>
          )}
          <Button  onClick={() => addToCart(product)}>Add to Cart</Button>
        </div>
      </SingleProductResponsive>
    </SingleProductContainer>
      
  );
}

export default ProductPage;