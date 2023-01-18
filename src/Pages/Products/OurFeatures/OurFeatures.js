import React, { useEffect, useState } from 'react';
import FeaturesCard from './FeaturesCard';
import { useQuery } from 'react-query';
import { Bars } from 'react-loader-spinner'
const OurFeatures = ({ handleClick }) => {
    const [filter, setFilter] = useState('')
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch('https://caketopia-server-production.up.railway.app/api/v1/product').then(res =>
            res.json()
        )
    )

    const searchHandeal = (event) => {
        setFilter(event.target.value)
    }
    let dataSearch = products.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
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
        <>
            <div className='flex lg:justify-end md:justify-end justify-center lg:mr-12 md:mr-12 mt-3'>
                <input type="search" name="" id="" className="input input-bordered bg-[#EAE0DA] w-60" placeholder='search by name' value={filter} onChange={searchHandeal.bind(this)} />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 mx-12 mt-10'>
                {
                    dataSearch.length > 0 ? dataSearch?.map(Feature => <FeaturesCard
                        key={Feature.id}
                        Feature={Feature}
                        handleClick={handleClick}
                    />):<h1 className='relative lg:left-[400px] text-3xl'>No Result Found</h1>
                }
            </div>
        </>
    );
};

export default OurFeatures;