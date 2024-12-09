import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Grid,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import contatoFoto from "../images/Kenia-contato.jpg";
import { Instagram, Email, WhatsApp, Lock } from "@mui/icons-material";
import axios from "axios";

const API_URL = "https://proj-clinica-estetica-api.onrender.com"

function ContactPage() {
  const navigate = useNavigate();
  const [sendFormSucess, setSendFormSucess] = useState(false);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    redeSocial: "",
    produtoInteresse: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${API_URL}/api/enviar-email`,
        formData
      );
      setSendFormSucess(true);
      setFormData({
        nomeCompleto: "",
        email: "",
        telefone: "",
        redeSocial: "",
        produtoInteresse: "",
      });
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Erro ao cadastrar. Por favor, tente novamente.");
      }
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
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
          padding: "10px 20px",
          borderBottom: "3px solid #fdd835",
          width: "100%",
          maxWidth: "100%", // Garante que o header não ultrapasse a tela
          boxSizing: "border-box", // Inclui padding/margins na largura total
          overflowX: "hidden", // Previne scroll horizontal
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", cursor: "pointer", marginLeft: "15px" }}
          onClick={() => navigate("/sobre-mim")}
        />
        <Box
          sx={{
            display: "flex",
            gap: { xs: "10px", sm: "20px" },
            flexWrap: "wrap", // Permite quebra de linha
            justifyContent: "flex-end", // Garante alinhamento correto
            width: "100%", // Ocupa 100% do espaço restante
          }}
        >
          <Button
            onClick={() => navigate("/sobre-mim")}
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            SOBRE A KENIA
          </Button>
          <Button
            onClick={() => navigate("/ProcedimentosPage")}
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            PROCEDIMENTOS
          </Button>
          <Button
            onClick={() => navigate("/resultados")}
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            RESULTADOS
          </Button>
          <Button
            onClick={() => navigate("/cosmeticos")}
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            COSMÉTICOS
          </Button>
          <Button
            onClick={() => navigate("/espaco")}
            sx={{
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            ESPAÇO
          </Button>
          <Button
            onClick={() => navigate("/contato")}
            sx={{
              color: "#fdd835",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            CONTATO
          </Button>
        </Box>
      </Box>

      <Container sx={{ marginTop: "80px" }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7} style={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#fdd835",
                textAlign: "center",
              }}
            >
              CONTATO
            </Typography>
            <Avatar
              alt="Contato"
              src={contatoFoto}
              sx={{
                width: 490,
                height: 500,
                borderRadius: "10px",
                borderColor: "#FFCC00",
                borderStyle: "10px",
                border: "120px",
                margin: "0 auto",
              }}
            />
            <Typography
              sx={{ mb: 2, fontSize: "28px" }}
              variant="body"
              align="center"
              gutterBottom
            >
              Dra. Kenia Alves{" "}
            </Typography>
            <br></br>
            <Typography
              sx={{ mb: 2, fontSize: "12px" }}
              variant="body"
              align="center"
              gutterBottom
            >
              BIOMÉDICA ESTETA | CRMB 19364 ESPECIALISTA EM EMBELEZAMENTO FACIL
              💉 BOTOX | PREENCHIMENTO | ESPECIALISTA EM LÁBIOS | BELO HORIZONTE
              - MG{" "}
            </Typography>
            <div align="center">
              <Grid item xs={12} md={5}>
                <Button
                  color="white"
                  startIcon={<Instagram />}
                  href="https://www.instagram.com/dra.keniaalvesc/"
                  target="_blank"
                  sx={{ fontSize: "large" }}
                ></Button>
                <Button
                  color="white"
                  startIcon={<Email />}
                  href="mailto:seuemail@exemplo.com"
                  sx={{ fontSize: "large" }}
                ></Button>
              </Grid>
              <div
                style={{
                  alignItems: "center",
                  borderBottom: "1px solid #e0e0e0",
                  paddingBottom: "10px",
                }}
              >
                <Button
                  color="inherit"
                  startIcon={<WhatsApp style={{ color: "#25D366" }} />}
                  href="https://wa.me/553192125408"
                  sx={{
                    textTransform: "none",
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  Converse comigo
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={7} style={{ marginTop: "0px" }}></Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{ padding: "40px", borderRadius: "10px", width: "100%", marginLeft: "-40px", }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              FORMULÁRIO DE INTERESSE
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nomeCompleto"
                label="Nome Completo"
                name="nomeCompleto"
                autoComplete="name"
                value={formData.nomeCompleto}
                onChange={handleChange}
                sx={{ backgroundColor: "#f2f2f2", mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: "#f2f2f2", mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="telefone"
                label="Telefone"
                name="telefone"
                autoComplete="telefone"
                value={formData.telefone}
                onChange={handleChange}
                sx={{ backgroundColor: "#f2f2f2", mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="redeSocial"
                label="Rede Social"
                name="redeSocial"
                autoComplete="social"
                value={formData.redeSocial}
                onChange={handleChange}
                sx={{ backgroundColor: "#f2f2f2", mb: 2 }}
              />
              <FormControl
                fullWidth
                margin="normal"
                sx={{ backgroundColor: "#f2f2f2", mb: 2 }}
              >
                <InputLabel id="select-label">Produtos de Interesse</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  name="produtoInteresse"
                  value={formData.produtoInteresse}
                  onChange={handleChange}
                  label="Produtos de Interesse"
                >
                  <MenuItem value="consulta">Consulta de Avaliação</MenuItem>
                  <MenuItem value="gloss">Candy Color Gloss</MenuItem>
                  <MenuItem value="serum">
                    Serum Facial Multivitaminicos
                  </MenuItem>
                </Select>
              </FormControl>

              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#333333",
                  color: "#ffffff",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#555555",
                  },
                }}
              >
                Enviar Formulario
              </Button>
              {sendFormSucess && (
                <Typography color="success.main" align="center" sx={{ mt: 2 }}>
                  Formulario de Interesse enviado com sucesso!
                </Typography>
              )}
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
        <Typography
          variant="body2"
          color="white"
          sx={{ display: "inline", marginRight: "8px" }}
        >
          {" "}
          © 2024 Todos os direitos reservados
          <a
            href="https://www.instagram.com/dra.keniaalvesc/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Kenia Alves
          </a>
        </Typography>
        <Typography variant="body2" color="white" sx={{ display: "inline" }}>
          {" "}
          |{""}{" "}
          <a href="/login" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            <Lock
              sx={{ fontSize: 16, verticalAlign: "middle", marginRight: "5px" }}
            />{" "}
          </a>
        </Typography>
        <Box sx={{ borderTop: "3px solid #fdd835", marginTop: "10px" }} />
      </Box>
    </Box>
  );
}

export default ContactPage;
