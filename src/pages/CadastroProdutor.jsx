import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Cadastro.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";


const CadastroProdutor = ({
  tituloPagina = "Cadastrar sua conta Produtor",
  corPrincipal = "#6B647D",
  corTexto = "#000000",
  corFundo = "#FFFFFF",
}) => {

  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState(null);

  console.log("Nome:", nome);
  console.log("Contato:",contato);
  console.log("Email:", email);
  console.log("Senha:", senha);
  console.log("ConfirmaSenha:", confirmaSenha);
  console.log("\n");  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de tratamento do formulário
    console.log("Formulário enviado!");
    window.location.href = "/mapaprodutor";
  };


  /* const handleSubmit = async (e) => {
  e.preventDefault();

  // Verifica se as senhas coincidem
  if (senha !== confirmaSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    // Cria usuário no Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

    // Você pode salvar `nome` e `contato` no Firestore depois, se quiser

    alert("Conta criada com sucesso!");
    window.location.href = "/mapaprodutor";
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    alert(`Erro ao criar conta: ${error.message}`);
  }
};*/

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
            style={{ color: corPrincipal, position: "relative", top: "14px" }}
          />
        </button>
        <h1 className="title" style={{ color: corTexto }}>
          {tituloPagina}
        </h1>
      </header>

      <hr style={{ position: "relative", top: "-10px" }} />

      <main
        className="main-content"
        style={{ position: "relative", top: "-20px" }}
      >
        <h1 className="subtitle" style={{ color: corTexto }}>
          Coloque algumas informações sobre você
        </h1>

        <form
            onSubmit={handleSubmit}
            className="form-container"
            style={{ position: "relative", left: "30px" }}
          >
            <div className="form-group">
              <label htmlFor="nome" className="form-label">
                Nome <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Insira seu nome completo"
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contato" className="form-label">
                Contato <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="contato"
                name="contato"
                placeholder="Insira uma forma de contatar você"
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
                value={contato}
                onChange={(e) => setContato(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Seu email <span className="required-asterisk">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Insira o seu email"
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="senha" className="form-label">
                Senha <span className="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Escreva sua senha"
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirma-senha" className="form-label">
                Confirme sua senha <span className="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="confirma-senha"
                name="confirma-senha"
                placeholder="Reescreva sua senha"
                className="form-input"
                style={{
                  borderColor: corPrincipal,
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
              />
            </div>

            <div className="button-container">
              <button
                type="submit"
                className="submit-button"
                style={{
                  backgroundColor: corPrincipal,
                  color: "#FFFFFF",
                  position: "relative",
                  left: "-28px",
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

export default CadastroProdutor;
