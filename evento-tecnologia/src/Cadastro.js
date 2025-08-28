import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@institucional.edu.br")) {
      setMensagem("Use um e-mail institucional (@institucional.edu.br)");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setMensagem("Cadastro realizado com sucesso!");
    } catch (erro) {
      setMensagem("Erro: " + erro.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#013a63", // azul fundo do mar
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#014f86",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Inscreva-se no Evento de Tecnologia
        </h2>
        <form onSubmit={handleCadastro}>
          <input
            type="email"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "14px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#00b4d8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#48cae4")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#00b4d8")
            }
          >
            Cadastrar
          </button>
        </form>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>{mensagem}</p>
      </div>
    </div>
  );
}

export default Cadastro;