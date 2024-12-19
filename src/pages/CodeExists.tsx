import CodeInput from "@/components/CodeInput";
import Header from "@/components/Header";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getSpeceficProgram } from "@/lib/services/code";
import ChatWindow from "@/components/ChatWindow";
import { LANGUAGES } from "@/lib/constants";

const CodeExists = () => {
    const params = useParams();
    const { programId } = params;

    if (!programId)
        return (
            <p className="w-full text-center text-xl text-red-600">
                An Error Occured. Refresh Page in a short while.
            </p>
        );
    const [language, setLanguage] = useState<
        "javascript" | "python" | "text" | "bash"
    >("javascript");

    const [program, setProgram] = useState("console.log('hello world!');");
    const [input, setInput] = useState("This is a your input file...");
    const [output, setOutput] = useState(
        "And this is where your output will appear..."
    );

    const { data, isFetching, isError } = useQuery({
        queryKey: [`program-${programId}`],
        queryFn: async () => {
            const result = await getSpeceficProgram(programId);
            setProgram(result.prog.source_code);
            setLanguage(
                //@ts-expect-error
                LANGUAGES.find((lang) => lang.code === result.prog.language_id)
                    ?.value
            );
            return result;
        },
    });

    if (isFetching)
        return <p className="w-full text-center text-xl">Loading...</p>;

    if (isError)
        return (
            <p className="w-full text-center text-xl text-red-600">
                An Error Occured. Refresh Page in a short while.
            </p>
        );

    if (data !== undefined)
        return (
            <section className="dark absolute inset-0 h-full flex flex-col p-2 bg-[#030712] text-white">
                <Header
                    source_code={program}
                    language={language}
                    stdin={input}
                    setOutput={setOutput}
                    progId={programId}
                    progName={data.prog.name}
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
};

export default CodeExists;
