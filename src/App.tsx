import Container from "./components/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import OverviewWeather from "./components/OverviewWeather";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Container className={styles.Container}>
        {/* left container */}
        <Container>
          <CurrentWeather />
        </Container>

        {/* right container */}
        <Container>
          <Header />
          <Forecast />
          <OverviewWeather />
        </Container>
      </Container>
    </>
  );
}

export default App;
