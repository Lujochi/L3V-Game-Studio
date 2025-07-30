import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between pr-32 pl-32 relative h-24 z-1">
        <nav className="flex-1">
          <ul className="flex gap-20 font-bold text-[18px] text-white uppercase">
            {[
              { href: "#Jogos", label: "Nossos Jogos" },
              { href: "#Sobre", label: "Sobre Nós" },
              { href: "#Equipe", label: "Equipe" },
              { href: "#Contato", label: "Contato" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/Images/logo2.png"
            alt="LΞV Game Studio"
            width={176}
            height={176}
            className="w-44"
          />
        </div>
        <div className="flex-1 flex justify-end font-bold text-[18px] text-white uppercase">
          <span className="text-[var(--color-primary)]">PT</span>/
          <span>EN</span>
        </div>
      </header>
      <div>
        <Image
          src="/Images/img-bg-hero.png"
          alt="Imagem jogo ou video"
          width={1920}
          height={1080}
          className="w-full h-full absolute top-0 left-0 z-[-1] object-cover opacity-65"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-background)]  z-[-2]" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center text-[64px] font-bold tracking-wider">
          <div className="flex flex-col space-y-[-25px]">
            <span>
              Onde ideias viram{" "}
              <span className="text-[var(--color-primary)]">aventuras</span>
            </span>
            <span>e códigos criam</span>
            <span>mundos.</span>
          </div>
        </div>
      </div>
      <section
        id="Jogos"
        className="flex flex-col items-center justify-center bg-[var(--color-black)] mt-[calc(100vh-96px)] pb-[150px] relative"
      >
        <h2 className="text-[64px] font-bold text-white pt-16">Jogos</h2>
        <div className="relative flex items-center justify-center w-[1100px] mt-16">
          <button className="z-10 mr-18 flex-shrink-0 cursor-pointer">
            <Image
              src="/Images/arrow-left.png"
              alt="Seta para esquerda"
              width={50}
              height={50}
            />
          </button>
          <div className="relative w-[1000px] h-[600px] mx-0 flex-shrink-0">
            <Image
              src="/Images/bg-jogo1.png"
              alt="Imagem de jogos"
              width={1000}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute left-0 bottom-0 ml-0 mb-0">
              <h4 className="absolute text-[40px] font-bold text-white ml-8 pr-8 pl-8 rounded-[10px] bg-black bottom-[198px] z-1">
                The Witcher
              </h4>
              <div
                className="w-[600px] h-[220px] rounded-tr-[10px] rounded-bl-[10px] pl-12 pr-6 pt-6 mt-2 relative"
                style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
              >
                <p className="text-[18px] text-white w-[535px] relative z-10">
                  The Witcher se passa em um mundo sombrio e mágico, onde
                  monstros, guerras e traições são comuns. Geralt de Rívia, um
                  bruxo mutante e caçador de monstros, percorre o continente em
                  busca de contratos, enfrentando criaturas perigosas e dilemas
                  morais. Seu destino se entrelaça com a feiticeira Yennefer e a
                  jovem Ciri, herdeira de um poder capaz de mudar o mundo.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="text-[18px] text-white font-bold absolute bottom-0 right-0 mr-8 mb-8 bg-black px-4 py-2 rounded-full hover:bg-[var(--color-primary)] transition-colors duration-300"
            >
              Saiba mais
            </a>
          </div>
          <button className="z-10 ml-18 flex-shrink-0 cursor-pointer">
            <Image
              src="/Images/arrow-right.png"
              alt="Seta para direita"
              width={50}
              height={50}
            />
          </button>
        </div>
      </section>
      <section
        id="Sobre"
        className="flex flex-col items-center justify-center bg-white pb-[150px]"
      >
        <h2 className="text-[64px] font-bold text-black pt-16">Sobre</h2>
        <div className="flex items-center justify-center mt-16 gap-16">
          <Image
            src="/Images/img-avatares-sobre.png"
            alt="Imagem sobre"
            width={836}
            height={582}
            className="w-[836px] h-[582px] rounded-lg"
          />
          <div className="flex flex-col items-start justify-center ">
            <h4 className="text-[24px] font-bold text-black">Nossa Historia</h4>
            <p className="text-[18px] font-medium text-black w-[600px] mt-2">
              A L3V Game Studio nasceu em 2025 da paixão de três amigos por
              criar experiências imersivas que misturam estratégia, aventura e
              tecnologia.
              <br /> Combinamos criatividade, design e desenvolvimento para
              transformar ideias em jogos envolventes — daqueles que marcam a
              memória de quem joga. Aqui, cada projeto é tratado como um novo
              universo: com suas próprias regras, personagens e desafios.
              <br /> Nossa missão é desenvolver jogos com alma, explorando o que
              há de mais novo em tecnologia, mas sempre guiados pelo coração do
              jogador.
              <br />
              <br /> Somos mais que um estúdio — somos construtores de mundos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
