import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const CodePage = () => {
    return (
        <div className="grid place-content-center h-full bg-black text-white">
            <NavLink to="/new" className="flex felx-row gap-2">Write some new code <ArrowRight /></NavLink>
        </div>
    );
};

export default CodePage;
