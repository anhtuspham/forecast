import { WeatherType } from "../../api/types";
import InfoDetail from "../InfoDetail/InfoDetail";
import OverviewCard from "../OverviewCard/OverviewCard";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import styles from "./OverviewWeather.module.css";
import ClimateData from "../ClimateData/ClimateData";

interface Props {
  addData: WeatherType;
  data: WeatherType;
}

export default function OverviewWeather({ data, addData }: Props) {

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
            colorIcon="rgba(221, 255, 0, 1)"
            icon={WbSunnyIcon}
            text={addData.astronomy.astro.sunrise}
          />{" "}
          <InfoDetail
            colorIcon="rgba(221, 255, 0, 1)"
            icon={DarkModeOutlinedIcon}
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
