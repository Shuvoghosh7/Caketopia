import React from 'react';
import './Footer.css'
import shipping1 from '../../Assets/Footer/shipping1.png'
import paypal from '../../Assets/Footer/paypal.png'
import { VscLocation } from 'react-icons/vsc';
import { BsFillPhoneFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer-content'>
            <div className='mx-20 grid lg:grid-cols-3 md:grid-cols-2 Shipping'>
                <div className='flex items-center my-16'>
                    <img src={shipping1} alt="" />
                    <div className='free-shipping ml-5'>
                        <h3>Free Shipping</h3>
                        <p>Capped at $39 per order</p>
                    </div>
                </div>
                <div className='Shipping-text flex items-center my-16'>
                    <img src={shipping1} alt="" />
                    <div className='free-shipping ml-5'>
                        <h3>Free Shipping</h3>
                        <p>Capped at $39 per order</p>
                    </div>
                </div>
                <div className='Shipping-text flex items-center my-16'>
                    <img src={shipping1} alt="" />
                    <div className='free-shipping ml-5'>
                        <h3>Free Shipping</h3>
                        <p>Capped at $39 per order</p>
                    </div>
                </div>

            </div>

            <div className='CONTACT-SECTION mx-20 mt-10 pb-10 grid lg:grid-cols-3'>
                {/* CONTACT US section */}
                <div>
                    <p className='contact-us'>CONTACT US</p>
                    <p className='contact-email'>If you have any question.please contact us at <span className='text-[#FC7C7C]'>demo@example.com</span></p>
                    <p className='mt-5 flex items-center text-lg'>
                        <VscLocation className='text-4xl' />
                        <p>Road:11,House-36,Sector-11,Uttara</p>
                    </p>
                    <p className='mt-5 mb-10 flex items-center '>
                        <BsFillPhoneFill className='text-4xl' />
                        <p>+01772385111</p>
                    </p>

                </div>

                {/* INFORMATION Section */}

                <div className='lg:flex justify-between'>
                    <div>
                        <p className='contact-us'>INFORMATION</p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg'>My account</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>My orders</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Returns</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Shipping</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>How Does It Work</Link>
                        </p>
                        <p className='mb-10'>
                            <Link className='info-link text-lg mb-5'>Merchant Sign Up</Link>
                        </p>
                    </div>

                    <div>
                        <p className='contact-us'>ACCOUNT</p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg'>About us</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Delivery information</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Privacy Policy</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Sales</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Terms & Conditions</Link>
                        </p>
                        <p className='mb-3'>
                            <Link className='info-link text-lg mb-5'>Shipping Policy</Link>
                        </p>
                    </div>

                </div>

                {/* NEWSLETTER */}
                <div className='lg:ml-20'>
                    <p className='contact-us mb-6'>NEWSLETTER</p>
                    <p className='mb-6'>If you have any question.please contact us at <span className='text-[#fc7c7c] text-lg'>Send Us a Email</span></p>
                    <form className='newsletter_subscribe'>
                        <input id="mc-email" type="email" autoComplete="off" placeholder="Email Address" name="EMAIL" />
                        <button className='email-send-btn'>Send</button>
                    </form>
                    <img src={paypal} alt="" className='mt-5'/>


                </div>

            </div>
            <p className='text-center mt-5 pb-5'>© 2022 Bucker. Made With  By Shuvo Gosh</p>

        </div>
    );
};

export default Footer;