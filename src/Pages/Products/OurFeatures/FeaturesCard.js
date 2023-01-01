import React from 'react';
import './FeaturesCard.css'
import { FiShoppingBag } from 'react-icons/fi';
import { BsEyeSlashFill } from 'react-icons/bs';

const FeaturesCard = ({ Feature }) => {
    const { picture, name, description, price } = Feature
    return (
        <div className='Features-card'>
            <div className='Features-img'>
                <img src={picture} alt="" />
            </div>
            <p className='text-center details-btn'>
                <button className='mt-10'>
                    <FiShoppingBag className='text-2xl shop-icon' />
                </button>
                <button>
                    <label for="my-modal-3" >
                        <BsEyeSlashFill className='text-2xl shop-icon ml-3' />
                    </label>
                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                            
                        </div>
                    </div>

                </button>

            </p>
            <p className='text-center product-name'>{name}</p>
            <p className='text-center product-price'>${price}</p>

        </div >
    );
};

export default FeaturesCard;