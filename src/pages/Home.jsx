import Header from '../components/Header';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <>
            <Header/>
            <div class="capa-home">
                <Logo/>
                <div class="capa-home-texto">
                    <h2 class="titulo-capa-home">Oieee! Sou a Bruna! :)</h2>
                    <p class="texto-capa-home">Tenho 19 anos, estou no 5º semestre de Sistemas de Informação na USP de São Carlos e estou trilhando carreira na área de <strong>Backend Developer</strong></p>
                </div>
            </div>
            <div class="habilidades-container">
                <h2 class="titulo-habilidades"> Habilidades </h2>
                <table class="habilidades-table">
                    <td>
                        <tr>Figma</tr>
                        <tr>Trello</tr>
                        <tr>Notion</tr>
                        <tr>Java</tr>
                        <tr>Kotlin</tr>
                        <tr>Javascript</tr>
                        <tr>Typescript</tr>
                        <tr>HTML</tr>
                        <tr>CSS</tr>
                        <tr>React</tr>
                        <tr>SQL</tr>
                        <tr>MySql</tr>
                        <tr>PostgreSQL</tr>
                        <tr>MongoDB</tr>
                        <tr>DynamoDB</tr>
                    </td>
                    <td>
                        <tr>AWS</tr>
                        <tr>Spring</tr>
                        <tr>Intellij</tr>
                        <tr>VSCode</tr>
                        <tr>Kafka</tr>
                        <tr>Python</tr>
                        <tr>JUnit</tr>
                        <tr>Kotest</tr>
                        <tr>Jest</tr>
                        <tr>C</tr>
                        <tr>Scrum</tr>
                        <tr>Excel</tr>
                        <tr>Canva</tr>
                        <tr>PowerPoint</tr>
                        <tr>Inglês Intermediário</tr>
                    </td>
                </table>
                </div>
            <Footer/>
        </>
    )
}

export default Home;