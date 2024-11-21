export default function Cabecalho({ dados }) {
    return (
        <div>
            <h1>{dados.titulo}</h1>
            <h2>{dados.horario}</h2>
        </div>
    )
}