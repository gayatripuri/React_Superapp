import styles from "./Chips.module.css";

function Chips({ data, setCategories, categories, setSelected }) {
  function handelClick() {
    setCategories(categories.filter((id) => id !== data));
  }
  return (
    <button className={styles.token} onClick={() => handelClick()}>
      {data}
      <span>X</span>
    </button>
  );
}

export default Chips;