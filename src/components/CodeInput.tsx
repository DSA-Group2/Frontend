import React, { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

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
            className="flex-grow"
            value={value}
            extensions={[javascript({ jsx: true })]}
            theme={"dark"}
            onChange={onChange}
            height="100%"
        />
    );
};

export default CodeInput;
