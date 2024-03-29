import Header from '../components/Header';
import Capa from '../components/Capa';
import Titulo from '../components/Titulo';
import Botao from '../components/Botao';
import Img from '../components/Img';
import Footer from '../components/Footer';

const SobreMim = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Sobre Mim"/>
            <div class="texto-sobre-mim gradiente-container">
                <Titulo texto="Quem sou eu?"/>
                <div class="textao">
                    <p class="textao-line">
                        Que meu nome é Bruna você já sabe, né? Então bora aprofundar mais um pouquinho nos meus 19 anos de vida até hoje!! 
                    </p>
                    <p class="textao-line">    
                        Morei a maior parte da minha vida no interior do Mato Grosso do Sul e uma das minhas maiores paixões é jogar basquete, jogo desde 2017 e sigo até hoje! Mas não fica para trás também minha paixão pela música. Adoro ouvir músicas brasileiras e toco alguns instrumentos, dentre eles, piano, teclado e violão. Meus dois programas favoritos no fim de semana é sair com meus amigos ou assistir série (as de suspense são as melhores, confia em mim!)
                    </p>
                    <p class="textao-line">    
                        Desde pequena, sempre gostei muito de matemática e exercícios de lógica. Durante a adolescência, uma das minhas partes favoritas jogando Minecraft era montar circuitos de redstone e programar os blocos de comando pra fazer alguma coisa diferente acontecer.
                    </p>
                    <p class="textao-line">
                        Comecei a conhecer o poder da tecnologia de facilitar processos e resolver problemas de todos os tipos e me apaixonei! Iniciei com algumas pequenas automações em python e gostei tanto que decidi seguir com isso pra vida! Foi aí que comecei a cursar sistemas de informação na USP e não me arrependo da minha escolha. Aqui, conheci novas linguagens, aprendi melhor como o computador funciona por baixo dos panos (e ainda prefiro acreditar que é mágica, de tão completo e complexo que é hahaha) entre outros aprendizados. Mas não só isso, aqui também tive muitas oportunidades de provar minha capacidade de liderança, criatividade e organização ao participar de extras de vários tipos e propósitos (lá no <a class="textao-link" href="/minha-trajetoria">Minha Trajetória</a> tá bem completinho!).
                    </p>
                    <p class="textao-line">
                        Em 2023 comecei a trabalhar no Grupo Boticário, onde recebi novos e emocionantes desafios, de forma que minha facilidade com o aprendizado, autonomia e trabalho em equipe tem sido grandes aliados na minha rotina. Aqui também descobri que quero seguir carreira na área de backend, e sigo empolgada para os desafios que estão por vir com essa escolha! 
                    </p>
                    <p class="textao-line">
                        Se quiser conversar melhor ou só chamar pra um racha de basquete ou pra uma partidinha de minecraft, clique em <a class="textao-link" href="/contato">Fale Comigo</a>. Vou adorar me conectar com você! :) 
                    </p>
                </div>
                <Botao texto="Entrar em Contato"/>
            </div>
            <div class="galeria-container roxo-container">
                <Titulo texto="Galeria"/>
                <p class="galeria-subtitulo">Porque imagens falam mais que mil palavras</p>
                <div>
                    <h2 class="fotos-titulo">Basquete</h2>
                    <Img src="fotos_basquete.png" alt="3 fotos jogando basquete"/>
                    <p class="legenda">Competindo pela atlética da faculdade 💛🖤</p>
                </div>
                <div>
                    <h2  class="fotos-titulo">Música</h2>
                    <div class="music-galery">
                        <video height="400" controls>
                            <source src="video_piano.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Img src="foto_piano.png" alt="eu com 13 anos tocando piano"/>
                    </div>
                    <p class="legenda">Tocando piano em um dia na faculdade e foto mais antiga com 13 anos</p>
                </div>
                <div>
                    <h2 class="fotos-titulo">Momentos ❤️</h2>
                    <Img src="fotos_momentos.png" alt="3 fotos descritas na legenda"/>
                    <p class="legenda">Campanha do Agasalho | Encontro presencial do time GB <br/> em Curitiba | Apresentação de pitch no SheHacks (hackathon)</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SobreMim;