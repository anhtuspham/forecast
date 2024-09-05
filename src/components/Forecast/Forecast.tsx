
import WeatherCard from "../WeatherCard/WeatherCard";
import { ForecastWeatherType } from "../../api/types";
import { extractDateInfo } from "../../utils/getTime";

import styles from "./Forecast.module.css";

interface Props {
  data: ForecastWeatherType;
}

export default function Forecast({ data }: Props) {
  console.log("data in forecast: ", data.forecast.forecastday.length);

  return (
    <div className={styles.forecastList}>
      {data.forecast.forecastday.map((dayInForecast, index) => (
        <div key={index}>
          <WeatherCard
            dayTime={extractDateInfo(dayInForecast.date).day}
            icon={dayInForecast.day.condition.icon}
            maxTemp={dayInForecast.day.maxtemp_c}
            minTemp={dayInForecast.day.mintemp_c}
            tempSymbol="&#176;C"
          />
        </div>
      ))}
    </div>
  );
}
