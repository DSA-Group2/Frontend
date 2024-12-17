import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { LANGUAGES } from "@/lib/constants";

const LanguageDropdown = ({
    language,
    setLanguage,
}: {
    language: string;
    setLanguage: React.Dispatch<
        React.SetStateAction<"javascript" | "python" | "text" | "bash">
    >;
}) => {
    return (
        <Select
            //@ts-expect-error
            onValueChange={(value) => setLanguage(value)}
            defaultValue={language}
        >
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Programming Language" />
            </SelectTrigger>
            <SelectContent>
                {LANGUAGES.map((lang) => (
                    <SelectItem value={lang.value} key={lang.value}>
                        {lang.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default LanguageDropdown;
