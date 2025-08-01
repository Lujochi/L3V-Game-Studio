"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around bg-black text-white h-[125px]">
      <Image
        src="/Images/logo-icon.png"
        alt="Ícone LΞV Game Studio"
        width={100}
        height={100}
      />
      <div className="flex flex-col items-center gap-2 mt-4 ml-26 text-[14px]">
        <Link
          href="/politica-de-privacidade"
          target="_blank"
          className="underline"
        >
          Política de Privacidade do Site
        </Link>
        <span className="font-medium">
          © 2025 LΞV GAME STUDIO / DIREITOS RESERVADOS
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-medium text-[18px]">Siga-nos</p>
        <ul className="flex items-center justify-center gap-4 text-white">
          {[
            {
              href: "https://www.facebook.com/L3VStudio",
              icon: "fa-facebook-f",
            },
            {
              href: "https://www.instagram.com/L3VStudio",
              icon: "fa-instagram",
            },
            { href: "https://twitter.com/L3VStudio", icon: "fa-x-twitter" },
            { href: "https://www.tiktok.com/@L3VStudio", icon: "fa-tiktok" },
            { href: "https://www.youtube.com/@L3VStudio", icon: "fa-youtube" },
          ].map(({ href, icon }) => (
            <li key={icon}>
              <Link
                href={href}
                target="_blank"
                className="hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                <i className={`fa-brands ${icon} text-[20px]`}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
