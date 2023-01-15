import React from 'react';
import { useQuery } from 'react-query';
import AllProductCard from './AllProductCard';
import { Bars } from 'react-loader-spinner'
const AllProduct = ({ handleClick }) => {
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
        <div className='grid lg:grid-cols-3 gap-10 mx-12 mt-10'>
            {
                products?.map(Feature => <AllProductCard
                    key={Feature.id}
                    Feature={Feature}
                    handleClick={handleClick}
                />)
            }
        </div>
    );
};

export default AllProduct;