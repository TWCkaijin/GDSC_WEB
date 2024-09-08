import React from "react";
import{ Outlet, Navigate } from "react-router-dom";
import {useAuth} from "./authContext";


const ProtectedRoutes = () => {
    const {loginState} = useAuth();
    return loginState  ? <Outlet/> : <Navigate to="/"/>;
}
export default ProtectedRoutes;