import React from 'react';
import './Sports.css';

const Sports = ({sport, addToCart}) => {
    const {picture, name, age, details, time} = sport;
    return (
        <div className='sports-container'>
            <img src={picture} alt="" />
            <div className="info">
                <h2>{name}</h2>
                <p>{details.slice(0, 200) + "..."}</p>
                <h4>For Age: {age}</h4>
                <h4>Time Required: {time}s</h4>
            </div>
            <button className='btn-cart' onClick={() => addToCart(sport)}>Add To Cart</button>
        </div>
    );
};

export default Sports;