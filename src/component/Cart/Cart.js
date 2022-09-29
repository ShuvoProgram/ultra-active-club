import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './Cart.css';
const Cart = ({ cart, sports }) => {
    const [sport, setSport] = useState([])
    // console.log(sport)
    // console.log(cart)
    // const su = sports.map(e => e.break)
    // console.log(su);
    let initialBreak = 0;
    const breakCount = (uniqueID) => {
        const exists = cart.find(b => b.id === uniqueID.id);
        initialBreak = exists;
    }
    let initialTime = 0;
    cart.forEach((e) => {
        const time = e.time;
        initialTime = initialTime + time;
    })
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
                        cart.map(e => {
                            return(
                                <button onClick={() => breakCount(e._id)}>{e.break}s</button>
                            )
                        })
                    }
                    {/* <button onClick={breakCount}>{su[0]}</button>
                    <button>{su[1]}</button>
                    <button>{su[2]}</button>
                    <button>{su[3]}</button>
                    <button>{su[4]}</button> */}
                </div>
            </div>
            <div className="practice-details">
                <h2>Practice Details</h2>
                <div className="practice-time">
                    <span>Practice Time</span>
                    <span>{initialTime} Sec</span>
                </div>
                <div className="break-time">
                    <span>Break Time</span>
                    <span>{initialBreak}</span>
                </div>
            </div>
            <button className='completed-btn' onClick={() => complete()}>Activity Completed</button>
        </div>
    );
};

export default Cart;