const AnotherComponent = () => {

    const handleClick= () => {
        alert('Clicou')
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento</button>
        </div>
    )
}

export default AnotherComponent;