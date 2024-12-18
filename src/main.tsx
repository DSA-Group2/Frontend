import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.tsx";
import CodeNew from "./pages/CodeNew.tsx";
import CodeExists from "./pages/CodeExists.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import CodePage from "./pages/CodePage.tsx";
import WorkspacePage from "./pages/WorkspacePage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />

                <Route path="code" /*  element={<CodePage />} */>
                    <Route path="new" element={<CodeNew />} />
                    <Route path="exists/:programId" element={<CodeExists />} />
                </Route>

                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />

                <Route path="workspace" element={<WorkspacePage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
