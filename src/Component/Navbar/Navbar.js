import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../Assets/logo.png'
import { GiSelfLove } from 'react-icons/gi';
import { FiShoppingBag } from 'react-icons/fi';

const Navbar = ({ size }) => {
    const [user, setUser] = useState([]);
    const jsonToken = localStorage.getItem('token')
    const tokenParse = JSON.parse(jsonToken)
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const { pathname } = useLocation()

    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    useEffect(() => {
        fetch('https://caketopia-server-production.up.railway.app/api/v1/user/me', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${tokenParse}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data.data))
    }, [])
    const logout=()=>{
        localStorage.clear()
        window.location.reload(true) 
    }
    return (
        <nav className="nav">
            {pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

            </label>}
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
                    <Link to='/dashboard/allproduct' className="nav__link">Shop</Link>
                </li>
                <li className="nav__item">
                    <Link to='/blogs' className="nav__link">Blog</Link>
                </li>
                <li className="nav__item">
                    <Link to='/blog' className="nav__link">Contact</Link>
                </li>
                <li className="nav__item">
                    <Link to='/dashboard' className="nav__link">Dashboard</Link>
                </li>
                <li className="nav__item">
                    {
                        user ? (
                            <>
                                <button onClick={logout} className="nav__link">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to='/singin' className="nav__link">sing in </Link>

                            </>
                        )
                    }
                </li>
                <li className="nav__item">
                    <Link to='/singup' className="nav__link">sing up </Link>
                </li>
                {/*  <li className="nav__item">
                    <Link to='/wishlist' className="nav__link">
                        <GiSelfLove className="text-2xl" />
                    </Link>
                </li> */}
                <li className="nav__item">
                    <Link to='/shopCart' className="nav__link flex">
                        <FiShoppingBag className="text-2xl" /> <sup>{size ? size : 0}</sup>

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