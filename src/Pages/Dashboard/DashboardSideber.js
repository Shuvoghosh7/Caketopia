import React from 'react';
import { Link} from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import {FaMoneyCheckAlt } from 'react-icons/fa';
const DashboardSideber = ({ children }) => {
    return (
        <div class="drawer drawer-mobile bg-[#fff]">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-[#f6f6f6] text-base-content">
                    <h1 className='mb-4 text-center  font-bold text-2xl'>Caketopia</h1>
                    {/*   Sidebar content here */}
                    <li>
                        <Link className='bg-transparent' to="/dashboard/addProduct"><FaMoneyCheckAlt/>Add Product</Link>
                    </li>
                    <li>
                        <Link className='bg-transparent' to="/dashboard/allproduct"><FaMoneyCheckAlt/>All Product</Link>
                    </li>
                    <li>
                        <Link className='bg-transparent' to="/dashboard/addBlogs"><FaMoneyCheckAlt/>Add Blogs</Link>
                    </li>
                   
                    
                </ul>

            </div>
        </div>
    );
};

export default DashboardSideber;