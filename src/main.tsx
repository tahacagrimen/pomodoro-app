import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PodomoroProvider } from "./contexts/PodomoroContext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PodomoroProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PodomoroProvider>
);
