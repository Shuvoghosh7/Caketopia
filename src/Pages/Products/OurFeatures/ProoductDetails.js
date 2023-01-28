import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import SocileShare from '../../../Component/SocileShare/SocileShare';
import { BsEyeSlashFill } from 'react-icons/bs';
const ProoductDetails = ({ handleClick }) => {
    const { productId } = useParams()
    const { isLoading, error, data: SingleProduct } = useQuery('SingleProduct', () =>
        fetch(`https://caketopia-server.onrender.com/api/v1/product/${productId}`).then(res => res.json()

        )
    )
    console.log(SingleProduct)

    if (isLoading) {
        return <p>loding....</p>
    }


    return (
        <>
            <div className='lg:flex md:flex justify-around items-center my-5 lg:mx-20 mx-5 details-page'>
                <div className='details-image'>
                    <img src={`https://caketopia-server.onrender.com/api/v1/${SingleProduct.data.imageUrl}`} alt="" />
                </div>
                <div>
                    <p className='text-2xl font-bold mb-2'>{SingleProduct.data.productName}</p>
                    <p className='text-xl text-[#fc7c7c] mb-3'>${SingleProduct.data.price}</p>
                    <p className='lg:w-[650px]'>{SingleProduct.data.description}</p>
                    <p className='mt-10 text-center'>
                        <button className='mt-1 add-to-cart' onClick={() => handleClick(SingleProduct.data)}>
                            ADD TO CART
                        </button>
                    </p>
                </div>
            </div >
        </>
    );
};

export default ProoductDetails;