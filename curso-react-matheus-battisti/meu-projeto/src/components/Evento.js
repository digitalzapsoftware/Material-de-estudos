function Evento({numero}) {

    function meuEvento() {

        alert('Opa, fui ativado!')

    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;