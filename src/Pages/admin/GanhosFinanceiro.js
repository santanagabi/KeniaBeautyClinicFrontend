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

const API_URL = process.env.REACT_APP_API_URL;

function Incomes() {
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

  const addIncome = async () => {
    console.log(amount);
    const replacedAmount = parseFloat(amount.replace('R$', ''));
    const newIncome = { procedure, replacedAmount, date };

    try {
      const token = Cookies.get('token'); // Busca o token do cookie
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      const response = await axios.post(
        `${API_URL}/api/financeiro/transacoes/ganho`,
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
      console.error('Error adding income:', error);
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
                <ListItem
                  button
                  component={Link}
                  sx={{
                    backgroundColor: '#fdd835',
                    borderRadius: '5px',
                  }}
                  to="/ganhos"
                >
                  <ListItemText primary="Ganhos" />
                </ListItem>
                <ListItem button component={Link} to="/gastos">
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
                Ganhos
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <FormControl
                  fullWidth
                  margin="normal"
                  sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
                  required
                >
                  <InputLabel>Procedimentos</InputLabel>
                  <Select
                    value={procedure}
                    onChange={(e) => setProcedure(e.target.value)}
                    label="Procedimentos"
                  >
                    <MenuItem value="Acelerador Metabólico Sessão Avulsa">
                      Acelerador Metabólico Sessão Avulsa
                    </MenuItem>
                    <MenuItem value="Acelerador Metabólico 5 Sessões">
                      Acelerador Metabólico 5 Sessões
                    </MenuItem>
                    <MenuItem value="Acelerador Metabólico 10 Sessões">
                      Acelerador Metabólico 10 Sessões
                    </MenuItem>
                    <MenuItem value="Bioestimulador">
                      Bioestimulador
                    </MenuItem>
                    <MenuItem value="Botox Full Face">
                      Botox Full Face
                    </MenuItem>
                    <MenuItem value="Botox Com Retorno (Feminino)">
                      Botox Com Retorno (Feminino)
                    </MenuItem>
                    <MenuItem value="Botox Com Retorno (Masculino)">
                      Botox Com Retorno (Masculino)
                    </MenuItem>
                    <MenuItem value="Depilação a Laser">
                      Depilação a Laser
                    </MenuItem>
                    <MenuItem value="Design Simples">
                      Design Simples
                    </MenuItem>
                    <MenuItem value="Fio Liso Mono Par">
                      Fio Liso Mono Par
                    </MenuItem>
                    <MenuItem value="Fio Filler Par">
                      Fio Filler Par
                    </MenuItem>
                    <MenuItem value="Limpeza de Pele">
                      Limpeza de Pele
                    </MenuItem>
                    <MenuItem value="Limpeza de Pele com Peeling de Diamante">
                      Limpeza de Pele com Peeling de Diamante
                    </MenuItem>
                    <MenuItem value="Lipo de Papada Sessão Avulsa">
                      Lipo de Papada Sessão Avulsa
                    </MenuItem>
                    <MenuItem value="Lipo de Papada 5 Sessões">
                      Lipo de Papada 5 Sessões
                    </MenuItem>
                    <MenuItem value="Lipo Enzimática Sessão Avulsa">
                      Lipo Enzimática Sessão Avulsa
                    </MenuItem>
                    <MenuItem value="Lipo Enzimática 5 Sessões">
                      Lipo Enzimática 5 Sessões
                    </MenuItem>
                    <MenuItem value="Lipo Enzimática 10 Sessões">
                      Lipo Enzimática 10 Sessões
                    </MenuItem>
                    <MenuItem value="Microagulhamento">
                      Microagulhamento
                    </MenuItem>
                    <MenuItem value="Micropigmentação de Sobrancelhas (Retoque Incluso)">
                      Micropigmentação de Sobrancelhas (Retoque Incluso)
                    </MenuItem>
                    <MenuItem value="Micropigmentação Labial (Retoque Incluso)">
                      Micropigmentação Labial (Retoque Incluso)
                    </MenuItem>
                    <MenuItem value="Peeling Facial">
                      Peeling Facial
                    </MenuItem>
                    <MenuItem value="Preenchimento de Bigode Chinês">
                      Preenchimento de Bigode Chinês
                    </MenuItem>
                    <MenuItem value="Preenchimento de Olheira">
                      Preenchimento de Olheira
                    </MenuItem>
                    <MenuItem value="Preenchimento de Malar">
                      Preenchimento de Malar
                    </MenuItem>
                    <MenuItem value="Preenchimento de Labial">
                      Preenchimento Labial
                    </MenuItem>
                    <MenuItem value="Preenchimento Mento (Queixo)">
                      Preenchimento Mento (Queixo)
                    </MenuItem>
                    <MenuItem value="Vasinhos">
                      Vasinhos
                    </MenuItem>
                    <MenuItem value="Terapia Capilar + Agulha (Sessão Avulsa)">
                      Terapia Capilar + Agulha (Sessão Avulsa)
                    </MenuItem>
                    <MenuItem value="Terapia Capilar + Agulha (5 Sessões)">
                      Terapia Capilar + Agulha (10 Sessões)
                    </MenuItem>
                    <MenuItem value="Terapia Capilar + Agulha (10 Sessões)">
                      Terapia Capilar + Agulha (10 Sessões)
                    </MenuItem>
                    <MenuItem value="Tratamentos: Flacidez, Celulite e Estrias">
                      Tratamentos: Flacidez, Celulite e Estrias
                    </MenuItem>
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
                  onClick={addIncome}
                  sx={{ borderRadius: '5px', mt: 2, 
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#555555',
                    }, }}
                >
                  Adicionar Ganho
                </Button>
                {sendFormSucess && (
                  <Typography
                    color="success.main"
                    align="center"
                    sx={{ mt: 2 }}
                  >
                    Ganho adicionado com Sucesso
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

export default Incomes;
