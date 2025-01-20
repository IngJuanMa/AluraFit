import { useState,useEffect } from 'react';
import './FormularioEC.css'

const FormularioEC = ({ dialogRef, onCloseDialog, cardSeleccionada, onSave }) => {

    const [title, setTitle] = useState("");
    const [categoria, setCategoria] = useState("");
    const [miniatura, setMiniatura] = useState("");
    const [url, setUrl] = useState("");


    useEffect(() => {
        if (cardSeleccionada) {
            console.log("Card seleccionada:", cardSeleccionada);
            setTitle(cardSeleccionada.title || "");
            setCategoria(cardSeleccionada.categoria || "");
            setMiniatura(cardSeleccionada.miniatura || "");
            setUrl(cardSeleccionada.url || "");
        }
    }, [cardSeleccionada]);

    const manejarGuardar = (e) => {
        e.preventDefault();
        const datosActualizados = {
            id: cardSeleccionada.id,
            title,
            categoria,
            miniatura,
            url,
        };
        console.log("Datos que se van a guardar: ", datosActualizados);
        console.log("Título antes de enviar:", title);
        onSave(datosActualizados);
    };


    return (
        <>
            <dialog ref={dialogRef} className='formularioDialog'>
                <form className='formularioEditarCard' method="dialog" onSubmit={manejarGuardar}>
                    <div className='imgcerrar'>
                        <img src='/img/close.svg' alt='logo cerrar' onClick={onCloseDialog}></img>
                    </div>
                    <h1>Editar Card:</h1>
                    <div className='seccionInputs'>
                        <label>Categoría</label>
                        <select
                            placeholder='Seleccione una categoria'
                            required
                            type='option'
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            >
                            <option value="" hidden>Selecciona una categoria</option>
                            <option>Principiantes</option>
                            <option>Rutinas</option>
                            <option>Motivación</option>
                            <option>Dieta</option>
                        </select>
                    </div >
                    <div className='seccionInputs'>
                        <label>Imagen</label>
                        <input
                            placeholder='El enlace de la imagen es obligatorio'
                            required
                            type='url'
                            value={miniatura}
                            onChange={(e) => setMiniatura(e.target.value)}
                             />
                    </div>
                    <div className='seccionInputs'>
                        <label>Video</label>
                        <input
                            placeholder='Ingrese la URL del video'
                            required
                            type='url' 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            />
                    </div>
                    <div className='seccionInputs'>
                        <label>Descripción</label>
                        <textarea
                            placeholder='¿De que se trata este video?'
                            required
                            value={title}
                            type='text' 
                            onChange={(e) => setTitle(e.target.value)}
                            />
                    </div>
                    <div className='seccionBotones'>
                        <button className='botonGuardar' type='submit'>Guardar</button>
                        <button className='botonLimpiar' 
                        onClick={() => {
                            setTitle("");
                            setCategoria("");
                            setMiniatura("");
                            setUrl("");
                        }}
                        >Limpiar</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default FormularioEC;