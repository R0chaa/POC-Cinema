import styles from "./conteudo.module.css"

export default function Conteudo({dados}) {
    return (
        <div>
            <p className={styles.titulo}>Sinopse do Filme:</p>
            <p className={styles.texto}>{dados.sinopse}</p>
            <p className={styles.titulo}>Data de Lançamento:</p>
            <p className={styles.texto}>{dados.dataLancamento}</p>
            <p className={styles.titulo}>Direção:</p>
            <p className={styles.texto}>{dados.direcao}</p>
        </div>
    )
}