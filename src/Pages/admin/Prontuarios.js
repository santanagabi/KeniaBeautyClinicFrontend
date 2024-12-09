import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InventoryIcon from '@mui/icons-material/Inventory';
import logo from '../images/logo.png';
import axios from 'axios';
import { jsPDF } from 'jspdf'; // Importa o jsPDF

const API_URL = "https://proj-clinica-estetica-api.onrender.com"

const Prontuarios = () => {
  const [anamneses, setAnamneses] = useState([]);
  const [anamneseSelecionada, setAnamneseSelecionada] = useState(null);
  const navigate = useNavigate();

  // Função para buscar anamneses
  const fetchAnamneses = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/listar-anamneses`
      );
      setAnamneses(response.data.anamneses);
    } catch (error) {
      console.error('Erro ao buscar anamneses:', error);
    }
  };

  useEffect(() => {
    fetchAnamneses();
  }, []);

  // Função para gerar o PDF com todos os dados de anamnese
  const gerarPDF = (anamnese) => {
    const doc = new jsPDF();
    // Título em negrito
    doc.setFont('helvetica', 'bold'); // Define a fonte em negrito
    doc.text('Relatório de Anamnese', 10, 10); // Adiciona o título no PDF

    // Definir a fonte padrão para o restante do texto
    doc.setFont('helvetica', 'normal'); // Define a fonte normal
    // Variável para controlar a posição Y no PDF
    let yPosition = 20; // Posição inicial na primeira página

    // Função para adicionar texto no PDF com quebra de página automática
    function addTextWithPageBreak(doc, text, yPos) {
      if (yPos > 270) {
        // Limite para o tamanho da página (aproximadamente)
        doc.addPage(); // Adiciona uma nova página
        yPos = 20; // Reseta a posição Y para o topo da nova página
      }
      doc.text(text, 10, yPos); // Adiciona o texto na posição Y especificada
      return yPos + 10; // Atualiza a posição Y para o próximo texto
    }

    // Adicionando todos os campos da anamnese
    yPosition = addTextWithPageBreak(
      doc,
      `Paciente: ${anamnese.pacienteNome}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Idade: ${anamnese.idade}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(doc, `CPF: ${anamnese.cpf}`, yPosition);
    yPosition = addTextWithPageBreak(
      doc,
      `Endereço: ${anamnese.endereco}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Telefone: ${anamnese.telefone}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(doc, `Peso: ${anamnese.peso}`, yPosition);
    yPosition = addTextWithPageBreak(
      doc,
      `Altura: ${anamnese.altura}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Uso de Medicamentos: ${anamnese.usoMedicamentos ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Medicamentos: ${anamnese.medicamentos || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia a Medicamentos: ${anamnese.alergiaMedicamento ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia a Anestesia: ${anamnese.alergiaAnestesia ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia a Alimentos: ${anamnese.alergiaAlimentos ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia a Picada de Abelha: ${
        anamnese.alergiaPicadaAbelha ? 'Sim' : 'Não'
      }`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia ao Frio: ${anamnese.alergiaFrio ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Alergia ao Calor: ${anamnese.alergiaCalor ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Hipertensão: ${anamnese.hipertensao ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Diabetes: ${anamnese.diabetes ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Hipotireoidismo: ${anamnese.hipotireoidismo ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Asma: ${anamnese.asma ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Bronquite: ${anamnese.bronquite ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Lúpus: ${anamnese.lupus ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Vitiligo: ${anamnese.vitiligo ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Psoríase: ${anamnese.psoriase ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Artrite Reumatoide: ${anamnese.artriteReumatoide ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Doença Celíaca: ${anamnese.doencaCeliaca ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Coagulopatia: ${anamnese.coagulopatia ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Qual Coagulopatia: ${anamnese.coagulopatiaQual || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Varizes: ${anamnese.varizes ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Bruxismo: ${anamnese.bruxismo ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Enxaqueca: ${anamnese.enxaqueca ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `HIV: ${anamnese.hiv ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Hepatite Viral: ${anamnese.hepatiteViral ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Problema Psiquiátrico: ${anamnese.problemaPsiquiatrico ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Teve Câncer: ${anamnese.teveCancer ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Está em Remissão: ${anamnese.estaEmRemissao ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Usa Prótese Ortopédica: ${
        anamnese.usaProteseOrtopedica ? 'Sim' : 'Não'
      }`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Usa Prótese Dentária: ${anamnese.usaProteseDentaria ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Usa Marcapasso: ${anamnese.usaMarcapasso ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Teve Covid: ${anamnese.teveCovid ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Covid Quando: ${anamnese.covidQuando || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Vacina Covid: ${anamnese.vacinaCovid ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Uso Roacutan: ${anamnese.usoRoacutan ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Teve Queloide: ${anamnese.teveQueloide ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Qual Preenchedor: ${anamnese.qualPreenchedor || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Fez Tratamento Estético: ${
        anamnese.fezTratamentoEstetico ? 'Sim' : 'Não'
      }`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Qual Tratamento Estético: ${anamnese.qualTratamentoEstetico || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Ficou Satisfeito: ${anamnese.ficouSatisfeito ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Tipo Sanguíneo: ${anamnese.tipoSanguineo}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Não Sabe Tipo Sanguíneo: ${
        anamnese.naoSabeTipoSanguineo ? 'Sim' : 'Não'
      }`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Tem Hematomas Fáceis: ${anamnese.temHematomasFacil ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Sofreu Trauma na Face: ${anamnese.sofreuTraumaFace ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Fumante: ${anamnese.fumante ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Quantos Cigarros por Dia: ${anamnese.quantosCigarrosDia || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Bebida Alcoólica: ${anamnese.bebidaAlcoolica ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Quantas Bebidas por Semana: ${anamnese.quantasBebidasSemana || 'N/A'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Consumo de Café: ${anamnese.consumoCafe ? 'Sim' : 'Não'}`,
      yPosition
    );
    yPosition = addTextWithPageBreak(
      doc,
      `Quantos Cafés por Dia: ${anamnese.quantosCafesDia || 'N/A'}`,
      yPosition
    );

    // Adiciona uma nova página se necessário
    doc.save(`Anamnese_${anamnese.pacienteNome}.pdf`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        overflowX: "hidden", 
        overflowY: "auto",  
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
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: '60px', cursor: 'pointer' }}
          onClick={() => navigate('/painel')}
        />
      </Box>

      <Container sx={{ mt: 10, mb: 5, flex: '1 0 auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Anamneses
              </Typography>
              <Box sx={{ maxHeight: 400, overflowY: 'auto' }}>
                <List>
                  {anamneses.map((anamnese) => (
                    <ListItem
                      key={anamnese.id}
                      button
                      onClick={() => setAnamneseSelecionada(anamnese)}
                    >
                      <ListItemText
                        primary={anamnese.pacienteNome}
                        secondary={`Idade: ${anamnese.idade} | CPF: ${anamnese.cpf}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            {anamneseSelecionada ? (
              <Card sx={{ padding: 2 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Detalhes da Anamnese
                  </Typography>
                  <Typography variant="body1">
                    <strong>Paciente:</strong>{' '}
                    {anamneseSelecionada.pacienteNome}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Idade:</strong> {anamneseSelecionada.idade}
                  </Typography>
                  <Typography variant="body1">
                    <strong>CPF:</strong> {anamneseSelecionada.cpf}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mr: 2,
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        margin: '10px',

                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#555555',
                        },
                      }}
                      startIcon={<ContentPasteIcon />}
                      onClick={() =>
                        navigate(`/detalhes-anamnese/${anamneseSelecionada.id}`)
                      }
                    >
                      Visualizar Detalhes da Anamnese
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        mr: 2,
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        margin: '10px',
                        '&:hover': {
                          backgroundColor: '#555555',
                        },
                      }}
                      startIcon={<ContentPasteIcon />}
                      onClick={() =>
                        navigate(
                          `/HistoricoMedico/${anamneseSelecionada.pacienteNome}/${anamneseSelecionada.id}`
                        )
                      }
                    >
                      Visualizar Historico Medico
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        backgroundColor: '#333333',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        margin: '10px',

                        '&:hover': {
                          backgroundColor: '#555555',
                        },
                      }}
                      startIcon={<InventoryIcon />}
                      onClick={() => gerarPDF(anamneseSelecionada)}
                    >
                      Gerar PDF da Anamnese
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ) : (
              <Typography variant="body1" sx={{ mt: 3 }}>
                Selecione uma anamnese para ver os detalhes.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: '#3f3f3f',
          padding: '15px 0',
          textAlign: 'center',
          width: '100%',
          mt: 'auto',
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

export default Prontuarios;
