
const Titulo = (props) => {

    const texto = "✨ " + props.texto;

    return (
        <>
            <h2 class="titulo">{texto}</h2>    
        </>
    )
}

export default Titulo;