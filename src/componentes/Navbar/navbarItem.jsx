import React from 'react';

function NavbarItem(props){
    return(
        <ul className='nav-itens'>
        <li><a href={props.href}>{props.label}</a></li>

      </ul>
    )
}

export default NavbarItem;