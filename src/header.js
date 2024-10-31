import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;