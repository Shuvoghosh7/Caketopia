import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrProductHunt } from 'react-icons/gr';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { ImBlogger2 } from 'react-icons/im';
const DashboardSideber = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const jsonToken = localStorage.getItem('token')
    const tokenParse = JSON.parse(jsonToken)
    useEffect(() => {
        fetch('https://caketopia-server-production.up.railway.app/api/v1/user/me', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${tokenParse}`
            }
        })
            .then(res => res.json())
            .then(data => setAuth(data.data))
    }, [])
    return (
        <div class="drawer drawer-mobile bg-[#fff]">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-[#E1D7C6] text-base-content">
                    <h1 className='mb-4 text-center  font-bold text-2xl'>Caketopia</h1>
                    {/*   Sidebar content here */}
                    <li>
                        <Link className='bg-transparent text-lg font-medium' to="/dashboard/allproduct"><GrProductHunt />All Product</Link>
                    </li>

                    {
                        auth?.role === "Admin" ?
                            <>
                                <li>
                                    <Link className='bg-transparent text-lg font-medium' to="/dashboard/addProduct"><MdOutlineProductionQuantityLimits />Add Product</Link>
                                </li>
                                <li>
                                    <Link className='bg-transparent text-lg font-medium' to="/dashboard/addBlogs"><ImBlogger2 />Add Blogs</Link>
                                </li>
                            </>
                            : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardSideber;