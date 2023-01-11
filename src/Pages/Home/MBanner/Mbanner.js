import React from 'react';
import './Mbanner.css'
import Fade from 'react-reveal/Fade';
const Mbanner = () => {
    return (
        <Fade bottom>
        <div className='grid lg:grid-cols-3 my-24 mx-5 gap-10'>
            <div className='banner-1'>
                <div className='mbanner-contant'>
                    <p className='offer-price'><span className='offer-per'>70% </span> Sale Off</p>
                    <p className='mb-title'>Best Quality <br /> Products</p>
                    <button className="shop-btnm">SHOP NOW</button>
                </div>
            </div>
            <div className='banner-2'>
                <div className='mbanner-contant'>
                    <p className='offer-price'><span className='offer-per'>25% </span> Sale Off</p>
                    <p className='mb-title'>Hot & Spicy <br /> Pastry</p>
                    <button className="shop-btnm">SHOP NOW</button>
                </div>
            </div>
            <div className='banner-3'>
                <div className='mbanner-contant'>
                    <p className='offer-price'><span className='offer-per'>35% </span> Sale Off</p>
                    <p className='mb-title'>Best Quality <br /> Products</p>
                    <button className="shop-btnm">SHOP NOW</button>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default Mbanner;