import './BotonE.css'

const BotonE = ({ onClick }) => {

    return (
        <button onClick={onClick} >
            <img src='/img/delete.png' className='imagen'/>
            Eliminar
        </button>
    )

}

export default BotonE;