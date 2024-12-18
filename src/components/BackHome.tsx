import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import { ArrowLeft } from "lucide-react";

const BackHome = () => {
    return (
        <Button
            className="absolute inset-1 mt-10 ml-10 w-fit group"
            variant="default"
            size="lg"
        >
            <NavLink to="/" className="flex flex-row gap-2 items-center">
                <ArrowLeft className="group-hover:-translate-x-1 transition-all" />
                Back Home
            </NavLink>
        </Button>
    );
};

export default BackHome;
