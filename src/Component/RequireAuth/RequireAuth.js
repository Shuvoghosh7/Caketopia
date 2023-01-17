import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useLocation,useHistory } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'
const RequireAuth = ({ children }) => {
    const jsonToken = localStorage.getItem('token')
    const tokenParse = JSON.parse(jsonToken)
    let location = useLocation();

    const { isLoading, error, data: auth } = useQuery('auth', () =>
        fetch('https://caketopia-server-production.up.railway.app/api/v1/user/me',{
            method: "GET",
            headers: {
                'authorization': `Bearer ${tokenParse}`
            }
        })
        .then(res =>res.json())
    )
    if (isLoading) {
        return <div className='flex justify-center items-center'>
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

     if (!auth.data) {
         return <Navigate to="/singin" state={{ from: location }} replace />;
       }
   
    return children;

};

export default RequireAuth;