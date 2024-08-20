import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import ClimateData from "../ClimateData/ClimateData";
import InfoDetail from "../InfoDetail/InfoDetail";
import Search from "../Search/Search";

import styles from "./CurrentWeather.module.css";
import { useTheme } from "@mui/material";

export default function CurrentWeather() {
  const theme = useTheme();
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Search />
      <ThunderstormIcon />
      <ClimateData
        className={styles.degree}
        firstPart="12"
        secondPart="&#176;C"
        firstPartStyle={{ fontSize: "6rem" }}
        secondPartStyle={{ fontSize: "4rem" }}
      />

      <div className={styles.locationTimestamp}>
        <h2>Paris</h2>
        <div className={styles.timestamp}>
          <span>Monday</span>
          <p>, May 3</p>
        </div>
      </div>

      <div className={styles.infoDetail}>
        <InfoDetail icon={CloudQueueIcon} text="Patchy Drizzle Day" />
        <InfoDetail icon={AccessTimeIcon} text="16:30" />
      </div>

      <div></div>
    </div>
  );
}
