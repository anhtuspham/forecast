import { ReactNode } from "react";

import styles from "./OverviewCard.module.css";
import { useTheme } from "@mui/material";

type OverviewCardProps = {
  title: string;
  children: ReactNode;
};

export default function OverviewCard({ title, children }: OverviewCardProps) {
  const theme = useTheme();
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <div>{title}</div>
      <div className={styles.child}>{children}</div>
    </div>
  );
}
