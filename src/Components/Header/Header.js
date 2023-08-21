import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png.webp'
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Header = () => {
    return (
        <header>
            <div className='logo-search-Box'>
                <div className="logo-box">
                    <img src={logo} alt="" />
                </div>
                <div className="search-box">
                    <div className="search-bar">
                        <input type="text" placeholder='Search Book by Author or Publisher...' />
                        <AiOutlineSearch className='search-icon' />
                    </div>
                </div>
            </div>
            <div className="signNcart-box">
                <ul>
                    <li>FAQ</li>
                    <li>Track Order</li>
                </ul>
                <AiOutlineShoppingCart className='cart-icon' />
                <button className='primary rounded'>Sign in</button>
            </div>
        </header>
    )
}

export default Header
