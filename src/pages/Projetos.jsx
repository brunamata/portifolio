import Header from '../components/Header';
import Capa from '../components/Capa';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Projetos = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Meus Projetos"/>
            <div class="gradiente-container">
                <Card 
                titulo="Gerador Automático de Certificados"
                tecnologias="Python"
                descricao="Projeto criado durante minha coordenação de divulgação na Campanha para gerar vários certificados de uma vez a partir de uma arte"
                url="https://github.com/brunamata/certificado-campanha"
                />
                <Card 
                titulo="Skooter Game"
                tecnologias="Java"
                descricao="Projeto final da matéria de Programação Orientada a Objetos"
                url="https://github.com/brunamata/skooter-game"
                />
                <Card 
                titulo="Investigação Elemental"
                tecnologias="Python, Banco de Dados"
                descricao="Projeto Final da matéria de Banco de Dados"
                url="https://github.com/brunamata/bd-investigacao-elemental"
                />
                <Card 
                titulo="Portifólio Pessoal"
                tecnologias="React, Javascript"
                descricao="Código fonte desse site, feito para a matéria de Desenvolvimento Web na USP."
                url="https://github.com/brunamata/portifolio"
                />
            </div>
            <Footer/>
        </>
    )
}

export default Projetos;