import React from 'react';
import author from '../../../Assets/Blogs/meta-img1.png'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HomeBlogesCard = ({ blog }) => {
    const { blogTitle, imageUrl, blogDate, _id, authorName } = blog;
    return (
        <div>
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
                        <p className='blog-name mb-5'>{blogTitle.substr(0, 50)}</p>
                        <div className='author-details '>
                            <p className='mb-3'>Author:{authorName}</p>
                            <h1>{blogDate}</h1>
                        </div>
                    </div>
                </div>
            </Fade>

        </div>
    );
};

export default HomeBlogesCard;