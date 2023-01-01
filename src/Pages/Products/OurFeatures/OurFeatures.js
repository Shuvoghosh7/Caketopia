import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';

const OurFeatures = ({handleClick}) => {
    const[breakfast,setBreakfast]=useState([])
    useEffect(()=>{
        fetch('Breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])
    return (
        <div className='grid lg:grid-cols-4 gap-10 mx-12 mt-10'>
          {
                 breakfast.map(Feature =><FeaturesCard
                 key={Feature.id}
                 Feature={Feature}
                 handleClick={handleClick}
                 />)  
            }
          </div>
    );
};

export default OurFeatures;