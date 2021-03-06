import React, { useState } from 'react';
import fakeData from '../../ema-john-simple-resources/fakeData';
import { addToDatabaseCart } from '../../ema-john-simple-resources/utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10=fakeData.slice(0,10);
   const [products, setProducts]= useState(first10);
   const [cart, setCart]=useState([]);
   const handleAddProduct = (product) =>{
        const newCart =[...cart,product];
        setCart(newCart);
        const sameProduct= newCart.filter(pd => pd.key ===product.key);
        const count =sameProduct.length;
        addToDatabaseCart(product.key, count);
   }
    return (
        <div className="Shop-container">
            <div className="Product-container">
                { 
                    products.map(pd => <Product
                    key={pd.key}
                    showCart={true}
                       handleAddProduct={handleAddProduct} 
                        product={pd}></Product>)
                }
            </div>
            <div className="Cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;