"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Kanban from "@/components/kanban";
import { useEffect, useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  const closeAndGo = () => setOpen(false);

  return (
    <main>
      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-[70vh] md:min-h-screen bg-[url('/setupdev.jpg')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white">
          <h1 className="text-2xl sm:text-4xl font-bold pb-2">Bem-vindo</h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">Desenvolvedor Web</h1>
          <div className="p-6 md:pt-10">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-amber-600 text-red-50 px-6 py-3 md:px-8 md:py-4 min-w-[160px] rounded-full transition-colors hover:bg-amber-600 hover:text-white cursor-pointer inline-block text-center"
            >
              Vamos conversar ?
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="about" className="min-h-screen flex flex-col px-4 sm:px-6 md:px-10 py-8 bg-stone-900">
        <div className="relative flex flex-col items-center justify-center h-28 sm:h-36 md:h-48">
          <h1 className="absolute text-3xl sm:text-6xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
            SOBRE MIM
          </h1>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
              Um pouco sobre mim
            </h2>
          </div>
        </div>

        <div className="max-w-4xl w-full text-center pb-8 md:pb-10 mx-auto text-white/50">
          <p>
            Participante de bootcamps da Digital Innovation One (DIO) e em formação Full Stack pela OneBitCode, com{" "}
            <span className="font-extrabold text-white/70">foco em aplicações web e mobile.</span>{" "}
            Motivado a consolidar{" "}
            <span className="font-extrabold text-white/60">carreira na área de desenvolvimento de software</span>,
            aplicando habilidades técnicas e experiências anteriores em projetos de impacto e soluções inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 sm:px-4 md:px-10 text-gray-300 max-w-6xl mx-auto">
          {/* Coluna esquerda */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              EU SOU CRISTIANO NASCIMENTO, UM <span className="text-amber-600">DESENVOLVEDOR WEB</span>
            </h3>

            <p className="leading-relaxed text-white/60">
              Estudante do 8º período de Ciência da Computação pela Faculdade Descomplica UniAmérica,
              <span className="text-amber-600 font-extrabold"> com experiência prática em desenvolvimento de software </span>
              através de estágio na AjuLabs, atuando com React, Next.js, NestJS, Kotlin e PostgreSQL.
            </p>
            <br />
            <p className="leading-relaxed text-white/60">
              <span className="text-amber-600 font-extrabold">Profissional com 17 anos de experiência no setor público</span>,
              atuando nos departamentos de Recursos Humanos e Secretaria de Educação, com forte vivência em gestão de dados,
              sistemas administrativos e planilhas avançadas.
            </p>

            <div className="pt-6">
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

          {/* Coluna direita */}
          <div className="w-full md:w-80 space-y-4 md:ml-auto">
            {/* 3 cards de ícones */}
            <div className="pb-4">
              <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-white">
                {[faUser, faEnvelope, faCalendar].map((icon, i) => (
                  <li
                    key={i}
                    className="flex-1 min-w-[90px] max-w-[120px] md:w-56 flex items-center justify-center bg-amber-600 shadow-xl/60 shadow-amber-600 rounded-xl p-4 md:p-5 hover:bg-amber-950"
                  >
                    <FontAwesomeIcon icon={icon} size="lg" className="text-amber-50 cursor-pointer" />
                  </li>
                ))}
              </ul>
            </div>

            {/* “Pílulas” */}
            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-3 w-full">
              <h4 className="font-extrabold px-4 text-center md:text-left">Cristiano Nascimento</h4>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-3 w-full">
              <h4 className="font-extrabold px-4 text-center md:text-left">cristiano@ajulabs.com</h4>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-3 w-full">
              <h4 className="font-extrabold px-4 text-center md:text-left">37 anos</h4>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS / KANBAN */}
      <section id="projects" className="min-h-screen px-4 sm:px-6 md:px-10 py-8 bg-zinc-800">
        <div className="flex-1">
          <div className="relative flex items-center justify-center h-32 sm:h-40 md:h-64">
            <h1 className="absolute text-4xl sm:text-6xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
              PORTIFÓLIO
            </h1>

            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                RESUMO
              </h2>
            </div>
          </div>

          <div className="flex justify-center p-2 text-white">
            <p>SIMULADOR TASKS TRELLO</p>
          </div>

          <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
            <Kanban />
          </div>

          {/* Skills */}
          <div className="text-amber-50 font-extrabold px-4 md:px-6 mx-auto max-w-6xl">
            <h1 className="p-4 text-center text-2xl sm:text-3xl">Conhecimentos</h1>
            <div className="text-amber-50/90 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-8 justify-items-center">
              {[
                ["JavaScript", "text-yellow-300"],
                ["HTML", ""],
                ["CSS", "text-blue-400"],
                ["VUE", "text-blue-900"],
                ["NEXTJS", "text-green-900"],
                ["REACT", "text-purple-500"],
                ["NESTJS", "text-red-800"],
              ].map(([label, extra]) => (
                <h2
                  key={label}
                  className={`border-amber-600 border-b text-center w-24 sm:w-28 md:w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:cursor-pointer transition-colors duration-500 ${extra}`}
                >
                  {label}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="min-h-screen flex flex-col bg-neutral-800">
        <div className="flex-1 px-4 sm:px-6 md:px-10 py-8">
          <div className="relative flex items-center justify-center h-32 sm:h-40 md:h-64">
            <h1 className="absolute text-4xl sm:text-6xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
              CONTATO
            </h1>
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                Fale comigo
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-10">
            {/* Coluna esquerda */}
            <div className="p-0 md:p-6">
              <ul className="space-y-3 text-base sm:text-lg text-white">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-amber-600" />
                  <span>( 79 ) 9X9Y2-5X2Y</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>(Whatsapp)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-amber-600" />
                  <span>cristiano@ajulabs.com</span>
                </li>
              </ul>

              <h4 className="leading-relaxed mt-6 text-lg sm:text-xl font-bold text-white">SIGA-ME</h4>

              <ul className="flex gap-6 mt-4 justify-center md:justify-start">
                <li>
                  <a href="https://www.linkedin.com/in/cristiano-jesus-049a55144/" className="text-gray-400 hover:text-sky-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/cristiano_o8/" className="text-gray-400 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cristianoceke" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
              <h4 className="text-xl sm:text-2xl text-white font-extrabold">ENTRE EM CONTATO</h4>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-red-50 px-6 py-3 md:px-8 rounded-3xl min-w-[160px] transition-colors hover:border-amber-600 hover:border hover:bg-transparent hover:text-white cursor-pointer inline-block text-center"
              >
                Vamos conversar ?
              </a>
            </div>
          </div>
        </div>

        <footer className="bg-stone-900 py-6 sm:py-8 md:py-10 text-center text-gray-400 text-xs sm:text-sm md:text-base">
          <p>
            Copyright © 2025{" "}
            <span className="text-amber-600 font-semibold">Cristiano Nascimento</span>. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}
