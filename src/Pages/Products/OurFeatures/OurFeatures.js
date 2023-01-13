import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';
import { useQuery } from 'react-query';
import { Bars } from 'react-loader-spinner'
const OurFeatures = ({ handleClick }) => {

    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://caketopia-server-production.up.railway.app/api/v1/product').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <div className='flex justify-center'>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    return (
        <div className='grid lg:grid-cols-4 gap-10 mx-12 mt-10'>
            {
                products?.map(Feature => <FeaturesCard
                    key={Feature.id}
                    Feature={Feature}
                    handleClick={handleClick}
                />)
            }
        </div>
    );
};

export default OurFeatures;