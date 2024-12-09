import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  CircularProgress,
  TextField,
  Container,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';
import imageCompression from 'browser-image-compression';

const API_URL = "https://proj-clinica-estetica-api.onrender.com"

const HistoricoMedico = ({ pacienteId }) => {
  const [historico, setHistorico] = useState(null);
  const [loading, setLoading] = useState(true);
  const { pacienteNome, anamneseId } = useParams();
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
  const [fotoAntesPreview, setFotoAntesPreview] = useState(null);
  const [fotoDepoisPreview, setFotoDepoisPreview] = useState(null);

  const navigate = useNavigate();

  const fetchHistorico = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/historico-medico/${pacienteNome}`
      );
      setHistorico(response.data);
      setFormData({
        id: response.data.id,
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
  }, [pacienteNome]);

  const handleSaveHistorico = async () => {
    try {
      setLoading(true);

      const formDataToSend = new FormData();
      formDataToSend.append('nomePaciente', pacienteNome);
      formDataToSend.append('procedimentos', formData.procedimentos);
      formDataToSend.append('produtosUtilizados', formData.produtosUtilizados);
      formDataToSend.append('anamneseId', anamneseId || '');

      if (formData.fotosAntes) formDataToSend.append('fotosAntes', formData.fotosAntes);
      if (formData.fotosDepois) formDataToSend.append('fotosDepois', formData.fotosDepois);
      if (formData.documentos) formDataToSend.append('documentos', formData.documentos);

      let response;
      if (historico) {
        response = await axios.put(
          `${API_URL}/api/historico-medico/${historico.id}`,
          formDataToSend,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        response = await axios.post(
          `${API_URL}/api/historico-medico`,
          formDataToSend,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
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
    navigate(anamneseId ? `/detalhes-anamnese/${anamneseId}` : '/criar-anamnese');
  };

  useEffect(() => {
    fetchHistorico();
  }, [pacienteNome, fetchHistorico]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file, // Salva o arquivo para envio
      }));

      // Gerando o preview da imagem
      if (name === 'fotosAntes') {
        setFotoAntesPreview(URL.createObjectURL(file));
      } else if (name === 'fotosDepois') {
        setFotoDepoisPreview(URL.createObjectURL(file));
      }
    }
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
            {historico
              ? `Editar Histórico Médico de ${historico.nomePaciente}`
              : `Criar Novo Histórico Médico para ${pacienteNome} `}
          </Typography>

          <TextField
            label="Nome do Paciente"
            name="pacienteNome"
            value={pacienteNome}
            onChange={handleInputChange}
            fullWidth
            disabled
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

          {/* Fotos lado a lado */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6">Foto Antes</Typography>
              {fotoAntesPreview ? (
                <img
                  src={fotoAntesPreview}  // Usando o preview da imagem do usuário
                  alt="Foto Antes"
                  style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }}
                />
              ) : (
                historico && historico.fotosAntes && (
                  <img
                    src={`${API_URL}/uploads/${historico.fotosAntes.split('/').pop()}`}  // Usando a URL da foto da API
                    alt="Foto Antes"
                    style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }}
                  />
                )
              )}
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6">Foto Depois</Typography>
              {fotoDepoisPreview ? (
                <img
                  src={fotoDepoisPreview}  // Usando o preview da imagem do usuário
                  alt="Foto Depois"
                  style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }}
                />
              ) : (
                historico && historico.fotosDepois && (
                  <img
                    src={`${API_URL}/uploads/${historico.fotosDepois.split('/').pop()}`}  // Usando a URL da foto da API
                    alt="Foto Depois"
                    style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }}
                  />
                )
              )}
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 3 }}>
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: '#333333',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#555555' },
              }}
            >
              Adicionar Foto Antes
              <input
                type="file"
                hidden
                name="fotosAntes"
                onChange={handleFileChange}
              />
            </Button>

            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: '#333333',
                color: '#ffffff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#555555' },
              }}
            >
              Adicionar Foto Depois
              <input
                type="file"
                hidden
                name="fotosDepois"
                onChange={handleFileChange}
              />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveHistorico}
              sx={{ width: '200px' }}
            >
              Salvar Histórico Médico
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRedirectToAnamnese}
              sx={{ width: '200px' }}
            >
              Ir para Anamnese
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default HistoricoMedico;
