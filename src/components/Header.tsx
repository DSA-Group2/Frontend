import { ArrowLeftCircle, BookMarked, Play } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import { useAuthContext } from "@/contexts/AuthContextProvider";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

const Header = () => {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-between p-3">
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

            <Input
                className="w-[400px] rounded-lg"
                placeholder="name your program..."
            />

            <div className="flex flex-row gap-2">
                {user ? (
                    <Button
                        size="lg"
                        variant="secondary"
                        className="rounded-lg"
                    >
                        Save to Workspace
                        <BookMarked size={20} />
                    </Button>
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
                <Button size="lg" variant="default" className="rounded-lg">
                    Run <Play size={20} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
