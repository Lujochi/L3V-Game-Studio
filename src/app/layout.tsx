import "./globals.css";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "LΞV Game Studio",
  description: "Desenvolvimento de jogos e aplicativos",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        {children}

        <Script
          src="https://kit.fontawesome.com/4cccf2acba.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
