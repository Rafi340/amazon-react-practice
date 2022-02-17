import React, { useEffect, useState } from 'react';
import fakeData from '../../ema-john-simple-resources/fakeData';
import { getDatabaseCart } from '../../ema-john-simple-resources/utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProduct);
    },[])
    return (
        <div>
            <h2>Cart Count: {cart.length}</h2>
            {
                cart.map(pd => <ReviewItem
                    key={pd.key}
                    product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;