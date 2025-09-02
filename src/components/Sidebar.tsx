"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const abas =
    [
        { href: "#inicio", label: "Início" },
        { href: "#about", label: "Sobre mim" },
        { href: "#projects", label: "O que eu faço" },
        { href: "#contact", label: "Contato" },
    ]



export default function Sidebar() {
    const [hash, setHash] = useState("");

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        onHashChange();
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-stone-950 pt-12 px-6 text-white">
            <div className="flex flex-col items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-1 ring-gray-200">
                    <Image
                        src="/profile.png"
                        alt="Foto de perfil"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="text-center">
                    <p className="text-sm font-semibold">Cristiano</p>
                    <p className="text-xs text-gray-500">Desenvolvedor Web</p>
                </div>

                <nav className="mt-6">
                    <ul className="space-y-1">
                        {abas.map((aba) => {
                            const ativo = hash === aba.href;
                            return (
                                <li key={aba.href}>
                                    <a href={aba.href}
                                        className={`block rounded-lg px-3 py-2 text-lg text-center transition-colors ${ativo
                                            ? "font-bold"
                                            : "font-normal text-gray-600 hover:text-white"
                                            }`}
                                    >{aba.label}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}


