import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {

  Box,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../theme/ThemeContextProvider";

export default function ToggleSwitch() {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title={`Activate ${activateName} Mode`}>
          <IconButton
            onClick={switchColorMode}
            sx={{
              p: 1,
              border: `1px ${theme.palette.text.disabled} solid`,
            }}
            size="large"
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined color="action" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
