import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { chooseLanguage } from "@/lib/utils";

const CodeInput = ({
    language,
    value,
    setValue,
}: {
    language: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const onChange = useCallback((val: string) => {
        setValue(val);
    }, []);

    return (
        <CodeMirror
            className="flex-1"
            value={value}
            extensions={chooseLanguage(language)}
            theme={"dark"}
            onChange={onChange}
            height="100%"
        />
    );
};

export default CodeInput;
