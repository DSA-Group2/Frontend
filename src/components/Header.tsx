import { ArrowLeftCircle, BookMarked, Play } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useQueryClient } from "@tanstack/react-query";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useAuthContext } from "@/contextsAndProviders/AuthContextProvider";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { run, save, update } from "@/lib/services/code";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { LANGUAGES } from "@/lib/constants";

const Header = ({
    source_code,
    language,
    stdin,
    setOutput,
    progId,
    progName,
}: {
    source_code: string;
    language: string;
    stdin: string;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    progId?: string;
    progName?: string;
}) => {
    const { user } = useAuthContext();
    const { toast } = useToast();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey: ["save-code"],
        mutationFn: async () => {
            if (progId) {
                await update(
                    progId,
                    source_code,
                    LANGUAGES.find((lang) => lang.value === language)
                        ?.code as number
                );

                toast({
                    description: "Code updated successfully!",
                });
            } else {
                await save(
                    user?.userId as string,
                    source_code,
                    LANGUAGES.find((lang) => lang.value === language)
                        ?.code as number
                );

                toast({
                    description: "Code saved to workspace!",
                });
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["workspace"] });
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Some error occured. Try again soon",
            });
        },
    });

    const { mutate: mutateRun, isPending: isPendingRun } = useMutation({
        mutationKey: ["run-code"],
        mutationFn: async () => {
            const res = await run(
                source_code,
                LANGUAGES.find((lang) => lang.value === language)
                    ?.code as number,
                stdin
            );

            setOutput(res.data);
            toast({
                description: "Code has been run! Check the output window",
            });
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Some error occured. Try again soon",
            });
        },
    });

    const onCodeSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate();
    };

    const onCodeRun = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutateRun();
    };

    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-2 items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => navigate(-1)}
                            >
                                <ArrowLeftCircle className="hover:cursor-pointer" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Back</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <NavLink to="/">
                    <h3 className="text-lg font-bold flex flex-row gap-4 items-center hover:cursor-pointer mr-3">
                        <img
                            src="/logo.png"
                            alt="cross=code-logo"
                            height={44}
                            width={44}
                            className="rounded-full"
                        />{" "}
                        Cross Code
                    </h3>
                </NavLink>
                <Input
                    className="w-[200px] rounded-lg border-primary"
                    placeholder="name your program..."
                    defaultValue={progName ? progName : "Untitled"}
                />
            </div>

            <div className="flex flex-row gap-2">
                {user ? (
                    <form onSubmit={onCodeSave}>
                        <Button
                            size="lg"
                            variant="secondary"
                            className="rounded-lg"
                            disabled={isPending}
                        >
                            Save to Workspace
                            <BookMarked size={20} />
                        </Button>
                    </form>
                ) : (
                    <Dialog>
                        <DialogTrigger>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="rounded-lg"
                            >
                                Save to Workspace
                                <BookMarked size={20} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="dark">
                            <DialogHeader>
                                <DialogTitle>
                                    Log in to save your program to your
                                    workspace!
                                </DialogTitle>
                                <DialogDescription>
                                    Save your program to our sophisticated
                                    workspace by logging in, or signing up by
                                    creating an account!
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <NavLink to="/signup">
                                    <Button variant="secondary">Sign Up</Button>
                                </NavLink>
                                <NavLink to="/login">
                                    <Button variant="default">Log In</Button>
                                </NavLink>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
                <form onSubmit={onCodeRun}>
                    <Button
                        size="lg"
                        variant="default"
                        className="rounded-lg"
                        disabled={isPendingRun}
                    >
                        Run <Play size={20} />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Header;
