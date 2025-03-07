import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card"; 
import { PriceTag } from "../ui/priceTag"; 

const Product = ({ product }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <img
          src={product.image?.url || "/default-image.jpg"}
          alt={product.title || "Product Image"}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <div className="p-4">
          <CardHeader className="p-0">
            <p className="text-lg font-semibold truncate">
              {product.title}
            </p>
          </CardHeader>
          {product.discountedPrice !== product.price && (
            <div className="flex justify-center mt-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs w-1/2 mx-auto">
              Discount: {product.discountedPrice} NOK
            </div>
          )}
          <CardDescription className="mt-2 text-center">
            <PriceTag price={product.price} discountedPrice={product.discountedPrice} />
          </CardDescription>
          <Link to={`/product/${product.id}`} className="block mt-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              View Product
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;