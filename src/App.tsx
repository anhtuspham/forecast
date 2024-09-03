import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather/OverviewWeather";

import styles from "./App.module.css";

import { useTheme } from "@mui/material";
import { useContext } from "react";
import { LocationContext } from "./context/LocationContextProvider";

function App() {
  const theme = useTheme();
  const { location } = useContext(LocationContext);

  console.log(
    "process.env.REACT_APP_WEATHER_API_KEY",
    process.env.REACT_APP_WEATHER_API_KEY
  );

  return (
    <Container className={styles.container}>
      {/* left container */}
      <Container
        className={styles.leftContainer}
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        {location && (
          <CurrentWeather
            data={{
              city: {
                longitude: location.longitude,
                latitude: location.latitude,
              },
            }}
          />
        )}
      </Container>

      {/* right container */}
      <Container className={styles.rightContainer}>
        <Header />
        <Forecast />
        <OverviewWeather />
      </Container>
    </Container>
  );
}

export default App;
