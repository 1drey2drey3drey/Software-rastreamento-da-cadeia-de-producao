import React, { useEffect, useRef, useState } from "react";

const PopupExcluir = ({ onClose, onDelete }) => {
  const [visible, setVisible] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  const handleOverlayClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        ref={popupRef}
        style={{
          backgroundColor: "#3D3456",
          color: "white",
          fontFamily: "sans-serif",
          borderRadius: "20px",
          padding: "30px",
          width: "640px",
          maxWidth: "90%",
          
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          opacity: visible ? 1 : 0,
          position: "relative",
        }}
      >
         <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            textAlign: "left",
            width: "10%",
            height: "10%",
            marginBottom:"10%"
          }}
        >
          ×
        </button>

        <h2 style={{marginLeft:"11%", fontWeight: "bold", fontSize: "20px", marginBottom: "15px", textAlign:"left"}}>
            Tem Certeza?
        </h2>

        <hr style={{ border: "0.5px solid #D9D9D9", marginBottom: "20px" }} />

        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          Após excluir sua conta, você não terá acesso aos basquetas rastreáveis,
        </p>
        <p style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "30px" }}>
          ESTA AÇÃO É IRREVERSÍVEL
        </p>

        <button
          onClick={onClose}
          style={{
            backgroundColor: "#D9D9D9",
            color: "black",
            border: "none",
            borderRadius: "15px",
            padding: "12px 20px",
            width: "100%",
            marginBottom: "15px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Voltar
        </button>

        <button
          onClick={onDelete}
          style={{
            backgroundColor: "#D62D2D",
            color: "white",
            border: "none",
            borderRadius: "15px",
            padding: "12px 20px",
            width: "100%",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default PopupExcluir;
