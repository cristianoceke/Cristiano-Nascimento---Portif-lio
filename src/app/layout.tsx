import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Cristiano Nascimento - Portfólio",
  description: "Meu portfólio como desenvolvedor, projetos e contato.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex bg-stone-950">
        <Sidebar />
        <main className="flex-1 md:ml-64 ml-0">
          
          {children}
        </main>
      </body>
    </html>
  );
}
