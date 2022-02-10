import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/Product/Product';
import fakeData from '../ema-john-simple-resources/fakeData';

const ProductDetails = () => {
    const {productKey}=useParams();
    const product=fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
           
            <Product showCard={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;