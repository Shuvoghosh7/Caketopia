import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import Banner from '../Home/Banner/Banner';

import Menu from './Menu/Menu';
import Mbanner from './MBanner/Mbanner';
import MenuProduct from './MenuProduct/MenuProduct';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Fade from 'react-reveal/Fade';
import HomeBloges from './HomeBloge/HomeBloges';


const Home = () => {
    return (
        <div>

            <Banner />
            <Menu />
            <div>
                <Fade bottom>
                    <div >
                        <Fade bottom cascade>
                            <h1 className='product-title'>New Products</h1>
                            <p className='product-about my-5'>Caketopia is a Cake & Pastry online based shop.<br/> It is an International Standard high quality and real food and pastry shop.</p>
                        </Fade>

                        <div className='text-center'>
                            <Link to="/OurFeatures" className='mr-8 product-item'>Our Products</Link>
                            <Link to="/bestSellers" className='mr-8 product-item'>Best Sellers</Link>
                            <Link to="/newItems" className='product-item'>New Items</Link>
                        </div>
                    </div>
                </Fade>
                <Outlet />
                <Mbanner />
                <MenuProduct />
                <SpecialOffer />
                <HomeBloges/>
            </div>

        </div>
    );
};

export default Home;