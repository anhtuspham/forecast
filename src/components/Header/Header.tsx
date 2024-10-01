import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./Header.module.css";
import Button from "../ui/Button/Button";

import { WeatherContext } from "../../context/WeatherContextProvider";
import { useContext } from "react";

export default function Header() {
  const { currentUnitDegree, handleSwitchDegreeUnit } =
    useContext(WeatherContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Forecast</h2>
      <div className={styles.buttonHeader}>
        <Button text={currentUnitDegree} onClick={handleSwitchDegreeUnit} />
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
