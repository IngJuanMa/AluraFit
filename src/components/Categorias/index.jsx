import { useEffect, useState } from "react";
import Card from '../Cards';
import './Categorias.css'
import { buscar } from '../../Api/api';

const Categorias = ({ onOpenDialog }) => {
    const [categorias, setCategorias] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        buscar("/Categorias", setCategorias);
        buscar("/Post", setPosts);
    }, []);

    return (
        <section >
            {/* mapeo de Categorias para obtener el nombre y el id */}
            {categorias.map((categoria) => {
                const { id, Nombre } = categoria;

                // Filtrar los posts que pertenecen a esta categoría
                const postsFiltrados = posts.filter((post) => post.categoria === id);

                return (
                    <div key={id} className="Categorias">
                        <h2 key={id} className={`categoria--${Nombre}`}>{Nombre}</h2>
                        <div className="seccion-cards">

                            {/* se realiza un mapeo para cada uno de los post filtrados y se le pasan las propiedades por props a las cards */}
                            {postsFiltrados.map((post) => (
                                <Card
                                    key={post.id}
                                    cate={id}
                                    opencard={onOpenDialog}
                                    titulo={post.title}
                                    miniatura={post.miniatura}
                                    link={post.url}
                                    categoria={post.categoria}>
                                    {post.title}
                                </Card>
                            ))}
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Categorias;