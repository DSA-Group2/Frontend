import CodeInput from "@/components/CodeInput";
import Header from "@/components/Header";
import React from "react";

function Code() {
    const [value, setValue] = React.useState("console.log('hello world!');");

    return (
        <div className="dark absolute inset-0 h-full flex flex-col p-2 bg-black text-white">
            <Header />

            <div className="flex flex-col md:flex-row flex-grow gap-2">
                <div className="flex flex-col flex-grow gap-2 h-full border-[1px] p-2 rounded-lg border-white">
                    <h4 className="font-bold text-lg">Program:</h4>
                    <CodeInput
                        language="javascript"
                        value={value}
                        setValue={setValue}
                    />
                </div>

                <div className="flex flex-col flex-grow gap-2 h-full border-[1px] p-2 rounded-lg border-white">
                    <h4 className="font-bold text-lg">Input:</h4>
                    <CodeInput
                        language="javascript"
                        value={value}
                        setValue={setValue}
                    />

                    <h4 className="font-bold text-lg">Output:</h4>
                    <CodeInput
                        language="javascript"
                        value={value}
                        setValue={setValue}
                    />
                </div>
            </div>
        </div>
    );
}
export default Code;
