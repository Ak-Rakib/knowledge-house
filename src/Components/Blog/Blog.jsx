import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Blog.css';

const Blog = () => {

    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setInfo(data));
    },[]);

    return (
        <div className='blog-container'>
            <div className="main-blog">
                {
                    info.map(i => <Cart
                        key={i.id}
                        i = {i}
                    ></Cart>)
                }
            </div>
            <div className="blog-detail">
                <h1>Detail</h1>
            </div>
        </div>
    );
};

export default Blog;