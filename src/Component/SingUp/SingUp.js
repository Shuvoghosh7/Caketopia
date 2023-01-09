import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './SingUp.css'
import swal from 'sweetalert';
const SingUp = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        fetch('https://caketopia-server-production.up.railway.app/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(project => console.log(project))
        swal({
            title: "Congrats!",
            text: " Successfully Sing UP!",
            icon: "success",
        });


    }
    return (
        <div className='loging-page'>
            <div className="modal-box bg-[#FFC6D3]">
                <h2 className='text-center text-xl font-bold'>SING UP</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#FFC6D3] mx-auto p-5 rounded-lg">
                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered bg-white  w-full lg:w-[200px]"
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
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered bg-white  w-full lg:w-[200px] ml-2"
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
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Emain"
                            className="input input-bordered bg-white  w-full "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "name is required"
                                }
                            })}
                        />
                    </div>


                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Emain"
                                className="input input-bordered bg-white  w-full lg:w-[200px]"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered bg-white  w-full lg:w-[200px] ml-2"
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "name is required"
                                    }
                                })}
                            />
                        </div>

                    </div>

                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select  {...register("role")} className="input input-bordered bg-white w-full lg:w-[200px]">
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select  {...register("status")} className="input input-bordered bg-white w-full lg:w-[200px] ml-2">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Blocked">Blocked</option>
                            </select>
                        </div>

                    </div>

                    <div className="modal-action w-full mx-auto m-5">
                        <input className='btn  text-white w-full' type="submit" value="SING UP" />
                    </div>
                    <Link to='/login' className='flex justify-center'>Already Have An Account?</Link>
                </form>

            </div>
        </div>
    );
};

export default SingUp;