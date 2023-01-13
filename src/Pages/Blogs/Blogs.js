import React, { useEffect, useState } from 'react';
import './Blogs.css'
import BlogsCard from './BlogsCard';
import Fade from 'react-reveal/Fade';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://caketopia-server-production.up.railway.app/api/v1/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])
    return (
        <div className='mt-20 mb-10 lg:mx-10'>
            <Fade top cascade>
                <h1 className='blog-title'>Latest Blog</h1>
            </Fade>
            <div className='grid lg:grid-cols-3 gap-10 mx-12 mt-10'>
                {
                    blogs?.map(blog => <BlogsCard
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </div>

        </div>
    );
};

export default Blogs;