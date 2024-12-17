import React from "react";
import LoginForm from "@/components/LoginForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router";

//bg-gradient-to-tr from-gray-800 to-gray-500

const LoginPage = () => {
    return (
        <section className="dark h-full grid bg-black place-content-center p-4">
            <Card className="flex flex-col md:flex-row gap-4 items-center bg-gray-950">
                <div className="flex-1 grid place-content-center">
                    <img
                        src="/login-page-image.png"
                        alt="person codeing"
                        className="bg-white m-5 rounded-lg max-w-[400px] max-h-[400px]"
                    />
                </div>
                <div className="flex-1 max-w-[640px]">
                    <CardHeader className="text-center">
                        <CardTitle>Welcome Back Coder!</CardTitle>
                        <CardDescription>
                            Log in to challenge yourself again!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                    <CardFooter>
                        <p className="text-center w-fit mx-auto">
                            Don't have an account yet? Visit the{" "}
                            <NavLink
                                to="/signup"
                                className="mx-1 text-blue-600 underline inline-block"
                            >
                                sign up
                            </NavLink>{" "}
                            page.
                        </p>
                    </CardFooter>
                </div>
            </Card>
        </section>
    );
};

export default LoginPage;
