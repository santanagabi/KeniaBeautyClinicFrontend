import React from "react";
import { Box, Typography, Container, Button, Grid, Fab } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Lock } from "@mui/icons-material";

import produto1 from "../images/cosmeticos/Kenia-serum.jpg";
import produto2 from "../images/cosmeticos/Kenia-gloss.jpg";

// Lista de produtos
const produtos = [
  {
    id: 1,
    src: produto1,
    name: "Kit Glance Care",
    description:
      "Sabonete Líquido Facial, Esfoliante em Gel, Demaquilante Facial",
  },
  {
    id: 2,
    src: produto2,
    name: "Henna para Sobrancelha Glance",
    description:
      "A Glance Henna tem como principal ingrediente o extrato da planta Lawsonia inermis (henna). É um produto de fácil aplicação e excelente durabilidade e fixação.",
  },
];

const Cosmeticos = () => {
  const navigate = useNavigate();

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
              color: "#fdd835",
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
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            CONTATO
          </Button>
        </Box>
      </Box>

      <Container sx={{ marginTop: "80px", paddingBottom: "60px" }}>
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
          COSMÉTICOS
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={false}
                dynamicHeight={true}
              >
                {produtos.map((produto) => (
                  <Box
                    key={produto.id}
                    sx={{
                      position: "relative",
                      width: "300px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={produto.src}
                      alt={produto.name}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: "100%",
                        width: "200px",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#fff",
                          marginBottom: "10px",
                          textAlign: "center",
                        }}
                      >
                        {produto.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#fff",
                          marginBottom: "20px",
                          textAlign: "center",
                        }}
                      >
                        {produto.description}
                      </Typography>
                      <Link to="/contato" style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#fdd835",
                            color: "#333",
                            "&:hover": { backgroundColor: "#e0b700" },
                          }}
                        >
                          Tenho Interesse
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
    © 2024 Todos os direitos reservados
    <a
      href="https://www.instagram.com/dra.keniaalvesc/"
      target="_blank"
      rel="noreferrer"
      style={{ color: "white", textDecoration: "none" }}
    >
      Kenia Alves
    </a>
  </Typography>
  <Typography variant="body2" color="white" sx={{ display: "inline" }}>
    |{""}{" "}
    <a href="/login" style={{ color: "white", textDecoration: "none" }}>
      <Lock
        sx={{ fontSize: 16, verticalAlign: "middle", marginRight: "5px" }}
      />
    </a>
  </Typography>
  <Box sx={{ borderTop: "3px solid #fdd835", marginTop: "10px" }} />
</Box>

<Fab
  color="success"
  aria-label="whatsapp"
  href="https://web.whatsapp.com/send?phone=553192125408&text"
  target="_blank"
  rel="noreferrer"
  sx={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    animation: "pulse 1.5s infinite",
    "@keyframes pulse": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" },
      "100%": { transform: "scale(1)" },
    },
  }}
>
  <WhatsAppIcon />
</Fab>
    </Box>
  );
};

export default Cosmeticos;
