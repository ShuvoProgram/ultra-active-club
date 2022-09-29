import React, { useState } from 'react';
import swal from 'sweetalert';
import './Cart.css';
const Cart = ({ cart, sports }) => {
    const [breakBtn, setBreakBtn] = useState(localStorage.getItem("breakBtn") ? localStorage.getItem("breakBtn") : 0);
    const breakCount = (e) => {
        localStorage.setItem("breakBtn", e)
        setBreakBtn(localStorage.getItem("breakBtn"))
    }
    // let initialTime = 0;
    // cart.forEach((e) => {
    //     const time = e.time;
    //     initialTime = initialTime + time;
    //     })
    // cart.map(e => )
    const complete = () => {
        swal("Good job!", "Completed Activity!", "success");
    }
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
                    {
                        sports.map(e => <button onClick={() => breakCount(e.break)}>{e.break}</button>)
                    }
                </div>
            </div>
            <div className="practice-details">
                <h2>Practice Details</h2>
                <div className="practice-time">
                    <span>Practice Time</span>
                    <span>{cart} Sec</span>
                </div>
                <div className="break-time">
                    <span>Break Time</span>
                    <span>{breakBtn} Sec</span>
                </div>
            </div>
            <button className='completed-btn' onClick={() => complete()}>Activity Completed</button>
        </div>
    );
};

export default Cart;