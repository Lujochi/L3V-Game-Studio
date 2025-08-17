import Header from "./components/Header";
import JogosCarousel from "./components/Carrossel";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section id="Hero">
          <Image
            src="/Images/img-bg-hero.png"
            alt="Imagem jogo ou video"
            width={1920}
            height={1080}
            className="w-full h-[100vh] z-[-1] opacity-65"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-background)]  z-[-2]" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center text-[64px] font-bold tracking-wider">
            <div className="flex flex-col space-y-[-25px]">
              <h1>
                Onde ideias viram{" "}
                <span className="text-[var(--color-primary)]">aventuras</span>
              </h1>
              <p>e códigos criam</p>
              <p>mundos.</p>
            </div>
          </div>
        </section>

        {/* JOGOS */}

        <JogosCarousel />

        {/* SOBRE */}
        <section
          id="Sobre"
          className="flex flex-col items-center justify-center bg-white pb-[200px]"
        >
          <Reveal direction="top">
            <h2 className="text-[64px] font-bold text-black mt-32 uppercase">
              Sobre
            </h2>
          </Reveal>
          <div className="flex items-center justify-center mt-16 gap-16">
            <Reveal direction="left">
              <Image
                src="/Images/img-avatares-sobre.png"
                alt="Imagem sobre"
                width={836}
                height={582}
                className="w-[836px] h-[582px] rounded-lg"
              />
            </Reveal>
            <Reveal direction="right">
              <div className="flex flex-col items-start justify-center ">
                <h3 className="text-[24px] font-bold text-black">
                  Nossa Historia
                </h3>
                <p className="text-[18px] font-medium text-black w-[600px] mt-2">
                  A L3V Game Studio nasceu em 2025 da paixão de três amigos por
                  criar experiências imersivas que misturam estratégia, aventura
                  e tecnologia.
                  <br /> Combinamos criatividade, design e desenvolvimento para
                  transformar ideias em jogos envolventes — daqueles que marcam
                  a memória de quem joga. Aqui, cada projeto é tratado como um
                  novo universo: com suas próprias regras, personagens e
                  desafios.
                  <br /> Nossa missão é desenvolver jogos com alma, explorando o
                  que há de mais novo em tecnologia, mas sempre guiados pelo
                  coração do jogador.
                  <br />
                  <br /> Somos mais que um estúdio — somos construtores de
                  mundos.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EQUIPE */}
        <section
          id="Equipe"
          className="flex flex-col items-center justify-center bg-black pb-[200px]"
        >
          <div className="flex items-center w-full px-4 max-w-4xl mt-32">
            <div className="flex-grow h-[2px] bg-[var(--color-secondary)]" />
            <h2 className="mx-8 text-[64px] font-bold text-white uppercase">
              EQUIPE
            </h2>
            <div className="flex-grow h-[2px] bg-[var(--color-secondary)]" />
          </div>
          <Reveal direction="bottom">
            <div className="flex flex-wrap justify-center gap-20 mt-16">
              <div className="bg-[var(--color-accent)] p-4 rounded-[20px] relative w-[250px] h-[300px] mt-16 border-2 border-[var(--color-secondary)]">
                <Image
                  src="/Images/img-vitor.png"
                  alt="Imagem equipe"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] border-2 border-[var(--color-secondary)] rounded-full absolute top-[-75px] left-1/2 transform -translate-x-1/2"
                />
                <div className="flex flex-col items-center text-black mt-18">
                  <h4 className="text-[20px] font-bold">Vitor Henrique</h4>
                  <span className="text-[16px] font-medium">20 Anos</span>
                  <div className="mt-2">
                    <h5 className="text-[16px] font-semibold">Classe:</h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Designer Gráfico</li>
                    </ul>
                    <h5 className="text-[16px] font-semibold mt-4">
                      Atributos:
                    </h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Criador de mundos</li>
                      <li>Social Mídias</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-accent)] p-4 rounded-[20px] relative w-[250px] h-[300px] mt-16 border-2 border-[var(--color-secondary)]">
                <Image
                  src="/Images/img-luan.jpg"
                  alt="Imagem equipe"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover border-2 border-[var(--color-secondary)] rounded-full absolute top-[-75px] left-1/2 transform -translate-x-1/2"
                />
                <div className="flex flex-col items-center text-black mt-18">
                  <h4 className="text-[20px] font-bold">Luan Chiodini</h4>
                  <span className="text-[16px] font-medium">21 Anos</span>
                  <div className="mt-2">
                    <h5 className="text-[16px] font-semibold">Classe:</h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Desenvolvedor</li>
                    </ul>
                    <h5 className="text-[16px] font-semibold mt-4">
                      Atributos:
                    </h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Criador de códigos</li>
                      <li>Modelagem 3D</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--color-accent)] p-4 rounded-[20px] relative w-[250px] h-[300px] mt-16 border-2 border-[var(--color-secondary)]">
                <Image
                  src="/Images/img-luciano.png"
                  alt="Imagem equipe"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover border-2 border-[var(--color-secondary)] rounded-full absolute top-[-75px] left-1/2 transform -translate-x-1/2"
                />
                <div className="flex flex-col items-center text-black mt-18">
                  <h4 className="text-[20px] font-bold">Luciano Chiodini</h4>
                  <span className="text-[16px] font-medium">19 Anos</span>
                  <div className="mt-2">
                    <h5 className="text-[16px] font-semibold">Classe:</h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Desenvolvedor</li>
                    </ul>
                    <h5 className="text-[16px] font-semibold mt-4">
                      Atributos:
                    </h5>
                    <ul className="list-disc pl-2 text-[14px] ml-4">
                      <li>Criador de códigos</li>
                      <li>Animação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTATO */}
        <section
          id="Contato"
          className="flex flex-col items-center justify-center bg-white pb-[200px]"
        >
          <h2 className="text-[64px] font-bold uppercase mt-32">Contato</h2>
          <form className="flex items-center justify-center mt-16 w-[1000px] bg-[var(--color-accent)] rounded-[10px] shadow-[0_0_35px_10px_rgba(0,0,0,0.35)]">
            <Image
              src="/Images/bg-contato.png"
              alt="Imagem contato"
              width={500}
              height={650}
            />
            <div className="flex flex-col items-center justify-center w-[500px]">
              <h3 className="text-[36px] font-bold mb-[100px]">Fale conosco</h3>
              <p className="text-[20px] font-medium mb-1">E-mail:</p>
              <p className="text-[20px] font-bold mb-[50px]">
                contato@l3vstudio.com.br
              </p>
              <span className="text-[20px] font-medium mb-[50px]">Ou</span>
              <p className="w-[350px] text-center text-[20px] font-medium text-black mb-8">
                Tem uma ideia de jogo? Vamos conversar e transformar em
                realidade!
              </p>
              <Link
                href="https://l3vstudio.com.br/form/contato"
                target="_blank"
                className="bg-[var(--color-secondary)] text-black font-bold py-4 px-8 rounded-lg mt-4 cursor-pointer hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-[4px_4px_10px_-1px_rgba(0,0,0,0.7)]"
              >
                Enviar Mensagem
              </Link>
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
