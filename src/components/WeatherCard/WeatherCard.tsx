import { SvgIconComponent } from "@mui/icons-material";

import styles from "./WeatherCard.module.css";
import ClimateData from "../ClimateData/ClimateData";
import { useTheme } from "@mui/material";

type WeatherCardProps = {
  dayTime: string;
  icon: SvgIconComponent;
  maxTemp: string;
  minTemp: string;
  tempSymbol: string;
};

export default function WeatherCard({
  dayTime,
  icon: Icon,
  maxTemp,
  minTemp,
  tempSymbol,
}: WeatherCardProps) {
  const theme = useTheme();
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <p>{dayTime}</p>
      <div>
        <Icon />
      </div>
      <div style={{ display: "flex" }}>
        <ClimateData
          style={{ display: "flex" }}
          firstPart={maxTemp}
          secondPart={tempSymbol}
        />{" "}
        /
        <ClimateData
          style={{ display: "flex" }}
          firstPart={minTemp}
          secondPart={tempSymbol}
        />
      </div>
    </div>
  );
}
