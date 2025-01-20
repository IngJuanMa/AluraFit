import { useState, useEffect } from "react";
import { buscar } from "../../Api/api";
import "./ListaCategoria.css"

const ListaCategoria = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        buscar("/Categorias", setCategorias);
    }, []);

    const placeHol = `${props.placeholder}`

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.setValor(e.target.value)
    }

    return (
        <>
            <div className='input'>
                <label>{props.titulo}</label>
                <select 
                    required
                    type='option'
                    value={props.valor}
                    onChange={manejarCambio}>

                    <option value="" hidden>{placeHol}</option>
                    {categorias.map((categoria) => {
                        const { Nombre } = categoria;

                        return (
                                <option value={Nombre} key={Nombre}>{Nombre}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default ListaCategoria;