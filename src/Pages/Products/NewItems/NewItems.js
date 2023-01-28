import React from 'react';
import { useQuery } from 'react-query';
import NewItemsCard from './NewItemsCard';
import { Bars } from 'react-loader-spinner'
const NewItems = ({ handleClick }) => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://caketopia-server.onrender.com/api/v1/product').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <div className='flex justify-center items-center'>
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
                products?.slice(Math.max(products.length - 4)).map(Feature => <NewItemsCard
                    key={Feature.id}
                    Feature={Feature}
                    handleClick={handleClick}
                />)
            }
        </div>
    );
};

export default NewItems;