import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopCart.css'
const ShopCart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0);
    let getCart = localStorage.getItem("cartss")
    let storeCart = JSON.parse(getCart)

    const handlePrice = () => {
        let ans = 0;
        storeCart.map((item) => (
            ans += item.quantity * item.price
        ))
        setPrice(ans);
    }
    const handleRemove = (id) => {
        const arr = storeCart.filter((item) => item._id !== id);
        setCart(arr);
        localStorage.setItem("cartss", JSON.stringify(arr))
    }
    useEffect(() => {
        handlePrice();
    })
    return (
        <article>
            {
                storeCart.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={`https://caketopia-server-production.up.railway.app/api/v1/${item.imageUrl}`} />
                            <p>{item.productName}</p>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item, +1)}> + </button>
                            <button>{item.quantity}</button>
                            <button onClick={() => handleChange(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={() => handleRemove(item._id)}>Remove</button>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price </span>
                <span>Rs - {price}</span>
            </div>
            <div className='text-center mt-10 mb-20'>
                <Link to='/checkout' className='text-2xl Checkout-btn'>Checkout</Link>
            </div>

        </article>
    );
};

export default ShopCart;