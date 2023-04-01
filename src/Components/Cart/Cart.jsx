import React from 'react';
import './Cart.css';
import { FaBeer, FaSave } from "react-icons/fa";

const Cart = (props) => {
    const {name, profile, image, Date, title, Time, hashtag} = props.i;
    console.log(image);
    return (
        <div className='cart-container'>
            <div className="cover-img-p">
               <img className='cover-img' src={image} alt="" />
            </div>
            <div className="details-container">
            <div className="profile-parents">
                <div className="profile-child01">
                        <img className='inside-profile' src={profile} alt="" />
                    <div className="profile-details">
                        <h4 className='profile-name'>{name}</h4>
                        <span className='date-style'>{Date}</span>
                    </div>
                </div>
                <div className="time-child02">
                    <p className='time-style'>0<span>{Time}</span> min read 
                    <span className='icon'><FaSave /></span>
                    </p> 
                </div>
            </div>
            <h2 className='cart-title'>{title}</h2>
            <p className='hashtag'>{hashtag}</p>
            <a href="">Mark and read</a>
            </div>
        </div>
    );
};

export default Cart;