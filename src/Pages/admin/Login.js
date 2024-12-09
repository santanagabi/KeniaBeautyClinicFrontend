import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import axios from 'axios';
import logoka from '../images/LOGOKA.png';
import logo from '../images/logo.png';
import entrada from '../images/entrada.png';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const API_URL =  "https://proj-clinica-estetica-api.onrender.com"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/login-administrador`,
        {
          email,
          senha: password,
        }
      );

      const token = response.data.token;
      console.log(token);
      Cookies.set('token', token);
      setLoginSuccess(true); 
      setTimeout(() => {
        navigate('/painel');
      }, 2000); 
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
      setLoginSuccess(false);
    }
  };

  const handleRegister = () => {
    navigate('/register'); 
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
          justifyContent: 'center',
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
          style={{ height: '60px', cursor: 'pointer' }}
          onClick={() => navigate('/sobre-mim')}
        />
      </Box>

      { }
      <Container maxWidth="md">
  <Paper
    elevation={3}
    sx={{
      borderRadius: '10px',
      overflow: 'hidden', 
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
    }}
  >
    <Grid container spacing={0} alignItems="stretch">
      { }
      <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
        <Box
          component="img"
          src={entrada}
          alt="Entrada"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Grid>

      { }
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        { }
        <Box display="flex" justifyContent="center" mb={3}>
          <img src={logoka} alt="Logoka" style={{ height: '60px' }} />
        </Box>

        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
            />
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
                backgroundColor: '#333333',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#555555',
                },
              }}
            >
              Entrar
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleRegister}
              sx={{
                mt: 2,
                color: '#333333',
                borderColor: '#333333',
                '&:hover': {
                  borderColor: '#555555',
                },
              }}
            >
              Cadastrar
            </Button>
          </Box>

          { }
          {loginSuccess && (
            <Typography color="success.main" align="center" sx={{ mt: 2 }}>
              Logado com sucesso! Redirecionando...
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  </Paper>
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

export default Login;
