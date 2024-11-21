import React from "react";
import styles from "./Infos.module.css";

const Infos = ({ sinopse, data, dir }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.title}>Sinopse do filme</h3>
        <p className={styles.text}>{sinopse}</p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Data de lançamento</h3>
        <p className={styles.text}>{data}</p>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>Direção</h3>
        <p className={styles.text}>{dir}</p>
      </div>
    </div>
  );
};

export default Infos;
