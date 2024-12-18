import React from "react";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { PlusCircle } from "lucide-react";
import WorkspaceHeader from "@/components/WorkspaceHeader";

const WorkspacePage = () => {
    return (
        <section
            id="workspace"
            className="dark bg-[#030712] min-h-full text-white px-8 pb-8 flex flex-col gap-5"
        >
            <WorkspaceHeader />

            <h1 className="text-4xl font-extrabold">
                Welcome to your workspace 'username'!
            </h1>

            <div className="flex flex-row justify-between items-center">
                <h4 className="font-extrabold text-2xl">
                    Your Programs:
                </h4>
                <NavLink to="/code/new">
                    <Button className="group">
                        Add a new program
                        <PlusCircle
                            className="text-primary group-hover:scale-105"
                            size={20}
                            color="white"
                        />
                    </Button>
                </NavLink>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <ProgramCard />
                <ProgramCard />
                <ProgramCard />
                <ProgramCard />
                <ProgramCard />
                <ProgramCard />
            </div>
        </section>
    );
};

export default WorkspacePage;
