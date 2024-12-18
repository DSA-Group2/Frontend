import React from "react";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import { Outlet, redirect, Navigate } from "react-router";

const AuthChecker = () => {
    const { user, setUser } = useAuthContext();

    console.log(user);

    if (!user) return <Navigate to="/login" />;
    else return <Outlet />;
};

export default AuthChecker;
