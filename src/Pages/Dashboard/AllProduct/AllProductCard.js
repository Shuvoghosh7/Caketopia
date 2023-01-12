import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { BsEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AllProductCard = ({ Feature, handleClick }) => {
    const { imageUrl, productName, description, price, _id } = Feature
    return (
        <div className='Features-card mx-5 my-3'>
            <div className='Features-img'>
                <img src={`https://caketopia-server-production.up.railway.app/api/v1/${imageUrl}`} alt="" />
            </div>
            <p className='text-center details-btn'>
                <button className='mt-1' onClick={() => handleClick(Feature)}>
                    <FiShoppingBag className='text-2xl shop-icon' />
                </button>
                <button>
                    <Link to={`/productDetails/${_id}`}>
                        <BsEyeSlashFill className='text-2xl shop-icon ml-3' />
                    </Link>

                </button>

            </p>
            <p className='text-center product-name'>{productName}</p>
            <p className='text-center product-price'>${price}</p>

        </div >
    );
};

export default AllProductCard;