import { SvgIconComponent } from "@mui/icons-material";

import styles from "./InfoDetail.module.css";

type InfoDetailProps = {
  icon: SvgIconComponent;
  text: string;
};

export default function InfoDetail({ icon: Icon, text }: InfoDetailProps) {
  return (
    <div className={styles.container}>
      <Icon />
      {text}
    </div>
  );
}
