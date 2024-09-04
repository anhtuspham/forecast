import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

import ClimateData from "../ClimateData/ClimateData";
import InfoDetail from "../InfoDetail/InfoDetail";
import Search from "../Search/Search";

import { WeatherType } from "../../api/types";

import styles from "./CurrentWeather.module.css";
import { extractDateInfo } from "../../utils/getTime";

export default function CurrentWeather({ data }: { data: WeatherType }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.icon}>
        <img src={data.current.condition.icon} />
      </div>
      <ClimateData
        style={{ display: "flex", fontSize: "6rem" }}
        firstPart={data.current.temp_c}
        secondPart="&deg;C"
      />

      <div className={styles.locationTimestamp}>
        <h2>{data.location.name}</h2>
        <div className={styles.timestamp}>
          <span style={{ fontWeight: "600" }}>
            {extractDateInfo(data.location.localtime).day}
          </span>
          <p>
            , {extractDateInfo(data.location.localtime).month}{" "}
            {extractDateInfo(data.location.localtime).date}
          </p>
        </div>
      </div>

      <div className={styles.infoDetail}>
        <InfoDetail icon={CloudQueueIcon} text={data.current.condition.text} />
        <InfoDetail icon={AccessTimeIcon} text={extractDateInfo(data.location.localtime).time} />
      </div>

      <div></div>
    </div>
  );
}
