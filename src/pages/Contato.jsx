import Header from '../components/Header';
import Capa from '../components/Capa';
import Icone from '../components/Icone';
import Footer from '../components/Footer';
import { useState } from 'react';

const Contato = () => {

    const [infos, setInfos] = useState({
        nome: "",
        email: "",
        msg: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfos((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

      const handleSubmit = (event) => {
        alert("função em construção, favor, enviar email direto pelo ícone! :)");
      };
    

    return (
        <>
            <Header/>
            <Capa titulo="Contato | Fale comigo :)"/>
            <div class="gradiente-container">
                <div class="icones">
                    <Icone src="logos/insta_logo.png" link="https://www.instagram.com/brunamata.04/"/>
                    <Icone src="logos/gmail_logo.png" link="mailto:brunamata16@gmail.com?subject=Contatar Bruna&body=Olá, Bruna! Gostaria de conversar com você"/>
                    <Icone src="logos/linkedin_logo.png" link="https://www.linkedin.com/in/brunamata/"/>
                    <Icone src="logos/github_logo.png" link="https://github.com/brunamata" />
                    <Icone src="logos/whats_logo.png" link="https://wa.me/5516992663169?text=Olá,%20Bruna!%20Vim%20pelo%20seu%20portifolio%20e%20gostaria%20de%20conversar%20contigo%20:)"/>
                </div>
                <div class="form-container">
                    <form class="form-representation" onSubmit={handleSubmit}>
                        <input 
                        placeholder="Seu Nome *" 
                        type="text" 
                        name="nome"
                        value={infos.nome}
                        onChange={handleInputChange}
                        required>
                        </input>

                        <input 
                        placeholder="Seu Email *" 
                        type="email" 
                        name="email"
                        value={infos.email}
                        onChange={handleInputChange}
                        required></input>

                        <textarea 
                        placeholder='Digite sua Mensagem :)'
                        name="msg"
                        value={infos.msg}
                        onChange={handleInputChange}
                        required></textarea>

                        <input type="submit" class="button" placeholder="Enviar"></input>
                    </form>
                </div>
                <div class="contato-agradecimento-container">
                    <p class="agradecimento-text">
                        Obrigada! Espero que tenha gostado do meu miniportifólio! Qualquer feedback pode ser enviado na mensagem acima
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contato;