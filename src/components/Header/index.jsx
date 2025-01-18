import { Link } from 'react-router-dom';    
import React from 'react';
import './Header.css';


const Header = ({ onOpenDialog }) => {


    return (<header className='Header'>
        <img src='./img/dumbell.png' alt='Logo Mancuerna' className='logo-mancuerna'></img>
        <div className='seccion-botones'>
            <Link to="/"  className='boton-home'> Home</Link>
            <Link to="/Agregar_video" className='boton-agregar-video' >Agregar Video</Link>
        </div>
    </header>
    );
};

export default Header;