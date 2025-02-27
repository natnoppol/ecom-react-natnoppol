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
const PriceTagForCartPage = ({ price, discountedPrice}) => {

    const finalPrice = 
    price === discountedPrice ? price : (price - discountedPrice).toFixed(2);

    return (
        <td className="py-4">
            {finalPrice} NOK
        </td>
    );
};

const PriceTagTotalForCartPage = ({ price, discountedPrice, quantity }) => {
    const finalPrice =
      price === discountedPrice
        ? (price * quantity).toFixed(2) // Multiply by quantity if no discount
        : ((price - discountedPrice) * quantity).toFixed(2); // Apply discount and multiply by quantity
  
    return (
      <td className="py-4">
        {finalPrice} NOK
      </td>
    );
  };
  
  export default PriceTagTotalForCartPage;
  

export {PriceTag, PriceTagForSingleProduct, PriceTagForCartPage, PriceTagTotalForCartPage};