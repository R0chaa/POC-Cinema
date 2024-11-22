import { useEffect } from "react";

const useFetchFilmes = (setFilmes, setAssentos, setLoading) => {
  useEffect(() => {
    async function fetchFilmes() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/R0chaa/POC-Cinema/refs/heads/main/public/dados.json"
        );
        const data = await res.json();
        setFilmes(data);

        const formattedAssentos = Array.from({ length: 8 }, (_, rowIndex) =>
          Array.from({ length: 8 }, (_, colIndex) => {
            const numero = rowIndex * 8 + colIndex + 1;
            const assento = data.assentos.find((a) => a.numero === numero);
            return assento
              ? assento.disponivel
                ? "disponivel"
                : "indisponivel"
              : "indisponivel";
          })
        );
        setAssentos(formattedAssentos);
      } catch (err) {
        console.error("Erro ao carregar o JSON:", err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFilmes();
  }, [setFilmes, setAssentos, setLoading]);
};

export default useFetchFilmes;
