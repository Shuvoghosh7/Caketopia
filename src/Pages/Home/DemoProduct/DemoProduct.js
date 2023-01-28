import React from 'react';
import { useQuery } from 'react-query';
import DemoProductCard from './DemoProductCard';

const DemoProduct = ({ handleClick }) => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://caketopia-server.onrender.com/api/v1/product').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <h1>loading ...</h1>
    }
    return (
        <div className='grid lg:grid-cols-4 gap-10 mx-12 mt-10'>
            {
                products?.map(Feature => <DemoProductCard
                    key={Feature.id}
                    Feature={Feature}
                    handleClick={handleClick}
                />)
            }
        </div>
    );
};

export default DemoProduct;