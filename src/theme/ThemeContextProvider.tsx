import {
  Container,
  createTheme,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { amber,grey, deepOrange, blueGrey } from "@mui/material/colors";

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

  const [mode, setMode] = useState<"light" | "dark">(
    isDarkMode ? "dark" : "light"
  );

  const switchColorMode = () => {
    setMode((preMode: PaletteMode) => (preMode === "light" ? "dark" : "light"));
  };

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: grey,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            background: {
              default: '#f3f4f6cc',
              paper: grey[50]
            }
          }
        : {
            // palette values for dark mode
            primary: blueGrey,
            divider: blueGrey[700],
            background: {
              default: '#000000',
              paper: '#181818',
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <StyledEngineProvider>
      <ThemeContext.Provider value={{ switchColorMode }}>
        <ThemeProvider theme={theme}>
          <Container
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              minWidth: '100vw',
              minHeight: '100vh'
            }}
          >
            {children}
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}
