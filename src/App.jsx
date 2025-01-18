import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import './App.css'
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
      <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header onOpenDialog={openDialog} />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Categorias onOpenDialog={openDialog} />
              <FormularioEC dialogRef={dialogRef} onCloseDialog={closeDialog} />
            </>
          } />
          <Route path="/Agregar_video"  element={
            <>
              <FormularioNV />
            </>
          } />
          <Route path="*" element={
            <>
              <NoFound />
            </>
          } />

        </Routes>
        </main>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
