import axios from 'axios';
import React from 'react';
import './CakeRequest.css'
const CakeRequest = () => {

    const handelSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.set("yourName", e.target.yourName.value);
        formData.set("phoneNumber", e.target.phoneNumber.value);
        formData.set("emailAddress", e.target.emailAddress.value);
        formData.set("deliveryDate", e.target.deliveryDate.value);
        formData.set("flavour", e.target.flavour.value);
        formData.set("message", e.target.message.value);
        formData.set("cakeImage", e.target.images.files[0]);
        formData.set("weight", e.target.weight.value);

        axios.post('https://caketopia-server.onrender.com/api/v1/cack-request', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {

                console.log('response', response.data)

            })
            .catch((error) => {
                console.log(error.response)

            })
    }
    return (
        <div>
            <div className='custom-banner mb-10 mt-3'>
                <div className='relative top-10'>
                    <p className='request-text '>Custom <br /> Cake Request</p>
                </div>
            </div>
            <div className='mx-28 my-5'>
                <form className="bg-[#EEEEEE] mx-auto p-5 shadow-xl" onSubmit={handelSubmit}>
                    <p className='text-xl font-bold'>Share Your Desire Cake</p>
                    <p>Describe your own cake and we will create it for you! </p>

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name *"
                            className="input input-bordered bg-white w-full"
                            name='yourName'
                        />
                    </div>
                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                className="input input-bordered bg-white  w-full"
                                name='phoneNumber'
                            />
                        </div>

                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text ml-3">Email Address</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered bg-white  w-full lg:w-[550px] ml-2"
                                name='emailAddress'

                            />
                        </div>

                    </div>
                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Delivery Date</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Your Phone Number"
                                className="input input-bordered bg-white  w-full"
                                name='deliveryDate'
                            />
                        </div>

                        <div className="form-control w-full mx-auto ">
                            <label className="label">
                                <span className="label-text ml-3">Flavour</span>
                            </label>
                            <select name='flavour' className="input input-bordered bg-white w-full lg:w-[550px] ml-2">
                                <option value="" disabled="" selected="">Select Flavour</option>
                                <option value="Black Forest">Black Forest</option>
                                <option value="Chocolate (Regular)">Chocolate (Regular)</option>
                                <option value="Red Velvet">Red Velvet</option>
                                <option value="White Forest">White Forest</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>
                        </div>

                    </div>

                    <div className="form-control w-full mx-auto">
                        <label className="label">
                            <span className="label-text font-bold">Message On Cake</span>
                        </label>
                        <textarea
                            placeholder="Product Description"
                            className="input input-bordered bg-white w-full"
                            name='message' rows="5" cols="50"
                        />
                    </div>
                    <div className='my-3'>
                        <p className='text-[#4DAE67] text-lg'>Upload a picture of the style of cake.An image of cake you found on Google or a picture may have drawn yourself.The more ideas you able to show us,the closer you can get to designing your perfect cake.</p>
                    </div>

                    <div className='flex'>
                        <div className="form-control w-full mx-auto">
                            <label className="label">
                                <span className="label-text">Add Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Your Phone Number"
                                className="input input-bordered bg-white  w-full"
                                name='images'
                            />
                        </div>

                        <div className="form-control w-full mx-auto ">
                            <label className="label">
                                <span className="label-text ml-3">Weight</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Input your ordered cake Weight"
                                className="input input-bordered bg-white  w-full lg:w-[550px] ml-2"
                                name='weight'
                            />

                        </div>

                    </div>





                    <div className="modal-action w-full mx-auto m-5 flex justify-start">
                        <input className='btn btn-accent text-white' type="submit" value="Make Request" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CakeRequest;