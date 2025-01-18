import './FormularioEC.css'

const FormularioEC = ({ dialogRef, onCloseDialog }) => {


    return (
        <>
            <dialog ref={dialogRef} className='formularioDialog'>
                <form className='formularioEditarCard' method="dialog">
                    <div className='imgcerrar'>
                        <img src='/img/close.svg' alt='logo cerrar' onClick={onCloseDialog}></img>
                    </div>
                    <h1>Editar Card:</h1>
                    <div className='seccionInputs'>
                        <label>Titulo</label>
                        <input
                            placeholder='Ingrese el titulo'
                            required
                            type='text' />
                    </div>
                    <div className='seccionInputs'>
                        <label>Categoría</label>
                        <select
                            placeholder='Seleccione una categoria'
                            required
                            type='option'>
                            <option value="" hidden>Selecciona una categoria</option>
                            <option>Principiantes</option>
                            <option>Avanzados</option>
                        </select>
                    </div >
                    <div className='seccionInputs'>
                        <label>Imagen</label>
                        <input
                            placeholder='El enlace de la imagen es obligatorio'
                            required
                            type='url' />
                    </div>
                    <div className='seccionInputs'>
                        <label>Video</label>
                        <input
                            placeholder='Ingrese la URL del video'
                            required
                            type='url' />
                    </div>
                    <div className='seccionInputs'>
                        <label>Descripción</label>
                        <textarea
                            placeholder='¿De que se trata este video?'
                            required
                            type='text' />
                    </div>
                    <div className='seccionBotones'>
                        <button className='botonGuardar' type='submit'>Guardar</button>
                        <button className='botonLimpiar' >Limpiar</button>
                    </div>
                </form>
            </dialog>
        </>
    )
}

export default FormularioEC;