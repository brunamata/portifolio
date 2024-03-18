import Header from '../components/Header';
import Logo from '../components/Logo';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <Header/>
            <Logo/>
            <h2>Oieee! Sou a Bruna! :)</h2>
            <p>Tenho 19 anos, estou no 5º semestre de Sistemas de Informação na USP de São Carlos e estou trilhando carreira na área de <strong>Backend Developer</strong></p>
            <Titulo texto="Habilidades"/>
            <ul>
                <li>Figma</li>
                <li>Trello</li>
                <li>Notion</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>SQL</li>
                <li>MySql</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>DynamoDB</li>
                <li>AWS</li>
                <li>Spring</li>
                <li>Intellij</li>
                <li>VSCode</li>
                <li>Kafka</li>
                <li>Python</li>
                <li>JUnit</li>
                <li>Kotest</li>
                <li>Jest</li>
                <li>C</li>
                <li>Scrum</li>
                <li>Excel</li>
                <li>Canva</li>
                <li>PowerPoint</li>
                <li>Inglês Intermediário</li>
            </ul>
            <Footer/>
        </>
    )
}

export default Home;