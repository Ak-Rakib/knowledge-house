import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {name} = props.i;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Cart;