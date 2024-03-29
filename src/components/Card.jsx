
const Card = (props) => {

    const nome = props.titulo;
    const tecnologias = props.tecnologias;
    const descricao = props.descricao;
    const url = props.url;

    return (
        <>
            <div class="card-container">
                <div class="card-topic">
                    <h3 class="card-nome-projeto">{nome}</h3>
                    <p class="card-tecnologias">{tecnologias}</p>
                </div>
                <div class="card-content">
                    <p class="card-descricao">{descricao}</p>
                    <a class="card-github" href={url}>Link do Github</a>
                </div>
            </div>
        </>
    )
}

export default Card;