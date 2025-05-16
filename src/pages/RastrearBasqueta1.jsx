import React from "react";
import "./Basqueta.css";

export function RastrearBasqueta1() {
  // Dados mockados (substitua por seus dados reais)
  const lotes = [
    { codigo: "B-AH612MJ", data: "XX/XX/XXXX" },
    { codigo: "B-NG532OQ", data: "XX/XX/XXXX" },
    { codigo: "B-WL980UY", data: "XX/XX/XXXX" },
  ];

  const handleItemClick = (codigo) => {
    console.log(`Lote clicado: ${codigo}`);
    // Adicione sua lógica de clique aqui
  };

  return (
    <div className="full-screen-background">
      <div className="consultar-lote-container">
        <h1 className="consultar-lote-title">Consultar lote</h1>
        <h3 className="consultar-lote-subtitle">Lote XX</h3>
        <hr className="consultar-lote-divider" />

        <ul className="consultar-lote-list">
          {lotes.map((lote, index) => (
            <li key={index} className="consultar-lote-item">
              <button
                className="lote-button"
                onClick={() => handleItemClick(lote.codigo)}
              >
                <span>{lote.codigo}</span>
                <span>Registrada dia {lote.data}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="consultar-lote-button-container">
          <button className="consultar-lote-button add-button">
            Adicionar
          </button>
        </div>
        <div className="consultar-lote-button-container">
          <button
            className="consultar-lote-button back-button"
            onClick={() => (window.location.href = "/mapa1")}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RastrearBasqueta1;
