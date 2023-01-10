import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import Banner from '../Home/Banner/Banner';

import Menu from './Menu/Menu';
import Mbanner from './MBanner/Mbanner';
import MenuProduct from './MenuProduct/MenuProduct';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Blogs from '../Blogs/Blogs';
import Fade from 'react-reveal/Fade';


const Home = () => {
    return (
        <div>

            <Banner />
            <Menu />
            <div>
                <Fade bottom>
                    <div>
                        <Fade bottom cascade>
                            <h1 className='product-title'>New Products</h1>
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
                <Blogs />
            </div>

        </div>
    );
};

export default Home;