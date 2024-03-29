
const Img = (props) => {

    return (
        <div id={props.iddiv || ""}>
            <img id={props.id || ""} src={props.src} alt={props.alt}></img>        
        </div>
    )
}

export default Img;