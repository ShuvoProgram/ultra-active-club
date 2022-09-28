import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sports from '../Sports/Sports';
import './Home.css';

const Home = () => {
    const [sports, setSports] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    })
    const addToCart = (add) => {
        setCarts([...carts, add])
    }
    return (
        <div className='container'>
            <div className='sports-card'>
                <h3>Selected Todays Sports</h3>
                <div className="card">
                    {
                        sports.map(sport => <Sports sport={sport} addToCart={addToCart} key={sport._id}></Sports>)
                    }
                </div>
            </div>
            <div className='cart'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Home;