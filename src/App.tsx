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
  const {location} = useContext(LocationContext)

  return (
    <Container className={styles.container}>
        {/* left container */}
        <Container
          className={styles.leftContainer}
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <CurrentWeather data={{ latitude: location?.latitude, longitude: location?.longitude }} />
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
