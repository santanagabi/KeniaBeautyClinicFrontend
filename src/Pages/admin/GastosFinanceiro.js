import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import Cookies from 'js-cookie'; // Importa o Cookies
import axios from 'axios';

function Expenses() {
  const [procedure, setProcedure] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [sendFormSucess, setSendFormSucess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const formatCurrency = (value) => {
    const numValue = parseFloat(value.replace(/[^0-9]/g, '') / 100);
    return numValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleAmountChange = (e) => {
    setAmount(formatCurrency(e.target.value));
  };

  const addExpense = async () => {
    const replacedAmount = parseFloat(amount.replace('R$', ''));
    const newExpense = { procedure, replacedAmount, date };

    try {
      const token = Cookies.get('token'); // Busca o token do cookie
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await axios.post(
        'http://localhost:3000/api/financeiro/transacoes/gasto', // Alterado para endpoint de 'gasto'
        { descricao: procedure, valor: replacedAmount, data: date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSendFormSucess(true);

      setProcedure('');
      setTitle('');
      setAmount('');
      setDate('');
    } catch (error) {
      console.error('Error adding expense:', error);
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

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6">Menu</Typography>
              <List>
                <ListItem button component="a" href="/financeiro">
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/transacoes">
                  <ListItemText primary="Transações" />
                </ListItem>
                <ListItem button component={Link} to="/ganhos">
                  <ListItemText primary="Ganhos" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  sx={{
                    backgroundColor: '#fdd835',
                    borderRadius: '5px',
                  }}
                  to="/gastos"
                >
                  <ListItemText primary="Gastos" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
            <Paper
              elevation={3}
              sx={{ padding: '40px', borderRadius: '10px', width: '100%' }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Gastos
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
                  required
                >
                  <InputLabel>Categoria de Gasto</InputLabel>
                  <Select
                    value={procedure}
                    onChange={(e) => setProcedure(e.target.value)}
                    label="Categoria de Gasto"
                  >
                    <MenuItem value="Aluguel">Aluguel</MenuItem>
                    <MenuItem value="Energia">Energia</MenuItem>
                    <MenuItem value="Internet">Internet</MenuItem>
                    <MenuItem value="Material de Escritório">
                      Material de Escritório
                    </MenuItem>
                    <MenuItem value="Material">Material</MenuItem>
                    <MenuItem value="Taxa da Maquininha">
                      Taxa da Maquininha
                    </MenuItem>
                    <MenuItem value="Agua">Agua</MenuItem>
                    <MenuItem value="Outros">Outros</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  margin="normal"
                  label="Descrição"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Valor"
                  value={amount}
                  onChange={handleAmountChange}
                  sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Data"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={addExpense}
                  sx={{ borderRadius: '5px', mt: 2,
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    '&:hover': {
                    backgroundColor: '#555555',
                    },}}
                >
                  Adicionar Gasto
                </Button>
                {sendFormSucess && (
                  <Typography
                    color="success.main"
                    align="center"
                    sx={{ mt: 2 }}
                  >
                    Gasto adicionado com Sucesso
                  </Typography>
                )}
              </Box>
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

export default Expenses;
