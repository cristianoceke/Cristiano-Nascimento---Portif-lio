import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Kanban from "@/components/kanban";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-[70vh] md:min-h-screen bg-[url('/setupdev.jpg')] bg-cover bg-center flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold pb-2">Bem-vindo</h1>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Desenvolvedor Web</h1>
          <div className="pt-8 md:pt-10">
            <button className="border border-amber-600 text-red-50 px-6 py-3 md:px-8 md:py-4 rounded-4xl transition-colors hover:bg-amber-600 hover:text-white cursor-pointer">
              Vamos conversar ?
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="about" className="min-h-screen flex flex-col p-6 md:p-10 bg-stone-900">
        <div className="relative flex flex-col items-center justify-center h-28 sm:h-36 md:h-48">
          <h1 className="absolute text-4xl sm:text-6xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
            SOBRE MIM
          </h1>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
              Um pouco sobre mim
            </h2>
          </div>
        </div>

        <div className="max-w-4xl w-full text-center pb-8 md:pb-10 mx-auto px-4 text-white/50">
          <p>
            Participante de bootcamps da Digital Innovation One (DIO) e em formação Full Stack pela OneBitCode, com{" "}
            <span className="font-extrabold text-white/70">foco em aplicações web e mobile.</span>
            {" "}Motivado a consolidar{" "}
            <span className="font-extrabold text-white/60">carreira na área de desenvolvimento de software</span>,
            aplicando habilidades técnicas e experiências anteriores em projetos de impacto e soluções inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 text-gray-300">
          {/* Coluna esquerda */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              EU SOU CRISTIANO NASCIMENTO, UM <span className="text-amber-600">DESENVOLVEDOR WEB</span>
            </h3>

            <p className="leading-relaxed text-white/50">
              Estudante do 8º período de Ciência da Computação pela Faculdade Descomplica UniAmérica,
              <span className="text-amber-600 font-extrabold"> com experiência prática em desenvolvimento de software </span>
              através de estágio na AjuLabs, atuando com React, Next.js, NestJS, Kotlin e PostgreSQL.
            </p>
            <br />
            <p className="leading-relaxed text-white/50">
              <span className="text-amber-600 font-extrabold">Profissional com 17 anos de experiência no setor público</span>,
              atuando nos departamentos de Recursos Humanos e Secretaria de Educação, com forte vivência em gestão de dados,
              sistemas administrativos e planilhas avançadas.
            </p>

            <div className="pt-6">
              <button className="border-s-4 border-y bg-amber-600 text-red-50 px-6 py-2 md:px-8 md:py-2 rounded-full transition-colors hover:bg-amber-900 hover:text-white hover:border-none cursor-pointer">
                Vamos conversar ?
              </button>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="w-full md:w-72 space-y-4 md:ml-auto">
            {/* 3 cards de ícones */}
            <div className="pb-2 sm:pb-4">
              <ul className="flex text-lg gap-3 sm:gap-6 md:gap-10 text-white">
                <li className="flex-1 max-w-[120px] md:w-56 flex items-center justify-center bg-amber-600 shadow-xl/60 shadow-amber-600 rounded-xl p-4 md:p-5 hover:bg-amber-950">
                  <FontAwesomeIcon icon={faUser} size="lg" className="text-amber-50 cursor-pointer" />
                </li>
                <li className="flex-1 max-w-[120px] md:w-56 flex items-center justify-center bg-amber-600 shadow-xl/60 shadow-amber-600 rounded-xl p-4 md:p-5 hover:bg-amber-950">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-amber-50 cursor-pointer" />
                </li>
                <li className="flex-1 max-w-[120px] md:w-56 flex items-center justify-center bg-amber-600 shadow-xl/60 shadow-amber-600 rounded-xl p-4 md:p-5 hover:bg-amber-950">
                  <FontAwesomeIcon icon={faCalendar} size="lg" className="text-amber-50 cursor-pointer" />
                </li>
              </ul>
            </div>

            {/* “Pílulas” com gradiente */}
            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-2 w-full">
              <h4 className="font-extrabold px-4 text-center md:text-left">Cristiano Nascimento</h4>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-2 w-full md:w-96">
              <h4 className="font-extrabold px-4 text-center md:text-left">cristiano@ajulabs.com</h4>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-neutral-900 rounded-full p-2 w-full md:w-72">
              <h4 className="font-extrabold px-4 text-center md:text-left">37 anos</h4>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS / KANBAN */}
      <section id="projects" className="min-h-screen px-4 py-8 md:p-10 bg-zinc-800">
        <div className="flex-1">
          <div className="relative flex items-center justify-center h-40 md:h-64">
            <h1 className="absolute text-5xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
              PORTIFÓLIO
            </h1>

            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                RESUMO
              </h2>
            </div>
          </div>

          <div className="flex justify-center p-2 text-white">
            <p>SIMULADOR TASKS TRELLO</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Kanban />
          </div>

          <div className="text-amber-50 font-extrabold px-4 md:p-1 mx-auto max-w-6xl">
            <h1 className="p-4 text-center text-2xl md:text-3xl">Conhcimentos</h1>
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
                  className={`border-amber-600 border-b text-center w-28 sm:w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:cursor-pointer transition-colors duration-500 ${extra}`}
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
        <div className="flex-1 p-6 md:p-10">
          <div className="relative flex items-center justify-center h-40 md:h-64">
            <h1 className="absolute text-5xl md:text-9xl font-extrabold text-white/5 tracking-widest select-none pointer-events-none whitespace-nowrap">
              CONTATO
            </h1>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                Fale comigo
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-7 px-4 md:px-8">
            {/* Coluna esquerda */}
            <div className="p-0 md:p-6">
              <ul className="space-y-3 text-base md:text-lg text-white">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} size="1x" className="text-amber-600" />
                  <span>( 79 ) 99992-5126</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>(Whatsapp)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" className="text-amber-600" />
                  <span>cristiano@ajulabs.com</span>
                </li>
              </ul>

              <h4 className="leading-relaxed mt-6 text-lg md:text-xl font-bold text-white">SIGA ME</h4>

              <ul className="flex gap-6 mt-4 justify-start">
                <li className="relative group">
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-sky-500 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
                <li className="relative group">
                  <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
                <li className="relative group">
                  <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col text-center space-y-6">
              <h4 className="text-xl md:text-2xl text-white font-extrabold">ENTRE CONTATO COMIGO</h4>
              <button className="bg-amber-600 text-red-50 px-6 py-3 md:px-8 rounded-4xl transition-colors hover:border-amber-600 hover:border hover:bg-transparent hover:text-white cursor-pointer">
                Enviar via WhatsApp
              </button>
            </div>
          </div>
        </div>

        <footer className="bg-stone-900 py-8 md:py-10 text-center text-gray-400 text-sm md:text-base">
          <p>
            Copyright © 2025{" "}
            <span className="text-amber-600 font-semibold">Cristiano Nascimento</span>. Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>
  );
}
