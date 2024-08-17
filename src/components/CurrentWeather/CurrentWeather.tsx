import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import ClimateData from "../ClimateData/ClimateData";
import InfoDetail from "../InfoDetail/InfoDetail";
import Search from "../Search/Search";

import styles from "./CurrentWeather.module.css";

export default function CurrentWeather() {
  return (
    <div className={styles.container}>
      <Search />
      <h1>Icon</h1>
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

      <div>
        <InfoDetail icon={CloudQueueIcon} text="Patchy Drizzle Day" />
        <InfoDetail icon={AccessTimeIcon} text="16:30" />
      </div>

      <div></div>
    </div>
  );
}
