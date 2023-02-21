import styles from "@/styles/Form.module.css";

function Form() {
  return (
    <>
      <div className={styles.material}>
        <button>Material</button>
        <input type="number" placeholder="%" />
      </div>
      <div className={styles.material}>
        <button>Material</button>
        <input type="number" placeholder="%" />
      </div>
      <div className={styles.buttons}>
        <button>Add Materials</button>
        <button>Analyze</button>
      </div>
    </>
  );
}

export default Form;
