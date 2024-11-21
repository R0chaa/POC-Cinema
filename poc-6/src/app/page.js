"use client";
import React, { useState } from "react";
import Sala from "./components/Sala/Sala";
import Infos from "./components/Infos/Infos";
import styles from "./page.module.css";

const Home = () => {
  const movieName = "Agropesca Jacaré";
  const sessionTime = "19:00";

  const sinopse =
  "Um ano depois de encerrar o ensino médio, o jovem Isaías Wright não tem planos para o futuro e é desafiado por sua mãe solo e um empresário de sucesso a começar a traçar um rumo melhor para sua vida. Ele passa a ser discipulado pelo seu novo mentor, conta com orações de sua mãe e de uma guerreira de orações, Dona Clara, e começa a descobrir o propósito de Deus para sua vida.";

  const data = "26 de setembro de 2024 (Brasil)";
  const dir = "Alex Kendrick";

  const [assentos, setAssentos] = useState(
    Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => "disponivel")
    )
  );

  const handleComprar = () => {
    const temSelecionado = assentos.some(row =>
      row.includes("selecionado")
    );

    if (!temSelecionado) {
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
      <h1 className={styles.movieTitle}>{movieName}</h1>
      <h2 className={styles.sessionTime}>Horário: {sessionTime}</h2>
      <div className={styles.content}>
        <Sala assentos={assentos} setAssentos={setAssentos} />
        <Infos sinopse={sinopse} data={data} dir={dir} />
      </div>
      <button onClick={handleComprar} className={styles.buyButton}>
        Comprar
      </button>
    </div>
  );
};

export default Home;
