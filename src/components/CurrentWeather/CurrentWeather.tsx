import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import ClimateData from "../ClimateData/ClimateData";
import InfoDetail from "../InfoDetail/InfoDetail";
import Search from "../Search/Search";

import { WeatherType } from "../../api/types";

import styles from "./CurrentWeather.module.css";

export default function CurrentWeather({ data }: WeatherType) {
  function isCityWithCoordinates(
    city: string | { latitude: number; longitude: number }
  ): city is { latitude: number; longitude: number } {
    return (
      typeof city === "object" && "latitude" in city && "longitude" in city
    );
  }
  // const {longitude, latitude} = data.city as {latitude: number, longitude: number}
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.icon}>
        <ThunderstormIcon />
      </div>
      <ClimateData
        style={{ display: "flex", fontSize: "6rem" }}
        firstPart="12"
        secondPart="&deg;C"
      />

      {isCityWithCoordinates(data.city) && (
        <div>
          <h1>{data.city.longitude}</h1>
          <h2>{data.city.latitude}</h2>
        </div>
      )}

      <div className={styles.locationTimestamp}>
        <h2>Paris</h2>
        <div className={styles.timestamp}>
          <span style={{ fontWeight: "600" }}>Monday</span>
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
