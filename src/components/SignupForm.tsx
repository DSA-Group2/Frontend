import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SignupForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");

    const [isChecked, setIsChecked] = useState(false);
    const [isConfChecked, setIsConfChecked] = useState(false);

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

            <Label htmlFor="password">Confirm Password</Label>
            <Input
                name="password"
                id="password"
                required
                type={isConfChecked ? "text" : "password"}
                minLength={8}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="border-white border-opacity-50"
            />

            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                <Label htmlFor="showpass">Show Password</Label>
                <Checkbox
                    id="showpass"
                    onClick={() => setIsChecked(!isChecked)}
                />
            </div>

            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                <Label htmlFor="showconfpass">Show Confirm Password</Label>
                <Checkbox
                    id="showconfpass"
                    onClick={() => setIsConfChecked(!isConfChecked)}
                />
            </div>

            <Button className="w-full" type="submit">
                Log In
            </Button>
        </form>
    );
};

export default SignupForm;
