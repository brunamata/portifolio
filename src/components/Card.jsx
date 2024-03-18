
const Card = (props) => {

    const nome = props.titulo;
    const tecnologias = props.tecnologias;
    const descricao = props.descricao;
    const url = props.url;

    return (
        <>
            <div>
                <div class="visivel">
                    <h3>{nome}</h3>
                    <p class="tecnologias">{tecnologias}</p>
                </div>
                <p class="descricao">{descricao}</p>
                <a href={url}>Link do Github</a>
            </div>
        </>
    )
}

export default Card;