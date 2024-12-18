import React, { useState } from "react";
import { useContext, createContext } from "react";
import { LoginResponse } from "@/lib/types";

export const AuthContext = createContext<{
    user: LoginResponse | null;
    setUser: React.Dispatch<React.SetStateAction<LoginResponse | null>>;
} | null>(null);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<LoginResponse | null>({
        token: "12345",
        username: "newuser",
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const auth = useContext(AuthContext);

    console.log(auth);

    if (!auth || !auth.user) return { user: null, setUser: null };

    return auth;
};
