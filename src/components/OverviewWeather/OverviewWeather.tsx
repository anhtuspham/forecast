import { WeatherType } from "../../api/types";
import InfoDetail from "../InfoDetail/InfoDetail";
import OverviewCard from "../OverviewCard/OverviewCard";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkMode from "@mui/icons-material/DarkMode";

import styles from "./OverviewWeather.module.css";
import ClimateData from "../ClimateData/ClimateData";
import { useTheme } from "@mui/material";

interface Props {
  addData: WeatherType;
  data: WeatherType;
}

export default function OverviewWeather({ data, addData }: Props) {
  const theme = useTheme();

  console.log("weather data", data);

  return (
    <div className={styles.container}>
      <h2>Today's Highlights</h2>
      <div className={styles.overviewContainer}>
        <OverviewCard title="UV Index">{data.current.uv}</OverviewCard>

        <OverviewCard title="Wind status">
          <ClimateData firstPart={data.current.wind_kph} secondPart="km/h" />
        </OverviewCard>

        <OverviewCard title="Sunrise & Sunset">
          <InfoDetail
            colorIcon={
              theme.palette.mode === "dark"
                ? "rgba(221, 255, 0, 1)"
                : "rgba(254, 16, 16, 0.8)"
            }
            icon={WbSunnyIcon}
            text={addData.astronomy.astro.sunrise}
          />{" "}
          <InfoDetail
            colorIcon={
              theme.palette.mode === "dark"
                ? "rgba(221, 255, 0, 1)"
                : "rgba(254, 16, 16, 0.8)"
            }
            icon={DarkMode}
            text={addData.astronomy.astro.sunset}
          />
        </OverviewCard>

        <OverviewCard title="Humidity">
          <ClimateData firstPart={data.current.humidity} secondPart="%" />
        </OverviewCard>

        <OverviewCard title="Visibility">
          <ClimateData firstPart={data.current.vis_km} secondPart="km" />
        </OverviewCard>

        <OverviewCard title="Air Quality">
          {data.current.air_quality["gb-defra-index"]}
        </OverviewCard>
      </div>
    </div>
  );
}
