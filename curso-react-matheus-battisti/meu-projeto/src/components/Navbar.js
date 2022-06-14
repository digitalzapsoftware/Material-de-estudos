import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <>
        <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <ul>
        <li><Link to='/empresa'>Empresa</Link></li>
      </ul>
      <ul>
        <li><Link to='/contato'>Contato</Link></li>
      </ul>
      </>
    )
}

export default Navbar;