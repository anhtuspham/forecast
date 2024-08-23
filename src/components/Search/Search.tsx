import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from "./Search.module.css";
import { useTheme } from "@mui/material";

export default function Search() {
  const theme = useTheme();
  return (
    <div
      className={styles.inputContainer}
      style={
        {
          "--default-background-color": theme.palette.background.default,
        } as React.CSSProperties
      }
    >
      <SearchIcon />
      <input
        placeholder="Search for location"
        className={styles.input}
        style={
          {
            "--placeholder-color": theme.palette.text.secondary,
            color: theme.palette.text.primary,
          } as React.CSSProperties
        }
      />
      <LocationOnIcon sx={{ cursor: "pointer" }} />
    </div>
  );
}
