import React, { useEffect, useState } from 'react';
import './Blogs.css'
import BlogsCard from './BlogsCard';


const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    console.log(blogs)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='mt-20 mb-10'>
            <h1 className='blog-title'>Latest Blog</h1>
            <div className='grid lg:grid-cols-3 gap-10 mx-12 mt-10'>
                {
                   blogs.slice(0,3).map(blog => <BlogsCard
                   key={blog.id}
                   blog={blog}  
                   />) 
                }
            </div>
            
        </div>
    );
};

export default Blogs;