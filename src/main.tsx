import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { LocationContextProvider } from "./context/LocationContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
