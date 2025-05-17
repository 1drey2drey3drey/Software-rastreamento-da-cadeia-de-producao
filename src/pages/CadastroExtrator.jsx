import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../CadastroExtrator.css";

const CadastroExtrator = ({
  tituloPagina = "Cadastrar sua conta Extrator",
  corPrincipal = "#6B647D",
  corTexto = "#000000",
  corFundo = "#FFFFFF",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de tratamento do formulário
    console.log("Formulário enviado!");
    window.location.href = "/mapaextrator";
  };

  return (
    <div className="container" style={{ backgroundColor: corFundo }}>
      <header className="header">
        <button
          onClick={() => window.history.back()}
          className="back-button"
          aria-label="Voltar"
        >
          <FaArrowRight
            className="arrow-icon"
            style={{ color: corPrincipal }}
          />
        </button>
        <h1 className="title" style={{ color: corTexto }}>
          {tituloPagina}
        </h1>
      </header>

      <hr className="divider" style={{ borderColor: corPrincipal }} />

      <main className="main-content">
        <h1 className="subtitle" style={{ color: corTexto }}>
          Coloque algumas informações sobre você
        </h1>

        <form onSubmit={handleSubmit} className="form-container">
          {[
            {
              id: "nome",
              label: "Nome",
              type: "text",
              placeholder: "Insira seu nome completo",
            },
            {
              id: "contato",
              label: "Contato",
              type: "text",
              placeholder: "Insira uma forma de contatar você",
            },
            {
              id: "email",
              label: "Seu email",
              type: "email",
              placeholder: "Insira o seu email",
            },
            {
              id: "senha",
              label: "Senha",
              type: "password",
              placeholder: "Escreva sua senha",
            },
            {
              id: "confirma-senha",
              label: "Confirme sua senha",
              type: "password",
              placeholder: "Reescreva sua senha",
            },
          ].map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id} className="form-label">
                {field.label} <span className="required-asterisk">*</span>
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  focusBorderColor: corPrincipal,
                }}
                required
              />
            </div>
          ))}

          <div className="button-container">
            <button
              type="submit"
              className="submit-button"
              style={{
                backgroundColor: corPrincipal,
                color: "#FFFFFF",
              }}
            >
              Confirmar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CadastroExtrator;
