import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvieder/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    

    if(loading){
        <h3>loading......</h3>
    }

    if(user) {
        return children;

    }

    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
};

export default PrivateRoute;