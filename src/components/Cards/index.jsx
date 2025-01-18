import './Cards.css'
import Boton from '../Boton';
import BotonE from '../BotonE';

const Card = ({ opencard, titulo, miniatura, link,categoria }) => {
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
                <BotonE />
            </div>
        </div>
    )
}

export default Card;