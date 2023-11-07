import React from 'react';
import './styles.css';
import joia1 from './imagens joias/joia1.png';


class Loja extends React.Component {
    render() {
        return (
            <div className="conteiner-geral">
                <div className='container1'>
                    <div className='item-loja'>
                        <img
                            src={joia1}
                            alt="Joia 1"
                        />

                        <div className="texto">
                            <p className='titulo'>Par Aliança</p>
                            <p className='material'>Prata com pedra</p>
                            <p className='preco'>R$ 8.350,00</p>
                            <p className='atendimento' >Ligue para o Atendimento ao Cliente pelo 11 3815-7000 para mais informações.</p>
                            <button>comprar</button>
                            <p className='titulo'>Descrição e Detalhes</p>
                            <p className='atendimento'>Descrição e Detalhes
                                Inspirada no poder da união e da inclusão, a coleção Levess Lock é uma
                                declaração visual ousada dos elos pessoais que nos tornam quem somos.
                                Desenhados para serem usados por todos os gêneros, os designs Levess
                                Lock são inspirados pela função de um cadeado, um tema importante dos
                                Arquivos Levess. Este anel é habilmente elaborado em ouro amarelo 18k.
                                Use este anel marcante sozinho ou com seu conjunto de anéis do dia a dia.

                            </p>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Loja;
