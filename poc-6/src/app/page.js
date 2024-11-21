"use client"
import { useEffect, useState } from "react";

export default function Home() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
      async function fetchFilmes() {
        try {
          const res = await fetch("http://localhost:3001");
          const data = await res.json();
          await setFilmes(data);
        } catch (err) {
          console.log(err);
        }
      }
  
      fetchFilmes();
    }, []);

  return (
    <div>
      <h1>Poc-6</h1>
    </div>
  );
}
