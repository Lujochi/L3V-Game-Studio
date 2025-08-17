"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const jogos = [
  {
    titulo: "The Witcher",
    descricao:
      "The Witcher se passa em um mundo sombrio e mágico, onde monstros, guerras e traições são comuns. Geralt de Rívia, um bruxo mutante e caçador de monstros, percorre o continente em busca de contratos...",
    imagem: "/Images/bg-jogo1.png",
    link: "#",
  },
  {
    titulo: "Cyberpunk 2077",
    descricao:
      "Em uma metrópole futurista dominada por corporações, V sobrevive como mercenário em busca de um implante lendário que pode mudar sua vida para sempre.",
    imagem: "/Images/bg-jogo1.png",
    link: "#",
  },
  {
    titulo: "Elden Ring",
    descricao:
      "Um vasto mundo aberto cheio de segredos, inimigos brutais e chefes épicos, desenvolvido pela FromSoftware em parceria com George R. R. Martin.",
    imagem: "/Images/bg-jogo1.png",
    link: "#",
  },
];

export default function JogosCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? jogos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === jogos.length - 1 ? 0 : prev + 1));
  };

  const jogo = jogos[index];

  return (
    <section
      id="Jogos"
      className="flex flex-col items-center justify-center bg-[var(--color-black)] pb-[200px] relative"
    >
      <Reveal direction="top">
        <h2 className="text-[64px] font-bold text-white mt-32 uppercase">
          Jogos
        </h2>
      </Reveal>
      <Reveal direction="bottom">
        <div className="relative flex items-center justify-center w-[1100px] mt-16">
          {/* Botão esquerdo */}
          <button onClick={prevSlide} className="z-10 mr-14 cursor-pointer">
            <Reveal direction="left">
              <Image
                src="/Images/arrow-left.png"
                alt="Seta para esquerda"
                width={50}
                height={50}
              />
            </Reveal>
          </button>

          {/* Card do jogo atual */}
          <div className="relative w-[1000px] h-[600px]">
            <Image
              src={jogo.imagem}
              alt={`Imagem do jogo ${jogo.titulo}`}
              width={1000}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Título */}
            <h4 className="absolute text-[40px] font-bold text-white ml-8 pr-8 pl-8 rounded-[10px] bg-black bottom-[198px] z-12">
              {jogo.titulo}
            </h4>

            {/* Descrição */}
            <div
              className="absolute left-0 bottom-0 w-[600px] h-[220px] rounded-tr-[10px] rounded-bl-[10px] pl-12 pr-6 pt-6"
              style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            >
              <p className="text-[18px] text-white w-[535px]">
                {jogo.descricao}
              </p>
            </div>

            {/* Botão Saiba mais */}
            <Link
              href={jogo.link}
              className="text-[18px] text-white font-bold absolute bottom-0 right-0 mr-8 mb-8 bg-black px-4 py-2 rounded-full hover:bg-[var(--color-primary)] transition-colors duration-300"
            >
              Saiba mais
            </Link>
          </div>

          {/* Botão direito */}
          <button onClick={nextSlide} className="z-10 ml-14 cursor-pointer">
            <Reveal direction="right">
              <Image
                src="/Images/arrow-right.png"
                alt="Seta para direita"
                width={50}
                height={50}
              />
            </Reveal>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
