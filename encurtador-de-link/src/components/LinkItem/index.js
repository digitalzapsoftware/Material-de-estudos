import './link-item.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({closeModal}) {
    return (
        <div className='modal-container'>
            
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={20} color='#000' />
                </button>
            </div>

            <span>github.com/evanilsonpg</span>

            <button className='modal-link'>
                github.com/evanilsonpg
                <FiClipboard size={16} color='#FFF' />
            </button>

        </div>
    )
}