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
        userId: "fej923",
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

    if (!auth)
        throw new Error("Auth context must be used within the auth provider!");

    if (!auth.user) return { user: null, setUser: auth.setUser };

    return auth;
};