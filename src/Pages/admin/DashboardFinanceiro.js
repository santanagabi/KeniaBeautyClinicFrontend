import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Importa o Link para navegação interna
import Cookies from 'js-cookie'; // Importa o Cookies
import logo from '../images/logo.png';

function Dashboard() {
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ ganhos: 0, gastos: 0, saldoTotal: 0 });
  const navigate = useNavigate();

  const calcularTotais = (transacoes) => {
    let ganhos = 0;
    let gastos = 0;
    transacoes.forEach((transacao) => {
      if (transacao.tipo === 'GANHO') {
        ganhos += transacao.valor;
      } else if (transacao.tipo === 'GASTO') {
        gastos += transacao.valor;
      }
    });
    const saldoTotal = ganhos - gastos;
    setTotals({ ganhos, gastos, saldoTotal });
  };

  const buscarTransacoes = useCallback(async () => {
    try {
      const token = Cookies.get('token'); // Busca o token do cookie
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await fetch(
        'http://localhost:3000/api/financeiro/transacoes',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setTransacoes(data);
      calcularTotais(data);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    buscarTransacoes();
  }, [buscarTransacoes]);

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

      {/* Dashboard Content */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6">Menu</Typography>
              <Box mt={3}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    sx={{
                      backgroundColor: '#fdd835',
                      borderRadius: '5px',
                    }}
                    to="/financeiro"
                  >
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem button component={Link} to="/transacoes">
                    <ListItemText primary="Transações" />
                  </ListItem>
                  <ListItem button component={Link} to="/ganhos">
                    <ListItemText primary="Ganhos" />
                  </ListItem>
                  <ListItem button component={Link} to="/gastos">
                    <ListItemText primary="Gastos" />
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h5" gutterBottom>
                Ultimas Transações
              </Typography>

              {/* Lista de transações */}
              {!loading && transacoes.length > 0 ? (
                <List sx={{ mt: 4 }}>
                  {transacoes
                    .slice(transacoes.length - 5, transacoes.length)
                    .map((transacao) => (
                      <ListItem
                        key={transacao.id}
                        sx={{
                          backgroundColor:
                            transacao.tipo === 'GANHO'
                              ? '#e8f5e9'
                              : transacao.tipo === 'GASTO'
                              ? '#ffebee'
                              : 'transparent',
                          borderRadius: '5px',
                          marginBottom: '10px',
                        }}
                      >
                        <ListItemText
                          primary={transacao.descricao}
                          secondary={`Valor: R$${transacao.valor.toFixed(
                            2
                          )} | Tipo: ${transacao.tipo}`}
                          sx={{
                            color:
                              transacao.tipo === 'GANHO'
                                ? '#388e3c'
                                : transacao.tipo === 'GASTO'
                                ? '#d32f2f'
                                : 'inherit',
                          }}
                        />
                      </ListItem>
                    ))}
                </List>
              ) : (
                <Typography variant="body1" sx={{ mt: 4 }}>
                  {loading
                    ? 'Carregando transações...'
                    : 'Nenhuma transação encontrada.'}
                </Typography>
              )}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      padding: '20px',
                      backgroundColor: '#c8e6c9',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6">Ganhos</Typography>
                    <Typography variant="h4">
                      R${totals.ganhos.toFixed(2)}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      padding: '20px',
                      backgroundColor: '#ffcdd2',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6">Gastos</Typography>
                    <Typography variant="h4">
                      R${totals.gastos.toFixed(2)}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      padding: '20px',
                      backgroundColor: '#e0f7fa',
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h4">
                      R${totals.saldoTotal.toFixed(2)}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
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

export default Dashboard;
