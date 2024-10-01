import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { ThemeContextProvider } from "./context/ThemeContextProvider.tsx";
import { WeatherContextProvider } from "./context/WeatherContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <WeatherContextProvider>
        <App />
      </WeatherContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
