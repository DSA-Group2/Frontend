import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.tsx";
import CodeNew from "./pages/CodeNew.tsx";
import CodeExists from "./pages/CodeExists.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import WorkspacePage from "./pages/WorkspacePage.tsx";
import { AuthContextProvider } from "./contexts/AuthContextProvider.tsx";
import CodePage from "./pages/CodePage.tsx";
import AuthChecker from "./components/AuthChecker.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="new" element={<CodeNew />} />

                    <Route path="/valid" element={<AuthChecker />}>
                        <Route path="code">
                            <Route index element={<CodePage />} />
                            <Route path=":programId" element={<CodeExists />} />
                        </Route>

                        <Route path="workspace" element={<WorkspacePage />} />
                    </Route>

                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    </StrictMode>
);
