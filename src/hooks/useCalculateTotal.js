import { useEffect } from "react";

const useCalculateTotal = (assentos, filmes, setTotal) => {
  useEffect(() => {
    const selectedSeats = assentos.flat().filter((seat) => seat === "selecionado").length;
    setTotal(selectedSeats * filmes.preco);
  }, [assentos, filmes.preco, setTotal]);
};

export default useCalculateTotal;
