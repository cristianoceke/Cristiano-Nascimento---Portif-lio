
export default function Home() {
  return (
    <main>

      <section id="inicio" className="relative min-h-screen bg-[url('/setupdev.jpg')] bg-cover flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold pb-2">Bem-vindo</h1>
          <h1 className="text-8xl font-bold">Desenvolvedor web</h1>
          <div className="pt-10">
            <button className="border border-amber-800 text-red-50 px-8 py-4 rounded-4xl transition-colors hover:bg-amber-900 hover:text-white cursor-pointer">
            Enviar via WhatsApp
          </button>
          </div>
          
        </div>

      </section>

      <section id="about" className="min-h-screen p-10 bg-stone-900">

        <div className="relative flex items-center justify-center h-64">
          <h1 className="absolute text-9xl font-extrabold text-white/5 tracking-widest">SOBRE MIM</h1>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Um pouco sobre mim</h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-gray-300">

          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Eu sou <span className="text-3xl text-red-800">Cristiano Nascimento</span>, um desenvolvedor web
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

      <section id="projects" className="min-h-screen p-10 bg-slate-600">
        <h1 className="text-3xl font-bold">O que eu faço</h1>
      </section>

      <section id="contact" className="min-h-screen p-10 bg-slate-700">
        <h1 className="text-3xl font-bold">Contato</h1>
      </section>
    </main>
  );
}
