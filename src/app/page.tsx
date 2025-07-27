export default function Home() {
  return (
    <div>
      <header className="flex items-center justify-between pr-32 pl-32 relative h-24 z-1">
        {/* bg-[var(--color-background)] rounded-b-[20px] */}
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
          <img src="/Images/logo2.png" alt="LΞV Game Studio" className="w-44" />
        </div>
        <div className="flex-1 flex justify-end font-bold text-[18px] text-white uppercase">
          <span className="text-[var(--color-primary)]">PT</span>/
          <span>EN</span>
        </div>
      </header>
      <div>
        <img
          src="/Images/img-bg-hero.png"
          alt="Imagem jogo ou video"
          className="w-full h-full absolute top-0 left-0 z-[-1] object-cover opacity-65"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-background)]  z-[-2]" />
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-white)] text-center text-[64px] font-bold tracking-wider">
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
    </div>
  );
}
