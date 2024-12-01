import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Adicionado
import logo from '../images/logo.png';

const EstoqueDashboard = () => {
  const navigate = useNavigate(); // Definido navigate

  const data = {
    itensCadastrados: 120,
    entradas: 200,
    saidas: 150,
    quantidadeEstoque: 50,
    valorEstoque: 'R$ 12,000.00',
    valorEntrada: 'R$ 8,000.00',
    valorSaida: 'R$ 4,000.00',
    itensCriticos: 5,
  };

  const handleUnitValueChange = (event) => {
    const value = event.target.value.replace(/[^\d]/g, '');
    if (value) {
      event.target.value = `R$ ${value}`;
    } else {
      event.target.value = '';
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
        <img
          src={logo}
          alt="Logo"
          style={{ height: '60px', cursor: 'pointer' }}
          onClick={() => navigate('/painel')}
        />
      </Box>

      {/* Conteúdo principal do dashboard */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
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
          Controle de Estoque
        </Typography>

        <Grid container spacing={4}>
          {/* Cards de informações principais */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Itens Cadastrados</Typography>
                <Typography variant="h4">{data.itensCadastrados}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Entradas</Typography>
                <Typography variant="h4">{data.entradas}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Saídas</Typography>
                <Typography variant="h4">{data.saidas}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Quantidade em Estoque</Typography>
                <Typography variant="h4">{data.quantidadeEstoque}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Valor em Estoque</Typography>
                <Typography variant="h4">{data.valorEstoque}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Itens Críticos</Typography>
                <Typography variant="h4" color="error">
                  {data.itensCriticos} (10%)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Formulário para adicionar produtos */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ textAlign: 'center', mt: 6 }}
        >
          Adicionar Produto
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome do Produto"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Categoria"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantidade"
              variant="outlined"
              fullWidth
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor Unitário"
              variant="outlined"
              fullWidth
              onChange={handleUnitValueChange}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            Adicionar
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
};

export default EstoqueDashboard;
