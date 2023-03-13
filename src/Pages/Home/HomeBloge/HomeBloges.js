import React from 'react';
import { Bars } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import Fade from 'react-reveal/Fade';

import HomeBlogesCard from './HomeBlogesCard';

const HomeBloges = () => {
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
                <h1 className='blog-title'>Latest Blog</h1>
            </Fade>
            <div className='grid lg:grid-cols-3 gap-10 mx-12 mt-10'>
                {
                    blogs.data?.slice(-3).map(blog => <HomeBlogesCard
                        key={blog._id}
                        blog={blog}
                    />)
                }
            </div>

        </div>
    );
};

export default HomeBloges;