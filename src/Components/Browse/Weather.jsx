import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import pressure from "../../assets/pressure.png";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";
function Weather() {
  const [WeatherData, setWeatherData] = useState(null);
  useEffect(function () {
    async function fetchWeatherData() {
      try {
        const res = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=ae09d2c7736d4a24803145032232910&q=Kolkata&aqi=no"
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchWeatherData();
  }, []);
  console.log(WeatherData);
  return (
    <div className={styles.container}>
      {WeatherData ? (
        <>
          <div className={styles.current}>
            <img src={WeatherData.current.condition.icon} alt="icon" />

            <p>{WeatherData.current.condition.text}</p>
          </div>
          <div className={styles.middle}>
            <p className={styles.temp}>{`${WeatherData.current.temp_c}°C`}</p>
            <div className={styles.pressure}>
              <img src={pressure} alt="pressure" />
              <p>
                {`${WeatherData.current.pressure_mb} mbar`}
                <br />
                <p className={styles.gap}>pressure</p>
              </p>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.wind}>
              <img src={wind} alt="wind icon" />
              <p>
                {WeatherData.current.wind_kph}kph <br />
                <p className={styles.gap}>Wind</p>
              </p>
            </div>
            <div className={styles.humidity}>
              <img src={humidity} alt="humidity icon" />
              <p>
                {WeatherData.current.humidity}% <br />
                <p className={styles.gap}>Humidity</p>
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Weather;