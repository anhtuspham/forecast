import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather/OverviewWeather";

import styles from "./App.module.css";

import { useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "./context/LocationContextProvider";
import { fetchWeatherData } from "./api/weather";
import { WeatherType } from "./api/types";

function App() {
  const theme = useTheme();
  const { location } = useContext(LocationContext);

  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [additionalData, setAdditionalData] = useState<WeatherType | null>(
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
            lat: location.latitude,
            long: location.longitude,
          });
          const additional = await fetchWeatherData("astronomy.json", {
            lat: location.latitude,
            long: location.longitude,
          });
          setWeatherData(data);
          setAdditionalData(additional);
        } catch (error) {
          console.error("Error when loading", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [location]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (!weatherData) {
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
        <Header />
        <Forecast />
        <OverviewWeather data={weatherData} addData={additionalData} />
      </Container>
    </Container>
  );
}

export default App;
