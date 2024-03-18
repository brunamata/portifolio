import Logo from '../components/Logo';

const Capa = (props) => {

    return (
        <>
        <div> 
            <h2>{props.titulo}</h2>
            <Logo/>  
        </div>     
        </>
    )
}

export default Capa;