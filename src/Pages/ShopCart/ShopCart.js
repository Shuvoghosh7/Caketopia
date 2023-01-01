import React, { useEffect, useState } from 'react';
import './ShopCart.css'
const ShopCart = ({ cart, setCart,handleChange }) => {
   
    const [price, setPrice] = useState(0);
    let getCart=localStorage.getItem("cartss")
        let storeCart=JSON.parse(getCart)
    const handlePrice = ()=>{
        let ans = 0;
        storeCart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
        

    }
    const handleRemove = (id) =>{
        const arr = storeCart.filter((item)=>item.id !== id);
        setCart(arr);
        localStorage.setItem("cartss", JSON.stringify(arr))
    }
    useEffect(()=>{
        handlePrice();
    })
    return (
        <article>
            {
                storeCart?.map((item) => (
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.picture} />
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button onClick={()=>handleChange(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={()=>handleChange(item, -1)}> - </button>
                        </div>
                        <div>
                            <span>{item.price}</span>
                            <button onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>
    );
};

export default ShopCart;