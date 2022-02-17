
import React from 'react';

const ReviewItem =(props) => {
    console.log(props)
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom: '2px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft: '20px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4>product name: {name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="btn btn-primary">Add to cart</button>
        </div>
    );
};
export default ReviewItem;