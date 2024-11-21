import styles from "./conteudo.module.css"

export default function Conteudo({dados}) {
    return (
        <div className={styles.div_container}>
            <div>
                {dados.assentos.map((dado) => (
                    <li key={dado.numero}>
                    {dado.numero}: {dado.disponivel}
                    </li>
                ))}
            </div>
            <div>
                <p className={styles.titulo}>Sinopse do Filme:</p>
                <p className={styles.texto}>{dados.sinopse}</p>
                <p className={styles.titulo}>Data de Lançamento:</p>
                <p className={styles.texto}>{dados.dataLancamento}</p>
                <p className={styles.titulo}>Direção:</p>
                <p className={styles.texto}>{dados.direcao}</p>
            </div>
        </div>
    )
}