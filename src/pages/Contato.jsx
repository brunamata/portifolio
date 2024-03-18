import Header from '../components/Header';
import Capa from '../components/Capa';
import Icone from '../components/Icone';
import Botao from '../components/Botao';
import Footer from '../components/Footer';

const Contato = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Contato | Fale comigo :)"/>
            <div>
                <div class="icones">
                    <Icone url="../../public/insta_logo.png"/>
                    <Icone url="../../public/insta_logo.png"/>
                    <Icone url="../../public/insta_logo.png"/>
                    <Icone url="../../public/insta_logo.png"/>
                    <Icone url="../../public/insta_logo.png"/>
                </div>
                <div>
                    <form>
                        <input placeholder="Seu Nome *" required></input>
                        <input placeholder="Seu Email *" required></input>
                        <textarea placeholder='Digite sua Mensagem :)'></textarea>
                    </form>
                    <Botao texto="Enviar"/>
                </div>
                <div>
                    <p>
                        Obrigada! Espero que tenha gostado do meu miniportifólio! Qualquer feedback pode ser enviado na mensagem acima
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contato;