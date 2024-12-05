import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const API_URL =  "https://proj-clinica-estetica-api.onrender.com"

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senhaUsuario: '',
    senhaAdmin: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      const response = await axios.post(
        `${API_URL}/cadastro-admnistrador`,
        formData
      );
      console.log('Usuário registrado:', response.data);
      navigate('/login');
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Erro ao registrar. Por favor, tente novamente.');
      }
    }
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
        <img src={logo} alt="Logo" style={{ height: '60px', cursor: "pointer", }} 
        onClick={() => navigate("/login")} />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{ padding: '40px', borderRadius: '10px', width: '100%' }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Cadastro
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nome"
                label="Nome Completo"
                name="nome"
                autoComplete="name"
                value={formData.nome}
                onChange={handleChange}
                sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="senhaUsuario"
                label="Senha"
                type="password"
                id="senhaUsuario"
                autoComplete="new-password"
                value={formData.senhaUsuario}
                onChange={handleChange}
                sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="senhaAdmin"
                label="Senha Admin"
                type="password"
                id="senhaAdmin"
                value={formData.senhaAdmin}
                onChange={handleChange}
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
                Cadastrar
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

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

export default Register;
