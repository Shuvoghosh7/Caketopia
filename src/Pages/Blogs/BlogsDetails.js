import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'
const BlogsDetails = () => {
    const { blogId } = useParams()
    const { isLoading, error, data: SingleBlog } = useQuery('SingleBlog', () =>
        fetch(`https://caketopia-server.onrender.com/api/v1/blogs/${blogId}`).then(res => res.json()

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
        <div className='lg:mx-40 md:mx-20 mx-5 my-10'>
            <div>
                <div>
                    <img src={`https://caketopia-server.onrender.com/api/v1/${SingleBlog.data.imageUrl}`} alt="" className='lg:w-[1000px] lg:h-[450px] md:w-[700px]' />
                </div>
                <h1 className='text-3xl my-7'>{SingleBlog.data.blogTitle}</h1>
                <p className='text-justify'>{SingleBlog.data.description}</p>
            </div>
        </div>
    );
};

export default BlogsDetails;