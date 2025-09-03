import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <main>

      <section id="inicio" className="relative min-h-screen bg-[url('/setupdev.jpg')] bg-cover flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold pb-2">Bem-vindo</h1>
          <h1 className="text-8xl font-bold">Desenvolvedor web</h1>
          <div className="pt-10">
            <button className="border border-amber-900 text-red-50 px-8 py-4 rounded-4xl transition-colors hover:bg-amber-900 hover:text-white cursor-pointer">
              Enviar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen p-10 bg-stone-900">
        <div className="relative flex items-center justify-center h-64">
          <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">SOBRE MIM</h1>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-900 after:mx-auto after:mt-2">
              Um pouco sobre mim</h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-gray-300">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Eu sou <span className="text-3xl text-amber-900">Cristiano Nascimento</span>, um desenvolvedor web
            </h3>

            <p className="leading-relaxed text-white/50">
              Já estou na área há 8 anos profissionalmente, mas comecei a "codar" desde os meus 11 anos de idade. Desenvolvi vários projetos para empresas com nomes grandes no mercado, com diferentes regras de negócios.
              Hoje eu sou desenvolvedor fullstack sênior na Plusoft InPaaS, uma empresa voltada para consultoria de software e com o seu produto Hike, um sistema de automatização de processos - BPM (Business Process Management).
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
                <span className="text-red-800">cristiano@ajulabs.com</span>
              </h4>
            </div>

            <div className="border-b border-gray-700/50 pb-4">
              <h4><span className="font-semibold text-white">Idade: </span>37 anos</h4>
            </div>

            <div className="pt-6">
              <button className="border border-amber-800 text-red-50 px-8 py-2 rounded-4xl transition-colors hover:bg-amber-900 hover:text-white cursor-pointer">
                Enviar via WhatsApp</button>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen p-10 bg-stone-900">
        <h1 className="text-3xl font-bold">O que eu faço</h1>
      </section>

      <section id="contact" className="min-h-screen p-10 bg-neutral-800">
        <div>
          <div className="relative flex items-center justify-center h-64 ">
            <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">CONTATO</h1>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white after:content-[''] after:block after:w-24 after:h-1 after:bg-amber-900 after:mx-auto after:mt-2">Fale comigo</h2>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-gray-300">
          <div>
            <ul className="space-y-4 text-lg text-white">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-amber-900 w-[18px] h-[18px]" />
                <span>(79) 9 9992-5126</span>
              </li>
              <li className="flex items-center gap-3">
                <span>( Whatsapp )</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-amber-900 w-[18px] h-[18px]" />
                <span>cristiano@ajulabs.com</span>
              </li>
            </ul>

            <div>
              <h4 className="leading-relaxed mt-4 text-2xl font-extrabold text-white">SIGA ME</h4>
            </div>
            <div>
              <ul className="flex gap-6 mt-4 pb-8">
                <li>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px]" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px]" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-100 space-y-4">
            <div>
              <h4 className="text-2xl text-white font-extrabold text-md-center">
                ENTRE EM CONTATO COMIGO
              </h4>
            </div>

            <div className="pt-6">
              <button className=" bg-amber-900 text-red-50 px-8 py-2 rounded-4xl transition-colors hover:border-amber-800 hover:border hover:bg-transparent hover:text-white cursor-pointer">
                Enviar via WhatsApp</button>
            </div>

          </div>
        </div>
        <footer className=" bg-gray-700/50 p-6 text-center text-gray-400">
          <p>
            Copyright © 2025 <span className="text-amber-900 font-semibold">Cristiano Nascimento</span>.
            Todos os direitos reservados.
          </p>
        </footer>
      </section>
    </main>


  );
}
