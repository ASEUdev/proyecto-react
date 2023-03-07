import React from 'react';
import NavigationBar from './components/navbar/navbar';
import TresTarjetas from "./components/tarjetas/TresTarjetas";
import Barner from './components/barner-principal/Barner';
import Preparacion from './components/preparacion/Preparacion';
import Experiencia from './components/experiencia/Experiencia';
import Footer from './components/Footer/Footer';
import Bootcamp from './components/estadistica/Bootcamp';
import Boletin from './components/boletin-noticias/Boletin';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Barner />
      <TresTarjetas />
      <Preparacion />
      <Bootcamp />
      <Experiencia />
      <Boletin/>
      <Footer />
    </div>
  );
}

export default App;
