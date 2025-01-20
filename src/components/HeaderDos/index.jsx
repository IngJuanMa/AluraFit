import "./HeaderDos.css"
import { Link } from 'react-router-dom';
import React from 'react';

const HeaderDos = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/img/dumbell.png" alt="Logo Mancuerna" className="logo" />
            </div>
            <nav className="nav-buttons">
                <a className="nav-button">Home</a>
                <a className="nav-button">Agregar</a>
            </nav>
        </header>
    );
};

export default HeaderDos;