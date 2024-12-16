import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.tsx";
import Code from "./pages/CodeNew.tsx";
import CodeExists from "./pages/CodeExists.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="code">
                    <Route path="new" element={<Code />} />
                    <Route path="exists/:programId" element={<CodeExists />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
