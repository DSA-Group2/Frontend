import { useAuthContext } from "@/contextsAndProviders/AuthContextProvider";
import { Outlet, Navigate } from "react-router";

const AuthChecker = () => {
    const { user } = useAuthContext();

    if (!user) return <Navigate to="/login" />;
    else return <Outlet />;
};

export default AuthChecker;
