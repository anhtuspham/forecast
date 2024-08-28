import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather/OverviewWeather";

import styles from "./App.module.css";

import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const theme = useTheme();

  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        position.coords.latitude,
        position.coords.longitude,
        position
      );

      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  return (
    <div>
      <Container className={styles.container}>
        {/* left container */}
        <Container
          className={styles.leftContainer}
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <CurrentWeather data={{latitude: lat, longitude: long}}/>
        </Container>

        {/* right container */}
        <Container className={styles.rightContainer}>
          <Header />
          <Forecast />
          <OverviewWeather />
        </Container>
      </Container>
    </div>
  );
}

export default App;
