import React from 'react';
import logo from '../../image/running.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <span>Sports Club</span>
        </div>
    );
};

export default Header;