import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";
import { PriceTagForSingleProduct } from "../../components/ui/priceTag";
import {
  SingleProductContainer,
  SingleProductResponsive,
} from "../../components/ui/singleProduct";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  // Async function to fetch the product data
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // Call the fetchProduct function when the component mounts
  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <SingleProductContainer>
      <SingleProductResponsive>
        <div className="space-y-4">
          <div
            className="aspect-square bg-gray-100 dark:bg-gray-800 
          rounded-xl overflow-hidden"
          >
            <img
              src={product.data.image?.url || "/default-image.jpg"}
              alt={product.data.image?.alt || "Product Image"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.data.title}</h1>
            </div>

            <PriceTagForSingleProduct
              price={product.data.price}
              discountedPrice={product.data.discountedPrice}
            />
          </div>
          <div className="text-lg font-semibold">
            {product.data.description}
          </div>
          <div className="flex gap-4">
            <button
              className="flex-1 bg-sky-800 text-white py-4 rounded-xl hover:bg-sky-800/90"
              onClick={handleAddToCart}
            >
              {addedToCart ? "Added!" : "Add to cart"}
            </button>
          </div>
        </div>
      </SingleProductResponsive>
      {/* <!-- Reviews Section --> */}
      <div className="mt-16">
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="flex gap-8">
            <button className="px-4 py-2 text-sky-700 border-b-2 border-sky-700 dark:text-white font-bold">
              Reviews
            </button>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    {product.data.reviews.map((review) => (
                      <div key={review.id}>
                        <h4 className="font-bold">{review.username}</h4>
                        <p>{review.comment}</p>
                        <p className="text-gray-600 dark:text-gray-300 font-semibold">
                          {review.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Rating section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {product.data.reviews.length > 0 && (
                <div className="text-5xl font-bold text-sky-700">
                  Rating {product.data.reviews[0].rating}
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </SingleProductContainer>
  );
}

export default ProductPage;
