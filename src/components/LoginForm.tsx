import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { useAuthContext } from "@/contextsAndProviders/AuthContextProvider";
import { login } from "@/lib/services/auth";
import { useToast } from "@/hooks/use-toast";
import { redirect } from "react-router";

const LoginForm = () => {
    const { setUser } = useAuthContext();
    const { toast } = useToast();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isChecked, setIsChecked] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationKey: ["login"],
        mutationFn: async () => {
            const res = await login(username, password);

            if (!res.success) {
                toast({
                    variant: "destructive",
                    title: res.message as string,
                });
            } else {
                setUser(res.data);
                redirect("/workspace");
                toast({
                    description: "Login successful!",
                });
            }
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Some error occured. Try again soon",
            });
        },
    });

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        mutate();
    };

    return (
        <form className="flex flex-col gap-4 py-6" onSubmit={onFormSubmit}>
            <Label htmlFor="username">Username</Label>
            <Input
                name="username"
                id="username"
                required
                type="text"
                minLength={8}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-white border-opacity-50"
            />

            <Label htmlFor="password">Password</Label>
            <Input
                name="password"
                id="password"
                required
                type={isChecked ? "text" : "password"}
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-white border-opacity-50"
            />

            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                <Label htmlFor="showpass">Show Password</Label>
                <Checkbox
                    id="showpass"
                    onClick={() => setIsChecked(!isChecked)}
                />
            </div>

            <Button className="w-full" type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Log In"}
            </Button>
        </form>
    );
};

export default LoginForm;
