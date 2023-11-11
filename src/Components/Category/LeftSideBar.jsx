import styles from "./LeftSideBar.module.css";
import Chips from "../Global/Chips";

function LeftSidebar({ categories, setCategories, error }) {
  return (
    <div className={styles.sidebar}>
      <p className={styles.heading}>Super App</p>
      <p className={styles.text}>
        Choose <br /> your entertainment <br /> category
      </p>
      {categories.map((data, id) => (
        <Chips
          data={data}
          categories={categories}
          setCategories={setCategories}
          key={id}
        />
      ))}
      {error && ( <p className={styles.error}> <span>⚠️</span> {error} </p> )}
  
    </div>    
  );
}

export default LeftSidebar;