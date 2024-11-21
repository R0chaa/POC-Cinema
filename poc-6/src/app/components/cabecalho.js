import styles from './cabecalho.module.css';

export default function Cabecalho({ dados }) {
    return (
        <div className={styles.cabecalho}>
            <p className={styles.titulo}>{dados.titulo}</p>
            <p className={styles.horario}>{dados.horario}</p>
        </div>
    )
}