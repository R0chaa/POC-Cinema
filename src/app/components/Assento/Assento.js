import React from "react";
import styles from "./Assento.module.css";

const Assento = ({ estado, onClick, lightMode }) => {
  const className = `${styles.seat} ${
    lightMode ? styles[`${estado}Light`] : styles[estado]
  }`;

  return (
    <div
      className={className}
      onClick={estado === "indisponivel" ? null : onClick}
    ></div>
  );
};

export default Assento;
