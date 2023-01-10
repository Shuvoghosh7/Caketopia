import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Navigate, useLocation,useHistory } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const [auth, setAuth] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const jsonToken = localStorage.getItem('token')
    const tokenParse = JSON.parse(jsonToken)
    let location = useLocation();
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

    if (isLoading) {
        return setIsLoading(true)
    }

     if (!auth) {
         return <Navigate to="/singin" state={{ from: location }} replace />;
       }
   
    return children;

};

export default RequireAuth;