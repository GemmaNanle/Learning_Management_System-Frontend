import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";

import "./index.css";
import "./dark-mode.css";

import { initializeTheme } from "./utils/theme";

// Initialize saved theme
initializeTheme();

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);