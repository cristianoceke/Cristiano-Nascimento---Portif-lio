import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Kanban from "@/components/kanban";

const task = [
  {}
]

export default function Home() {
  return (
    <main>

      <section id="inicio" className="relative min-h-screen bg-[url('/setupdev.jpg')] bg-cover flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold pb-2">Bem-vindo</h1>
          <h1 className="text-8xl font-bold">Desenvolvedor Web</h1>
          <div className="pt-10">
            <button className="border border-amber-600 text-red-50 px-8 py-4 rounded-4xl transition-colors hover:bg-amber-600 hover:text-white cursor-pointer">
              Vamos conversar ?
            </button>
          </div>
        </div>
      </section>


      <section id="about" className="min-h-screen p-10 bg-stone-900">
        <div className="relative flex items-center justify-center h-64">
          <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">SOBRE MIM</h1>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
              Um pouco sobre mim</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Eu sou <span className="text-3xl text-amber-600">Cristiano Nascimento</span>, um desenvolvedor Web
            </h3>

            <p className="leading-relaxed text-white/50">
              Estudante do 8º período de Ciência da Computação pela Faculdade Descomplica UniAmérica, com experiência prática em desenvolvimento de software através de estágio na AjuLabs, atuando com React, Next.js, NestJS, Kotlin e PostgreSQL.
              Profissional com 17 anos de experiência no setor público, atuando nos departamentos de Recursos Humanos e Secretaria de Educação, com forte vivência em gestão de dados, sistemas administrativos e planilhas avançadas.
              Participante de bootcamps da Digital Innovation One (DIO) e em formação Full Stack pela OneBitCode, com foco em aplicações web e mobile.
              Motivado a consolidar carreira na área de desenvolvimento de software, aplicando habilidades técnicas e experiências anteriores em projetos de impacto e soluções inovadoras.
            </p>
          </div>

          <div className="w-72 space-y-4">
            <div className="border-b border-gray-700/50 pb-4">
              <h4>
                <span className="font-semibold text-white">Nome: </span>
                Cristiano Nascimento
              </h4>
            </div>

            <div className="border-b border-gray-700/50 pb-4">
              <h4>
                <span className="font-semibold text-white">Email: </span>
                <span className="text-amber-600">cristiano@ajulabs.com</span>
              </h4>
            </div>

            <div className="border-b border-gray-700/50 pb-4">
              <h4><span className="font-semibold text-white">Idade: </span>37 anos</h4>
            </div>

            <div className="pt-6">
              <button className="border border-amber-600 text-red-50 px-8 py-2 rounded-4xl transition-colors hover:bg-amber-600 hover:text-white cursor-pointer">
                Vamos conversar ?</button>
            </div>

          </div>
        </div>
      </section>


      <section id="projects" className="min-h-screen p-10 bg-zinc-800">
        <div className="flex-1">

          <div className="relative flex items-center justify-center h-64">
            <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">
              PORTIFÓLIO
            </h1>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                RESUMO
              </h2>
            </div>
          </div>

          <div className=" justify-items-center">
            <Kanban />
          </div>

          <div className="text-amber-50 font-extrabold p-2 ">
            <h1 className="p-4 text-3xl">Conhcimentos</h1>
            <div className=" text-amber-50/20 grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
              <h2 className="border-amber-600 text-yellow-300 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500 ">JavaScript</h2>
              <h2 className="border-amber-600 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">HTML</h2>
              <h2 className="border-amber-600 text-blue-400 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">CSS</h2>
              <h2 className="border-amber-600 text-blue-900 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">VUE</h2>
              <h2 className="border-amber-600 text-green-900 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">NEXTJS</h2>
              <h2 className="border-amber-600 text-purple-500 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">REACT</h2>
              <h2 className="border-amber-600 text-red-800 border-b w-32 p-2 rounded-2xl hover:text-white hover:bg-amber-600 hover:rounded-2xl hover:cursor-pointer transition-colors duration-500">NESTJS</h2>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="min-h-screen flex flex-col bg-neutral-800">
        <div className="flex-1 p-10">

          <div className="relative flex items-center justify-center h-64">

            <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">
              CONTATO
            </h1>

            <div className="text-center">
              <h2 className="text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-600 after:mx-auto after:mt-2">
                Fale comigo
              </h2>
            </div>

          </div>

          <div className="flex pr-8 justify-evenly gap-7">
            <div className="p-6">

              <ul className="space-y-3 text-lg text-white">
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

              <h4 className="leading-relaxed mt-6 text-xl font-bold text-white">SIGA ME</h4>

              <ul className="flex gap-6 mt-4">
                <li className="relative group">
                  <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-sky-500 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                  <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 
                     px-2 py-1 text-xs text-white bg-black rounded 
                     opacity-0 group-hover:opacity-100 transition-opacity
                     before:content-[''] before:absolute before:top-full before:left-1/2 
                     before:-translate-x-1/2 before:border-4 
                     before:border-transparent before:border-t-black">
                    LinkedIn
                  </span>
                </li>

                <li className="relative group">
                  <a
                    href="https://instagram.com"
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 
                     px-2 py-1 text-xs text-white bg-black rounded 
                     opacity-0 group-hover:opacity-100 transition-opacity
                     before:content-[''] before:absolute before:top-full before:left-1/2 
                     before:-translate-x-1/2 before:border-4 
                     before:border-transparent before:border-t-black">
                    Instagram
                  </span>
                </li>

                <li className="relative group">
                  <a
                    href="https://github.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 
                     px-2 py-1 text-xs text-white bg-black rounded 
                     opacity-0 group-hover:opacity-100 transition-opacity
                     before:content-[''] before:absolute before:top-full before:left-1/2 
                     before:-translate-x-1/2 before:border-4 
                     before:border-transparent before:border-t-black">
                    GitHub
                  </span>
                </li>
              </ul>

            </div>

            <div className="flex flex-col text-center space-y-6">
              <h4 className="text-2xl text-white font-extrabold text-center">
                ENTRE CONTATO COMIGO
              </h4>
              <button className="bg-amber-600 text-red-50 px-8 py-3 rounded-4xl transition-colors hover:border-amber-600 hover:border hover:bg-transparent hover:text-white cursor-pointer">
                Enviar via WhatsApp
              </button>
            </div>

          </div>
        </div>

        <footer className="bg-stone-900 py-6 text-center text-gray-400 text-sm h-64">
          <p>
            Copyright © 2025{" "}
            <span className="text-amber-600 font-semibold">Cristiano Nascimento</span>. Todos os direitos reservados.
          </p>
        </footer>

      </section>

    </main>
  );
}
