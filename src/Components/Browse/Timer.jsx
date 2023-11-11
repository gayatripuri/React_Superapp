import { useEffect, useState } from "react";
import styles from "./Timer.module.css";
function Timer() {
  const [value, setValue] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(
      () =>
        setValue(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
      6000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <p className={styles.time}>{value}</p>;
}

export default Timer;