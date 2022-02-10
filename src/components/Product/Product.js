import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
const Product = (props) => {
  console.log(props);
    const {img, name, seller , price , stock, key} = props.product;
   // console.log(props.product.name);
    return (
        <div className="product">
          <div>
        <img src={img} alt="" />
          </div>
          <div >
            <h4 className="Product-name"><Link to={"/product/"+key}>{name}</Link></h4>
            <br/>
            <p className="bg-primary"><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p><small>Only {stock} left in stock - Order Soon</small></p>
           {props.showCart === true && <Button className="main-btn"
            onClick={()=>props.handleAddProduct(props.product)}
            > 
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</Button> }
          </div>
        </div>
    );
};

export default Product;