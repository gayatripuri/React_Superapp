import { useEffect, useState } from "react";
import styles from "./Category.module.css";

function Category({ data, categories, setCategories }) {
  const [selected, setSelected] = useState(false);
  function handelClick(data) {
    if (categories.includes(data.id)) {
      setCategories(categories.filter((id) => id !== data.id));
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  }
  useEffect(
    function () {
      setSelected(categories.includes(data.id) === true);
    },
    [setSelected, categories, data.id]
  );
  return (
    <div
      className={`${styles.category} ${selected ? styles.border : ""}`}
      style={{ backgroundColor: data.color }}
      onClick={() => handelClick(data)}

    >
     
      <img src={data.src} alt={data.id} />
    </div>
  );
}

export default Category;