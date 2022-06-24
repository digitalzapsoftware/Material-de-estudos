import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return(
        <div className='menu'>

            <a className='social' href='https://youtube.com/c/sujeitoprogramador'>
                <BsYoutube color='#FFF' size={20} />
            </a>

            <a className='social' href='https://instagram.com//sujeitoprogramador'>
                <BsInstagram color='#FFF' size={20} />
            </a>

            <Link className='menu-item' to='/links'>
              Meus links
            </Link>

        </div>
    )
}