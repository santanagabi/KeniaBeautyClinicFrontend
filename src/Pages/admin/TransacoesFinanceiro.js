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
  TextField,
  IconButton,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Para pegar o token
import logo from '../images/logo.png';
import DeleteIcon from '@mui/icons-material/Delete'; // Ícone de lixeira

const API_URL =  "https://proj-clinica-estetica-api.onrender.com"

function ViewTransactions() {
  const navigate = useNavigate();
  const [transacoes, setTransacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterMonth, setFilterMonth] = useState('');

  // Função para buscar transações
  const buscarTransacoes = useCallback(async () => {
    try {
      const token = Cookies.get('token'); // Busca o token do cookie
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await fetch(
        `${API_URL}/api/financeiro/transacoes`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      setTransacoes(data);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Define o valor padrão de filterMonth para o mês atual no formato YYYY-MM
    const currentMonth = new Date().toISOString().slice(0, 7); // Pega a data atual no formato "YYYY-MM"
    setFilterMonth(currentMonth);
    buscarTransacoes();
  }, [buscarTransacoes]);

  // Filtro de transações por mês
  const handleFilterChange = (e) => {
    setFilterMonth(e.target.value);
  };

  // Função para deletar transação
  const handleDelete = async (id) => {
    try {
      const token = Cookies.get('token'); // Busca o token do cookie
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await fetch(
        `${API_URL}/api/financeiro/transacoes/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Atualiza a lista de transações após a exclusão
        setTransacoes((prevTransacoes) =>
          prevTransacoes.filter((transacao) => transacao.id !== id)
        );
      } else {
        console.error('Erro ao deletar transação');
      }
    } catch (error) {
      console.error('Erro ao deletar transação:', error);
    }
  };

  const filteredTransacoes = transacoes.filter((transacao) =>
    transacao.data.startsWith(filterMonth)
  );

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

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6">Menu</Typography>
              <Box mt={3}>
                <List>
                  <ListItem button component={Link} to="/financeiro">
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    sx={{ backgroundColor: '#fdd835', borderRadius: '5px' }}
                    to="/transacoes"
                  >
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
              <Typography variant="h4" align="center" gutterBottom>
                Transações
              </Typography>

              {/* Filter by Month */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <TextField
                  label="Filtrar por mês"
                  type="month"
                  value={filterMonth}
                  onChange={handleFilterChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              {/* Transações List */}
              {!loading && filteredTransacoes.length > 0 ? (
                <List sx={{ mt: 4 }}>
                  {filteredTransacoes.map((transacao) => (
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
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
                      <IconButton
                        edge="end"
                        color="error"
                        onClick={() => handleDelete(transacao.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
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
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Todos os direitos reservados Kenia Alves
        </Typography>
        <Box sx={{ borderTop: '3px solid #fdd835', marginTop: '10px' }} />
      </Box>
    </Box>
  );
}

export default ViewTransactions;
