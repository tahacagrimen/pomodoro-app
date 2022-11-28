import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PomodoroProvider } from "./contexts/PomodoroContext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PomodoroProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PomodoroProvider>
);
