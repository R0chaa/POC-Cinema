import React from "react";
import Assento from "../Assento/Assento";
import styles from "./Sala.module.css";

const Sala = ({ assentos, setAssentos }) => {
  const handleSeatClick = (rowIndex, colIndex) => {
    setAssentos(prevState => {
      const novosAssentos = prevState.map((row, rIdx) =>
        row.map((assento, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? assento === "disponivel"
              ? "selecionado"
              : assento === "selecionado"
              ? "disponivel"
              : assento
            : assento
        )
      );
      return novosAssentos;
    });
  };

  return (
    <div className={styles.seatContainer}>
      {assentos.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`${styles.row} ${rowIndex === 7 ? styles.lastRow : ""}`}
        >
          {row.map(
            (estado, colIndex) =>
              (rowIndex !== 7 || (colIndex >= 2 && colIndex <= 5)) && (
                <Assento
                  key={colIndex}
                  estado={estado}
                  onClick={() => handleSeatClick(rowIndex, colIndex)}
                />
              )
          )}
        </div>
      ))}
      <div className={styles.screen}>Tela</div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.livre}`}></div>
          <span className={styles.legendText}>Livre</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.selecionado}`}></div>
          <span className={styles.legendText}>Selecionado</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${styles.indisponivel}`}></div>
          <span className={styles.legendText}>Indisponível</span>
        </div>
      </div>
    </div>
  );
};

export default Sala;
