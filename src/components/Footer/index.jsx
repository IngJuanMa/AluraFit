import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='seccionjuan'>
                <img src='./img/logoo.png' alt='logojuan' />
                <h3> Design By: IngJuan </h3>
            </div>
            <h3 className='alura'>Alura Fit -</h3>
            <div className='seccionredes'>
                <a href='https://www.facebook.com/juanmanuel.castrochavarro?locale=es_LA'><img src='./img/face.png' alt='logoFacebook' /></a>
                <a href='https://www.instagram.com/manuel.280/'><img src='./img/instagramn.png' alt='logoInstagram' /></a>
                <a href='https://www.linkedin.com/in/juan-manuel-castro-chavarro-9b0128262/'><img src='./img/Linkii.png' alt='logoFacebook' /></a>
            </div>
        </footer>
    )
}

export default Footer;