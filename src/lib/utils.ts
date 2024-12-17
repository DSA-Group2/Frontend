import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { StreamLanguage } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { shell } from "@codemirror/legacy-modes/mode/shell";
import { python } from "@codemirror/lang-python";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const chooseLanguage = (language: string) => {
    const shellLanguage = StreamLanguage.define(shell);

    switch (language) {
        case "text":
            return undefined;
        case "javascript":
            return [javascript({ jsx: true })];
        case "bash":
            return [shellLanguage];
        case "python":
            return [python()];
        default:
            return undefined;
    }
};
