import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import Banner from './components/Banner'
import Categorias from './components/Categorias'
import Footer from './components/Footer'
import FormularioEC from './components/FormularioEC'
import FormularioNV from './components/FormularioNV'
import Header from './components/Header'
import NoFound from './components/NoFound';

function App() {
  const dialogRef = useRef(null);

  // Función para abrir el diálogo
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Función para cerrar el diálogo
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
   <>
   <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Header onOpenDialog={openDialog} />
              <Banner />
              <Categorias onOpenDialog={openDialog} />
              <FormularioEC dialogRef={dialogRef} onCloseDialog={closeDialog} />
              <Footer />
            </>
          } />
          <Route path="/Agregar_video"  element={
            <>
            <Header onOpenDialog={openDialog} />
              <FormularioNV />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <>
            <Header onOpenDialog={openDialog} />
              <NoFound />
              <Footer />
            </>
          } />

        </Routes>
      </Router>

   </>
  )
}

export default App
