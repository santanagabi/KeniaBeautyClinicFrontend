import React from "react";
import { Box, Typography, Button, Container, Grid, Avatar, Fab } from "@mui/material";
import { Lock } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import espaco1 from "../images/espaco/espaco-1.jpg";
import espaco2 from "../images/espaco/espaco-2.jpg";
import espaco3 from "../images/espaco/espaco-3.jpg";
import espaco4 from "../images/espaco/espaco-4.jpg";
import espaco5 from "../images/espaco/espaco-5.jpg";
import espaco6 from "../images/espaco/espaco-6.jpg";
import espaco7 from "../images/espaco/espaco-7.jpg";
import espaco8 from "../images/espaco/espaco-8.jpg";
import espaco9 from "../images/espaco/espaco-9.jpg";
import espaco10 from "../images/espaco/espaco-10.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function LocationPage() {
  const navigate = useNavigate();

  const images = [
    { id: 1, src: espaco1, alt: "Espaço 1" },
    { id: 2, src: espaco2, alt: "Espaço 2" },
    { id: 3, src: espaco3, alt: "Espaço 3" },
    { id: 4, src: espaco4, alt: "Espaço 4" },
    { id: 5, src: espaco5, alt: "Espaço 5" },
    { id: 6, src: espaco6, alt: "Espaço 6" },
    { id: 7, src: espaco7, alt: "Espaço 7" },
    { id: 8, src: espaco8, alt: "Espaço 8" },
    { id: 9, src: espaco9, alt: "Espaço 9" },
    { id: 10, src: espaco10, alt: "Espaço 10" },
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
          maxWidth: "100%",
          boxSizing: "border-box",
          overflowX: "hidden",
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
            flexWrap: "wrap",
            justifyContent: "flex-end",
            width: "100%",
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
              color: "#fdd835",
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

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textDecoration: "underline",
            textDecorationColor: "#fdd835",
            textAlign: "center",
            mb: 4,
            width: "100%"
          }}
        >
          ESPAÇO
        </Typography>

        <Grid container spacing={4} sx={{ height: '500px' }}>
          <Grid item xs={12} md={6} sx={{ height: '100%' }}>
            <Box sx={{ height: '100%' }}>
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={3000}
                transitionTime={500}
                stopOnHover={true}
                dynamicHeight={false}
                style={{ height: '100%' }}
              >
                {images.map((image) => (
                  <div key={image.id} style={{ height: '500px' }}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} 
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ height: '100%' }}>
            <Box sx={{ height: '500px' }}>
              <iframe
                title="Localização da Clínica Kenia Alves"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.48550005473905!2d-43.996565912233585!3d-19.892015954297303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69134a5ad5dc5%3A0xf1b20ad87c059db1!2sRua%20Romualdo%20Lopes%20Can%C3%A7ado%2C%2019%20-%20Castelo%2C%20Belo%20Horizonte%20-%20MG%2C%2030840-460!5e0!3m2!1spt-BR!2sbr!4v1729814110411!5m2!1spt-BR!2sbr"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
}

export default LocationPage;