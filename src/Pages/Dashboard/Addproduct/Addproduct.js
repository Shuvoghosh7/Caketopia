import React, { useState } from 'react';
import axios from "axios"

const Addproduct = () => {
    const [productname, setProductname] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");

    // const history = useNavigate();

    const productName = (e) => {
        const { value } = e.target;
        setProductname(value);
        console.log(value)
    }
    const productDescription = (e) => {
        const { value } = e.target;
        setDescription(value);
        console.log(value)
    }
    const productCategory = (e) => {
        const { value } = e.target;
        setCategory(value);
        console.log(value)
    }
    const productQuantity = (e) => {
        const { value } = e.target;
        setQuantity(value);
        console.log(value)
    }
    const productPrice = (e) => {
        const { value } = e.target;
        setPrice(value);
        console.log(value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    // adduser data

    const addUserData = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.set("photo", file);
        formData.set("productName", productname);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("quantity", quantity);
        formData.append("price", price);

        axios.post('https://caketopia-server.onrender.com/api/v1/product', formData, {
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
        <div className='loging-page'>
            <form className="bg-[#FFC6D3] mx-auto p-5 modal-box">
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
                        name='productName' onChange={productName}
                    />
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Description</span>
                    </label>
                    <textarea
                        placeholder="Product Description"
                        className="input input-bordered bg-white w-full"
                        name='description' onChange={productDescription}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product category</span>
                    </label>
                    <select name='category' onChange={productCategory} className="input input-bordered bg-white w-full">
                        <option value="PASTRY">PASTRY</option>
                        <option value="BREAKFAST">BREAKFAST</option>
                        <option value="CAKE">CAKE</option>
                    </select>
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product quantity"
                        className="input input-bordered bg-white w-full"
                        name='quantity' onChange={productQuantity}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Product Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product price"
                        className="input input-bordered bg-white w-full"
                        name='price' onChange={productPrice}
                    />
                </div>

                <div className="modal-action w-full mx-auto m-5">
                    <input className='btn btn-accent text-white w-full' type="submit" value="Add Product" onClick={addUserData} />
                </div>
            </form>

        </div>
    );
};

export default Addproduct;