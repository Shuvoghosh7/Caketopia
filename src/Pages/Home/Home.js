import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
import Banner from '../Home/Banner/Banner';

import Menu from './Menu/Menu';
import Mbanner from './MBanner/Mbanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Menu />
            <div>
                <h1 className='product-title'>New Products</h1>
                <div className='text-center'>
                    <Link to="/OurFeatures" className='mr-8 product-item'>Our Features</Link>
                    <Link to="/bestSellers" className='mr-8 product-item'>Best Sellers</Link>
                    <Link to="/newItems" className='product-item'>New Items</Link>
                </div>
                <Outlet />
                <Mbanner/>
            </div>
            
        </div>
    );
};

export default Home;