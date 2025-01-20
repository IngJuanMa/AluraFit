import './FormularioNV.css'
import { useState, useEffect } from 'react';
import Text from '../Text';
import ListaCategoria from '../ListaCategoria';
import Descripcion from '../Descripcion';
import { PostDatos } from '../../Api/api';

const FormularioNV = () => {

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);


    const manejarEnvio = async (e) => {
        e.preventDefault()
        console.log("Enviando Datos...");

        let datosLeídos = {
            miniatura: imagen,
            url: video,
            title: descripcion,
            categoria: categoria
        }

        console.log(datosLeídos)

        try {
            setLoading(true);
            setError(null);

            // Llamar a la función postData
            const res = await PostDatos("https://6787c621c4a42c91610830e0.mockapi.io/Post", datosLeídos);
            setResponse(res); // Guardar la respuesta en el estado
        } catch (err) {
            setError("Hubo un error al enviar los datos. Revisa la consola para más detalles.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className='formulario' onSubmit={manejarEnvio}>

            <h1> Nuevo Video </h1>
            <p> Complete el formulario para crear una nueva tarjeta de video </p>
            <h2>Crear Tajeta</h2>

            {/* seccion inputs */}
            <section className='seccioninputs'>


                <Text
                    type="url"
                    titulo="Imagen"
                    placeholder="Ingresa Url de la imagen"
                    required
                    valor={imagen}
                    setValor={setImagen}
                />

                <Text
                    type="text"
                    titulo="Video"
                    placeholder="Ingresa Url del video"
                    required
                    valor={video}
                    setValor={setVideo}
                />

                <ListaCategoria
                    type="option"
                    titulo="Categoría"
                    placeholder="Selecciona una categoría"
                    required
                    valor={categoria}
                    setValor={setCategoria}
                />

                <Descripcion
                    type="text"
                    titulo="Descripción"
                    placeholder="¿De que se trata tu nuevo video?"
                    required
                    valor={descripcion}
                    setValor={setDescripcion}
                />

            </section>
            <div className='seccionbotones'>
                <button className='botonguardar' type='submit' disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
                <button
                    className='botonlimpiar'
                    onClick={() => {
                        setTitulo("");
                        setImagen("");
                        setVideo("");
                        setDescripcion("");
                        setCategoria("");
                        setResponse(null);
                        setError(null);
                    }}
                >
                    Limpiar
                </button>
            </div>

            {/* Mensajes de estado */}
            {response && <p>¡Datos guardados con éxito!</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    )

}

export default FormularioNV;