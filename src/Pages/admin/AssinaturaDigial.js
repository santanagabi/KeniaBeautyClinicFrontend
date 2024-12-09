import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';

const API_URL =  "https://proj-clinica-estetica-api.onrender.com"

function AssinaturaDigital() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [file, setFile] = useState(null);
  const [UUIDdocument, setUUIDdocument] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [signers, setSigners] = useState([]);
  const [newSigner, setNewSigner] = useState({
    email: '',
    act: 1, // Assinar
    foreign: 0, // 0 = Brasileiro
    foreign_lang: '', // Idioma opcional
    certificadoicpbr: 0, // 0 = Assinatura padrão
    assinatura_presencial: 0, // 0 = Não presencial
  });
  const [step, setStep] = useState(1); // Etapa atual

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddSigner = () => {
    setSigners([...signers, newSigner]);
    setNewSigner({ email: '', embed_methodauth: 'email', whatsapp_number: '' });
  };

  const handleSendDocument = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Selecione um arquivo antes de enviar.');
      return;
    }

    try {
      // Envio do documento principal para upload
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await axios.post(
        `${API_URL}/api/d4sign/documents/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setUUIDdocument(uploadResponse.data.uuid);
      setStep(2); // Avança para a etapa de adicionar signatários
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Erro ao enviar documento. Por favor, tente novamente.');
      }
    }
  };

  const handleCreateSignerList = async () => {
    try {
      const uploadResponse = await axios.post(
        `${API_URL}/api/d4sign/documents/${UUIDdocument}/createlist`,
        {
          signers,
        }
      );
      console.log(uploadResponse);
      alert('Signatários cadastrados com sucesso!');
      setStep(3); // Avança para a etapa de enviar para assinatura
    } catch (err) {
      console.log(err);
      setError('Erro ao cadastrar signatários. Por favor, tente novamente.');
    }
  };

  const handleSendForSignature = async () => {
    try {
      await axios.post(
        `${API_URL}/api/d4sign/documents/${UUIDdocument}/sendtosigner`,
        {
          message: mensagem,
          skip_email: 0,
          workflow: 0,
        }
      );

      alert('Arquivo enviado para assinatura com sucesso!');
    } catch (err) {
      setError(
        'Erro ao enviar documento para assinatura. Por favor, tente novamente.'
      );
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
        <img src={logo} alt="Logo" style={{ height: '60px', cursor: "pointer", }} 
        onClick={() => navigate("/painel")} />
      </Box> 

      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{ padding: '40px', borderRadius: '10px', width: '100%' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {step === 1
              ? 'Enviar Documento para Assinatura'
              : step === 2
              ? 'Adicionar Signatários'
              : 'Enviar para Assinatura'}
          </Typography>

          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}

          {step === 1 && (
            <Box component="form" onSubmit={handleSendDocument} sx={{ mt: 2 }}>
              <Typography variant="body1" align="center" gutterBottom>
                Faça o upload de um documento para enviar para assinatura.
                (.pdf)
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Button variant="contained" component="label">
                  Selecione o arquivo
                  <input
                    type="file"
                    hidden
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </Button>
                {file && <Typography sx={{ ml: 2 }}>{file.name}</Typography>}
              </Box>

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
                Enviar Documento
              </Button>
            </Box>
          )}

          {step === 2 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" align="center" gutterBottom>
                Adicione as pessoas que deverão assinar o documento.
              </Typography>

              <TextField
                fullWidth
                margin="normal"
                label="Email do Signatário"
                value={newSigner.email}
                onChange={(e) =>
                  setNewSigner({ ...newSigner, email: e.target.value })
                }
                sx={{ backgroundColor: '#f2f2f2' }}
              />

              <Button
                variant="contained"
                onClick={handleAddSigner}
                sx={{ mt: 2, mb: 2 }}
              >
                Adicionar Signatário
              </Button>

              {/* Listagem de signatários adicionados */}
              {signers.map((signer, index) => (
                <Typography key={index} variant="body1" align="center">
                  {signer.email} - {signer.whatsapp_number || 'Sem WhatsApp'}
                </Typography>
              ))}

              <Button
                variant="contained"
                onClick={handleCreateSignerList}
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
                Criar Lista de Signatários
              </Button>
            </Box>
          )}

          {step === 3 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" align="center" gutterBottom>
                Pronto para enviar o documento para assinatura.
              </Typography>

              <TextField
                margin="normal"
                fullWidth
                id="mensagem"
                label="Mensagem para o Signatário"
                name="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                sx={{ backgroundColor: '#f2f2f2', mb: 2 }}
              />

              <Button
                variant="contained"
                onClick={handleSendForSignature}
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
                Enviar para Assinatura
              </Button>
            </Box>
          )}
        </Paper>
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
}

export default AssinaturaDigital;
