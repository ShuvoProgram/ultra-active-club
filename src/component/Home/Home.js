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
    }, [])
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
                <h1 className='interview'>Interview Question</h1>
                <div className="question">
                    <div className="card-question">
                        <h2>How does react work?</h2>
                        <p>React take all the code you create in JSX ( an extension of Javascript), convert it into Html, Css, Javascript and place it in the index.html at the place where you have the root id.The reactDOM module will do this magical work by rendering the code that you give it.ReactDom to render the code take two arguments, the code that you want to render and the place where to put it (root).

                            Then each html balise, Css or Javascript code will be converted to make your website the way you want.</p>
                    </div>
                    <div className="card-question">
                        <h2>What is the difference between state and props?</h2>
                        <p>Props: The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.
                            State: The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).
                        </p>
                    </div>
                    <div className="card-question">
                        <h2>What are hooks? Tell us the role of useEffect</h2>
                        <p>useEffect handles the side-effects of the functional component. By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                    </div>
                </div>
            </div>
            <div className='cart'>
                <Cart cart={carts} sports={sports}></Cart>
            </div>
        </div>
    );
};

export default Home;