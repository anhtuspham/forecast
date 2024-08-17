import ClimateData from "../ClimateData/ClimateData";
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
        secondPartStyle={{fontSize: '4rem'}}
      />

      <div className={styles.locationTimestamp}>
        <h2>Paris</h2>
        <div>
          <span>Monday</span>, May 3
        </div>
      </div>

      <div></div>
    </div>
  );
}
