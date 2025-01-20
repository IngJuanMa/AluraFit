import { useEffect, useState,useRef } from "react";
import Card from '../Cards';
import './Categorias.css'
import { buscar } from '../../Api/api';
import axios from "axios";
import FormularioEC from "../FormularioEC";

const Categorias = ({ onOpenDialog }) => {
    const [categorias, setCategorias] = useState([]);
    const [posts, setPosts] = useState([]);
    const [cardSeleccionada, setCardSeleccionada] = useState(null);
    const dialogRef = useRef(null);

    useEffect(() => {
        buscar("/Categorias", setCategorias);
        buscar("/Post", setPosts);
    }, []);

    const abrirFormularioEdicion = (card) => {
        setCardSeleccionada(card); // Guarda la card seleccionada
        setTimeout(() => {
            dialogRef.current.showModal(); // Abre el formulario después de un pequeño retraso
        }, 0);
    };

    const guardarEdicion = async (datosActualizados) => {
        try {
            await axios.put(`https://6787c621c4a42c91610830e0.mockapi.io/Post/${datosActualizados.id}`, datosActualizados);
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === datosActualizados.id ? { ...post, ...datosActualizados } : post
                )
            );
            dialogRef.current.close(); // Cierra el formulario
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };


    const eliminarVideo = async (id) => {

        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este video?");
        if (!confirmar) return; // Si el usuario cancela, no se hace nada.

        try {
            const url = `https://6787c621c4a42c91610830e0.mockapi.io/Post/${id}`;
            await axios.delete(url); // Realizamos la solicitud DELETE a la API

            // Actualizamos el estado para eliminar el video de la lista
            setPosts(posts.filter((post) => post.id !== id));
        } catch (error) {
            console.error("Error al eliminar el video:", error);
        }
    };


    return (
        <section >
            {/* mapeo de Categorias para obtener el nombre y el id */}
            {categorias.map((categoria) => {
                const { id, Nombre } = categoria;

                // Filtrar los posts que pertenecen a esta categoría
                const postsFiltrados = posts.filter((post) => post.categoria === id);

                return (
                    <div key={id} className="Categorias">
                        <h2 key={id} className={`categoria--${Nombre}`} >{Nombre}</h2>


                        <div className="seccion-cards">

                            {/* se realiza un mapeo para cada uno de los post filtrados y se le pasan las propiedades por props a las cards */}
                            {postsFiltrados.map((post) => (
                                <Card
                                    key={post.id}
                                    id={post.id}
                                    opencard={() => abrirFormularioEdicion(post)} // Pasamos la card al formulario
                                    titulo={post.title}
                                    miniatura={post.miniatura}
                                    link={post.url}
                                    categoria={post.categoria}
                                    onDelete={eliminarVideo} />
                            ))}
                        </div>
                    </div>
                );
            })}
            <FormularioEC
                dialogRef={dialogRef}
                onCloseDialog={() => dialogRef.current.close()}
                cardSeleccionada={cardSeleccionada}
                onSave={guardarEdicion}
            />
        </section>
    );
};

export default Categorias;