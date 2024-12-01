import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Typography, Button, Paper, Box, CircularProgress, TextField, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';

const HistoricoMedico = ({ pacienteId }) => {
  const [historico, setHistorico] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    pacienteNome: '',
    idade: '',
    endereco: '',
    telefone: '',
    procedimentos: '',
    produtosUtilizados: '',
    documentos: null,
    fotosAntes: null,
    fotosDepois: null,
    anamnesePdfUrl: '',
  });

  const navigate = useNavigate();

  const fetchHistorico = useCallback(async () => {
    try {
      const response = await axios.get(`/api/historico-medico/${pacienteId}`);
      setHistorico(response.data);
      setFormData({
        pacienteNome: response.data.nomePaciente || '',
        procedimentos: response.data.procedimentos || '',
        produtosUtilizados: response.data.produtosUtilizados || '',
        documentos: response.data.documentos || null,
        fotosAntes: response.data.fotosAntes || null,
        fotosDepois: response.data.fotosDepois || null,
        anamnesePdfUrl: response.data.anamnesePdfUrl || '',
      });
    } catch (error) {
      console.error('Erro ao carregar histórico médico', error);
    } finally {
      setLoading(false);
    }
  }, [pacienteId]);

  const handleSaveHistorico = async () => {
    try {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append('pacienteNome', formData.pacienteNome);
      formDataToSend.append('procedimentos', formData.procedimentos);
      formDataToSend.append('produtosUtilizados', formData.produtosUtilizados);

      if (formData.fotosAntes) formDataToSend.append('fotosAntes', formData.fotosAntes);
      if (formData.fotosDepois) formDataToSend.append('fotosDepois', formData.fotosDepois);
      if (formData.documentos) formDataToSend.append('documentos', formData.documentos);

      let response;
      if (historico) {
        response = await axios.put(`/api/historico-medico/${pacienteId}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await axios.post('/api/historico-medico', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      setHistorico(response.data);
      alert('Histórico médico salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar histórico médico', error);
      alert('Erro ao salvar histórico médico');
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectToAnamnese = () => {
    navigate(pacienteId ? `/editar-anamnese/${pacienteId}` : '/criar-anamnese');
  };

  useEffect(() => {
    if (pacienteId) fetchHistorico();
    else setLoading(false);
  }, [pacienteId, fetchHistorico]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  if (loading) {
    return <CircularProgress />;
  }

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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#ffffff' }}>
          <Typography variant="h4" align="center" gutterBottom>
            {historico ? `Editar Histórico Médico de ${historico.nomePaciente}` : 'CRIAR NOVO HISTÓRICO MÉDICO'}
          </Typography>

          <TextField
            label="Nome do Paciente"
            name="pacienteNome"
            value={formData.pacienteNome}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Procedimentos"
            name="procedimentos"
            value={formData.procedimentos}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />

          <TextField
            label="Produtos Utilizados"
            name="produtosUtilizados"
            value={formData.produtosUtilizados}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />

<Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2, width: '100%' }}>
  <Button 
    variant="contained" 
    component="label" 
    sx={{ backgroundColor: '#333333', color: '#ffffff', fontWeight: 'bold', '&:hover': { backgroundColor: '#555555' } }}>
    Adicionar Foto Antes
    <input type="file" hidden name="fotosAntes" onChange={handleFileChange} />
  </Button>

  <Button 
    variant="contained" 
    component="label" 
    sx={{ backgroundColor: '#333333', color: '#ffffff', fontWeight: 'bold', '&:hover': { backgroundColor: '#555555' } }}>
    Adicionar Foto Depois
    <input type="file" hidden name="fotosDepois" onChange={handleFileChange} />
  </Button>

  <Button 
    variant="contained" 
    component="label" 
    sx={{ backgroundColor: '#333333', color: '#ffffff', fontWeight: 'bold', '&:hover': { backgroundColor: '#555555' } }}>
    Adicionar Documento
    <input type="file" hidden name="documentos" onChange={handleFileChange} />
  </Button>

  <Button 
    variant="contained" 
    sx={{ backgroundColor: '#333333', color: '#ffffff', fontWeight: 'bold', '&:hover': { backgroundColor: '#555555' } }} 
    onClick={handleRedirectToAnamnese}>
    Preencher Anamnese
  </Button>
</Box>

          <Box mt={3}>
            <Button variant="contained" sx={{  mt: 3, mb: 2, backgroundColor: '#333333', color: '#ffffff',
              fontWeight: 'bold', '&:hover': { backgroundColor: '#555555', }, }} onClick={handleSaveHistorico} fullWidth>
              {historico ? 'Atualizar Histórico Médico' : 'Salvar Novo Histórico Médico'}
            </Button>
          </Box>
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
};

export default HistoricoMedico;
