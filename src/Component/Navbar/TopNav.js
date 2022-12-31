import React from 'react';
import './TopNav.css'
const TopNav = () => {
    return (
        <div className='top-banner'>
            <p>World Wide Completely Free Returns and Free Shipping</p>
            <div className='top-contact'>
                <p>+00 123 456 789 <span className='ml-3 mr-3 space-bar'>|</span></p>
                <p>demo@example.com <span className='ml-3 mr-3 space-bar'>|</span></p>
                <p>Account</p>
            </div>
        </div>
    );
};

export default TopNav;