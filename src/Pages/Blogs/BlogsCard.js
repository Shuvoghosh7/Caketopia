import React from 'react';
import { Link } from "react-router-dom";
import blog1 from '../../Assets/Blogs/blog1.png'
import author from '../../Assets/Blogs/meta-img1.png'
import { FaArrowRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const BlogsCard = ({ blog }) => {
    const { name } = blog;
    return (
        <Fade bottom>
        <div className='blog-card'>
            <div className='blog-img'>
                <img src={blog1} alt="" />
            </div>
            <Link to='/blogDetails' className='blog-details relative lg:left-[273px] lg:top-[-35px] md:left-[500px] md:top-[-35px] left-[183px] top-[-35px]'>
                <FaArrowRight className='mt-4 ml-4' />
            </Link>
            <div className='ml-7'>
                <p className='blog-span'>Brakery</p>
                <p className='blog-name mb-5'>{name}</p>
                <div className='author-details'>
                    <img src={author} alt=""/>
                    <p className='ml-5'>BY:Admin</p>
                    <h1 className='ml-10'> 22 Aug, 2021</h1>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default BlogsCard;