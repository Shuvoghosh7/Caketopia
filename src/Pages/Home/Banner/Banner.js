import React from "react";
import './Banner.css'
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="banner mt-5">
            <Fade left cascade>
                <div className="banner-contant">
                    <h1 className="offer-title">UP TO SALE <span className="offer-persen">50% OFF</span></h1>
                    <p className="banner-title">WE BAKE WITH <br /> PASION.</p>
                    <Link to="/dashboard/allproduct">
                        <button className="shop-btn">SHOP NOW</button>
                    </Link>

                </div>
            </Fade>

        </div>
    );
};

export default Banner;