import { useContext } from "react";

import WeatherCard from "../WeatherCard/WeatherCard";
import { ForecastWeatherType } from "../../api/types";
import { extractDateInfo } from "../../utils/getTime";
import { WeatherContext } from "../../context/WeatherContextProvider";

import styles from "./Forecast.module.css";

interface Props {
  data: ForecastWeatherType;
}

export default function Forecast({ data }: Props) {
  const { currentUnitDegree, isCelsiusDegree } = useContext(WeatherContext);

  return (
    <div className={styles.forecastList}>
      {data.forecast.forecastday.map((dayInForecast, index) => (
        <WeatherCard
          key={index}
          dayTime={extractDateInfo(dayInForecast.date).day}
          icon={dayInForecast.day.condition.icon}
          maxTemp={
            isCelsiusDegree
              ? dayInForecast.day.maxtemp_c
              : dayInForecast.day.maxtemp_f
          }
          minTemp={
            isCelsiusDegree
              ? dayInForecast.day.mintemp_c
              : dayInForecast.day.mintemp_f
          }
          tempSymbol={currentUnitDegree}
        />
      ))}
    </div>
  );
}
