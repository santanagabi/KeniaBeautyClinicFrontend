import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const API_URL = "https://proj-clinica-estetica-api.onrender.com"

const Estoque = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');

  const formatCurrency = (value) => {
    const numValue = parseFloat(value.replace(/[^0-9]/g, '') / 100);
    return numValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleValorUnitarioChange = (e) => {
    setValorUnitario(formatCurrency(e.target.value));
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/itens`);
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const extrairRelatorio = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/relatorio`, {
        responseType: 'blob',
      });

      const link = document.createElement('a');
      const url = window.URL.createObjectURL(new Blob([response.data]));
      link.href = url;
      link.setAttribute('download', 'relatorio.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao gerar relatório:', error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        nome,
        quantidade: parseInt(quantidade),
        valorUnitario: parseFloat(valorUnitario.replace('R$', '').replace(',', '.')),
      };
      const response = await axios.post(`${API_URL}/api/itens`, productData);
      setProducts([...products, response.data]);

      setNome('');
      setQuantidade('');
      setValorUnitario('');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        <img src={logo} alt="Logo" style={{ height: '60px', cursor: 'pointer' }} onClick={() => navigate('/painel')} />
      </Box>

      <Container maxWidth="md">
        <Typography variant="h4" display="flex" justifyContent="center" sx={{ textDecoration: 'underline', textDecorationColor: '#fdd835' }}>
        Gestão de Estoque
        </Typography>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6">Adicionar Produto</Typography>
          <form onSubmit={addProduct}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nome do Produto"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Quantidade"
                  type="number"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Valor Unitário"
                  value={valorUnitario}
                  onChange={handleValorUnitarioChange}
                  required
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#333333', '&:hover': { backgroundColor: '#555555' } }}>
                Adicionar Produto
              </Button>
            </Box>
          </form>
        </Paper>

        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h6">Lista de Produtos</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Valor Unitário</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.nome}</TableCell>
                  <TableCell align="right">{product.quantidade}</TableCell>
                  <TableCell align="right">{product.valorUnitario.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#333333',
              '&:hover': { backgroundColor: '#555555' },
            }}
            onClick={extrairRelatorio}
          >
            Extrair Relatório
          </Button>
        </Box>
      </Container>

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

export default Estoque;
