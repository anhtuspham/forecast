import OverviewCard from "../OverviewCard/OverviewCard";

import styles from "./OverviewWeather.module.css";

export default function OverviewWeather() {
  return (
    <div className={styles.container}>
      <h2>Today's Highlights</h2>
      <div className={styles.overviewContainer}>
        <OverviewCard title="UV Index">No data</OverviewCard>
        <OverviewCard title="UV Index">No data</OverviewCard>
        <OverviewCard title="UV Index">No data</OverviewCard>
        <OverviewCard title="UV Index">No data</OverviewCard>
        <OverviewCard title="UV Index">No data</OverviewCard>
        <OverviewCard title="UV Index">No data</OverviewCard>
      </div>
    </div>
  );
}
