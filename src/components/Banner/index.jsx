import './Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className='seccion-textos'>
                <h1>Alura Fit -</h1>
                <h3>La plataforma que te ayudará a alcanzar tu mejor versión.<br /> Inicia tu cambio físico con la ayuda de esta plataforma</h3>
                <button className='button' >¡ Inicia ahora !</button>
            </div>
            <div >
                <a href='https://youtu.be/bxEcouOgCWY' target='_blank'>
                <div className='container'>
                    <img src="https://i.ytimg.com/vi/bxEcouOgCWY/hqdefault.jpg" alt="imagen video uno" className='imagenbanner' />
                    <div className="play-icon">▶</div>
                </div>
                </a>
            </div>
        </section>
    )
}

export default Banner