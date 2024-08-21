import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { ThemeContextProvider } from "./theme/ThemeContextProvider.tsx";
import WrapperContainer from "./theme/WrapperContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <WrapperContainer>
        <App />
      </WrapperContainer>
    </ThemeContextProvider>
  </StrictMode>
);
