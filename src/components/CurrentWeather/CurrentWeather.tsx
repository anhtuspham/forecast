import { useContext } from "react";

import styles from "./CurrentWeather.module.css";

import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import ClimateData from "../ClimateData/ClimateData";
import InfoDetail from "../InfoDetail/InfoDetail";
import Search from "../Search/Search";

import { WeatherType } from "../../api/types";
import { extractDateInfo } from "../../utils/getTime";
import { WeatherContext } from "../../context/WeatherContextProvider";
import { celToFah } from "../../utils/degree";

interface Props {
  data: WeatherType;
}

export default function CurrentWeather({ data }: Props) {
  const { currentUnitDegree, isCelsiusDegree } = useContext(WeatherContext);
  return (
    <div className={styles.container}>
      <Search />

      <div className={styles.currentCondition}>
        <div className={styles.icon}>
          <img src={data.current.condition.icon} />
        </div>

        <ClimateData
          className={styles.currentDegreeText}
          firstPart={
            isCelsiusDegree
              ? data.current.temp_c
              : celToFah(data.current.temp_c)
          }
          secondPart={currentUnitDegree}
        />
      </div>

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
        <InfoDetail
          icon={AccessTimeIcon}
          text={extractDateInfo(data.location.localtime).time}
        />
      </div>

      <div></div>
    </div>
  );
}
