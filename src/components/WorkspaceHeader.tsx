import React from "react";
import { NavLink } from "react-router";

const WorkspaceHeader = () => {
    return (
        <div className="flex flex-row justify-center items-center border-b-[1px] border-primary py-5 px-8 -mx-8">
            <NavLink to="/">
                <h3 className="text-lg font-bold flex flex-row gap-4 items-center hover:cursor-pointer">
                    <img
                        src="/logo.png"
                        alt="cross=code-logo"
                        height={44}
                        width={44}
                        className="rounded-full"
                    />{" "}
                    Cross Code
                </h3>
            </NavLink>
        </div>
    );
};

export default WorkspaceHeader;
