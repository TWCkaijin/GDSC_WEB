import React from "react";
import{ Outlet, Navigate } from "react-router-dom";
import { auth } from "../config/firebase";


const ProtectedRoutes = ({ user }) => {
    return auth?.currentUser?.displayName ? <Outlet/> : <Navigate to="/"/>;
}



export default ProtectedRoutes;