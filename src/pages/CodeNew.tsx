import CodeInput from "@/components/CodeInput";
import Header from "@/components/Header";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import ChatWindow from "@/components/ChatWindow";

function CodeNew() {
    const [language, setLanguage] = useState<
        "javascript" | "python" | "text" | "bash"
    >("javascript");

    const [program, setProgram] = useState("console.log('hello world!');");
    const [input, setInput] = useState("This is a your input file...");
    const [output, setOutput] = useState(
        "And this is where your output will appear..."
    );

    return (
        <section className="dark absolute inset-0 h-full flex flex-col p-2 bg-[#030712] text-white">
            <Header
                source_code={program}
                language={language}
                stdin={input}
                setOutput={setOutput}
            />

            <div className="flex flex-col md:flex-row flex-1 gap-2">
                <div className="flex flex-col flex-1 gap-2 h-full border-[0.5px] p-2 rounded-lg border-white border-opacity-50">
                    <div className="flex flex-row justify-between items-center">
                        <h4 className="font-bold text-lg">Program:</h4>
                        <div className="flex flex-row gap-2">
                            <LanguageDropdown
                                language={language}
                                setLanguage={setLanguage}
                            />
                            <Button
                                variant="ghost"
                                className="rounded-lg"
                                onClick={() => setProgram("")}
                            >
                                Clear
                                <Eraser size={20} />
                            </Button>
                        </div>
                    </div>
                    <CodeInput
                        language={language}
                        value={program}
                        setValue={setProgram}
                    />
                </div>

                <div className="flex flex-col flex-1 gap-2 h-full border-[1px] p-2 rounded-lg border-white border-opacity-50">
                    <div className="flex flex-row justify-between items-center">
                        <h4 className="font-bold text-lg">Input:</h4>

                        <Button
                            variant="ghost"
                            className="rounded-lg"
                            onClick={() => setInput("")}
                        >
                            Clear
                            <Eraser size={20} />
                        </Button>
                    </div>
                    <CodeInput
                        language="text"
                        value={input}
                        setValue={setInput}
                    />

                    <div className="flex flex-row justify-between items-center">
                        <h4 className="font-bold text-lg">Output:</h4>

                        <Button
                            variant="ghost"
                            className="rounded-lg"
                            onClick={() => setOutput("")}
                        >
                            Clear
                            <Eraser size={20} />
                        </Button>
                    </div>
                    <CodeInput
                        language="text"
                        value={output}
                        setValue={setOutput}
                    />
                </div>
            </div>

            <ChatWindow />
        </section>
    );
}
export default CodeNew;
