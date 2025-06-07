import React from "react";
import "../Basqueta.css";
import { FaArrowRight, FaBluetooth } from "react-icons/fa";

const handleBluetoothClick = () => {
    // Simula um tempo de conexão
    setTimeout(() => {
      const novosLotes = JSON.parse(localStorage.getItem("lotesBasquetaE")) || [];
      const novoLote = {
        codigo: `B-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
        data: new Date().toLocaleDateString(),
      };
      novosLotes.push(novoLote);
      localStorage.setItem("lotesBasquetaE", JSON.stringify(novosLotes));

      alert("Basqueta registrada com sucesso!");
      window.location.href = "/rastrearbasquetae";
    }, 2000); // Simula 2 segundos de espera
  };

export function AddBasquetaP() {
  return (
    <div className="full-screen-background">
      <div className="consultar-lote-container">
        <h1 className="consultar-lote-title2">Registrar Basqueta</h1>
        <h3 className="consultar-lote-subtitle">
          Aproxime o dispositivo da Tag Bluetooth
        </h3>

        <div className="bluetooth-container">
          <button className="bluetooth-button">
            <FaBluetooth className="bluetooth-icon" onClick={handleBluetoothClick} />
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

export default AddBasquetaP;
