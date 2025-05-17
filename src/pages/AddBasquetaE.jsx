import React from "react";
import "../Basqueta.css";
import { FaArrowRight, FaBluetooth } from "react-icons/fa";

export function AddBasquetaE() {
  return (
    <div className="full-screen-background">
      <div className="consultar-lote-container">
        <h1 className="consultar-lote-title2">Registrar Basqueta</h1>
        <h3 className="consultar-lote-subtitle">
          Aproxime o dispositivo da Tag Bluetooth
        </h3>

        <div className="bluetooth-container">
          <button className="bluetooth-button">
            <FaBluetooth className="bluetooth-icon" />
          </button>
        </div>
        <div className="consultar-lote-button-container">
          <button
            onClick={() => (window.location.href = "/rastrearbasquetae")}
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

export default AddBasquetaE;
