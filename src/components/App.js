import { MantineProvider } from "@mantine/core";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ForgotPasswordPage from "./ForgotPasswordPage";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SecurityQuestionsPage from "./SecurityQuestionsPage";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/security-questions"
            element={<SecurityQuestionsPage />}
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
