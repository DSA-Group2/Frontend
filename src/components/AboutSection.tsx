import React from "react";

const AboutSection = () => {
    return (
        <section className="flex flex-col items-start gap-8 max-w-[800px] mx-auto">
            <h2 className="text-3xl font-extrabold">About Our Editor</h2>

            <p className="text-lg font-normal flex flex-col gap-6">
                Our editor, built using CodeMirror, offers a seamless and
                efficient coding experience for Python, JavaScript, and Bash.
                Designed to be powerful yet user-friendly, it comes packed with
                essential features to elevate your workflow:
                <ul className="list-disc flex flex-col gap-4 font-extralight">
                    <li>
                        Syntax Highlighting: Easily distinguish code elements
                        for better readability.
                    </li>
                    <li>
                        Auto-Completion: Boost productivity with smart
                        suggestions as you type.
                    </li>
                    <li>
                        Error Detection: Identify compilation and runtime issues
                        instantly for faster debugging.
                    </li>
                    <li>
                        Customizable Workspaces: Save, access, and manage your
                        programs effortlessly in organized workspaces.
                    </li>
                    <li>
                        Multi-Language Support: Seamlessly write and execute
                        Python, JavaScript, and Bash code.
                    </li>
                    <li>
                        Responsive Design: Enjoy a smooth coding experience on
                        any device or screen size.
                    </li>
                </ul>
                Simplify coding, testing, and managing programs in one unified
                editor.
            </p>
        </section>
    );
};

export default AboutSection;
