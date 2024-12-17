import React from "react";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row items-center mt-10 max-w-[1400px] mx-auto"
            id="hero"
        >
            <div className="flex-1 px-12 flex flex-col gap-10">
                <h1 className="text-4xl font-extrabold">
                    Your Universal Online Code Compiler
                </h1>

                <h4 className="text-lg font-light text-gray-400">
                    One platform. Multiple languages. Run Python, JavaScript,
                    and Bash scripts seamlessly on the cloud with zero setup.
                    Fast, reliable, and accessible - whether you're coding on
                    the go, or testing a snippet. Experience the freedom to
                    write, compile, and execute your code anytime, anywhere
                </h4>

                <a href="#more">
                    <Button
                        size="lg"
                        className="flex flex-row gap-2 w-fit"
                        variant="default"
                    >
                        Know More <ArrowDown size={24} />{" "}
                    </Button>
                </a>
            </div>

            <div className="flex-1 px-12">
                <img
                    src="/landing-page-image-2.png"
                    alt="landin-page-image-showing-langs"
                    height={500}
                    width={500}
                />
            </div>
        </section>
    );
};

export default HeroSection;
