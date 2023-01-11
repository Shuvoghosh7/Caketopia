import React from 'react';
import './About.css'
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <Fade bottom cascade>
            <div className='lg:mx-40 md:mx-12 about-section my-12'>
                <h5>About US</h5>
             
                    <p className='lg:mx-12 my-5'>Caketopia is a Cake & Pastry online based shop. It is an International Standard high quality and real food and pastry shop. Our chefs and staffs have experiences in oversees. Our ingredients are all imported from Manilda Group (NSW), Australia.</p>
               
               
                    <p className='lg:mx-12 my-5'>Caketopia is a Cake & Pastry online based shop. It is an International Standard high quality and real food and pastry shop. Our chefs and staffs in the factory have experiences in oversees countries in different International Bakery Shop. Our ingredients are all imported from Manilda Group (NSW), Australia, Malaysia and Singapore. We are 100% equipped with modern and health conscious equipment. Our main goal is to serve better, testy and healthy products with reasonable price. We care for the customer’s satisfaction rather than our profit. Our products are fresh as always.
                    </p>
               
                
                    <p className='lg:mx-12 my-5'>We maintain high level of hygiene standard and quality control on our manufacturing processes, storage procedures, packing and product freshness. Freshly baked products are delivered to the customers</p>
               
            </div>

        </Fade>
    );
};

export default About;