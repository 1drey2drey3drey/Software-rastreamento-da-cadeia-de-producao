import React, { useEffect, useState } from "react";
import "../Basqueta.css";
import { FaArrowRight } from "react-icons/fa";

export function RastrearBasquetaE() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("lotesBasquetaE")) || [];
    setLotes(stored);
  }, []);

  const handleItemClick = (codigo) => {
    console.log(`Lote clicado: ${codigo}`);
  };

  return (
    <div className="full-screen-background">
      <div className="consultar-lote-container">
        <h1 className="consultar-lote-title">Consultar lote</h1>
        <h3 className="consultar-lote-subtitle">Lote XX (Extrator)</h3>
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
          <button
            className="consultar-lote-button add-button"
            onClick={() => (window.location.href = "/adicionarbasquetae")}
            aria-label="Adicionar basqueta extrator"
          >
            Adicionar
          </button>
        </div>
        <div className="consultar-lote-button-container">
          <button
            onClick={() => (window.location.href = "/mapaextrator")}
            className="back-button"
            aria-label="Voltar para o mapa"
          >
            <FaArrowRight className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RastrearBasquetaE;