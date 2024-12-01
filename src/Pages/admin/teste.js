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
  Button,
  MenuItem,
  IconButton,
  Select,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import logo from '../images/logo.png'; // Substitua com o caminho do seu logo

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    date: '',
    category: '',
    reference: '',
  });
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [reference, setReference] = useState('');
  const [totals, setTotals] = useState({ income: 0, expenses: 0, balance: 0 });
  const [activeTab, setActiveTab] = useState('dashboard'); // Para controlar a aba ativa

  const handleChangeExpense = (e) =>
    setExpense({ ...expense, [e.target.name]: e.target.value });

  const handleAddExpense = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/expenses/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense),
      });
      if (!response.ok) throw new Error('Failed to add expense');
      setExpense({
        description: '',
        amount: '',
        date: '',
        category: '',
        reference: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChangeIncome = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    if (name === 'amount') setAmount(value);
    if (name === 'date') setDate(value);
    if (name === 'reference') setReference(value);
  };

  const fetchTransactions = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/transactions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setTransactions(data);
      calculateTotals(data);
    } catch (error) {
      console.error('Erro ao buscar transações:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchIncomes = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/incomes');
      const data = await response.json();
      setIncomes(data);
    } catch (error) {
      console.error('Erro ao buscar rendas:', error);
    }
  };

  const calculateTotals = (transactions) => {
    let income = 0,
      expenses = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') income += transaction.amount;
      else expenses += transaction.amount;
    });
    const balance = income - expenses;
    setTotals({ income, expenses, balance });
  };

  useEffect(() => {
    fetchTransactions();
    fetchIncomes();
  }, [fetchTransactions]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
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
          padding: '10px',
          width: '100%',
        }}
      >
        <img src={logo} alt="Logo" style={{ height: '100px' }} />
      </Box>

      {/* Navegação de abas */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button onClick={() => setActiveTab('dashboard')}>Dashboard</Button>
        <Button onClick={() => setActiveTab('expenses')}>Expenses</Button>
        <Button onClick={() => setActiveTab('incomes')}>Incomes</Button>
      </Box>

      {/* Conteúdo */}
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {activeTab === 'dashboard' && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{ padding: '20px', borderRadius: '10px' }}
              >
                <Typography variant="h6">Mike</Typography>
                <Typography variant="subtitle1">Your Money</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={9}>
              <Paper
                elevation={3}
                sx={{ padding: '20px', borderRadius: '10px' }}
              >
                <Typography variant="h5">All Transactions</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Paper
                      elevation={2}
                      sx={{
                        padding: '20px',
                        backgroundColor: '#e0f7fa',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6">Total Income</Typography>
                      <Typography variant="h4">
                        ${totals.income.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      elevation={2}
                      sx={{
                        padding: '20px',
                        backgroundColor: '#ffcdd2',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6">Total Expenses</Typography>
                      <Typography variant="h4">
                        ${totals.expenses.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      elevation={2}
                      sx={{
                        padding: '20px',
                        backgroundColor: '#c8e6c9',
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6">Total Balance</Typography>
                      <Typography variant="h4">
                        ${totals.balance.toFixed(2)}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <List sx={{ mt: 4 }}>
                  {transactions.map((transaction) => (
                    <ListItem key={transaction.id}>
                      <ListItemText
                        primary={transaction.description}
                        secondary={`Amount: $${transaction.amount.toFixed(
                          2
                        )} | Type: ${transaction.type}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}

        {activeTab === 'expenses' && (
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{ padding: '40px', borderRadius: '10px', width: '100%' }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Expenses
              </Typography>
              <Box component="form" onSubmit={handleAddExpense} sx={{ mt: 2 }}>
                <TextField
                  label="Description"
                  name="description"
                  value={expense.description}
                  onChange={handleChangeExpense}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Amount"
                  name="amount"
                  value={expense.amount}
                  onChange={handleChangeExpense}
                  fullWidth
                  margin="normal"
                  required
                  type="number"
                />
                <TextField
                  label="Date"
                  name="date"
                  value={expense.date}
                  onChange={handleChangeExpense}
                  fullWidth
                  margin="normal"
                  required
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  select
                  label="Category"
                  name="category"
                  value={expense.category}
                  onChange={handleChangeExpense}
                  fullWidth
                  margin="normal"
                  required
                >
                  <MenuItem value="Dentist Appointment">
                    Dentist Appointment
                  </MenuItem>
                  <MenuItem value="Travelling">Travelling</MenuItem>
                  <MenuItem value="Rent">Rent</MenuItem>
                </TextField>
                <TextField
                  label="Reference"
                  name="reference"
                  value={expense.reference}
                  onChange={handleChangeExpense}
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Add Expense
                </Button>
              </Box>
            </Paper>
          </Container>
        )}

        {activeTab === 'incomes' && (
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{ padding: '40px', borderRadius: '10px', width: '100%' }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Incomes
              </Typography>
              <Box sx={{ mt: 2 }}>
                {incomes.map((income) => (
                  <ListItem key={income.id}>
                    <ListItemText
                      primary={income.title}
                      secondary={`Amount: $${income.amount} | Date: ${income.date}`}
                    />
                    <IconButton edge="end">
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </Box>
            </Paper>
          </Container>
        )}
      </Container>
    </Box>
  );
}

export default Dashboard;
