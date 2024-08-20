import Container from "./components/Container/Container";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header/Header";
import OverviewWeather from "./components/OverviewWeather";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Container className={styles.container}>
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
