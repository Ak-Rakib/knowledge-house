import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {name, profile, image, Date, title, Time} = props.i;
    console.log(image);
    return (
        <div className='cart-container'>
            <div className="cover-img-p">
               <img className='cover-img' src={image} alt="" />
            </div>
            <div className="profile-parents">
                <div className="profile-child01">
                        <img className='inside-profile' src={profile} alt="" />
                    <div className="profile-details">
                        <h4 className='profile-name'>{name}</h4>
                        <span className='date-style'>{Date}</span>
                    </div>
                </div>
                <div className="time-child02">
                    <p className='time-style'>0<span>{Time}</span> min read</p> 
                </div>
            </div>
        </div>
    );
};

export default Cart;