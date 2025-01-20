import "./Descripcion.css"

const Descripcion = (props) => {


    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    const PlaceHl = `${props.placeholder}`

    return (
        <>
            <div className='input'>
                <label>{props.titulo}</label>
                <textarea
                    placeholder={PlaceHl}
                    onChange={manejarCambio}
                />
            </div>

        </>
    )
}

export default Descripcion;