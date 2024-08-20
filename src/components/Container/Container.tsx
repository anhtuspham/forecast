import { ReactNode } from "react";

type Props = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Container({ children, ...props }: Props) {
  return <div {...props}>{children}</div>;
}
