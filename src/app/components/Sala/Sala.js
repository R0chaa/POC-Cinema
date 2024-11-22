import React from "react";
import Assento from "../Assento/Assento";
import styles from "./Sala.module.css";

const Sala = ({ assentos, setAssentos, lightMode }) => {
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
          {row.map((estado, colIndex) => {
            if (rowIndex === 7 && (colIndex < 2 || colIndex > 5)) {
              return null;
            }
            return (
              <Assento
                key={colIndex}
                estado={estado}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
                lightMode={lightMode}
              />
            );
          })}
        </div>
      ))}
      <div className={`${styles.screen} ${lightMode ? styles.screenLight : ""}`}>Tela</div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${lightMode ? styles.livreLight : styles.livre}`}></div>
          <span className={`${styles.legendText} ${lightMode ? styles.legendTextLight : ""}`}>Livre</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${lightMode ? styles.selecionadoLight : styles.selecionado}`}></div>
          <span className={`${styles.legendText} ${lightMode ? styles.legendTextLight : ""}`}>Selecionado</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.dot} ${lightMode ? styles.indisponivelLight : styles.indisponivel}`}></div>
          <span className={`${styles.legendText} ${lightMode ? styles.legendTextLight : ""}`}>Indisponível</span>
        </div>
      </div>
    </div>
  );
};

export default Sala;