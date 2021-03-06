import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    // console.log('Header props?', props)
    /* const [text, setText] = useState('');
    console.log('TEXT:', text) */
    // useEffect(()=>  ,[text]);
    return (
        <div className='header-class'>
            <div className='image-section'>
                <img src={logo} alt="logo!" />
            </div>
            <div className='nav-section'>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Category</a>
                    <a href="#">About Us</a>
                </nav>
                <div className="search-section">
                    <input className='input-class' placeholder='Enter any food name/letter' />
                    <button className='search-button'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;