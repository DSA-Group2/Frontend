import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router";
import SignupForm from "@/components/SignupForm";
import BackHome from "@/components/BackHome";

const SignupPage = () => {
    return (
        <section className="dark h-full grid bg-black place-content-center p-4">
            <BackHome />
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
                        <CardTitle>Ready to begin Coding?</CardTitle>
                        <CardDescription>
                            Sign Up and join others in developing your
                            programming skills!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SignupForm />
                    </CardContent>
                    <CardFooter>
                        <p className="text-center w-fit mx-auto">
                            Already have an account? Visit the{" "}
                            <NavLink
                                to="/login"
                                className="mx-1 text-blue-600 underline inline-block"
                            >
                                log in
                            </NavLink>{" "}
                            page.
                        </p>
                    </CardFooter>
                </div>
            </Card>
        </section>
    );
};

export default SignupPage;
