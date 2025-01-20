import './Cards.css'
import Boton from '../Boton';
import BotonE from '../BotonE';

const Card = ({ id, opencard, titulo, miniatura, link,categoria, onDelete }) => {
    return (
        <div className={`card card--${categoria}`}>
            <a href={link} target='_blank'>
                <div className='containerw'>
                    <img src={miniatura} alt="miniatura video" className={`cardimg cardimg--${categoria}`}/>
                    <div className="play-icono">▶</div>
                </div>
            </a>

            <p>{titulo}</p>
            <div className='seccion_botones'>
                <Boton editar={opencard} />
                <BotonE  onClick={() =>  onDelete(id)}/>
            </div>
        </div>
    )
}

export default Card;