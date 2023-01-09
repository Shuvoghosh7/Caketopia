import React, { useState } from 'react';
import axios from "axios"

const Addproduct = () => {
    const [imgname, setImgname] = useState("");

    const [file, setFile] = useState("");

    // const history = useNavigate();

    const setdata = (e) => {
        const { value } = e.target;
        setImgname(value);
        console.log(value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }


    const addUserData = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append("photo", file);
        formData.append("productName", imgname);
        /* formData.append("description", e.target.description.value);
        formData.append("category", e.target.category.value);
        formData.append("price", e.target.category.price);  */

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("https://caketopia-server-production.up.railway.app/api/v1/product", formData, config);

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            // history("/")
        }


    }





    return (
        <div className='mx-96'>
            <form className="bg-base-100 mx-auto p-5">
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered bg-white w-full"
                        name='photo' onChange={setimgfile}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered bg-white w-full"
                        name='productName' onChange={setdata}
                    />
                </div>

                {/* <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Description</span>
                    </label>
                    <textarea
                        placeholder="Product Description"
                        className="input input-bordered bg-white w-full"
                        name='description' onChange={setdata}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product category</span>
                    </label>
                    <select name='category' onChange={setdata} className="input input-bordered bg-white w-full">
                        <option value="PASTRY">PASTRY</option>
                        <option value="BREAKFAST">BREAKFAST</option>
                        <option value="CAKE">CAKE</option>
                    </select>
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product price"
                        className="input input-bordered bg-white w-full"
                        name='price' onChange={setdata}
                    />
                </div> */}

                <div className="modal-action w-full mx-auto m-5">
                    <input className='btn btn-accent text-white w-full' type="submit" value="Add Product" onClick={addUserData} />
                </div>
            </form>

        </div>
    );
};

export default Addproduct;