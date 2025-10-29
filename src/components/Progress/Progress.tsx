import styles from "./progress.module.css";

export interface ProgressProps {
  value: number;
  max?: number;
  color?: string;
  striped?: boolean;
}
// Progress component
const Progress = ({
  value,
  max = 100,
  color = "#4caf50",
  striped,
}: ProgressProps) => {
  const progressStyle = {
    "--progress-color": color,
    "--progress-width": `${(value / max) * 100}%`,
  } as React.CSSProperties;

  return (
    <div className={styles.container}>
      <h5 className={styles.value}>{value}%</h5>
      <div
        className={`${styles.progressBar} ${striped ? styles.striped : ""}`}
        style={progressStyle}
      >
        <div className={styles.progressFill}></div>
      </div>
    </div>
  );
};

export default Progress;
