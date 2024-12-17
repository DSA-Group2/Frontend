import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isChecked, setIsChecked] = useState(false);

    return (
        <form className="flex flex-col gap-4 py-6">
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

            <Button className="w-full" type="submit">
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
