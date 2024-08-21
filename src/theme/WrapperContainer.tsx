import { useTheme } from "@mui/material";
import { ReactNode } from "react";

type WrapperContainerProps = {
  children: ReactNode;
};

export default function WrapperContainer({ children }: WrapperContainerProps) {
  const theme = useTheme();
  return (
    <div
      style={{
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </div>
  );
}
