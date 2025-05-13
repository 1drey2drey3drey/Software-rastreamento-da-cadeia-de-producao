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
        <h1 className="font-extrabold text-3xl leading-none">
          Cadastrar sua conta Produtor
        </h1>
        <FaArrowRight className="text-3xl" />
      </header>

      <main className="px-10 py-8 max-w-4xl">
        <h2 className="text-xl font-semibold mb-6">
          Coloque algumas informações sobre você
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="nome" className="block text-sm font-normal mb-1">
              Nome <span className="text-red-600">*</span>
            </label>
            <textarea
              id="nome"
              name="nome"
              rows="2"
              placeholder="Insira seu nome completo"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="contato" className="block text-sm font-normal mb-1">
              Contato <span className="text-red-600">*</span>
            </label>
            <textarea
              id="contato"
              name="contato"
              rows="2"
              placeholder="Insira uma forma de contatar você"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-normal mb-1">
              Seu email <span className="text-red-600">*</span>
            </label>
            <textarea
              id="email"
              name="email"
              rows="2"
              placeholder="Insira o seu email"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-normal mb-1">
              Senha <span className="text-red-600">*</span>
            </label>
            <textarea
              id="senha"
              name="senha"
              rows="2"
              placeholder="Escreva sua senha"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirma-senha"
              className="block text-sm font-normal mb-1"
            >
              Confirme sua senha <span className="text-red-600">*</span>
            </label>
            <textarea
              id="confirma-senha"
              name="confirma-senha"
              rows="2"
              placeholder="Reescreva sua senha"
              className="w-full rounded border border-gray-300 text-gray-400 text-sm p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#6B647D]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6B647D] text-white font-extrabold text-xl py-3 rounded-lg"
            style={{ textAlign: "center" }}
          >
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
};

export default CadastroProdutor;
