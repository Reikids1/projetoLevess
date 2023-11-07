import React from 'react';
import './styles.css';
import home from '../Imagens/home.png';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='texto'>
          <h1 className='titulo'>Descubra a Elegância em Cada Detalhe</h1>
          <p className='texto-home'>Explore nossas requintadas peças, habilmente esculpidas para brincar com proporções encantadoras. Na coleção Levess, você encontrará desde os icônicos designs atemporais até as mais recentes adições de pulseiras, colares e anéis deslumbrantes.</p>
        </div>
        <img
          src={home}
          alt="home"
        />
      </div>
    );
  }
}

export default Home;
