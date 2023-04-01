import React from 'react';
import './Details.css'

const Details = (props) => {

    const {details} = props;
    console.log(details);

    let total = 0;
    for(const cart of details){
        total = total + cart.Time;
    }

    return (
        <div>
            <h3 className="count-read-time">Spent time on read: {total} min</h3>
        </div>
    );
};

export default Details;