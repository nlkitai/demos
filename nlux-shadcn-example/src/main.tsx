import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@nlux/themes/nova.css";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
