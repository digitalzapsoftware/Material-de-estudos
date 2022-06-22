import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi' 


export default function Links() {
    return(
      <div className='links-container'>
        <div className='links-header'>
            <FiArrowLeft size={34} color='#FFF' />
            <h1>Meus Links</h1>
        </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={14} color='#FFF'/>
          https://sujeitoprogramador.com
        </button>
        <button>
          <FiTrash  size={20} color='#FF5454'/>
        </button>
      </div>

      </div>
    )
  }