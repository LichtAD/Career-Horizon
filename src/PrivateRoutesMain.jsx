import React, { useContext } from 'react';
import { AuthContext } from './components/provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './components/pages/Loading';

const PrivateRoutesMain = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutesMain;