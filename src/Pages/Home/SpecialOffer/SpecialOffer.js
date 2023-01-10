import React from 'react';
import './SpecialOffer.css'
import discount from '../../../Assets/SpaccileOffer/add-discount.png'
import Fade from 'react-reveal/Fade';
const SpecialOffer = () => {
    return (
        <Fade bottom>
            <div className='special-offer mb-6'>
                <div className='discount'>
                    <img src={discount} alt="" />
                </div>
                <div className="discount-content">
                    <div>
                        <p className='discount-persent'><span className='text-[#FC7C7C]'>30% </span>Sale Off</p>
                        <p className='discount-time'>Deal of the day</p>

                        <button className='discount-btn'>SHOP NOW</button>

                    </div>

                </div>

            </div>
        </Fade>
    );
};

export default SpecialOffer;