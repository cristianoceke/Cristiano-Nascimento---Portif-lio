import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Cristiano Nascimento - Portifólio",
  description: "Meu portfólio como desenvolvedor, projetos e contato.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
          <Sidebar />
          <main className="ml-64 flex-1">
            {children}            
          </main>
      </body>
    </html>
  );
}
