import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../../Assets/logo.png'
import { GiSelfLove } from 'react-icons/gi';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = ({size}) => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <a href="/" className="nav__brand">
                <img src={logo} alt="" />
            </a>
            <ul className={active}>
                <li className="nav__item">
                    <Link to='/' className="nav__link">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to='/about' className="nav__link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to='/pages' className="nav__link">PAGES</Link>
                </li>
                <li className="nav__item">
                    <Link to='/shop' className="nav__link">Shop</Link>
                </li>
                <li className="nav__item">
                    <Link to='/blog' className="nav__link">Blog</Link>
                </li>
                <li className="nav__item">
                    <Link to='/blog' className="nav__link">Contact</Link>
                </li>
                <li className="nav__item">
                    <Link to='/wishlist' className="nav__link">
                        <GiSelfLove className="text-2xl"/>
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to='/shopCart' className="nav__link flex">
                        <FiShoppingBag className="text-2xl"/> <sup>{size}</sup>
                        
                    </Link>
                </li>
                
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;