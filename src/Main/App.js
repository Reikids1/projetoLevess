import React from 'react';
import Navbar from '../componentes/Navbar';
import Rotas from './rotas';
import Novidades from '../componentes/novidades';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <Rotas />
        <Novidades/>
  
      </div >
    );
  }
}

export default App;