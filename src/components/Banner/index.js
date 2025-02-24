import styles from "./Banner.module.css";

export default function about() {
  return (
    <div className={styles.banner}>
      <img src="/banner.jpg" />
    </div>
  );
}
