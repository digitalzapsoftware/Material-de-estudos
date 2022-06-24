import { useState } from 'react';
import {FiLink} from 'react-icons/fi';
import './home.css'

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';

export default function Home() {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false)

  function handleShortLink() {
     setShowModal(true);
  }
   

    return(
      <div className="container-home">
        
        <div className="logo">
            <img src="/logo.png" alt="logo" />
            <h1>Encurtador de Link</h1>
            <span>Cole seu link para encurtar!</span>
        </div>

        <div className="area-input">
            <div>
                <FiLink size={24} color='#FFF' />
                <input placeholder='Cole seu link aqui...' value={link} onChange={(e)=> setLink(e.target.value)}/>
            </div>

        <button onClick={handleShortLink}>Encurtar Link</button>

        </div>

        <Menu />

        {showModal && (
          <LinkItem closeModal={() => setShowModal(false)} />
        )}
        
      </div>
    )
  }