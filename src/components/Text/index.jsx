import "./Text.css"

const Text = (props) =>{

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    const holder = `${props.placeholder}`
    return (
        <div className="input">
            <label>{props.titulo}</label>
            <input 
            placeholder={holder}
            onChange={manejarCambio}
            value={props.valor}
            >
            </input>
        </div>
        
    )
        
}

export default Text;