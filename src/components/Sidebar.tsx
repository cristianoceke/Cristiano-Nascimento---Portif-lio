"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const abas = [
  { href: "#inicio", label: "Início" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "O que eu faço" },
  { href: "#contact", label: "Contato" },
];

export default function Sidebar() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#inicio");
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-stone-950 pt-12 px-6 text-white">
      <div className="flex h-full flex-col">
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image src="/profile.png" alt="Foto de perfil" fill className="object-cover" />
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold">Cristiano</p>
            <p className="text-xs text-gray-500">Desenvolvedor Web</p>
          </div>

          <nav className="mt-6 w-full">
            <ul className="space-y-1">
              {abas.map((aba) => {
                const ativo = hash === aba.href;
                return (
                  <li key={aba.href}>
                    <a
                      href={aba.href}
                      className={`block rounded-lg px-3 py-2 text-center text-lg transition-colors ${
                        ativo
                          ? "font-bold text-white"
                          : "font-normal text-gray-500 hover:text-white"
                      }`}
                    >
                      {aba.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <footer className="mt-auto w-full">
          <div className="border-t border-white/10 p-4">
            <ul className="flex items-center justify-center gap-6 text-gray-400">
              <li className="relative group">
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="hover:text-sky-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-[24px] w-[24px]" />
                </a>
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-t-black before:border-x-transparent before:border-b-0 before:content-['']">
                  LinkedIn
                </span>
              </li>

              <li className="relative group">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="hover:text-pink-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-[24px] w-[24px]" />
                </a>
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-t-black before:border-x-transparent before:border-b-0 before:content-['']">
                  Instagram
                </span>
              </li>

              <li className="relative group">
                <a
                  href="https://github.com"
                  aria-label="GitHub"
                  className="hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-[24px] w-[24px]" />
                </a>
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-t-black before:border-x-transparent before:border-b-0 before:content-['']">
                  GitHub
                </span>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </aside>
  );
}
