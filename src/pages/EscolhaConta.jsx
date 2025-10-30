import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/EscolhaConta.css";
import iconExtrator from "../assets/iconExtrator.png";
import iconProdutor from "../assets/iconProdutor.png";

const EscolhaConta = () => {
  return (
    <div className="bg-white">
      <header className="header">
        <button
          onClick={() => (window.location.href = "/")}
          className="back-button"
          aria-label="Voltar para o mapa"
        >
          <FaArrowRight
            className="arrow-icon"
            style={{ position: "relative", top: "14px" }}
          />
        </button>
        <h1 className="title">Cadastrar sua conta</h1>
      </header>
      <hr style={{ position: "relative", top: "-10px" }} />
      <main
        className="main-content"
        style={{ position: "relative", top: "-40px" }}
      >
        <h1 className="heading">Escolha seu melhor perfil</h1>

        <div className="profile-options">
          <div
            className="profile-card"
            id="produtor"
            onClick={() => (window.location.href = "/cadastroprodutor")}
          >
            <h3 className="cardtitulo">Produtor</h3>
            <img src={iconProdutor} alt="iconProdutor" className="icons" />
            <p>
              Eu recebo as materiais primas e verticalizo para mais produtos
            </p>
          </div>

          <div
            className="profile-card"
            id="extrator"
            onClick={() => (window.location.href = "/cadastroextrator")}
          >
            <h3 className="cardtitulo">Extrator</h3>
            <img src={iconExtrator} alt="iconExtrator" className="icons" />
            <p>
              Eu coleto as materiais primas e vendo para produtores da cadeia de
              produção.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EscolhaConta;
