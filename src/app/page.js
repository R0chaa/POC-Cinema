"use client";
import React, { useState } from "react";
import Sala from "./components/Sala/Sala";
import Infos from "./components/Infos/Infos";
import Loading from "./components/Loading/Loading";
import { BiAdjust } from "react-icons/bi";

import useLightMode from "../hooks/useLightMode";
import useResize from "../hooks/useResize";
import useFetchFilmes from "../hooks/useFetchFilmes";
import useCalculateTotal from "../hooks/useCalculateTotal";

import styles from "./page.module.css";

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [assentos, setAssentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [total, setTotal] = useState(0);

  useLightMode(setLightMode);
  useResize(setIsMobile);
  useFetchFilmes(setFilmes, setAssentos, setLoading);
  useCalculateTotal(assentos, filmes, setTotal);

  const handleComprar = () => {
    if (total === 0) {
      alert("Selecione pelo menos um assento antes de comprar.");
      return;
    }

    const novosAssentos = assentos.map((row) =>
      row.map((assento) => (assento === "selecionado" ? "indisponivel" : assento))
    );
    setAssentos(novosAssentos);
    alert("Compra realizada com sucesso!");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`${styles.container} ${lightMode ? styles.light : ""}`}>
      <button className={styles.lightModeButton} onClick={() => setLightMode(!lightMode)}>
        <BiAdjust className={styles.icon} />
      </button>
      <h1 className={styles.movieTitle}>{filmes.titulo}</h1>
      <h2 className={styles.sessionTime}>Horário: {filmes.horario}</h2>
      <div className={styles.content}>
        <Sala assentos={assentos} setAssentos={setAssentos} lightMode={lightMode} />
        {!isMobile && (
          <Infos sinopse={filmes.sinopse} data={filmes.dataLancamento} dir={filmes.direcao} />
        )}
      </div>
      <button onClick={handleComprar} className={styles.buyButton}>
        Comprar
        <span className={styles.buttonPrice}>R${total.toFixed(2)}</span>
      </button>
      {isMobile && (
        <Infos sinopse={filmes.sinopse} data={filmes.dataLancamento} dir={filmes.direcao} />
      )}
    </div>
  );
};

export default Home;
