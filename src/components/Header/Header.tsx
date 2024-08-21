import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./Header.module.css";
import Button from "../ui/Button/Button";

export default function Header() {
  return (
    <div className={styles.container}>
      <h2>Forecast</h2>
      <div className={styles.buttonHeader}>
        <Button text="&#176;C" />
        <Button text="&#176;F" />
        <ToggleSwitch />
        <a
          href="https://github.com/anhtuspham"
          target="_blank"
          className={styles.githubBtn}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}
