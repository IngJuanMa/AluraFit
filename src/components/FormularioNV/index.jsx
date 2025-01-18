import './FormularioNV.css'

const FormularioNV = () => {
    return (
        <form className='formulario'>

            <h1> Nuevo Video </h1>
            <p> Complete el formulario para crear una nueva tarjeta de video </p>
            <h2>Crear Tajeta</h2>

            {/* seccion inputs */}
            <section className='seccioninputs'>
                <div className='input'>
                    <label>Titulo</label>
                    <input
                        placeholder='Ingrese el titulo'
                        required
                        type='text'
                    />
                </div>

                <div className='input'>
                    <label>Categoria</label>
                    <select
                        placeholder='Seleccione una categoria'
                        required
                        type='option'>
                        <option value="" hidden>Selecciona una categoria</option>
                        <option>Principiantes</option>
                        <option>Avanzados</option>
                    </select>
                </div>

                <div className='input'>
                    <label>Imagen</label>
                    <input
                        placeholder='El enlace de la imagen es obligatorio'
                        required
                        type='url'
                    />
                </div>
                <div className='input'>
                    <label>Video</label>
                    <input
                        placeholder='Ingrese la URL del video'
                        required
                        type='url'
                    />
                </div>
                <div className='input'>
                    <label>Descripción</label>
                    <textarea
                        placeholder='¿De que se trata este video?'
                        required
                        type='text'
                    />
                </div>
            </section>
            <div className='seccionbotones'>
                <button  className='botonguardar'  type='submit'>Guardar</button>
                <button  className='botonlimpiar' >Limpiar</button>
            </div>

        </form>
    )

}

export default FormularioNV;