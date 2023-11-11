import styles from "./WeatherCard.module.css";
import Time from "./Time";
import WeatherData from "./WeatherData";
function WeatherCard() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <p>{currentDate}</p>
        <Time />
      </div>
      <div className={styles.weatherdata}>
        <WeatherData />
      </div>
    </div>
  );
}

export default WeatherCard;