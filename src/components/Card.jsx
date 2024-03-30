import {useState} from 'react';

const Card = (props) => {

    const nome = props.titulo;
    const tecnologias = props.tecnologias;
    const descricao = props.descricao;
    const url = props.url;

    const [aberto, setAberto] = useState(false);

    return (
        <>
            <div class="card-container">
                <div class="card-top-button">
                    <button class="card-button" onClick={() => setAberto(!aberto)}>{aberto ? "v" : ">"}</button>
                    <div class="card-topic">
                        <h3 class="card-nome-projeto">{nome}</h3>
                        <p class="card-tecnologias">{tecnologias}</p>
                    </div>
                </div>
                <div class={aberto ? "card-content" : "card-hidden"} >
                    <p class="card-descricao">{descricao}</p>
                    <a class="card-github" href={url}>Link do Github</a>
                </div>
            </div>
        </>
    )
}

export default Card;