import React, { useState } from 'react';
import "../styles/SuaConta.css";
import { FaArrowRight } from "react-icons/fa";
import PopupExcluir from '../components/PopupExcluir';

const SuaContaP = ({
  tituloPagina = "Sua Conta Produtor",
  corPrincipal = "#6B647D",
  corTexto = "#000000",
  corFundo = "#FFFFFF",
}) => {
  
    const [showPopup, setShowPopup] = useState(false);
  
    const [form, setForm] = useState({
    nome: 'Seu fulano da Silva',
    contato: '+55 (XX) XXXXX-XXXX',
    email: 'conta@email.com',
    senha: '********',
    
  });
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
  alert('Dados salvos com sucesso!');
  console.log('Salvar dados:', form);
};

const handleDelete = () => {
    alert("Conta excluída!");
    window.location.href = "/"
  };

  return (
    <div className="SuaConta">
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

      <div className="form-container">
        <h2>Informações da conta</h2>

        <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <div className="input-wrapper">
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
                            value={form.nome}
                            onChange={handleChange}
                            />
                        <span className="edit-icon">✎</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contato" className="form-label">
                        Contato 
                        </label>
                        <div className="input-wrapper">
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
                            value={form.contato}
                            onChange={handleChange}
                        />
                        <span className="edit-icon">✎</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                        Seu email 
                        </label>
                        <div className="input-wrapper">
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
                            value={form.email}
                        />

                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <div className="input-wrapper">
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
                            value={form.senha}    
                        />
                        </div>
                    </div>
                    </form>

        <div className="button-group">
          <button className="logout" onClick={() => (window.location.href = "/")}>Sair da conta</button>
          <button className="delete"onClick={() => (setShowPopup(true))}>Excluir conta</button>
        </div>

        <button className="save-btn" onClick={handleSave}>Salvar</button>
      </div>
      {showPopup && <PopupExcluir onClose={() => setShowPopup(false)} onDelete={handleDelete} />}
    </div>
  );
};

export default SuaContaP;
