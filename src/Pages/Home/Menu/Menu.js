import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";
import Breakfast from '../../../Assets/Menu/Breakfast.png'
import Pastry from '../../../Assets/Menu/Pastry.png'
import Cake from '../../../Assets/Menu/Cofee Cake.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
const Menu = () => {
    return (
        <Fade bottom>
            <div className="grid lg:grid-cols-3 gap-10 mt-16 mx-12">
                <div className="menu1">
                    <div className="menu-image">
                        <img src={Pastry} alt="" />
                    </div>
                    <p className="menu-name">
                        <Link to="/dashboard/allproduct" className="menu-link">Pastry</Link>
                        <p className="arro-icon"><HiOutlineArrowNarrowRight className="mr-5" /> <span>(44)</span></p>
                    </p>
                </div>
                <div className="menu1">
                    <div className="menu-image">
                        <img src={Breakfast} alt="" />
                    </div>
                    <p className="menu-name">
                        <Link to="/dashboard" className="menu-link">Breakfast</Link>
                        <p className="arro-icon"><HiOutlineArrowNarrowRight className="mr-5" /> <span>(44)</span></p>
                    </p>
                </div>
                <div className="menu1">
                    <div className="menu-image">
                        <img src={Cake} alt="" />
                    </div>
                    <p className="menu-name">
                        <Link to="/dashboard" className="menu-link">Cake</Link>
                        <p className="arro-icon"><HiOutlineArrowNarrowRight className="mr-5" /> <span>(44)</span></p>
                    </p>
                </div>
            </div>
        </Fade>

    );
};

export default Menu;