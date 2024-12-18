import React from "react";
import { useParams } from "react-router";

const CodeExists = () => {
    const params = useParams();

    return <div className="text-white">CodeExists: {params.programId}</div>;
};

export default CodeExists;
