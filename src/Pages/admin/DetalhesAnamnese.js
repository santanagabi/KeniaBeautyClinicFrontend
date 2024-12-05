import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InventoryIcon from '@mui/icons-material/Inventory';
import axios from 'axios';
import logo from '../images/logo.png';

const API_URL =  "https://proj-clinica-estetica-api.onrender.com"

const DetalhesAnamnese = () => {
  const { id } = useParams(); // Captura o ID da anamnese na URL
  const [anamnese, setAnamnese] = useState(null);
  const [originalAnamnese, setOriginalAnamnese] = useState(null); // Para armazenar os dados originais
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  // Função para buscar os detalhes da anamnese
  const fetchAnamnese = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/anamnese/${id}`
      );
      setAnamnese(response.data.anamnese);
      setOriginalAnamnese(response.data.anamnese); // Armazena os dados originais
    } catch (error) {
      console.error('Erro ao buscar anamnese:', error);
    }
  };

  useEffect(() => {
    fetchAnamnese();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnamnese({
      ...anamnese,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Enviar os dados atualizados para a API
      await axios.put(
        `${API_URL}/api/editar-anamnese/${id}`,
        anamnese
      );
      setEditMode(false);
    } catch (error) {
      console.error('Erro ao atualizar anamnese:', error);
    }
  };

  const handleCancel = () => {
    setAnamnese(originalAnamnese); // Restaura os dados originais
    setEditMode(false); // Desativa o modo de edição
  };

  if (!anamnese) {
    return <Typography variant="h6">Carregando...</Typography>;
  }

  return (
    <>
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

      <Box sx={{ mt: 10, mb: 5, display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ padding: 2, width: '80%', maxWidth: '900px' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Detalhes da Anamnese
            </Typography>

            {/* Exibição dos dados da anamnese */}
            <TextField
              label="Paciente"
              name="pacienteNome"
              value={anamnese.pacienteNome}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Idade"
              name="idade"
              value={anamnese.idade}
              onChange={handleChange}
              fullWidth
              type="number"
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Endereço"
              name="endereco"
              value={anamnese.endereco}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="CPF"
              name="cpf"
              value={anamnese.cpf}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="RG"
              name="rg"
              value={anamnese.rg}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Telefone"
              name="telefone"
              value={anamnese.telefone}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Peso"
              name="peso"
              value={anamnese.peso}
              onChange={handleChange}
              fullWidth
              type="number"
              disabled={!editMode}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Altura"
              name="altura"
              value={anamnese.altura}
              onChange={handleChange}
              fullWidth
              type="number"
              disabled={!editMode}
              sx={{ mb: 2 }}
            />

            {/* Outras informações */}
            <FormControlLabel
              control={
                <Checkbox
                  name="usoMedicamentos"
                  checked={anamnese.usoMedicamentos}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Uso de Medicamentos"
            />
            {anamnese.usoMedicamentos && (
              <TextField
                label="Medicamentos"
                name="medicamentos"
                value={anamnese.medicamentos || ''}
                onChange={handleChange}
                fullWidth
                disabled={!editMode}
                sx={{ mb: 2 }}
              />
            )}

            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaMedicamento"
                  checked={anamnese.alergiaMedicamento}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia a Medicamentos"
            />

            {/* Outras alergias */}
            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaAnestesia"
                  checked={anamnese.alergiaAnestesia}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia a Anestesia"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaAlimentos"
                  checked={anamnese.alergiaAlimentos}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia a Alimentos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaPicadaAbelha"
                  checked={anamnese.alergiaPicadaAbelha}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia a Picada de Abelha"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaFrio"
                  checked={anamnese.alergiaFrio}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia ao Frio"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="alergiaCalor"
                  checked={anamnese.alergiaCalor}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Alergia ao Calor"
            />

            {/* Condições de saúde */}
            <FormControlLabel
              control={
                <Checkbox
                  name="hipertensao"
                  checked={anamnese.hipertensao}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Hipertensão"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="diabetes"
                  checked={anamnese.diabetes}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Diabetes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hipotireoidismo"
                  checked={anamnese.hipotireoidismo}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Hipotireoidismo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="asma"
                  checked={anamnese.asma}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Asma"
            />

            {/* Dados sobre hábitos e saúde */}
            <TextField
              label="Tipo Sanguíneo"
              name="tipoSanguineo"
              value={anamnese.tipoSanguineo}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Doenças Familiares"
              name="doencasFamiliares"
              value={anamnese.doencasFamiliares}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="fumante"
                  checked={anamnese.fumante}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Fumante"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="usoBebidaAlcoolica"
                  checked={anamnese.usoBebidaAlcoolica}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              }
              label="Uso de Bebida Alcoólica"
            />

            <TextField
              name="qualFrequencia"
              label="Qual Frequência de Bebida Alcoólica"
              value={anamnese.qualFrequencia || ''}
              onChange={handleChange}
              fullWidth
              disabled={!editMode}
              sx={{ mb: 2 }}
            />

            <TextField
              name="coagulopatiaQual"
              onChange={handleChange}
              label="Coagulopatia Qual"
              value={anamnese.coagulopatiaQual || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="varizes"
                  onChange={handleChange}
                  checked={anamnese.varizes}
                  disabled={!editMode}
                />
              }
              label="Varizes"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="bruxismo"
                  onChange={handleChange}
                  checked={anamnese.bruxismo}
                  disabled={!editMode}
                />
              }
              label="Bruxismo"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="enxaqueca"
                  onChange={handleChange}
                  checked={anamnese.enxaqueca}
                  disabled={!editMode}
                />
              }
              label="Enxaqueca"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="hiv"
                  onChange={handleChange}
                  checked={anamnese.hiv}
                  disabled={!editMode}
                />
              }
              label="HIV"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="hepatiteViral"
                  onChange={handleChange}
                  checked={anamnese.hepatiteViral}
                  disabled={!editMode}
                />
              }
              label="Hepatite Viral"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="problemaPsiquiatrico"
                  onChange={handleChange}
                  checked={anamnese.problemaPsiquiatrico}
                  disabled={!editMode}
                />
              }
              label="Problema Psiquiátrico"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="teveCancer"
                  onChange={handleChange}
                  checked={anamnese.teveCancer}
                  disabled={!editMode}
                />
              }
              label="Histórico de Câncer"
            />

            <TextField
              name="estaEmRemissao"
              onChange={handleChange}
              label="Está em Remissão"
              value={anamnese.estaEmRemissao ? 'Sim' : 'Não'}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="usaProteseOrtopedica"
                  onChange={handleChange}
                  checked={anamnese.usaProteseOrtopedica}
                  disabled={!editMode}
                />
              }
              label="Uso de Próteses Ortopédicas"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="usaProteseDentaria"
                  onChange={handleChange}
                  checked={anamnese.usaProteseDentaria}
                  disabled={!editMode}
                />
              }
              label="Uso de Próteses Dentárias"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="usaMarcapasso"
                  onChange={handleChange}
                  checked={anamnese.usaMarcapasso}
                  disabled={!editMode}
                />
              }
              label="Uso de Marcapasso"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="episodioDesmaio"
                  onChange={handleChange}
                  checked={anamnese.episodioDesmaio}
                  disabled={!editMode}
                />
              }
              label="Episódio de Desmaio"
            />

            <TextField
              name="desmaioQuando"
              onChange={handleChange}
              label="Desmaio Quando"
              value={anamnese.desmaioQuando || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="teveCovid"
                  onChange={handleChange}
                  checked={anamnese.teveCovid}
                  disabled={!editMode}
                />
              }
              label="Histórico de COVID-19"
            />

            <TextField
              name="covidQuando"
              onChange={handleChange}
              label="COVID Quando"
              value={anamnese.covidQuando || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="vacinaCovid"
                  onChange={handleChange}
                  checked={anamnese.vacinaCovid}
                  disabled={!editMode}
                />
              }
              label="Vacina COVID"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="usoRoacutan"
                  onChange={handleChange}
                  checked={anamnese.usoRoacutan}
                  disabled={!editMode}
                />
              }
              label="Uso de Roacutan"
            />

            <TextField
              name="tempoRoacutan"
              onChange={handleChange}
              label="Tempo de Uso do Roacutan"
              value={anamnese.tempoRoacutan || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <TextField
              name="parouRoacutan"
              onChange={handleChange}
              label="Parou Roacutan Quando"
              value={anamnese.parouRoacutan || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="teveQueloide"
                  onChange={handleChange}
                  checked={anamnese.teveQueloide}
                  disabled={!editMode}
                />
              }
              label="Histórico de Queloide"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="historicoQueloide"
                  onChange={handleChange}
                  checked={anamnese.historicoQueloide}
                  disabled={!editMode}
                />
              }
              label="Histórico Familiar de Queloide"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="temCompulsao"
                  onChange={handleChange}
                  checked={anamnese.temCompulsao}
                  disabled={!editMode}
                />
              }
              label="Tem Compulsão"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="temOutraDoenca"
                  onChange={handleChange}
                  checked={anamnese.temOutraDoenca}
                  disabled={!editMode}
                />
              }
              label="Tem Outra Doença"
            />

            <TextField
              name="outraDoenca"
              onChange={handleChange}
              label="Outra Doença"
              value={anamnese.outraDoenca || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="fazendoTratamentoMedico"
                  onChange={handleChange}
                  checked={anamnese.fazendoTratamentoMedico}
                  disabled={!editMode}
                />
              }
              label="Está em Tratamento Médico"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="fezUsoAnestesia"
                  onChange={handleChange}
                  checked={anamnese.fezUsoAnestesia}
                  disabled={!editMode}
                />
              }
              label="Fez Uso de Anestesia"
            />

            <TextField
              name="tipoAnestesia"
              onChange={handleChange}
              label="Tipo de Anestesia"
              value={anamnese.tipoAnestesia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="fezCirurgia"
                  onChange={handleChange}
                  checked={anamnese.fezCirurgia}
                  disabled={!editMode}
                />
              }
              label="Fez Cirurgia"
            />

            <TextField
              name="qualCirurgia"
              onChange={handleChange}
              label="Qual Cirurgia"
              value={anamnese.qualCirurgia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="temPreenchedorPermanente"
                  onChange={handleChange}
                  checked={anamnese.temPreenchedorPermanente}
                  disabled={!editMode}
                />
              }
              label="Tem Preenchimento Permanente"
            />

            <TextField
              name="preenchimentoQuando"
              onChange={handleChange}
              label="Preenchimento Permanente Quando"
              value={anamnese.preenchimentoQuando || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="temAlergiaMedicamento"
                  onChange={handleChange}
                  checked={anamnese.temAlergiaMedicamento}
                  disabled={!editMode}
                />
              }
              label="Tem Alergia a Medicamentos"
            />

            <TextField
              name="alergiaMedicamento"
              onChange={handleChange}
              label="Qual Medicamento"
              value={anamnese.alergiaMedicamento || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="sabeTipoSanguineo"
                  onChange={handleChange}
                  checked={anamnese.sabeTipoSanguineo}
                  disabled={!editMode}
                />
              }
              label="Sabe Tipo Sanguíneo"
            />

            {/* Hematomas Fáceis */}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={anamnese.temHematomasFacil}
                  disabled={!editMode}
                />
              }
              label="Hematomas Fáceis"
            />

            {/* Trauma Facial */}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={anamnese.sofreuTraumaFace}
                  disabled={!editMode}
                />
              }
              label="Sofreu Trauma na Face"
            />
            <TextField
              onChange={handleChange}
              label="Quando Sofreu Trauma"
              value={anamnese.quandoSofreuTrauma || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Regularidade do Intestino */}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={anamnese.intestinoRegular}
                  disabled={!editMode}
                />
              }
              label="Intestino Regular"
            />

            {/* Consumo de Bebida Alcoólica */}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={anamnese.usoBebidaAlcoolica}
                  disabled={!editMode}
                />
              }
              label="Uso de Bebida Alcoólica"
            />
            <TextField
              onChange={handleChange}
              label="Qual a Frequência"
              value={anamnese.qualFrequencia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Substâncias Psicoativas */}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={anamnese.usoSubstanciasPsicoativas}
                  disabled={!editMode}
                />
              }
              label="Uso de Substâncias Psicoativas"
            />

            <TextField
              name="qualSubstancia"
              onChange={handleChange}
              label="Qual Substância"
              value={anamnese.qualSubstancia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Rotinas de Skincare */}
            <FormControlLabel
              control={
                <Checkbox
                  name="rotinasSkincare"
                  onChange={handleChange}
                  checked={anamnese.rotinasSkincare}
                  disabled={!editMode}
                />
              }
              label="Rotina de Skincare"
            />
            <TextField
              name="qualRotinaSkincare"
              onChange={handleChange}
              label="Qual a Rotina de Skincare"
              value={anamnese.qualRotinaSkincare || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Cuidados Específicos */}
            <FormControlLabel
              control={
                <Checkbox
                  name="teveCuidadosQuais"
                  onChange={handleChange}
                  checked={anamnese.teveCuidadosQuais}
                  disabled={!editMode}
                />
              }
              label="Teve Cuidados Específicos"
            />

            {/* Uso de Protetor Solar */}
            <FormControlLabel
              control={
                <Checkbox
                  name="usaProtetorSolar"
                  onChange={handleChange}
                  checked={anamnese.usaProtetorSolar}
                  disabled={!editMode}
                />
              }
              label="Uso de Protetor Solar"
            />
            <TextField
              name="vezesPorDia"
              onChange={handleChange}
              label="Vezes Por Dia"
              value={anamnese.vezesPorDia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Exposição Solar */}
            <FormControlLabel
              control={
                <Checkbox
                  name="habitoExposicaoSolar"
                  onChange={handleChange}
                  checked={anamnese.habitoExposicaoSolar}
                  disabled={!editMode}
                />
              }
              label="Exposição Solar"
            />

            {/* Saúde Mental */}
            <FormControlLabel
              control={
                <Checkbox
                  name="calmo"
                  onChange={handleChange}
                  checked={anamnese.calmo}
                  disabled={!editMode}
                />
              }
              label="Calmo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="ansioso"
                  onChange={handleChange}
                  checked={anamnese.ansioso}
                  disabled={!editMode}
                />
              }
              label="Ansioso"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="estressado"
                  onChange={handleChange}
                  checked={anamnese.estressado}
                  disabled={!editMode}
                />
              }
              label="Estressado"
            />

            {/* Hábito de Coçar o Rosto */}
            <FormControlLabel
              control={
                <Checkbox
                  name="habitoCocarRosto"
                  onChange={handleChange}
                  checked={anamnese.habitoCocarRosto}
                  disabled={!editMode}
                />
              }
              label="Hábito de Coçar o Rosto"
            />

            {/* Qualidade do Sono */}
            <FormControlLabel
              control={
                <Checkbox
                  name="qualidadeSonoBoa"
                  onChange={handleChange}
                  checked={anamnese.qualidadeSonoBoa}
                  disabled={!editMode}
                />
              }
              label="Qualidade do Sono Boa"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="qualidadeSonoRuim"
                  onChange={handleChange}
                  checked={anamnese.qualidadeSonoRuim}
                  disabled={!editMode}
                />
              }
              label="Qualidade do Sono Ruim"
            />

            {/* Alimentação Balanceada */}
            <FormControlLabel
              control={
                <Checkbox
                  name="alimentacaoBalanceada"
                  onChange={handleChange}
                  checked={anamnese.alimentacaoBalanceada}
                  disabled={!editMode}
                />
              }
              label="Alimentação Balanceada"
            />

            {/* Atividade Física */}
            <FormControlLabel
              control={
                <Checkbox
                  name="praticaAtividadeFisica"
                  onChange={handleChange}
                  checked={anamnese.praticaAtividadeFisica}
                  disabled={!editMode}
                />
              }
              label="Pratica Atividade Física"
            />
            <TextField
              name="qualAtividadeFisica"
              onChange={handleChange}
              label="Qual Atividade Física"
              value={anamnese.qualAtividadeFisica || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Perda ou Ganho de Peso */}
            <FormControlLabel
              control={
                <Checkbox
                  name="perdaGanhoPeso"
                  onChange={handleChange}
                  checked={anamnese.perdaGanhoPeso}
                  disabled={!editMode}
                />
              }
              label="Perda ou Ganho de Peso"
            />
            <TextField
              name="quantosPerdaOuGanho"
              onChange={handleChange}
              label="Quantos Quilos"
              value={anamnese.quantosPerdaOuGanho || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Medo de Agulhas */}
            <FormControlLabel
              onChange={handleChange}
              control={
                <Checkbox
                  name="medoAgulhas"
                  checked={anamnese.medoAgulhas}
                  disabled={!editMode}
                />
              }
              label="Medo de Agulhas"
            />

            {/* Último Check-up */}
            <TextField
              name="ultimoCheckup"
              onChange={handleChange}
              label="Último Check-up"
              value={anamnese.ultimoCheckup || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Motivação para Procedimento */}
            <TextField
              name="motivacaoParaProcedimento"
              onChange={handleChange}
              label="Motivação para Procedimento"
              value={anamnese.motivacaoParaProcedimento || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Sentimento em relação à Aparência */}
            <TextField
              name="sentimentoAparencia"
              onChange={handleChange}
              label="Sentimento sobre a Aparência"
              value={anamnese.sentimentoAparencia || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Preocupações com o Procedimento */}
            <TextField
              name="preocupacaoProcedimento"
              onChange={handleChange}
              label="Preocupações com o Procedimento"
              value={anamnese.preocupacaoProcedimento || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Restrições no Procedimento */}
            <TextField
              name="restricaoProcedimento"
              onChange={handleChange}
              label="Restrições Relacionadas ao Procedimento"
              value={anamnese.restricaoProcedimento || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Principal Queixa */}
            <TextField
              name="principalQueixa"
              onChange={handleChange}
              label="Principal Queixa"
              value={anamnese.principalQueixa || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Outras Observações */}
            <TextField
              name="outrasObservacoes"
              onChange={handleChange}
              label="Outras Observações"
              value={anamnese.outrasObservacoes || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Ciclo Menstrual */}
            <FormControlLabel
              control={
                <Checkbox
                  name="cicloMenstrualRegular"
                  onChange={handleChange}
                  checked={anamnese.cicloMenstrualRegular}
                  disabled={!editMode}
                />
              }
              label="Ciclo Menstrual Regular"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="cicloMenstrualIrregular"
                  onChange={handleChange}
                  checked={anamnese.cicloMenstrualIrregular}
                  disabled={!editMode}
                />
              }
              label="Ciclo Menstrual Irregular"
            />
            <TextField
              name="dataUltimaMenstrucao"
              onChange={handleChange}
              label="Data da Última Menstruação"
              value={anamnese.dataUltimaMenstrucao || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Uso de Anticoncepcional */}
            <FormControlLabel
              control={
                <Checkbox
                  name="usaAnticoncepcional"
                  onChange={handleChange}
                  checked={anamnese.usaAnticoncepcional}
                  disabled={!editMode}
                />
              }
              label="Uso de Anticoncepcional"
            />
            <TextField
              name="qualAnticoncepcional"
              onChange={handleChange}
              label="Qual Anticoncepcional"
              value={anamnese.qualAnticoncepcional || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Menopausa */}
            <FormControlLabel
              onChange={handleChange}
              control={
                <Checkbox
                  name="menopausa"
                  checked={anamnese.menopausa}
                  disabled={!editMode}
                />
              }
              label="Menopausa"
            />

            {/* Reposição Hormonal */}
            <FormControlLabel
              onChange={handleChange}
              control={
                <Checkbox
                  name="reposicaoHormonal"
                  checked={anamnese.reposicaoHormonal}
                  disabled={!editMode}
                />
              }
              label="Reposição Hormonal"
            />
            <TextField
              name="tipoReposicao"
              onChange={handleChange}
              label="Tipo de Reposição"
              value={anamnese.tipoReposicao || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Alterações no Ciclo Menstrual */}
            <TextField
              name="alteracaoCicloMenstrual"
              onChange={handleChange}
              label="Alterações no Ciclo Menstrual"
              value={anamnese.alteracaoCicloMenstrual || ''}
              fullWidth
              disabled={!editMode}
              margin="normal"
            />

            {/* Botões de edição e cancelamento */}
            <Box sx={{ mt: 3 }}>
              {editMode ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Salvar Alterações
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCancel}
                    sx={{ ml: 2 }}
                  >
                    Cancelar Alterações
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setEditMode(true)}
                >
                  Editar Anamnese
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default DetalhesAnamnese;
