import {useState} from 'react'


function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
        alert(userEmail)
    }

    return(
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Digite o seu email!'></input>
            </form>
            <button onClick={enviarEmail}>Enviar</button>
            {userEmail}
        </div>
    )
}

export default Condicional;