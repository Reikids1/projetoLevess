import React from 'react';
import './styles.css';
import logoImagem from '../Imagens/logo.png';
import NavbarItem from './navbarItem';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className='line'></div>
        <div className='logo'>
          <img
            src={logoImagem}
            alt='Logo'
            href='<home></home>'
          />
        </div>
        <ul className='nav-itens'>
          <NavbarItem href="#/home" label="Anel/Aliança" />
          <NavbarItem href="#/loja" label="Brinco" />
          <NavbarItem href="#/" label="Colar" />
          <NavbarItem href="#/" label="Pulseira" />
          <NavbarItem href="#/" label="Corrente" />

        </ul>
      </nav>
    );
  }
}

export default Navbar;
