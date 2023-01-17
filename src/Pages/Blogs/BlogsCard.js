import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import blog1 from '../../Assets/Blogs/blog1.png'
import author from '../../Assets/Blogs/meta-img1.png'
import { FaArrowRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const BlogsCard = ({ blog }) => {
    const { blogTitle, imageUrl, blogDate,authorName
        , _id } = blog;
    return (
        <Fade bottom>
            <div className='blog-card'>
                <div className='blog-img'>
                    <img src={`https://caketopia-server-production.up.railway.app/api/v1/${imageUrl}`} alt="" />
                </div>
                <Link to={`/blogsDetails/${_id}`} className='blog-details relative lg:left-[273px] lg:top-[-35px] md:left-[500px] md:top-[-35px] left-[183px] top-[-35px]'>
                    <FaArrowRight className='mt-4 ml-4' />
                </Link>
                <div className='ml-7'>
                    <p className='blog-span'>Brakery</p>
                    <p className='blog-name mb-5'>{blogTitle.substr(0,50)}</p>
                    <div className='author-details'>
                        <p>Author:{authorName}</p>
                        <h1>{blogDate}</h1>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default BlogsCard;