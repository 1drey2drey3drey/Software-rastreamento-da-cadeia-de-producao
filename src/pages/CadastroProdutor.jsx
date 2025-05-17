import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CadastroProdutor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de tratamento do formulário
    console.log("Formulário enviado!");
  };

  return (
    <div className="bg-white">
      <header className="flex items-center justify-between border-b border-[#6B647D] px-10 py-3">
        <FaArrowRight className="Setinha" />
        <h1 className="font-extrabold text-3xl leading-none justify-center">
          Cadastrar sua conta Produtor
        </h1>
      </header>

      <hr />

      <main className="px-10 py-8 max-w-4xl">
        <h2>Coloque algumas informações sobre você</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="nome" className="nome">
              Nome <span className="AsteristicoVermelho">*</span>
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira seu nome completo"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="contato" className="nome">
              Contato <span className="AsteristicoVermelho">*</span>
            </label>
            <input
              type="text"
              id="contato"
              name="contato"
              placeholder="Insira uma forma de contatar você"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="nome">
              Seu email <span className="AsteristicoVermelho">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira o seu email"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="nome">
              Senha <span className="AsteristicoVermelho">*</span>
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Escreva sua senha"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="confirma-senha" className="nome">
              Confirme sua senha <span className="AsteristicoVermelho">*</span>
            </label>
            <input
              type="password"
              id="confirma-senha"
              name="confirma-senha"
              placeholder="Reescreva sua senha"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div class="butao">
            <button
              type="submit"
              className="w-full bg-[#6B647D] text-white font-extrabold text-xl py-3 rounded-lg"
              onClick={() => (window.location.href = "/mapaprodutor")}
            >
              Confirmar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CadastroProdutor;
