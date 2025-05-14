import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState();
  const [error, setError] = useState("");

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите новое значение");

    if (!promptValue || promptValue.length < 3) {
      setError("Введённая строка должна содержать минимум 3 символа");
    } else {
      setValue(promptValue);
      setError("");
    }
  };

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles["page-heading"]}>Ввод значения</h1>
        <p className={styles["no-margin-text"]}>
          Текущее значение <code>value</code>: "
          <output className={styles["current-value"]}>{value}</output>"
        </p>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles["buttons-container"]}>
          <button onClick={onInputButtonClick} className={styles.button}>
            Ввести новое
          </button>
          <button className={styles.button} disabled>
            Добавить в список
          </button>
        </div>
        <div className={styles["list-container"]}>
          <h2 className={styles["list-heading"]}>Список:</h2>
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
          <ul className={styles.list}>
            <li className={styles["list-item"]}>Первый элемент</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
