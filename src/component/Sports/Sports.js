import React from 'react';
import './Sports.css';

const Sports = ({sport}) => {
    const { picture, name, age, details} = sport;
    return (
        <div className='sports-container'>
            <img src={picture} alt="" />
            <div className="info">
                <h2>{name}</h2>
                <p>{details.slice(0, 200) + "..."}</p>
                <h4>For Age: {age}</h4>
                <h4>Time Required: </h4>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Sports;