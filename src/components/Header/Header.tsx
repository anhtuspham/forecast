import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./Header.module.css";
import Button from "../ui/Button/Button";

export default function Header() {

  return (
    <div className={styles.container}>
      <h2>Forecast</h2>
      <div>
        <ToggleSwitch />
        <Button text="&#176;C"/>
        <Button text="&#176;F" />
        <a href="https://github.com/anhtuspham" target="_blank">
          <Button isHaveIcon={true} icon={GitHubIcon} />
        </a>
      </div>
    </div>
  );
}
