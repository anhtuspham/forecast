import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather/OverviewWeather";

import styles from "./App.module.css";

import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  return (
    <div>
      <Container className={styles.container}>
        {/* left container */}
        <Container
          className={styles.leftContainer}
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <CurrentWeather />
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
