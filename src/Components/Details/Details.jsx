import React from 'react';
import './Details.css'

const Details = (props) => {

    const {details} = props;
    const {bookmarked} = props;

    let total = 0;
    for(const cart of details){
        total = total + cart.Time;
    }

    let count = 0;
    for (const blog  of bookmarked){
        count = count + parseInt(blog.id);
    }

    let title;
    for(const text of bookmarked){
        title = text.title;
    }

    return (
        <div>
            <h4 className="count-read-time">Spent time on read: {total} min</h4>
            <div className="other-details">
                <h4>Bookmarked Blogs: {count}</h4> 
                <p className='selected-blog'>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default Details;