import React from "react";

const PriceTag = ({ price, discountedPrice}) => {

    const finalPrice = 
    price === discountedPrice ? price : (price - discountedPrice).toFixed(2);

    return (
        <p className="text-primary-600 font-bold">
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

export {PriceTag, PriceTagForSingleProduct};