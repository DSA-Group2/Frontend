import { Code, Key, ScanFace } from "lucide-react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

const HeaderHomePage = () => {
    return (
        <div className="flex flex-row justify-between items-center border-b-[1px] border-primary py-5 px-8">
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

            <div className="flex flex-row gap-4 items-center">
                <NavLink to="/login">
                    <Button variant="secondary">
                        Log In <Key />
                    </Button>
                </NavLink>

                <NavLink to="/signup">
                    <Button variant="default">
                        Sign Up <ScanFace />
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default HeaderHomePage;
