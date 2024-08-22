import AcUnitIcon from "@mui/icons-material/AcUnit";

import WeatherCard from "../WeatherCard/WeatherCard";

import styles from "./Forecast.module.css";

export default function Forecast() {
  return (
    <div className={styles.forecastList}>
      <WeatherCard
        dayTime="Tue"
        icon={AcUnitIcon}
        maxTemp="35"
        minTemp="30"
        tempSymbol="&#176;C"
      />
      <WeatherCard
        dayTime="Tue"
        icon={AcUnitIcon}
        maxTemp="35"
        minTemp="30"
        tempSymbol="&#176;C"
      />
      <WeatherCard
        dayTime="Tue"
        icon={AcUnitIcon}
        maxTemp="35"
        minTemp="30"
        tempSymbol="&#176;C"
      />
      <WeatherCard
        dayTime="Tue"
        icon={AcUnitIcon}
        maxTemp="35"
        minTemp="30"
        tempSymbol="&#176;C"
      />
    </div>
  );
}
