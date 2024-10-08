import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather/OverviewWeather";

import styles from "./App.module.css";

import { useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./context/WeatherContextProvider";
import { fetchForecastWeatherData, fetchWeatherData } from "./api/weather";
import { ForecastWeatherType, WeatherType } from "./api/types";
import { Loading } from "./components/ui/Loading/Loading";

function App() {
  const theme = useTheme();
  const { location } = useContext(WeatherContext);

  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [additionalData, setAdditionalData] = useState<WeatherType | null>(
    null
  );
  const [futureData, setFutureData] = useState<ForecastWeatherType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // fetch weather api in current location
  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        try {
          setIsLoading(true);
          const data = await fetchWeatherData("current.json", {
            lat: location.lat,
            long: location.lon,
          });
          const additional = await fetchWeatherData("astronomy.json", {
            lat: location.lat,
            long: location.lon,
          });
          const future = await fetchForecastWeatherData({
            lat: location.lat,
            long: location.lon,
          });

          setWeatherData(data);
          setAdditionalData(additional);
          setFutureData(future);
        } catch (error) {
          console.error("Error when loading", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [location]);

  if (!weatherData || !additionalData || !futureData) {
    return <div>No data available</div>;
  }

  return (
    <Container className={styles.container}>
      {/* left container */}
      <Container
        className={styles.leftContainer}
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        <CurrentWeather data={weatherData} />
      </Container>

      {/* right container */}
      <Container className={styles.rightContainer}>
        {/* content in right  */}
        <Container className={styles.contentRightContainer}>
          <Header />
          <Forecast data={futureData} />
          <OverviewWeather data={weatherData} addData={additionalData} />
        </Container>
      </Container>
      {isLoading ? <Loading /> : null}
    </Container>
  );
}

export default App;
