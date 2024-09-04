import { SvgIconComponent } from "@mui/icons-material";

import styles from "./InfoDetail.module.css";

type InfoDetailProps = {
  icon: SvgIconComponent;
  text: string;
  colorIcon?: string
} & React.HTMLAttributes<HTMLElement>;

export default function InfoDetail({
  icon: Icon,
  text,
  colorIcon,
  ...props
}: InfoDetailProps) {
  return (
    <div className={styles.container} {...props}>
      <Icon sx={{ color: colorIcon ? colorIcon : "" }} />
      <p>{text}</p>
    </div>
  );
}
