import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/Login.css";
import { doSignInWithEmailAndPassword } from "../config/auth";
import { auth } from "../config/firebase-config"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    
    setEmail("teste@g.com");
    setSenha("123123");
    //tira essas linhas caso queira testar o login


    e.preventDefault(); 
    setErro("");
    
    try {
      await doSignInWithEmailAndPassword(email, senha);
      navigate("/mapaprodutor");                                  // redirecione após login
    } catch (error) {
      setErro("Email ou senha inválidos.");
      console.error("Erro ao logar:", error);
    }
  };

  return (
    <div className="login-container">
      <header className="header">
              <button
                onClick={() => (window.history.back())}
                className="back-button"
                aria-label="Voltar para o mapa"
              >
                <FaArrowRight
                  className="arrow-icon"
                  style={{ position: "relative", top: "14px" }}
                />
              </button>
              <h1 className="title">Login</h1>
            </header>
            <hr style={{ position: "relative", top: "-10px" }} />

      <main className="login-main">
        <h2 className="info-title">Informações da conta</h2>

        <form  
            onSubmit={handleLogin}
            className="form-container"
            style={{ position: "relative", left: "30px" }}>

          <div className="form-group">
              <label htmlFor="email" className="form-label">
                Seu email 
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Insira o seu email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderColor: "#6B647D",
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
              />
            </div>
          <div className="form-group">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Escreva sua senha"
                className="form-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{
                  borderColor: "#6B647D",
                  position: "relative",
                  left: "-50px",
                  width: "444px",
                }}
                required
              />
            </div>
          <p className="cadastro-link">
            Não tem uma conta?{" "}
            <a onClick={() => (window.location.href="/escolhaconta")} className="link-destaque">
              CADASTRE-SE
            </a>
          </p>
          <button type="submit"
                className="submit-button"
                
                style={{
                  backgroundColor: "#6B647D",
                  color: "#FFFFFF",
                  position: "relative",
                  left: "-28px",
                }}>
            Entrar
          </button>
          {erro && <p style={{ color: "red" }}>{erro}</p>}
        </form>
      </main>
    </div>
  );
};

export default Login;