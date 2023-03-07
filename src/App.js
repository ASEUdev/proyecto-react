import React from 'react';
import NavigationBar from './components/navbar/navbar';
import TresTarjetas from "./components/tarjetas/TresTarjetas";
import Barner from './components/barner-principal/Barner';
import Preparacion from './components/preparacion/Preparacion';
import Estadisticas from './components/estadistica/Estadistica';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Barner />
      <TresTarjetas />
      <Preparacion />
      {/* <Estadisticas /> */}
      
    </div>
  );
}

export default App;
