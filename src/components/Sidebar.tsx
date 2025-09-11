"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const abas = [
  { href: "#inicio", label: "Início" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "O que eu faço" },
  { href: "#contact", label: "Contato" },
];

export default function Sidebar() {
  const [hash, setHash] = useState("#inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || "#inicio");
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeAndGo = () => setOpen(false);

  return (
    <>
      {/* Topbar mobile */}
      <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between bg-stone-950/90 px-4 text-white backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 overflow-hidden rounded">
            <Image src="/profile.png" alt="Foto de perfil" fill className="object-cover" />
          </div>
          <span className="text-sm font-semibold">Cristiano Nascimento</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/cristiano-jesus-049a55144/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-sky-500"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/cristiano_o8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-600"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/cristianoceke"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="rounded p-2 hover:bg-white/5"
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Drawer mobile */}
      {open && (
        <>
          <button
            aria-label="Fechar menu"
            className="fixed inset-0 z-50 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-0 z-50 h-[92vh] overflow-y-auto rounded-b-3xl bg-stone-950 text-white shadow-2xl md:hidden">
            {/* Header do drawer com foto + nome */}
            <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-7 overflow-hidden rounded">
                  <Image src="/profile.png" alt="Foto de perfil" fill className="object-cover" />
                </div>
                <span className="text-base font-semibold">Cristiano Nascimento</span>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/in/cristiano-jesus-049a55144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-sky-500"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/cristiano_o8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-pink-600"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/cristianoceke"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                </a>
                <button
                  aria-label="Fechar"
                  onClick={() => setOpen(false)}
                  className="rounded p-2 hover:bg-white/5"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navegação */}
            <nav className="px-4">
              <ul className="divide-y divide-white/10">
                {abas.map((aba) => {
                  const ativo = hash === aba.href;
                  return (
                    <li key={aba.href}>
                      <a
                        href={aba.href}
                        onClick={closeAndGo}
                        className={`block py-4 text-xl ${ativo ? "text-amber-600" : "text-white"}`}
                      >
                        {aba.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA WhatsApp */}
            <div className="px-4 pb-8 pt-6">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block w-full max-w-sm rounded-full bg-amber-600 px-6 py-3 text-center text-lg font-semibold text-white hover:border-white hover:border-2 hover:brightness-110 active:translate-y-[2px] active:shadow-[0_4px_0_#9c2a0f] transition"
                onClick={closeAndGo}
              >
                Vamos conversar ?
              </a>
            </div>
          </div>
        </>
      )}

      {/* Sidebar desktop */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-stone-950 pt-12 px-6 text-white md:block">
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
                          ativo ? "font-bold text-white" : "font-normal text-gray-500 hover:text-white"
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

          {/* Footer ícones */}
          <footer className="mt-auto w-full">
            <div className="border-t border-white/10 p-4">
              <ul className="flex items-center justify-center gap-6 text-gray-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/cristiano-jesus-049a55144/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-sky-500"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-[24px] w-[24px]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cristiano_o8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-pink-600"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-[24px] w-[24px]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/cristianoceke"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-white"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-[24px] w-[24px]" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </aside>
    </>
  );
}
