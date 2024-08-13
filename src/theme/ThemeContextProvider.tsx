import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createContext, ReactNode, useMemo, useState } from "react";
import { useThemeDetector } from "../hooks/useThemeDetector";

type ThemeContext = {
  children: ReactNode;
};

type ThemeContextProps = {
  switchColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  switchColorMode: () => {},
});

export function ThemeContextProvider({ children }: ThemeContext) {
  const isDarkMode = useThemeDetector();
  
  const [mode, setMode] = useState<"light" | "dark">(
    isDarkMode ? "light" : "dark"
  );

  const switchColorMode = () => {
    setMode((preMode) => (preMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);
  return (
    <StyledEngineProvider>
      <ThemeContext.Provider value={{ switchColorMode }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}
