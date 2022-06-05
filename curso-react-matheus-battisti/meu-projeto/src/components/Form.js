function Form () {

    function cadastrarUsuario(e) {
        e.preventDefault();
        alert('Cadastrado com sucesso!');   

    }

    return(

        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type='text' placeholder='Digite seu nome'></input>
                </div>
                <div>
                    <input type='submit' value='Cadastrar'></input>
                </div>
            </form>
        </div>

    )
}

export default Form;