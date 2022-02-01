import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  console.log(props)
    const {img, name, seller , price , stock} = props.product;
   // console.log(props.product.name);
    return (
        <div className="product">
          <div>
        <img src={img} alt="" />
          </div>
          <div >
            <h4 className="Product-name">{name}</h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>Only {stock} left in stock - Order Soon</small></p>
            <button className="main-btn"
            onClick={()=>props.handleAddProduct(props.product)}
            > 
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
          </div>
        </div>
    );
};

export default Product;