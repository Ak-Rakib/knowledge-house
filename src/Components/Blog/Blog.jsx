import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Blog.css';

const Blog = () => {

    const [info, setInfo] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setInfo(data));
    },[]);

    const addToDetails = (i) => {
        const addDetails = [...details, i];
        setDetails(addDetails);
    }

    return (
        <div className='blog-container'>
            <div className="main-blog">
                {
                    info.map(i => <Cart
                        key={i.id}
                        i = {i}
                        addToDetails = {addToDetails}
                    ></Cart>)
                }
            </div>
            <div className="blog-detail">
                    <Details
                        details = {details}
                    ></Details>
            </div>
        </div>
    );
};

export default Blog;