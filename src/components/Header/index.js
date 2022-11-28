import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';

export default function Header(){
  return(
    <header>
      <div className='limitar_secao cabecario'>
        <img className='logo' src={Logo} alt="" />
        <nav>
          <a href="#Produtos">PRODUTO</a>
          <a href="#Sobre">SOBRE</a>
          <a href="#Contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}