import { SvgIconComponent } from "@mui/icons-material";
import { useTheme } from "@mui/material";

import styles from "./Button.module.css";

type ButtonProps = {
  isHaveIcon?: boolean;
  text?: string;
  icon?: SvgIconComponent;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  isHaveIcon = false,
  text,
  icon: Icon,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  return (
    <button
      {...props}
      className={styles.button}
      style={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
    >
      {isHaveIcon && Icon ? <Icon /> : text}
    </button>
  );
}
