import api from "../axiosInstance";
import { handleAxiosError } from "../utils";

export const signup = async (username: string, password: string) => {
    try {
        const response = await api.post("/auth/signup", { username, password });

        return {
            success: true,
            message: null,
        };
    } catch (error) {
        //@ts-expect-error
        if (error.response.data === "Username already exists.") {
            return {
                success: false,
                message: "Username already exists",
            };
        }

        handleAxiosError(error);

        throw new Error();
    }
};


export const login = async (username: string, password: string) => {
    try {
        const response = await api.post("/auth/login", { username, password });

        return {
            success: true,
            message: null,
            data: {
                token: response.data.token,
                userId: response.data.userId,
                username: response.data.username,
            },
        };
    } catch (error) {
        //@ts-expect-error
        if (error.response.data === "User not found.") {
            return {
                success: false,
                message: "Username not found",
                data: null,
            };
        }
        
        //@ts-expect-error
        if (error.response.data === "Invalid credentials.") {
            return {
                success: false,
                message: "Invalid credentials",
                data: null,
            };
        }

        handleAxiosError(error);

        throw new Error();
    }
};

// logout functionality