import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import { ArrowRight, UserPen } from "lucide-react";

const SubHeroSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row gap-8 max-w-[1000px] mx-auto text-center px-2"
            id="more"
        >
            <div className="flex-1 border-[1px] border-gray-400 rounded-lg p-10 flex flex-col gap-4 justify-center items-center">
                <h4 className="font-extrabold text-xl">Build and Test</h4>
                <p className="font-extralight text-lg">
                    Write, build, and test your code effortlessly across Python,
                    JavaScript, and Bash. Instantly compile and execute in a
                    unified environment, streamlining your development process
                    with speed, reliability, and zero setup.
                </p>
                <NavLink to="/code/new">
                    <Button
                        size="lg"
                        className="flex flex-row gap-2 w-fit mt-4 group"
                        variant="default"
                    >
                        Try out our editor
                        <ArrowRight
                            size={24}
                            className="group-hover:translate-x-[2px] transition-all"
                        />
                    </Button>
                </NavLink>
            </div>

            <div className="flex-1 border-[1px] border-gray-400 rounded-lg p-10 flex flex-col gap-4 justify-center items-center">
                <h4 className="font-extrabold text-xl">
                    Learn and Discover: Explore Coding Without Limits
                </h4>
                <p className="font-extralight text-lg">
                    Unlock the power of coding with a seamless, cross-platform
                    experience. Experiment with Python, JavaScript, and Bash in
                    one unified environment. Whether you're learning a new
                    language, testing code snippets, or exploring innovative
                    solutions, our platform helps you compile, execute, and
                    understand your code instantly. Dive in, discover, and bring
                    your ideas to life.
                </p>
            </div>
        </section>
    );
};

export default SubHeroSection;
