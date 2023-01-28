import React, { useEffect, useState } from 'react';
import './Blogs.css'
import BlogsCard from './BlogsCard';
import Fade from 'react-reveal/Fade';
import { useQuery } from 'react-query';
import { Bars } from 'react-loader-spinner'

const Blogs = () => {
    const { isLoading, error, data: blogs } = useQuery('blogs', () =>
        fetch('https://caketopia-server.onrender.com/api/v1/blogs').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <div className='flex justify-center'>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    return (
        <div className='mt-20 mb-10 lg:mx-10'>
            <Fade top cascade>
                <h1 className='blog-title'>ALL BLOGS</h1>
            </Fade>
            <div className='grid lg:grid-cols-3 gap-10 mx-12 mt-10'>
                {
                    blogs.data?.map(blog => <BlogsCard
                        key={blog.id}
                        blog={blog}
                    />)
                }
            </div>

        </div>
    );
};

export default Blogs;