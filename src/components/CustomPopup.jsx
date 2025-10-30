import React, { useEffect, useRef, useState } from "react";
import qr from "../assets/qrExemplo.png";

const CustomPopup = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    // animação
    setTimeout(() => setVisible(true), 10);
  }, []);

  const handleOverlayClick = (e) => {
    //clicar fora do popup fecha
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      onClose();
    }
  };

  //Se quiser criar um CustomPopup.css, pode fazer

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 0.3s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        ref={popupRef}
        style={{
          backgroundColor: "#5C5470",
          color: "white",
          fontFamily: "sans-serif",
          padding: "20px",
          borderRadius: "20px",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          width: "660px",
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
            textAlign: "right",
            width: "10%",
            height: "10%"
          }}
        >
          ×
        </button>

        <div style={{ flex: 1, paddingRight: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
              }}
            >
              <span style={{ color: "#5C5470", fontSize: "24px" }}>👤</span>
            </div>
            <div style={{ fontSize: "20px" }}>Fulano Silva</div>
          </div>
          <div style={{ fontSize: "16px", textDecoration: "underline", marginBottom: "10px" }}>
            Contato: 99999-9999
          </div>
          <h2 style={{ margin: "10px 0", textAlign: "left" }}>Nome do negócio</h2>
          <p style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet. Aut sunt facere sit animi internos 33 nostrum dignissimos eos reprehenderit minus non magnam unde?
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <p>Descubra mais aqui!</p>
          <img
            src={qr}
            alt="QR Code"
            style={{ width: "150px", height: "150px", marginBottom: "10px" }}
          />
          <div style={{ fontSize: "14px", textDecoration: "underline" }}>
            Coordenadas:<br />
            15°46'48''S e 47°55'45''O<br />
            Foto enviada no dia 01/01/01 às<br />
            (Rio cacetinho)
          </div>
          <div style={{ marginTop: "10px" }}>00:00</div>
        </div>
      </div>
    </div>
  );
};

export default CustomPopup;