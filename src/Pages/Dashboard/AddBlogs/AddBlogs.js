import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
const AddBlogs = () => {
    const [blogtitle, setBlogtitle] = useState("");
    const [description, setDescription] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [blogDate, setBlogDate] = useState("");
    const [file, setFile] = useState("");

    const blogName = (e) => {
        const { value } = e.target;
        setBlogtitle(value);
        console.log(value)
    }
    const blogDescription = (e) => {
        const { value } = e.target;
        setDescription(value);
        console.log(value)
    }
 
    const nameOfAuthor = (e) => {
        const { value } = e.target;
        setAuthorname(value);
        console.log(value)
    }
    const productPostDate = (e) => {
        const { value } = e.target;
        setBlogDate(value);
        console.log(value)
    }

    const setimgfile = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    // adduser data

    const addBlogData = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.set("image", file);
        formData.set("blogTitle", blogtitle);
        formData.append("description", description);
        formData.append("authorName", authorname);
        formData.append("blogDate", blogDate);

        axios.post('https://caketopia-server-production.up.railway.app/api/v1/blogs', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                swal({
                    title: "Congrats!",
                    text: " Successfully Post Blogs!",
                    icon: "success",
                });
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
                        <span className="label-text text-lg font-bold">Blog Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered bg-white w-full"
                        name='image' onChange={setimgfile}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Blog Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered bg-white w-full"
                        name='blogTitle' onChange={blogName}
                    />
                </div>

                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Blog Description</span>
                    </label>
                    <textarea
                        placeholder="Product Description"
                        className="input input-bordered bg-white w-full"
                        name='description' onChange={blogDescription}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Author Name</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered bg-white w-full"
                        name='authorName'
                        onChange={nameOfAuthor}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text text-lg font-bold">Blog Post Date</span>
                    </label>
                    <input
                        type="date"
                        placeholder="blog Date"
                        className="input input-bordered bg-white w-full"
                        name='blogDate' onChange={productPostDate}
                    />
                </div>

                <div className="modal-action w-full mx-auto m-5">
                    <input className='btn btn-accent text-white w-full' type="submit" value="Add Product" onClick={addBlogData} />
                </div>
            </form>

        </div>
    );
};

export default AddBlogs;