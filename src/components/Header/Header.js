import React from 'react';
import logo from '../../ema-john-simple-resources/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
        <nav>
        <a href="/shop">Shop</a>
        <a href="/OrderReview">Order Review</a>
        <a href="/ManageInventory">Manage Inventory</a>
        </nav>
        </div>
    );
};

export default Header;