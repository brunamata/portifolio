import Header from '../components/Header';
import Capa from '../components/Capa';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';

const Trajetorias = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Minha Trajetória"/>
            <div>
                <Titulo texto="Experiência Profissional"/>
                    <strong>fev/22 - dez/25</strong>
                    <p>Sistemas de Informação na USP</p>

                    <strong>ago/22 - dez/22</strong>
                    <p>Membro de marketing no Pyladies São Carlos</p>
                    
                    <strong>ago/22 - dez/22</strong>
                    <p>Monitora no projeto Codifikids - ensino de lógica de programação para crianças</p>
                    
                    <strong>ago/22 - dez/22</strong>
                    <p>Membro do núcleo de Infraestrutura na Campanha USP do Agasalho</p>
                    
                    <strong>ago/22 - mar/23</strong>
                    <p>Membro da área de Gestão no Iniciativas Mercado</p>
                    
                    <strong>jan/23 - jul/23</strong>
                    <p>Membro da área de Financeiro e Jurídico na ICMC Jr</p>
                    
                    <strong>jan/23 - jul/23</strong>
                    <p>Coordenadora de Divulgação na Campanha USP do Agasalho</p>
                    
                    <strong>jul/23 - dez/23</strong>
                    <p>Coordenadora Geral na Campanha USP do Agasalho</p>
                    
                    <strong>jul/23 - atualmente</strong>
                    <p>Desenvolvedora Backend Júnior no Grupo Boticário</p>
            </div>
            <div>
                <Titulo texto="Conquistas e Aprendizados"/>
                <strong>2021</strong>
                <p>Organização da Formatura do Ensino Médio: financeiro, relações externas, divulgação e jurídico</p>

                <strong>jan/22</strong>
                <p>Aprovada em algumas faculdades, como UFMS (administração e sistemas de informação), UEMS (direito), UNESP (ciências de computação) e USP (sistemas de Informação)</p>

                <strong>out/22</strong>
                <p>SheHacks 2022 - Hackathon Feminino com tema de Acessibilidade, realizado na Meta</p>

                <strong>fev/22 - dez/25</strong>
                <p>Sistemas de Informação na USP</p>

                <strong>nov/22</strong>
                <p>Curso de Frontend pela plataforma DIO</p>

                <strong>jan/23 - jun/23</strong>
                <p>Programa Desenvolve - Formação em FullStack com javascript, react, SQL e ux design</p>

                <strong>ago/23 - fev/24</strong>
                <p>Curso Intensivo Ada - Formação em fullstack um pouco mais aprofundada do Programa Desenvolve</p>

                <strong>nov/23</strong>
                <p>1º Lugar no SheHacks 2023 - Hackathon Feminino com tema de Cidadania, realizado na Microsoft Reactor</p>
            </div>
            <div>
                <p>
                    Entre muitas outras coisas que não cabem aqui e que busquei aprender por conta própria também :)
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Trajetorias;