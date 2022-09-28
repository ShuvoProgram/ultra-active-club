import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Sports from '../Sports/Sports';
import './Home.css';

const Home = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSports(data))
    })
    return (
        <div className='container'>
            <div className='sports-card'>
                <h3>Selected Todays Sports</h3>
                <div className="card">
                    {
                        sports.map(sport => <Sports sport={sport}></Sports>)
                    }
                </div>
            </div>
            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;