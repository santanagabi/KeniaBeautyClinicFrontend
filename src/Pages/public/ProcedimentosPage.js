import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Fab,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Ícone do WhatsApp
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const ProcedimentosPage = () => {
  const navigate = useNavigate();

  const procedimentos = [
    {
      titulo: "Procedimentos Faciais",
      descricao: [
        "Botox Full Face: Terço superior e inferior e sudorese",
        "Preenchimento Facial: lábios, mento (queixo), bigode chinês, olheiras, mandíbula e malar",
        "Revitalização facial e labial",
        "Limpeza de pele",
        "Peeling Facial",
        "Microagulhamento",
        "Micropigmentação Labial e de Sobrancelhas",
        "Lipo da Papada",
        "Terapia Capilar",
        "Fio Liso Mono Par",
        "Fios Filler Par",
        "Bioestimulador",
      ],
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtV8xF3LX_kJhT_LRAGoJ9nSJRUndRgVPl9oSN_ZFf_vz9nJs8LTA0vAqy_mHt85ALBks&usqp=CAU",
    },
    {
      titulo: "Procedimentos Corporais",
      descricao: [
        "Vasinhos",
        "Depilação a laser",
        "Lipo Enzimática",
        "Acelerador Metabólico",
        "Tratamentos: flacidez, celulite e estrias",
      ],
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHUC1_sAEspCfgq8lRNDt9pxpt5X8EBF9-w&s",
    },
  ];

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
              color: "#fdd835",
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
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            CONTATO
          </Button>
        </Box>
      </Box>

      {/* Conteúdo principal */}
      <Container
        maxWidth="lg"
        sx={{ marginTop: "80px", paddingBottom: "60px" }}
      >
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
          PROCEDIMENTOS
        </Typography>
        <Typography variant="body1" paragraph>
          Nossa clínica oferece uma ampla gama de procedimentos estéticos para
          cuidar da sua saúde e beleza. Confira abaixo alguns dos nossos
          principais serviços:
        </Typography>

        <Grid container spacing={4}>
          {procedimentos.map((procedimento, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundImage: `url(${procedimento.imagem})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  position: "relative",
                }}
              >
                <CardContent
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100%" }}
                >
                  <Typography variant="h5" component="div" gutterBottom>
                    {procedimento.titulo}
                  </Typography>
                  <ul style={{ paddingLeft: "20px" }}>
                    {procedimento.descricao.map((item, i) => (
                      <li key={i}>
                        <Typography variant="body2" color="inherit">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                  <Box mt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fdd835", // Cor de fundo
                      color: "black", // Cor do texto
                      "&:hover": {
                        backgroundColor: "#fbc02d", // Cor de fundo quando o botão for pressionado
                      },
                    }}
                    href="https://api.whatsapp.com/message/JPSP2VBSASXPK1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba Mais
                  </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
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

export default ProcedimentosPage;
