import React, { useState } from "react";
import { Box, Container, Paper, Typography, Button } from "@mui/material";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Upload() {
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    antes: null,
    posImediato: null,
    depois: null,
  });

  const handleFileChange = (event, key) => {
    const file = event.target.files[0];
    setFiles((prevState) => ({
      ...prevState,
      [key]: file,
    }));
  };

  const handleSave = async () => {
    const formData = new FormData();

    // Adiciona os arquivos ao FormData com o nome específico para cada etapa
    if (files.antes) formData.append("antes", files.antes);
    if (files.posImediato) formData.append("posimediato", files.posImediato);
    if (files.depois) formData.append("depois", files.depois);

    // Recarrega a página imediatamente após o clique
    window.location.reload();

    try {
      // Faz o upload para o backend
      await axios.post("http://localhost:3000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Erro ao enviar os arquivos:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
          padding: "10px 20px",
          borderBottom: "5px solid #fdd835",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", cursor: "pointer" }}
          onClick={() => navigate("/painel")}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{ padding: "40px", borderRadius: "10px", width: "100%" }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              UPLOAD DE DOCUMENTOS
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              {["antes", "posImediato", "depois"].map((key) => (
                <Box
                  key={key}
                  sx={{
                    width: "30%",
                    height: "150px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                    border: "2px solid #ccc",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <input
                    type="file"
                    onChange={(event) => handleFileChange(event, key)}
                    style={{ display: "none" }}
                    id={key}
                  />
                  <label
                    htmlFor={key}
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    {key.toUpperCase()}
                  </label>
                  {/* Exibe o nome do arquivo selecionado */}
                  {files[key] && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mt: 1, fontSize: "0.9rem" }}
                    >
                      {files[key].name} carregado
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
                onClick={handleSave}
              >
                Salvar
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#3f3f3f",
          padding: "10px 0",
          textAlign: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Todos os direitos reservados Kenia Alves
        </Typography>
        <Box
          sx={{
            borderTop: "3px solid #fdd835",
            marginTop: "10px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Upload;
