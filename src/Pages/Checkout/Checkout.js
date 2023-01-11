import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Checkout.css'
import swal from 'sweetalert';

const Checkout = ({ props }) => {
    const [totalPrice, settotalPrice] = useState(0);
    const { register, handleSubmit } = useForm();
    let getCart = localStorage.getItem("products")
    let storeCart = JSON.parse(getCart)
    const handlePrice = () => {
        let ans = 0;
        storeCart?.map((item) => (
            ans += item.quantity * item.price
        ))
        settotalPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    })

    const productname = storeCart?.map(item => `${item.productName} * ${item.quantity}`);

    const productImage = storeCart?.map(item => `${item.imageUrl}`);

    const onSubmit = async (data) => {
        const orderedProduct = {
            productImage: productImage,
            productname: productname,
            totalPrice: totalPrice,
            country: data.country,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            email: data.email,
            phone: data.phone,
        }
        fetch('https://caketopia-server-production.up.railway.app/api/v1/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedProduct)
        })
            .then(res => res.json())
            .then(project => console.log(project))
        swal({
            title: "Congrats!",
            text: "Project Added Successfully!",
            icon: "success",
        });
        localStorage.removeItem('products');
        window.location.reload(true)
       

    }


    return (
        <div className=' my-5 lg:flex md:flex  justify-around Checkout'>
            {/* YOUR ORDER */}
            <div className='YOUR_ORDER'>
                <h1>YOUR ORDER</h1>
                <div >
                    <p className='order-title'>The product you add and the product price per unit</p>
                    <article>
                        {
                            storeCart?.map((item) => (
                                <div className="cart_box" key={item.id}>
                                    <div className="cart_img">
                                        <img src={`https://caketopia-server-production.up.railway.app/api/v1/${item.imageUrl}`} />
                                        <p>{item.productName} * {item.quantity} </p>

                                    </div>

                                    <div>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        <div className='total-price'>
                            <span className='text-lg'>Total Price </span>
                            <span>{totalPrice} $</span>
                        </div>


                    </article>
                </div>

            </div>
            {/*  BILLING DETAILS */}
            <div className='BILLING_DETAILS'>
                <h1>BILLING DETAILS</h1>

                <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto ">
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Country</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Country Name"
                            className="input input-bordered bg-white lg:w-[500px] w-full"
                            {...register("country", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })}
                        />
                    </div>

                    <div className='lg:flex items-center lg:mt-5'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text text-lg font-medium">First Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered bg-white  lg:w-[240px] w-full"
                                {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text lg:ml-2 text-lg font-medium">Last Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered bg-white  lg:w-[240px] w-full lg:ml-2"
                                {...register("lastName", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>
                    </div>

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered bg-white lg:w-[500px] w-full"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })}
                        />
                    </div>

                    <div className='lg:flex items-center lg:mt-5'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered bg-white  lg:w-[240px] w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text lg:ml-2 text-lg font-medium">Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                className="input input-bordered bg-white  lg:w-[240px] w-full lg:ml-2"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>
                    </div>

                    <div className="modal-action w-full mx-auto m-5">
                        <input className='btn btn-accent text-white w-full' type="submit" value="Place order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;