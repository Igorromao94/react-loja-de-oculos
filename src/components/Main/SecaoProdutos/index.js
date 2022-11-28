import React from 'react';
import Oculos_1 from '../../../assets/oculos01.png';
import Oculos_2 from '../../../assets/oculos02.png';
import Oculos_3 from '../../../assets/oculos03.png';
import Oculos_4 from '../../../assets/oculos04.png';
import './style.css';


export default function SecaoProdutos(){
  return(
    <section id='Produtos'>
      <div className='limitar_secao limitar_secao_produtos'>
        <h2 className='sub_titulo'>
          Nossos Produtos
        </h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
        </p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        
        <div className='container_produtos'>
          <div className='produto produto_1'>
            <h3>Óculos de Grau</h3>
            <img src={Oculos_1} alt="" />
            <p>R$:500,00</p>
          </div>

          <div className='produto produto_2'>
            <h3>Óculos transition</h3>
            <img src={Oculos_2} alt="" />
            <p>R$750,00</p>
          </div>

          <div className='produto produto_3'>
            <h3>Óculos de sol</h3>
            <img src={Oculos_3} alt="" />
            <p>R$700,00</p>
          </div>

          <div className='produto produto_4'>
            <h3>Óculos infantil</h3>
            <img src={Oculos_4} alt="" />
            <p>R$500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}