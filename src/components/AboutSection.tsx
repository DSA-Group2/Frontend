import React from "react";

const AboutSection = () => {
    return (
        <section className="flex flex-col items-start gap-8 max-w-[800px] mx-auto px-2">
            <h2 className="text-3xl font-extrabold">About Our Editor</h2>

            <p className="text-lg font-normal flex flex-col gap-6">
                Our editor, built using CodeMirror, offers a seamless and
                efficient coding experience for Python, JavaScript, and Bash.
                Designed to be powerful yet user-friendly, it comes packed with
                essential features to elevate your workflow:
                <ul className="list-disc flex flex-col gap-4 font-extralight">
                    <li>
                        <span className="font-bold">Syntax Highlighting:</span>{" "}
                        Easily distinguish code elements for better readability.
                    </li>
                    <li>
                        <span className="font-bold">Auto-Completion:</span>{" "}
                        Boost productivity with smart suggestions as you type.
                    </li>
                    <li>
                        <span className="font-bold">Error Detection:</span>{" "}
                        Identify compilation and runtime issues instantly for
                        faster debugging.
                    </li>
                    <li>
                        <span className="font-bold">
                            Customizable Workspaces:
                        </span>{" "}
                        Save, access, and manage your programs effortlessly in
                        organized workspaces.
                    </li>
                    <li>
                        <span className="font-bold">
                            Multi-Language Support:
                        </span>{" "}
                        Seamlessly write and execute{" "}
                        <span className="font-bold">
                            Python, JavaScript, and Bash
                        </span>{" "}
                        code.
                    </li>
                    <li>
                        <span className="font-bold">Responsive Design:</span>{" "}
                        Enjoy a smooth coding experience on any device or screen
                        size.
                    </li>
                </ul>
                Simplify coding, testing, and managing programs in one unified
                editor.
            </p>
        </section>
    );
};

export default AboutSection;
