import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  return (
    <div className={styles["hamburger"]}>
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
      <div className={styles["line"]}></div>
    </div>
  );
};

export default Hamburger;
