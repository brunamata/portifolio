import Logo from '../components/Logo';

const Capa = (props) => {

    return (
        <>
        <div class="capa-container"> 
            <h2 class="titulo-capa">{props.titulo}</h2>
            <Logo/>  
        </div>     
        </>
    )
}

export default Capa;