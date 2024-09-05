import styles from "./WeatherCard.module.css";
import ClimateData from "../ClimateData/ClimateData";
import { useTheme } from "@mui/material";

type WeatherCardProps = {
  dayTime: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  tempSymbol: string;
};

export default function WeatherCard({
  dayTime,
  icon,
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

      <div className={styles.icon}>
        <img src={icon}/>
      </div>

      <div style={{ display: "flex", gap: '.2rem' }}>
        <ClimateData
          style={{ display: "flex", fontWeight: '700' }}
          firstPart={maxTemp}
          secondPart={tempSymbol}
        />{" "}
        /
        <ClimateData
          style={{ display: "flex"}}
          firstPart={minTemp}
          secondPart={tempSymbol}
        />
      </div>
    </div>
  );
}
