import React from "react";
import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/lib/services/auth";
import { useAuthContext } from "@/contextsAndProviders/AuthContextProvider";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

const WorkspaceHeader = () => {
    const { user, setUser } = useAuthContext();
    const { toast } = useToast();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationKey: ["logout"],
        mutationFn: async () => {
            setUser(await logout());
        },
        onSuccess: () => {
            toast({
                description: "Logged Out Successfully!",
            });
            navigate("/");
        },
    });

    const onClickLogout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate();
    };

    return (
        <div className="flex flex-row justify-between items-center border-b-[1px] border-primary py-5 px-8 -mx-8">
            <NavLink to="/">
                <h3 className="text-lg font-bold flex flex-row gap-4 items-center hover:cursor-pointer">
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

            <Popover>
                <PopoverTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>{user?.username}</AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="dark text-white p-2 flex flex-col gap-2 w-[120px]">
                    <form onSubmit={onClickLogout}>
                        <Button
                            variant="secondary"
                            className="w-full"
                            disabled={isPending}
                        >
                            Logout <LogOut />
                        </Button>
                    </form>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default WorkspaceHeader;
