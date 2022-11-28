import React from 'react';
import pegando_remedio from '../../../assets/loja.png';
import Atendendo from '../../../assets/atendimento.png';
import './style.css';

export default function SecaoSobre(){
  return(
    <section id='Sobre'>
      <div className='limitar_secao'>
        <h2 className='sub_titulo'>
          QUEM SOMOS NÓS?
        </h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
        </p>
        <div className='container_sobre'>
          <div className='divisao divisao_1'>
            <img src={pegando_remedio} alt="" />
          </div>
          
          <div className='divisao divisao_2'>
            <h3>
              NOSSAS FILIAIS
            </h3>
            <p>
              Hoje temos mais de 20 filiais pelo Brasil e na América
            </p>
          </div>
          
          <div className='divisao divisao_3'>
            <h3>
              Atendimento flexível
            </h3>
            <p>
              Nossa equipe possui é treinada para te atender
            </p>
          </div>

          <div className='divisao divisao_4'>
            <img src={Atendendo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}