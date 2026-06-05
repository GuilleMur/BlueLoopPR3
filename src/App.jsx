import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop'; 
import Cart from './components/Cart'; 
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition'
import Success from './components/Success';
import './App.css';

function App() {
  // Efecto para el Loader inicial
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('fade-out');
      }, 500);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageTransition />
      <div className="app-container">
        {/* Loader Global */}
        <div id="loader" className="page-loader"></div>
        
        {/* Fondo de burbujas persistente */}
        <div className="burbujas">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="burbuja"></div>
          ))}
        </div>

        {/* El Navbar se mantiene fijo en todas las rutas */}
        <Navbar />

        <main>
          <Routes>
            {/* Ruta Principal */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta Sobre Nosotros */}
            <Route path="/aboutus" element={<AboutUs />} />
            
            {/* Rutas futuras (puedes dejarlas preparadas) */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} /> {/* <--- Nueva ruta */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;