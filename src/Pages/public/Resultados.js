import React from 'react';
import { Box, Typography, Container, Button, Accordion, AccordionSummary, AccordionDetails, Fab } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { Lock } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

import resultado1 from '../images/resultados/resultado-1.png';
import resultado2 from '../images/resultados/resultado-2.png';
import resultado3 from '../images/resultados/resultado-3.png';
import resultado4 from '../images/resultados/resultado-4.png';
import resultado5 from '../images/resultados/resultado-5.png';
import resultado6 from '../images/resultados/resultado-6.png';
import resultado7 from '../images/resultados/resultado-7.png';
import resultado8 from '../images/resultados/resultado-8.png';
import resultado9 from '../images/resultados/resultado-9.png';
import resultado10 from '../images/resultados/resultado-10.png';
import resultado11 from '../images/resultados/resultado-11.png';
import resultado12 from '../images/resultados/resultado-12.png';
import resultado13 from '../images/resultados/resultado-13.png';
import resultado14 from '../images/resultados/resultado-14.png';
import resultado15 from '../images/resultados/resultado-15.png';
import resultado16 from '../images/resultados/resultado-16.png';
import resultado17 from '../images/resultados/resultado-17.png';
import resultado18 from '../images/resultados/resultado-18.jpg';
import resultado19 from '../images/resultados/resultado-19.jpg';
import resultado20 from '../images/resultados/resultado-20.jpg';
import resultado21 from '../images/resultados/resultado-21.jpg';
import resultado22 from '../images/resultados/resultado-22.jpg';
import resultado23 from '../images/resultados/resultado-23.jpg';
import resultado24 from '../images/resultados/resultado-24.jpg';
import resultado25 from '../images/resultados/resultado-25.jpg';
import resultado26 from '../images/resultados/resultado-26.png';
import resultado27 from '../images/resultados/resultado-27.png';
import resultado28 from '../images/resultados/resultado-28.png';
import resultado29 from '../images/resultados/resultado-29.png';
import resultado30 from '../images/resultados/resultado-30.png';
import resultado31 from '../images/resultados/resultado-31.png';
import resultado32 from '../images/resultados/resultado-32.png';
import resultado33 from '../images/resultados/resultado-33.png';
import resultado34 from '../images/resultados/resultado-34.png';
import resultado35 from '../images/resultados/resultado-35.png';
import resultado36 from '../images/resultados/resultado-36.png';
import resultado37 from '../images/resultados/resultado-37.jpg';
import resultado38 from '../images/resultados/resultado-38.jpg';
import resultado39 from '../images/resultados/resultado-39.jpg';
import resultado40 from '../images/resultados/resultado-40.jpg';
import resultado41 from '../images/resultados/resultado-41.jpg';
import resultado42 from '../images/resultados/resultado-42.jpg';
import resultado43 from '../images/resultados/resultado-43.jpg';
import resultado44 from '../images/resultados/resultado-44.jpg';
import resultado45 from '../images/resultados/resultado-45.jpg';
import resultado46 from '../images/resultados/resultado-46.jpg';
import resultado47 from '../images/resultados/resultado-47.png';
import resultado48 from '../images/resultados/resultado-48.jpg';


const images = [
  { id: 1, src: resultado1, alt: 'Antes e Depois 1' },
  { id: 2, src: resultado2, alt: 'Antes e Depois 2' },
  { id: 3, src: resultado3, alt: 'Antes e Depois 3' },
  { id: 4, src: resultado4, alt: 'Antes e Depois 4' },
  { id: 5, src: resultado5, alt: 'Antes e Depois 5' },
  { id: 6, src: resultado6, alt: 'Antes e Depois 6' },
  { id: 7, src: resultado7, alt: 'Antes e Depois 7' },
  { id: 8, src: resultado8, alt: 'Antes e Depois 8' },
  { id: 9, src: resultado9, alt: 'Antes e Depois 9' },
  { id: 10, src: resultado10, alt: 'Antes e Depois 10' },
  { id: 11, src: resultado11, alt: 'Antes e Depois 11' },
  { id: 12, src: resultado12, alt: 'Antes e Depois 12' },
  { id: 13, src: resultado13, alt: 'Antes e Depois 13' },
  { id: 14, src: resultado14, alt: 'Antes e Depois 14' },
  { id: 15, src: resultado15, alt: 'Antes e Depois 15' },
  { id: 16, src: resultado16, alt: 'Antes e Depois 16' },
  { id: 17, src: resultado17, alt: 'Antes e Depois 17' },
  { id: 18, src: resultado18, alt: 'Antes e Depois 18' },
  { id: 19, src: resultado19, alt: 'Antes e Depois 19' },
  { id: 20, src: resultado20, alt: 'Antes e Depois 20' },
  { id: 21, src: resultado21, alt: 'Antes e Depois 21' },
  { id: 22, src: resultado22, alt: 'Antes e Depois 22' },
  { id: 23, src: resultado23, alt: 'Antes e Depois 23' },
  { id: 24, src: resultado24, alt: 'Antes e Depois 24' },
  { id: 25, src: resultado25, alt: 'Antes e Depois 25' },
  { id: 26, src: resultado26, alt: 'Antes e Depois 26' },
  { id: 27, src: resultado27, alt: 'Antes e Depois 27' },
  { id: 28, src: resultado28, alt: 'Antes e Depois 28' },
  { id: 29, src: resultado29, alt: 'Antes e Depois 29' },
  { id: 30, src: resultado30, alt: 'Antes e Depois 30' },
  { id: 31, src: resultado31, alt: 'Antes e Depois 31' },
  { id: 32, src: resultado32, alt: 'Antes e Depois 32' },
  { id: 33, src: resultado33, alt: 'Antes e Depois 33' },
  { id: 34, src: resultado34, alt: 'Antes e Depois 34' },
  { id: 35, src: resultado35, alt: 'Antes e Depois 35' },
  { id: 36, src: resultado36, alt: 'Antes e Depois 36' },
  { id: 37, src: resultado37, alt: 'Antes e Depois 37' },
  { id: 38, src: resultado38, alt: 'Antes e Depois 38' },
  { id: 39, src: resultado39, alt: 'Antes e Depois 39' },
  { id: 40, src: resultado40, alt: 'Antes e Depois 40' },
  { id: 41, src: resultado41, alt: 'Antes e Depois 41' },
  { id: 42, src: resultado42, alt: 'Antes e Depois 42' },
  { id: 43, src: resultado43, alt: 'Antes e Depois 43' },
  { id: 44, src: resultado44, alt: 'Antes e Depois 44' },
  { id: 45, src: resultado45, alt: 'Antes e Depois 45' },
  { id: 46, src: resultado46, alt: 'Antes e Depois 46' },
  { id: 47, src: resultado47, alt: 'Antes e Depois 47' },
  { id: 48, src: resultado48, alt: 'Antes e Depois 48' }
];

const Resultados = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#3f3f3f',
          padding: '10px 20px',
          borderBottom: '3px solid #fdd835',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: '60px', cursor: 'pointer', marginLeft: '15px' }}
          onClick={() => navigate('/sobre-mim')}
        />
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '10px', sm: '20px' },
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Button
            onClick={() => navigate('/sobre-mim')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            SOBRE A KENIA
          </Button>
          <Button
            onClick={() => navigate('/ProcedimentosPage')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            PROCEDIMENTOS
          </Button>
          <Button
            onClick={() => navigate('/resultados')}
            sx={{
              color: '#fdd835',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            RESULTADOS
          </Button>
          <Button
            onClick={() => navigate('/cosmeticos')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            COSMÉTICOS
          </Button>
          <Button
            onClick={() => navigate('/espaco')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            ESPAÇO
          </Button>
          <Button
            onClick={() => navigate('/contato')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { color: '#fdd835' },
            }}
          >
            CONTATO
          </Button>
        </Box>
      </Box>

      {/* Conteúdo principal */}
      <Container sx={{ marginTop: '80px', paddingBottom: '60px' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            textDecoration: 'underline',
            textDecorationColor: '#fdd835',
            textAlign: 'center',
          }}
        >
          RESULTADOS
        </Typography>

        {/* Carrossel de Imagens */}
        <Box display="flex" justifyContent="center" sx={{ marginBottom: '40px' }}>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            centerMode
            centerSlidePercentage={50}
            dynamicHeight={false}
            emulateTouch
            stopOnHover
            interval={3000}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Button
          onClick={onClickHandler}
          aria-label={label}
          sx={{
            position: "absolute",
            left: 15,
            top: "calc(50% - 20px)",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          &#9664; {/* Código para seta esquerda */}
        </Button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Button
          onClick={onClickHandler}
          aria-label={label}
          sx={{
            position: "absolute",
            right: 15,
            top: "calc(50% - 20px)",
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            minWidth: "40px",
            height: "40px",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          &#9654; {/* Código para seta direita */}
        </Button>
              )
            }
          >
            {images.map((image) => (
              <div key={image.id} style={{ padding: '10px', position: 'relative' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>

        {/* Perguntas Frequentes */}
        <Box sx={{ marginTop: '40px' }}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom 
            sx={{ 
              textAlign: 'center', 
              marginBottom: '20px',
              textDecoration: 'underline',
              textDecorationColor: '#fdd835',
              fontWeight: '500'
            }}
          >
            PERGUNTAS FREQUENTES
          </Typography>
          
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">Quanto tempo dura um botox?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                Cerca de 4 a 6 meses.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">O preenchimento labial dura quanto tempo?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                Cerca de 8 meses a 1 ano. Vai depender de cada paciente e estilo de vida.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">O preenchimento dói?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                Utilizamos anestesia local para maior conforto do paciente. Assim, em 99% dos casos, o procedimento é indolor.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">Por qual procedimento devo começar?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                Para pacientes 30+, é indicado a toxina botulínica (botox) e bioestimulado de colágeno.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">Qual é o horário de funcionamento da clínica?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                De terça à sexta: 09:30 às 19:00.
                <p>Sábado 09:00 às 14:00.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontSize="1rem" fontWeight="500">Quais são as formas de pagamento?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize="0.95rem">
                Cartão de crédito ou débito, dinheiro, pix ou link de pagamento.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          
          <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px', fontSize: '0.95rem' }}>
            Portanto, para mais informações ou agendar uma consulta, entre em contato conosco. Estamos aqui para cuidar de você!
          </Typography>
        </Box>
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
          {" "}
          © 2024 Todos os direitos reservados
          <a
            href="https://www.instagram.com/dra.keniaalvesc/"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
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
{/* Ícone flutuante do WhatsApp */}
<Fab
  color="success"
  aria-label="whatsapp"
  href="https://web.whatsapp.com/send?phone=553192125408&text"
  target="_blank"
  sx={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    animation: "pulse 1.5s infinite", // Animacao para pulsa 
    "@keyframes pulse": {
      "0%": {
        transform: "scale(1)", // primeiro tam.
      },
      "50%": {
        transform: "scale(1.1)", // segundo tam.
      },
      "100%": {
        transform: "scale(1)", // terceiro tam.
      },
    },
  }}
>
  <WhatsAppIcon />
</Fab>
    </Box>
  );
};

export default Resultados;
