"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between pr-32 pl-32 h-24 z-100 py-[60px] rounded-b-3xl ${
        scrolled ? "bg-[var(--color-background)] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex-1">
        <ul className="flex gap-20 font-bold text-[18px] text-white uppercase">
          {[
            { href: "#Jogos", label: "Nossos Jogos" },
            { href: "#Sobre", label: "Sobre Nós" },
            { href: "#Equipe", label: "Equipe" },
            { href: "#Contato", label: "Contato" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="#Hero">
          <Image
            src="/Images/logo2.png"
            alt="Logo LΞV Game Studio"
            width={176}
            height={176}
            className="w-44"
          />
        </Link>
      </div>
      <div className="flex-1 flex justify-end font-bold text-[18px] text-white uppercase">
        <span className="text-[var(--color-primary)]">PT</span>/<span>EN</span>
      </div>
    </header>
  );
}
