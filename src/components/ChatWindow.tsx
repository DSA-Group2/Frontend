import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { MessageCircleCode } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { askAIAQuestion } from "@/lib/services/code";

const ChatWindow = () => {
    const [code, setCode] = useState("");
    const [query, setQuery] = useState("");
    const [counter, setCounter] = useState(0);
    const [quesAndResp, setQuesAndResp] = useState<string[][]>([]);

    const { mutate, isPending } = useMutation({
        mutationKey: ["ai-question"],
        mutationFn: async () => {
            setCounter(counter + 1);
            const resp = await askAIAQuestion(code, query);

            let newQuesAndRep = quesAndResp;
            newQuesAndRep[counter] = [query, resp.code];
            setQuesAndResp(newQuesAndRep);

            setQuery("");
            setCode("");
        },
    });

    return (
        <Dialog>
            <DialogTrigger className="absolute bottom-10 right-10">
                <Button size="lg" className="rounded-full">
                    AI Chat Window <MessageCircleCode size={30} color="white" />
                </Button>
            </DialogTrigger>
            <DialogContent className="dark text-white">
                <DialogHeader>
                    <DialogTitle>Ai Chat Window</DialogTitle>
                    <DialogDescription>
                        <Card className="mt-5 min-w-full max-w-full">
                            <CardContent className="min-h-[500px] max-h-[500px] flex flex-col gap-2 py-3 overflow-y-scroll">
                                <CardDescription className="text-center">
                                    Ask the AI some questions:
                                </CardDescription>
                                {quesAndResp.map(([ques, resp], index) => (
                                    <React.Fragment key={index}>
                                        <p
                                            key={index}
                                            className="p-3 rounded-full w-fit ml-auto max-w-[70%] bg-primary"
                                        >
                                            {ques}
                                        </p>
                                        <p
                                            key={index}
                                            className="p-3 rounded-full w-fit mr-auto max-w-[70%] bg-secondary"
                                        >
                                            {resp}
                                        </p>
                                    </React.Fragment>
                                ))}
                            </CardContent>
                            <CardFooter className="flex flex-col gap-2 border-t-[1px] border-primary pt-5">
                                <div className="flex flex-row gap-2">
                                    <Textarea
                                        name="code"
                                        id="code"
                                        placeholder="Your code goes here..."
                                        required
                                        minLength={1}
                                        value={code}
                                        onChange={(e) =>
                                            setCode(e.target.value)
                                        }
                                        className="resize-none"
                                    />

                                    <Textarea
                                        name="code"
                                        id="code"
                                        placeholder="Your question goes here..."
                                        required
                                        minLength={1}
                                        value={query}
                                        onChange={(e) =>
                                            setQuery(e.target.value)
                                        }
                                        className="resize-none"
                                    />
                                </div>
                                <Button
                                    className="w-full text-center"
                                    onClick={() => mutate()}
                                    disabled={isPending}
                                >
                                    Ask
                                </Button>
                            </CardFooter>
                        </Card>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ChatWindow;
