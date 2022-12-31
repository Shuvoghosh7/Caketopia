import React from "react";
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner mt-5">
            <div className="banner-contant">
                <h1 className="offer-title">UP TO SALE <span className="offer-persen">50% OFF</span></h1>
                <p className="banner-title">WE BAKE WITH <br /> PASION.</p>
                <button className="shop-btn">SHOP NOW</button>
            </div>

        </div>
    );
};

export default Banner;