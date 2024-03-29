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
            <div class="gradiente-container">
                <div class="icones">
                    <Icone src="logos/insta_logo.png"/>
                    <Icone src="logos/gmail_logo.png"/>
                    <Icone src="logos/linkedin_logo.png"/>
                    <Icone src="logos/github_logo.png"/>
                    <Icone src="logos/whats_logo.png"/>
                </div>
                <div class="form-container">
                    <form class="form-representation">
                        <input placeholder="Seu Nome *" type="text" required></input>
                        <input placeholder="Seu Email *" type="email" required></input>
                        <textarea placeholder='Digite sua Mensagem :)'></textarea>
                    </form>
                    <Botao texto="Enviar"/>
                </div>
                <div class="contato-agradecimento-container">
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