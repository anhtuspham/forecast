import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContainer}></div>
    </div>
  );
}
