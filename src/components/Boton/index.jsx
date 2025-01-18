import './Boton.css'

const Boton = ({editar}) => {

    return (
        <button onClick={editar}>
            <img src='/img/edit.png' className='imagen'/>
            Editar
        </button>
    )

}

export default Boton;