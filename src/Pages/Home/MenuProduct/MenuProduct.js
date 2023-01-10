import React from 'react';
import './MenuProduct.css'
import { Link } from "react-router-dom";
import PASTRY from '../../../Assets/menuProduct/services5.png'
import BREAKFAST from '../../../Assets/menuProduct/services6.png'
import COFEE from '../../../Assets/menuProduct/services7.png'
import BAKETOST from '../../../Assets/menuProduct/services8.png'
import Fade from 'react-reveal/Fade';
const MenuProduct = () => {
    return (
        <Fade bottom>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 mx-12 my-32'>
                <div>
                    <div className='mb-product-img mb-6'>
                        <img src={PASTRY} alt="" />
                    </div>
                    <Link to="/pro" className='mp-name ml-20'>PASTRY</Link>
                </div>
                <div>
                    <div className='mb-product-img mb-6'>
                        <img src={BREAKFAST} alt="" />
                    </div>
                    <Link to="/pro" className='mp-name ml-14'>BREAKFAST</Link>
                </div>
                <div>
                    <div className='mb-product-img mb-6'>
                        <img src={COFEE} alt="" />
                    </div>
                    <Link to="/pro" className='mp-name ml-12'>COFEE CAKE</Link>
                </div>
                <div>
                    <div className='mb-product-img mb-6'>
                        <img src={BAKETOST} alt="" />
                    </div>
                    <Link to="/pro" className='mp-name ml-12'>BAKE TOST</Link>
                </div>

            </div>
        </Fade>
    );
};

export default MenuProduct;