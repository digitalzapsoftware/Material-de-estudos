import Button from "./evento/Button";

function Evento() {

    function meuEvento() {

        alert('Ativando primeiro evento!')

    }

    function segundoEvento() {
        alert('Ativando o segundo evento!')
    }

    return(
        
        <div>

            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento!"></Button>

            <Button event={segundoEvento} text="Segundo Evento!"></Button>

        </div>
    )
}

export default Evento;