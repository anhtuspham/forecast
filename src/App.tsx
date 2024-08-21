import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather";

import styles from "./App.module.css";

function App() {

  return (
    <>
      <Container className={styles.container}>
        {/* left container */}
        <Container className={styles.leftContainer}>
          <CurrentWeather />
        </Container>

        {/* right container */}
        <Container className={styles.rightContainer}>
          <Header />
          <Forecast />
          <OverviewWeather />
        </Container>
      </Container>
    </>
  );
}

export default App;
