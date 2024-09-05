import {
  createTheme,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { amber, grey, blueGrey } from "@mui/material/colors";

import { createContext, ReactNode, useMemo, useState } from "react";
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
  const isDarkMode = useMediaQuery("(prefer-color-scheme: dark)");

  console.log('is Dark mode', isDarkMode);
  

  const [mode, setMode] = useState<"light" | "dark">(
    isDarkMode ? "light" : "dark"
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
            },
          }
        : {
            // palette values for dark mode
            primary: blueGrey,
            divider: blueGrey[700],
            background: {
              default: "#181818",
              paper: "#212020",
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
