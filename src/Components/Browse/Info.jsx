import styles from "./Info.module.css";
import profile from "../../assets/profileBig.png";
// const USER_KEY = "UserData";
// const CATEGORIES_KEY = "Categories";

function Info() {
  const userDetails = JSON.parse(localStorage.getItem('formData'));
  // console.log(userDetails, "1");

  // const categories = JSON.parse(localStorage.getItem(CATEGORIES_KEY));
  // console.log(categories, "2");

  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <img src={profile} alt="profile" />
      </div>
      <div className={styles.details}>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p className={styles.username}>{userDetails.username}</p>
        <div className={styles.tokens}>
          {/* {userDetails.map((data) => (
            <Token data={data} key={data} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
function Token({ data }) {
  return <div className={styles.token}>{data}</div>;
}
export default Info;
