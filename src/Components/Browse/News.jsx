import { useEffect, useState } from "react";
import styles from "./News.module.css";
function News() {
  const [news, setNews] = useState(null);
  useEffect(function () {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/everything?q=keyword&apiKey=98709625029a4b99be49eb31e50eba5b"
        );
        const data = await res.json();
        if (data.status !== "ok")
          throw new console.error("Error fetching data");
        setNews(data.articles[4]);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchNews();
  }, []);
  return (
    <div className={styles.card}>
      {news ? (
        <>
          <div className={styles.top}>
            <img src={news.urlToImage} alt="news icon" />
            <div className={styles.details}>
              <p className={styles.heading}>{news.title}</p>
              <p className={styles.published}>
                <span>Published At</span>
                {news.publishedAt.slice(0, 10)} |
                {news.publishedAt.slice(11, 16)}
              </p>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>{news.description}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default News;