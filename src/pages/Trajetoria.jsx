import Header from '../components/Header';
import Capa from '../components/Capa';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';

const Trajetorias = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Minha Trajetória"/>
            <div class="gradiente-container">
                <Titulo texto="Experiência Profissional"/>
                    <div class="exp-container">
                    <p class="exp-data">fev/22 - dez/25</p>
                    <p class="exp-description">Sistemas de Informação na USP</p>

                    <p class="exp-data">ago/22 - dez/22</p>
                    <p class="exp-description">Membro de marketing no Pyladies São Carlos</p>
                    
                    <p class="exp-data">ago/22 - dez/22</p>
                    <p class="exp-description">Monitora no projeto Codifikids - ensino de lógica de programação para crianças</p>
                    
                    <p class="exp-data">ago/22 - dez/22</p>
                    <p class="exp-description">Membro do núcleo de Infraestrutura na Campanha USP do Agasalho</p>
                    
                    <p class="exp-data">ago/22 - mar/23</p>
                    <p class="exp-description">Membro da área de Gestão no Iniciativas Mercado</p>
                    
                    <p class="exp-data">jan/23 - jul/23</p>
                    <p class="exp-description">Membro da área de Financeiro e Jurídico na ICMC Jr</p>
                    
                    <p class="exp-data">jan/23 - jul/23</p>
                    <p class="exp-description">Coordenadora de Divulgação na Campanha USP do Agasalho</p>
                    
                    <p class="exp-data">jul/23 - dez/23</p>
                    <p class="exp-description">Coordenadora Geral na Campanha USP do Agasalho</p>
                    
                    <p class="exp-data">jul/23 - atualmente</p>
                    <p class="exp-description">Desenvolvedora Backend Júnior no Grupo Boticário</p>
                </div>
            </div>
            <div class="roxo-container conquista-container">
                <Titulo texto="Conquistas e Aprendizados"/>
                <div class="exp-container">
                    <p class="exp-data">2021</p>
                    <p class="exp-description">Organização da Formatura do Ensino Médio: financeiro, relações externas, divulgação e jurídico</p>

                    <p class="exp-data">jan/22</p>
                    <p class="exp-description">Aprovada em algumas faculdades, como UFMS (administração e sistemas de informação), UEMS (direito), UNESP (ciências de computação) e USP (sistemas de Informação)</p>

                    <p class="exp-data">out/22</p>
                    <p class="exp-description">SheHacks 2022 - Hackathon Feminino com tema de Acessibilidade, realizado na Meta</p>

                    <p class="exp-data">fev/22 - dez/25</p>
                    <p class="exp-description">Sistemas de Informação na USP</p>

                    <p class="exp-data">nov/22</p>
                    <p class="exp-description">Curso de Frontend pela plataforma DIO</p>

                    <p class="exp-data">jan/23 - jun/23</p>
                    <p class="exp-description">Programa Desenvolve - Formação em FullStack com javascript, react, SQL e ux design</p>

                    <p class="exp-data">ago/23 - fev/24</p>
                    <p class="exp-description">Curso Intensivo Ada - Formação em fullstack um pouco mais aprofundada do Programa Desenvolve</p>

                    <p class="exp-data">nov/23</p>
                    <p class="exp-description">1º Lugar no SheHacks 2023 - Hackathon Feminino com tema de Cidadania, realizado na Microsoft Reactor</p>
                </div>
            </div>
            <div class="entre-outros-container">
                <p class="entre-outros-texto">
                    Entre muitas outras coisas que não cabem aqui e que busquei aprender por conta própria também :)
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Trajetorias;