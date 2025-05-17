import React, { useState, useEffect } from "react";
import "./BarraLateral.css";

const BarraLateral = ({
  titulo = "Menu",
  itensMenu = [{ texto: "Voltar", url: "/", icone: "🏠" }],
  posicao = "esquerda",
  largura = "280px",
  corFundo = "#FFF",
  corDestaque = "#6c5b7b",
  corTextoP = "#000",
  corTextoB = "#FFF",
  botaoAbrir = "☰",
  botaoFechar = "×",
  children,
  corHoverFechar = "#fff",
}) => {
  const [aberta, setAberta] = useState(false);

  const toggleBarraLateral = () => {
    setAberta(!aberta);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && aberta) {
        setAberta(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [aberta]);

  return (
    <>
      <button
        className={`barra-lateral-toggle ${posicao}`}
        onClick={toggleBarraLateral}
        aria-label={aberta ? "Fechar menu" : "Abrir menu"}
        style={{ backgroundColor: corDestaque }}
      >
        {botaoAbrir}
      </button>

      <div
        className={`barra-lateral ${posicao} ${aberta ? "aberta" : ""}`}
        style={{
          width: largura,
          backgroundColor: corFundo,
          color: corTextoB,
          [posicao]: aberta ? "0" : `-${largura}`,
        }}
      >
        <div
          className="barra-lateral-cabecalho"
          style={{ backgroundColor: corDestaque }}
        >
          <h2>{titulo}</h2>
          <button
            className="barra-lateral-fechar"
            onClick={toggleBarraLateral}
            aria-label="Fechar menu"
            style={{
              "--cor-hover": corHoverFechar,
            }}
          >
            {botaoFechar}
          </button>
        </div>

        <ul className="barra-lateral-menu">
          {itensMenu.map((item, index) => (
            <li key={index}>
              <a
                style={{ color: corTextoP }}
                className="barra-lateral-link"
                onClick={() => (window.location.href = item.url)}
              >
                {item.icone && (
                  <span className="barra-lateral-icone">{item.icone}</span>
                )}
                <span>{item.texto}</span>
              </a>
            </li>
          ))}
        </ul>

        {children && <div className="barra-lateral-conteudo">{children}</div>}
      </div>

      <div
        className={`barra-lateral-overlay ${aberta ? "visivel" : ""}`}
        onClick={toggleBarraLateral}
      />
    </>
  );
};

export default BarraLateral;
