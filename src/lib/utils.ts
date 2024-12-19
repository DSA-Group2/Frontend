import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { format } from "date-fns";

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

export const handleAxiosError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        // Check for specific Axios errors
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error("Error Status:", error.response.status);
            console.error("Error Data:", error.response.data);
        } else if (error.request) {
            // No response received after the request was made
            console.error("No response received:", error.request);
        } else {
            // Other errors (e.g., setting up the request)
            console.error("Error Message:", error.message);
        }
    } else {
        // Handle non-Axios errors (optional)
        console.error("Unexpected Error:", error);
    }

    throw new Error();
};

export const formatDate = (isoDate: string) => {
    return format(new Date(isoDate), "MMMM do yyyy");
};
