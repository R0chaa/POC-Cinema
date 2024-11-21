import React from "react";
import styles from "./Assento.module.css";

const Assento = ({ estado, onClick }) => {
  return (
    <div
      className={`${styles.seat} ${styles[estado]}`}
      onClick={onClick}
    ></div>
  );
};

export default Assento;
