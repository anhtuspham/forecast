import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";

export default function ToggleSwitch() {
  const theme = useTheme();
  const { switchColorMode } = useContext(ThemeContext);
  const activateName = useMemo(
    () => (theme.palette.mode === "dark" ? "Light" : "Dark"),
    [theme]
  );

  return (
    <>
      <Tooltip title={`${activateName} Mode`}>
        <IconButton
          sx={{ outline: "none", "&:focus": { outline: "none" } }}
          onClick={switchColorMode}
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
    </>
  );
}
