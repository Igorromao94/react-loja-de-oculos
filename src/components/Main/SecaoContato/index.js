import React from 'react';
import './style.css';
import local from '../../../assets/local.png';
import telefone from '../../../assets/telefone.png';
import email from '../../../assets/email.png';
import face from '../../../assets/fb.png';
import insta from '../../../assets/ig.png';
import tw from '../../../assets/tt.png';

export default function SecaoContato(){
  return(
    <section id='Contato'>
      <div className='limitar_secao'>
        <h2 className='sub_titulo'>
          FALE CONOSCO
        </h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className='container_inicial_contato'>
          <div className='container_contato'>
            <h3>Contato</h3>
            <div className='linhas_de_contato'>
              <img src={local} alt="" />
              <p>Nova Iguaçu, RJ</p>
            </div>
            
            <div className='linhas_de_contato'>
              <img src={telefone} alt="" />
              <p>(21) 9999-9999</p>
            </div>
            
            <div className='linhas_de_contato'>
              <img src={email} alt="" />
              <p>contato@oticavida.com</p>
            </div>
          </div>

          <div className='container_contato'>
            <h3>Nossas Redes Sociais</h3>
            <div className='linhas_de_contato'>
              <img src={face} alt="" />
              <p>/OticaVida</p>
            </div>

            <div className='linhas_de_contato'>
              <img src={insta} alt="" />
              <p>@oticavidarj</p>
            </div>

            <div className='linhas_de_contato'>
              <img src={tw} alt="" />
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}