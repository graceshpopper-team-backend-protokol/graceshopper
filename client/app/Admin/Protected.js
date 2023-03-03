import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



const Protected = ({ isAdmin, children}) => {
    //const user = useSelector((state) => state.user.isAdmin)
    if (!user.isAdmin) {
        return <Navigate to = '/' replace />;
    }
    return children;
};

export default Protected;