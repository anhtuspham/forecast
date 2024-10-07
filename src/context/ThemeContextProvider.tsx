import {
  createTheme,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { amber, grey, blueGrey } from "@mui/material/colors";

import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  // if the current system is in dark mode, it return true
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode ? "dark" : "light"
  );

  const switchColorMode = () => {
    setMode((preMode: PaletteMode) => (preMode === "light" ? "dark" : "light"));
  };

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: grey,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            background: {
              default: "#f3f4f6",
              paper: grey[50],
              secondary: "#333333",
            },
          }
        : {
            // palette values for dark mode
            primary: blueGrey,
            divider: blueGrey[700],
            background: {
              default: "#181818",
              paper: "#212020",
              secondary: "#181818",
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <StyledEngineProvider>
      <ThemeContext.Provider value={{ switchColorMode }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}
