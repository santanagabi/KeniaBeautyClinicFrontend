import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

function Painel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
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
          borderBottom: '5px solid #fdd835',
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
        <Box sx={{ display: 'flex', gap: '20px', marginLeft: '' }}>
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: 'white',
              fontWeight: 'italic',
              '&:hover': { color: '#fdd835' },
            }}
          >
            Sair
          </Button>
        </Box>
      </Box>

      {/* Conteúdo Principal */}
      <Container maxWidth="md" sx={{ mt: 1 }}>
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
          PAINEL DO ADMINISTRADOR
        </Typography>

        {/* Menu de Botões */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            justifyItems: 'center',
            mb: 5,
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate('/criar-anamnese')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Ficha de Anamnese
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/prontuarios')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Prontuários
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate('/Notificaçoes')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Notificações
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/assinatura-digital')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Assinatura Digital
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/estoque')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Controle de Estoque
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/financeiro')}
            sx={{
              width: '200px',
              height: '150px',
              backgroundColor: '#333333',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#555555',
              },
            }}
          >
            Controle Financeiro
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#3f3f3f',
          padding: '10px 0',
          textAlign: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Todos os direitos reservados Kenia Alves
        </Typography>
        <Box
          sx={{
            borderTop: '3px solid #fdd835',
            marginTop: '10px',
          }}
        />
      </Box>
    </Box>
  );
}

export default Painel;
