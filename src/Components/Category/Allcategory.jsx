import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import Category from "./Category";
import styles from "./Allcategory.module.css";
import LeftSideBar from "./LeftSideBar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categoriesList = [
  {
    id: "Action",
    color: "#FF5209",
    src: action,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    src: drama,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    src: fantasy,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    src: fiction,
  },
  {
    id: "Horror",
    color: "#7358FF",
    src: horror,
  },
  {
    id: "Music",
    color: "#E61E32",
    src: music,
  },
  {
    id: "Romance",
    color: "#11B800",
    src: romance,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    src: thriller,
  },
  {
    id: "Western",
    color: "#912500",
    src: western,
  },
];
const KEY = "Categories";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();
  function handelSubmit() {
    if (categories.length < 3) {
      setError("Minimum 3 category required");
      return;
    }
    localStorage.setItem(KEY, JSON.stringify([...categories]));
    navigate("/browse");
  }

  return (
    <div style={{ display: 'flex' }}>

      <LeftSideBar
        categories={categories}
        setCategories={setCategories}
        error={error}
      />
      <div className={styles.container}>
        {categoriesList.map((item) => (
          <Category
            data={item}
            key={item.id}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
        {categories.length !== 0 ? (
          <button className={styles.next} onClick={handelSubmit}>
            Next Page
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Categories;