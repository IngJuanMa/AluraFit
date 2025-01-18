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
                <img src='./img/face.png' alt='logoFacebook' />
                <img src='./img/instagramn.png' alt='logoInstagram' />
                <img src='./img/Linkii.png' alt='logoFacebook' />
            </div>
        </footer>
    )
}

export default Footer;