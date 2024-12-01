import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Avatar, Fab,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import keniaImage from "../images/Kenia-sobremim.jpg";

function ProfilePage() {
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
              color: "#fdd835",
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
              color: "white",
              fontWeight: "bold",
              "&:hover": { color: "#fdd835" },
            }}
          >
            CONTATO
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{ marginTop: "60px", paddingBottom: "60px" }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                marginBottom: "20px",
                marginTop: { xs: "0", md: "20px" }, // Ajusta o alinhamento vertical no layout
              }}
            >
              DRA. KENIA ALVES
            </Typography>
            <Box
              sx={{
                width: "100%", // Garante que o traço tenha 100% da largura disponível
                height: "3px",
                backgroundColor: "#fdd835",
                margin: "0 auto 55px auto",
              }}
            />
<Typography
  variant="body1"
  sx={{
    fontSize: "18px",
    lineHeight: "1.8",
    textAlign: "justify",
    whiteSpace: "pre-wrap", // Mantém quebras de linha
    marginBottom: "16px", // Ajuste o espaço entre os parágrafos
  }}
>
  <p>Olá, é um prazer ter você aqui, bem vou logo me apresentar sou a Dra. Kenia Alves e essa e vou te contar um "pouquinho" sobre mim! ✨</p>
  
  <p>Vim de uma família simples, mas com muito apoio dos meus pais e, acima de tudo, com Deus como pilar central da minha vida, lutei para conquistar meus sonhos. 🙏 Sou cristã, aquariana, casada com o Bruno, um homem incrível que me apoia em cada passo dessa jornada, simplesmente grata pela vida e sou completamente apaixonada pelo que faço! 💖</p>
  
  <p>Construí a Clínica Dra. Kenia Alves com muito amor e dedicação, para realizar o sonho de oferecer o melhor em rejuvenescimento estratégico e gerenciamento do envelhecimento. ✨ Acredito que a estética deve ser humanizada, acolhedora e acessível a todos que desejam se cuidar e elevar a autoestima. 😊</p>

  <p>Com mais de 30 especializações e 4 anos de experiência na área, posso dizer que, literalmente, amo o que faço! 💖 Me dedico a realçar a beleza única de cada paciente, trazendo à tona tudo aquilo que o tempo pode ter levado. Para mim, estética vai além de um trabalho, é um propósito de vida. 💫</p>
</Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Avatar
              alt="Dra. Kenia Alves"
              src={keniaImage}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                borderColor: "#FFCC00",
                borderStyle: "solid",
                borderWidth: "2px",
              }}
            />
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
}

export default ProfilePage;
