import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div className='cart-container'>
            <div className="person">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Rory_Kinnear_2012_%28cropped%29.jpg/143px-Rory_Kinnear_2012_%28cropped%29.jpg" alt="" />
                <div className="name-loc">
                    <h2>Shuvo khan</h2>
                    <address>Dhaka, Bangladesh</address>
                </div>
            </div>
            <div className="body-mess">
                <div className="weight">
                    <p>75Kg</p>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <p>6.5</p>
                    <p>Height</p>
                </div>
                <div className="ages">
                    <p>25yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="time-break">
                <h2>Add A Break</h2>
                <div className="break">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>
            <div className="practice-details">
                <h2>Practice Details</h2>
                <div className="practice-time">
                    <span>Practice Time</span>
                    <span>2500s</span>
                </div>
                <div className="break-time">
                    <span>Break Time</span>
                    <span>2500s</span>
                </div>
            </div>
            <button className='completed-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;