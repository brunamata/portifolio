import Header from '../components/Header';
import Capa from '../components/Capa';
import Titulo from '../components/Titulo';
import Botao from '../components/Botao';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const SobreMim = () => {

    return (
        <>
            <Header/>
            <Capa titulo="Sobre Mim"/>
            <div>
                <Titulo texto="Quem sou eu?"/>
                <p>
                    Que meu nome é Bruna você já sabe, né? Então bora aprofundar mais um pouquinho nos meus 19 anos de vida até hoje!!
                    
                    Morei a maior parte da minha vida no interior do Mato Grosso do Sul e uma das minhas maiores paixões é jogar basquete, jogo desde 2017 e sigo até hoje! Mas não fica para trás também minha paixão pela música. Adoro ouvir músicas brasileiras e toco alguns instrumentos, dentre eles, piano, teclado e violão. Meus dois programas favoritos no fim de semana é sair com meus amigos ou assistir série (as de suspense são as melhores, confia em mim!)Desde pequena, sempre gostei muito de matemática e exercícios de lógica. Durante a adolescência, uma das minhas partes favoritas jogando Minecraft era montar circuitos de redstone e programar os blocos de comando pra fazer alguma coisa diferente acontecer.

                    Comecei a conhecer o poder da tecnologia de facilitar processos e resolver problemas de todos os tipos e me apaixonei! Iniciei com algumas pequenas automações em python e gostei tanto que decidi seguir com isso pra vida! Foi aí que comecei a cursar sistemas de informação na USP e não me arrependo da minha escolha. Aqui, conheci novas linguagens, aprendi melhor como o computador funciona por baixo dos panos (e ainda prefiro acreditar que é mágica, de tão completo e complexo que é hahaha) entre outros aprendizados. Mas não só isso, aqui também tive muitas oportunidades de provar minha capacidade de liderança, criatividade e organização ao participar de extras de vários tipos e propósitos (lá no <a href="/minha-trajetoria">Minha Trajetória</a> tá bem completinho!).
                    Em 2023 comecei a trabalhar no Grupo Boticário, onde recebi novos e emocionantes desafios, de forma que minha facilidade com o aprendizado, autonomia e trabalho em equipe tem sido grandes aliados na minha rotina. Aqui também descobri que quero seguir carreira na área de backend, e sigo empolgada para os desafios que estão por vir com essa escolha! 

                    Se quiser conversar melhor ou só chamar pra um racha de basquete ou pra uma partidinha de minecraft, clique em <a href="/contato">Fale Comigo</a>. Vou adorar me conectar com você! :) 
                </p>
                <Botao texto="Entrar em Contato"/>
            </div>
            <div>
                <Titulo texto="Galeria"/>
                <p>Porque imagens falam mais que mil palavras</p>

                {/* aqui vão ter várias imagens e video também, mas ainda não selecionei todas, vou deixar umas temporárias */}
                <div>
                    <h2>Basquete</h2>
                    <Logo/>
                    <Logo/>
                    <Logo/>
                    <p class="legenda">Competindo pela atlética da faculdade 💛🖤</p>
                </div>
                <div>
                    <h2>Música</h2>
                    <Logo/>
                    <Logo/>
                    <Logo/>
                    <p class="legenda">Tocando piano e órgão na igreja</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SobreMim;