"use client";
import React, { useEffect, useState } from "react";
import Sala from "./components/Sala/Sala";
import Infos from "./components/Infos/Infos";
import styles from "./page.module.css";
import dados from "./dados.json";

const Home = () => {
  const [assentos, setAssentos] = useState([]);

  useEffect(() => {
    const formattedAssentos = Array.from({ length: 8 }, (_, rowIndex) =>
      Array.from({ length: 8 }, (_, colIndex) => {
        const numero = rowIndex * 8 + colIndex + 1;
        const assento = dados.assentos.find(a => a.numero === numero);
        return assento ? (assento.disponivel ? "disponivel" : "indisponivel") : "indisponivel";
      })
    );
    setAssentos(formattedAssentos);
  }, []);

  const handleComprar = () => {
    if (!assentos.some(row => row.includes("selecionado"))) {
      alert("Selecione pelo menos um assento antes de comprar.");
      return;
    }

    const novosAssentos = assentos.map(row =>
      row.map(assento => (assento === "selecionado" ? "indisponivel" : assento))
    );
    setAssentos(novosAssentos);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.movieTitle}>{dados.titulo}</h1>
      <h2 className={styles.sessionTime}>Horário: {dados.horario}</h2>
      <div className={styles.content}>
        <Sala assentos={assentos} setAssentos={setAssentos} />
        <Infos sinopse={dados.sinopse} data={dados.dataLancamento} dir={dados.direcao} />
      </div>
      <button onClick={handleComprar} className={styles.buyButton}>
        Comprar
      </button>
    </div>
  );
};

export default Home;
