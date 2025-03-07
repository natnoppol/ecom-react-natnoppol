import React from "react";

const PriceTag = ({ price, discountedPrice}) => {

    const finalPrice = 
    price === discountedPrice ? price : (price - discountedPrice).toFixed(2);

    return (
        <p className="font-bold text-primary-800 dark:text-white">
            Price: {finalPrice} NOK
        </p>
    );
};

const PriceTagForSingleProduct = ({ price, discountedPrice}) => {

    const finalPrice = 
    price === discountedPrice ? price : (price - discountedPrice).toFixed(2);

    return (
        <p className="text-3xl font-bold">
            Price: {finalPrice} NOK
        </p>
    );
};


const PriceTagTotalForCartPage = ({ price, discountedPrice, quantity }) => {
    const finalPrice =
      price === discountedPrice
        ? (price * quantity).toFixed(2) // Multiply by quantity if no discount
        : ((price - discountedPrice) * quantity).toFixed(2); // Apply discount and multiply by quantity
  
    return (
      <p className="text-base font-bold text-gray-900 dark:text-white">{finalPrice} NOK</p>
    );
  };
  
  export default PriceTagTotalForCartPage;
  

export {PriceTag, PriceTagForSingleProduct, PriceTagTotalForCartPage};