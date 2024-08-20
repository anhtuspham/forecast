import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties
};

export default function Container({ children, className, style }: Props) {
  return <div style={style} className={className}>{children}</div>;
}
