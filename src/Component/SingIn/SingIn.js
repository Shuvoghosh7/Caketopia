import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SingIn = () => {
    const { register, handleSubmit } = useForm();

    const jsonToken = localStorage.getItem('token')
    const tokenParse = JSON.parse(jsonToken)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (tokenParse) {
            navigate(from, { replace: true });
        }
    }, [tokenParse, from, navigate])

    const onSubmit = async (data) => {

        fetch('https://caketopia-server-production.up.railway.app/api/v1/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(project => {
                localStorage.setItem("token", JSON.stringify(project.data.token))
                window.location.reload(true) 
            })
            
    }
    return (
        <div className='loging-page'>
            <div className="sing-up bg-[#FFC6D3]">
                <h2 className='text-center text-xl font-bold'>SING IN</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#FFC6D3] mx-auto p-5 rounded-lg">
                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Emain"
                            className="input input-bordered bg-white  w-full lg:w-[300px]"
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
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Emain"
                            className="input input-bordered bg-white  w-full lg:w-[300px]"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })}
                        />
                    </div>
                    <div className="modal-action w-full mx-auto m-5">
                        <input className='btn  text-white w-full' type="submit" value="SING UP"/>
                    </div>
                </form>
                <p className='text-center'>Don't Have an Account Yet? <span className='text-blue-700'><Link to='/singup'>Singup</Link></span></p>
            </div>
        </div>
    );
};

export default SingIn;