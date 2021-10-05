import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="head">
            <h1 className="head-name">Learn Arabic</h1>

            <div>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/support">Support</Link>
                <Link className="link" to="/about">About Us</Link>
            </div>

        </div>
    );
};

export default Header;