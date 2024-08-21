import { SvgIconComponent } from "@mui/icons-material";

import styles from "./WeatherCard.module.css";

type WeatherCardProps = {
  dayTime: string;
  icon: SvgIconComponent;
  maxTemp: string;
  minTemp: string;
};

export default function WeatherCard({
  dayTime,
  icon: Icon,
  maxTemp,
  minTemp,
}: WeatherCardProps) {
  return (
    <div className={styles.card}>
      <p>{dayTime}</p>
      <div>
        <Icon />
      </div>
      <div>
        <span>{maxTemp}</span>/<span>{minTemp}</span>
      </div>
    </div>
  );
}
