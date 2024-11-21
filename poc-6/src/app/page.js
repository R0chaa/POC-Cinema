"use client"
import { useState, useEffect } from "react";
import Cabecalho from "./components/cabecalho";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const res = await fetch("/dados.json"); // URL para acessar o JSON local
        const data = await res.json();
        setFilmes(data);
      } catch (err) {
        console.error("Erro ao carregar o JSON:", err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFilmes();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <Cabecalho dados={filmes}/>
    </div>
  );
}
