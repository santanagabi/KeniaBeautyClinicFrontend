import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import logo from '../images/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  InputAdornment,
} from '@mui/material';
import InputMask from 'react-input-mask';

const API_URL = process.env.REACT_APP_API_URL;

const AnamneseForm = ({ pacienteId }) => {
  const [formData, setFormData] = useState({
    pacienteNome: '',
    idade: null,
    endereco: '',
    cpf: '',
    rg: '',
    telefone: '',
    peso: null,
    altura: null,
    usoMedicamentos: false,
    medicamentos: '',
    alergiaMedicamento: false,
    alergiaAnestesia: false,
    alergiaAlimentos: false,
    alergiaPicadaAbelha: false,
    alergiaFrio: false,
    alergiaCalor: false,
    hipertensao: false,
    diabetes: false,
    hipertireoidismo: false,
    hipotireoidismo: false,
    asma: false,
    bronquite: false,
    lupus: false,
    vitiligo: false,
    psoriase: false,
    artriteReumatoide: false,
    doencaCeliaca: false,
    coagulopatia: false,
    coagulopatiaQual: '',
    varizes: false,
    bruxismo: false,
    enxaqueca: false,
    hiv: false,
    hepatiteViral: false,
    problemaPsiquiatrico: false,
    teveCancer: false,
    estaEmRemissao: false,
    usaProteseOrtopedica: false,
    usaProteseDentaria: false,
    usaMarcapasso: false,
    episodioDesmaio: false,
    desmaioQuando: '',
    teveCovid: false,
    covidQuando: '',
    vacinaCovid: false,
    usoRoacutan: false,
    tempoRoacutan: '',
    parouRoacutan: '',
    teveQueloide: false,
    historicoQueloide: '',
    temCompulsao: false,
    temOutraDoenca: false,
    outraDoenca: '',
    fazendoTratamentoMedico: false,
    fezUsoAnestesia: false,
    tipoAnestesia: '',
    fezCirurgia: false,
    qualCirurgia: '',
    temPreenchedorPermanente: false,
    qualPreenchedor: '',
    fezTratamentoEstetico: false,
    qualTratamentoEstetico: '',
    ficouSatisfeito: '',
    tipoSanguineo: '',
    naoSabeTipoSanguineo: false,
    temHematomasFacil: false,
    sofreuTraumaFace: false,
    quandoSofreuTrauma: '',
    fumante: false,
    intestinoRegular: false,
    usoBebidaAlcoolica: false,
    qualFrequencia: '',
    usoSubstanciasPsicoativas: false,
    qualSubstancia: '',
    rotinasSkincare: false,
    qualRotinaSkincare: '',
    teveCuidadosQuais: '',
    usaProtetorSolar: false,
    vezesPorDia: '',
    habitoExposicaoSolar: false,
    calmo: false,
    ansioso: false,
    estressado: false,
    habitoCocarRosto: false,
    qualidadeSonoBoa: false,
    qualidadeSonoRuim: false,
    alimentacaoBalanceada: false,
    praticaAtividadeFisica: false,
    qualAtividadeFisica: '',
    perdaGanhoPeso: false,
    quantosPerdaOuGanho: '',
    medoAgulhas: false,
    ultimoCheckup: '',
    motivacaoParaProcedimento: '',
    sentimentoAparencia: '',
    preocupacaoProcedimento: '',
    restricaoProcedimento: '',
    principalQueixa: '',
    outrasObservacoes: '',
    cicloMenstrualRegular: false,
    cicloMenstrualIrregular: false,
    dataUltimaMenstrucao: '',
    usaAnticoncepcional: false,
    qualAnticoncepcional: '',
    menopausa: false,
    fazReposicaoHormonal: false,
    gravida: false,
    amamentando: false,
    filhos: false,
    quantosFilhos: null,
    dataUltimoParto: '',
    problemaGinecologico: '',
    qualProblemaGinecologico: '',
    episodioAborto: false,
    termoResponsabilidade: false,
    dataAceitacao: '',
  });


  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (pacienteId) {
      // Fetch existing data if editing
      axios
        .get(`${API_URL}/api/anamnese/${pacienteId}`)
        .then((response) => setFormData(response.data))
        .catch((err) => console.error('Erro ao buscar anamnese:', err));
    }
  }, [pacienteId]);


  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Validações e formatações
    switch (name) {
      case 'idade':
        newValue = newValue.replace(/\D/g, ''); // Permite apenas números
        newValue = newValue > 0 ? parseInt(newValue, 10) : '';
        break;
      case 'cpf':
        newValue = newValue.replace(/\D/g, '').slice(0, 11);
        break;
      case 'rg':
        newValue = newValue.replace(/\D/g, '').slice(0, 9); // Ajuste o limite conforme necessário
        break;
      case 'telefone':
        break; 
      case 'peso':
        newValue = newValue.replace(/[^0-9.]/g, '').slice(0, 5); // Permite números e ponto decimal, limita a 5 caracteres
        break;
      case 'altura':
        newValue = newValue.replace(/[^0-9.]/g, '').slice(0, 4); // Permite números e ponto decimal, limita a 4 caracteres
        break;
        case 'quantosFilhos':
        newValue = newValue.replace(/\D/g, '');
        break;
       case 'vezesPorDia':
        newValue = newValue.replace(/\D/g, '');
        break;
      default:
        break;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const anamneseData = {
      ...formData,
      problemaGinecologico: formData.problemaGinecologico === 'true' ? true : formData.problemaGinecologico === 'false' ? false : null,
      idade: parseInt(formData.idade, 10),
      peso: parseFloat(formData.peso),
      altura: parseFloat(formData.altura),
      filhos: formData.filhos === 'true' ? true : formData.filhos === 'false' ? false : null,
      quantosFilhos: formData.quantosFilhos ? parseInt(formData.quantosFilhos, 10) : null,
      vezesPorDia: formData.vezesPorDia || null,
    };

    try {
      let response;
      if (pacienteId) {
        // Edit anamnese
        response = await axios.put(
          `${API_URL}/api/editar-anamnese/${pacienteId}`,
          anamneseData,
          { headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        // Create a new anamnese
        response = await axios.post(
          `${API_URL}/api/criar-anamnese`,
          anamneseData,
          { headers: { 'Content-Type': 'application/json' } }
        );
      }
      console.log('Anamnese salva com sucesso:', response.data);
      navigate('/HistoricoMedico');
    } catch (err) {
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : 'Erro ao registrar. Por favor, tente novamente.'
      );
    }
  };
 const handleEdit = async (id, updatedData) => {
    console.log('Editar foi clicado!');
    try {
      const response = await axios.put(
        `${API_URL}/api/editar-anamnese/${id}`,
        updatedData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log('Atualização realizada com sucesso!', response.data);
    } catch (error) {
      console.error('Erro ao tentar atualizar o prontuário:', error);
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
        <img src={logo} alt="Logo" style={{ height: '60px', cursor: "pointer", }} 
        onClick={() => navigate("/painel")} />
      </Box>
      <Container>
      <form onSubmit={handleSubmit}>
          <Box mb={3} mt={5}>
            <Typography
              variant="h4"
              display="flex"
              justifyContent="center"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: '#fdd835',
              }}
            >
              Formulário de Anamnese
            </Typography>
          </Box>
      
        <Box mb={2}>
          <TextField
            fullWidth
            label="Nome do Paciente"
            name="pacienteNome"
            value={formData.pacienteNome}
            onChange={handleChange}
          />
        </Box>

        <Box mb={2}>
  <TextField
    fullWidth
    label="Idade"
    type="number"
    name="idade"
    value={formData.idade || ''} 
    onChange={handleChange}
  />
</Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Rua Exemplo, 123 - Bairro/Cidade"
            />
        </Box>
        <Box mb={2}>
          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            onChange={handleChange}
          >
            {() => (
              <TextField
                fullWidth
                label="CPF"
                name="cpf"
              />
            )}
          </InputMask>
        </Box>
        <Box mb={2}>
          <InputMask
            mask="99.999.999-9" // Máscara para RG (adapte conforme necessário)
            value={formData.rg}
            onChange={handleChange}
          >
            {() => (
              <TextField fullWidth label="RG" name="rg" />
            )}
          </InputMask>
        </Box>
        <Box mb={2}>
          <InputMask
            mask="(99) 99999-9999" // Máscara para telefone (adapte conforme necessário)
            value={formData.telefone}
            onChange={handleChange}
          >
            {() => <TextField fullWidth label="Telefone" name="telefone" />}
          </InputMask>
        </Box>
        <Box mb={3}>
          <Typography variant="h4" display="flex" justifyContent="center">
            Questionário
          </Typography>
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Qual o seu peso?"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
        <InputMask
          mask="9.99"
          value={formData.altura}
          onChange={handleChange}
          placeholder="Ex: 1.80"
        >
          {() => <TextField fullWidth label="Altura (m)" name="altura" />}
        </InputMask>
      </Box>
        <Box mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                name="usoMedicamentos"
                checked={formData.usoMedicamentos}
                onChange={handleChange}
              />
            }
            label="Faz uso de medicamentos?"
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Se sim, quais?"
            name="medicamentos"
            value={formData.medicamentos}
            onChange={handleChange}
            
          />
        </Box>

        <Typography variant="h6" mb={2} mt={3}>
          Possui alguma das alergias abaixo listadas:
        </Typography>
        {[
          { id: 'alergiaMedicamento', label: 'Medicamento' },
          { id: 'alergiaAnestesia', label: 'Anestesia' },
          { id: 'alergiaAlimentos', label: 'Alimentos' },
          { id: 'alergiaPicadaAbelha', label: 'Picada de Abelha' },
          { id: 'alergiaFrio', label: 'Frio' },
          { id: 'alergiaCalor', label: 'Calor' },
        ].map((alergia) => (
          <FormControlLabel
            key={alergia.id}
            control={
              <Checkbox
                name={alergia.id}
                checked={formData[alergia.id]}
                onChange={handleChange}
              />
            }
            label={alergia.label}
          />
        ))}

        <Typography variant="h6" mb={2} mt={3}>
          Possui alguma das patologias abaixo listadas:
        </Typography>
        {[
          { id: 'hipertensao', label: 'Hipertensão' },
          { id: 'diabetes', label: 'Diabetes' },
          { id: 'hipertireoidismo', label: 'Hipertireoidismo' },
          { id: 'hipotireoidismo', label: 'Hipotireoidismo' },
          { id: 'asma', label: 'Asma' },
          { id: 'bronquite', label: 'Bronquite' },
          { id: 'lupus', label: 'Lúpus' },
          { id: 'vitiligo', label: 'Vitiligo' },
          { id: 'psoriase', label: 'Psoríase' },
          { id: 'artriteReumatoide', label: 'Artrite Reumatoide' },
          { id: 'doencaCeliaca', label: 'Doença Celíaca' },

          { id: 'varizes', label: 'Varizes' },
          { id: 'bruxismo', label: 'Bruxismo' },
          { id: 'enxaqueca', label: 'Enxaqueca' },
          { id: 'hiv', label: 'HIV' },
          { id: 'herpes', label: 'Herpes' },
          { id: 'hepatiteViral', label: 'Hepatite Viral' },
          { id: 'problemaPsiquiatrico', label: 'Problema Psiquiátrico' },
          { id: 'teveCancer', label: 'Teve Câncer' },
          { id: 'estaEmRemissao', label: 'Está em Remissão' },
          { id: 'usaProteseOrtopedica', label: 'Usa Prótese Ortopédica' },
          { id: 'usaProteseDentaria', label: 'Usa Prótese Dentária' },
          { id: 'usaMarcapasso', label: 'Usa Marcapasso' },
          { id: 'coagulopatia', label: 'Coagulopatia' },
        ].map((patologia) => (
          <FormControlLabel
            key={patologia.id}
            control={
              <Checkbox
                name={patologia.id}
                checked={formData[patologia.id]}
                onChange={handleChange}
              />
            }
            label={patologia.label}
          />
        ))}

        <Box mb={3}>
          <TextField
            fullWidth
            label="Coagulopatia. Qual:"
            name="coagulopatiaQual"
            value={formData.coagulopatiaQual}
            onChange={handleChange}
          />
        </Box>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="episodioDesmaio"
                checked={formData.episodioDesmaio}
                onChange={handleChange}
              />
            }
            label="Teve episódio de desmaio/convulsão?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, quando foi o último?"
            name="desmaioQuando"
            value={formData.desmaioQuando}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="teveCovid"
                checked={formData.teveCovid}
                onChange={handleChange}
              />
            }
            label="Teve Covid?"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, quando?"
            name="covidQuando"
            value={formData.covidQuando}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="vacinaCovid"
                checked={formData.vacinaCovid}
                onChange={handleChange}
              />
            }
            label="Tomou vacina de Covid?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="usoRoacutan"
                checked={formData.usoRoacutan}
                onChange={handleChange}
              />
            }
            label="Faz ou já fez uso de Roacutan (Isotretinoída)? "
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          <TextField
            fullWidth
            label="Se sim, por quanto tempo?"
            name="tempoRoacutan"
            value={formData.tempoRoacutan}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Há quanto tempo parou de usar?"
            name="parouRoacutan"
            value={formData.parouRoacutan}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="teveQueloide"
                checked={formData.teveQueloide}
                onChange={handleChange}
              />
            }
            label="Teve queloide ou cicatriz inestética? "
          />
        </Grid>
        <Grid item xs={12}>
  <FormControlLabel
    control={
      <Checkbox
        name="historicoQueloide"
        checked={formData.historicoQueloide} // Use formData aqui
        onChange={handleChange} // Chama o método para atualizar o estado
      />
    }
    label="Tem histórico de queloide na família?"
  />
</Grid>
       
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="temCompulsao"
                checked={formData.temCompulsao}
                onChange={handleChange}
              />
            }
            label="Tem compulsão ou vício alimentar?  "
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="temOutraDoenca"
                checked={formData.temOutraDoenca}
                onChange={handleChange}
              />
            }
            label="Tem alguma doença não mencionada aqui? "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="outraDoenca"
            value={formData.outraDoenca}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="fazendoTratamentoMedico"
                checked={formData.fazendoTratamentoMedico}
                onChange={handleChange}
              />
            }
            label="Está sob algum tratamento médico? "
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="fezUsoAnestesia"
                checked={formData.fezUsoAnestesia}
                onChange={handleChange}
              />
            }
            label="Já fez uso de algum tipo de anestesia? "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="tipoAnestesia"
            value={formData.tipoAnestesia}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="fezCirurgia"
                checked={formData.fezCirurgia}
                onChange={handleChange}
              />
            }
            label="Já se submeteu a alguma cirurgia?  "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="qualCirurgia"
            value={formData.qualCirurgia}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="temPreenchedorPermanente"
                checked={formData.temPreenchedorPermanente}
                onChange={handleChange}
              />
            }
            label="Possui preenchedor permanente?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="qualPreenchedor"
            value={formData.qualPreenchedor}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="fezTratamentoEstetico"
                checked={formData.fezTratamentoEstetico}
                onChange={handleChange}
              />
            }
            label="Já fez algum tratamento estético? "
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="qualTratamentoEstetico"
            value={formData.qualTratamentoEstetico}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="ficouSatisfeito"
                checked={formData.ficouSatisfeito}
                onChange={handleChange}
              />
            }
            label="Ficou satisfeito(a) com o resultado? "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Qual o seu tipo sanguineo?"
            name="tipoSanguineo"
            value={formData.tipoSanguineo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="naoSabeTipoSanguineo"
                checked={formData.naoSabeTipoSanguineo}
                onChange={handleChange}
              />
            }
            label="Não sei. "
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="temHematomasFacil"
                checked={formData.temHematomasFacil}
                onChange={handleChange}
              />
            }
            label="Tem hematomas com facilidade?  "
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="sofreuTraumaFace"
                checked={formData.sofreuTraumaFace}
                onChange={handleChange}
              />
            }
            label="Já sofreu algum trauma na face?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, quando?"
            name="quandoSofreuTrauma"
            value={formData.quandoSofreuTrauma}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="fumante"
                checked={formData.fumante}
                onChange={handleChange}
              />
            }
            label="É fumante?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="intestinoRegular"
                checked={formData.intestinoRegular}
                onChange={handleChange}
              />
            }
            label="Intestino funciona Regularmente?"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="usoBebidaAlcoolica"
                checked={formData.usoBebidaAlcoolica}
                onChange={handleChange}
              />
            }
            label="Faz uso de bebidas alcoolicas?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual e com que frequencia?"
            name="qualFrequencia"
            value={formData.qualFrequencia}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="usoSubstanciasPsicoativas"
                checked={formData.usoSubstanciasPsicoativas}
                onChange={handleChange}
              />
            }
            label="Faz uso de substâncias psicoativas (lícitas ou ilícitas)?"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, quais?"
            name="qualSubstancia"
            value={formData.qualSubstancia}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="rotinasSkincare"
                checked={formData.rotinasSkincare}
                onChange={handleChange}
              />
            }
            label="Faz ou já fez alguma rotina de cuidados estéticos facial ou corporal (skincare)? "
          />
        </Grid>
        <Grid item xs={12} mb={3}>
          <TextField
            fullWidth
            label="Se sim, quais?"
            name="qualRotinaSkincare"
            value={formData.qualRotinaSkincare}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} >
          <TextField
            fullWidth
            label="Se já teve cuidados, quais foram?"
            name="teveCuidadosQuais"
            value={formData.teveCuidadosQuais}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="usaProtetorSolar"
                checked={formData.rotinasSkincare}
                onChange={handleChange}
              />
            }
            label="Usa protetor solar?  "
          />
        </Grid>
        <Grid item xs={12}>
        <Box mb={2}>
        <TextField
          fullWidth
          label="Quantas vezes por Dia"
          name="vezesPorDia"
          type="number"
          value={formData.vezesPorDia || ''}
          onChange={handleChange}
          inputProps={{ min: 0 }} // Impede valores negativos
        />
      </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="habitoExposicaoSolar"
                checked={formData.habitoExposicaoSolar}
                onChange={handleChange}
              />
            }
            label="Hábito de exposição solar? "
          />
        </Grid>
        <FormControl component="fieldset">
          <Typography variant="h6" mb={2} mt={3}>Você é:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.calmo}
                onChange={handleChange}
                name="calmo"
              />
            }
            label="Calmo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.ansioso}
                onChange={handleChange}
                name="ansioso"
              />
            }
            label="Ansioso"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.estressado}
                onChange={handleChange}
                name="estressado"
              />
            }
            label="Estressado"
          />
        </FormControl>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="habitoCocarRosto"
                checked={formData.habitoCocarRosto}
                onChange={handleChange}
              />
            }
            label="Habito de coçar o rosto (olhos, nariz)? "
          />
        </Grid>
        <FormControl component="fieldset">
          <Typography variant="h6" mb={2} mt={3}>Qualidade do Sono:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.qualidadeSonoBoa}
                onChange={handleChange}
                name="qualidadeSonoBoa"
              />
            }
            label="Boa"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.qualidadeSonoRuim}
                onChange={handleChange}
                name="qualidadeSonoRuim"
              />
            }
            label="Ruim"
          />
        </FormControl>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="alimentacaoBalanceada"
                checked={formData.alimentacaoBalanceada}
                onChange={handleChange}
              />
            }
            label="Tem alimentação balanceada?  "
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="praticaAtividadeFisica"
                checked={formData.praticaAtividadeFisica}
                onChange={handleChange}
              />
            }
            label="Pratica alguma atividade física?  "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, qual?"
            name="qualAtividadeFisica"
            value={formData.qualAtividadeFisica}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="perdaGanhoPeso"
                checked={formData.perdaGanhoPeso}
                onChange={handleChange}
              />
            }
            label="Perdeu ou ganhou peso ultimamente?  "
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Se sim, quantos Kg e em quanto tempo?"
            name="quantosPerdaOuGanho"
            value={formData.quantosPerdaOuGanho}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="medoAgulhas"
                checked={formData.medoAgulhas}
                onChange={handleChange}
              />
            }
            label="Tem medo de agulhas?  "
          />
        </Grid>

    
          <FormControl fullWidth margin="normal">
            <Typography variant="h6">
              Quando foi o seu último checkup Médico?
            </Typography>
            <TextField
              type="date"
              name="ultimoCheckup"
              value={formData.ultimoCheckup}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{ width: '150px' }}
            />
          </FormControl>

          <Typography variant="h5" display="flex" justifyContent="center">
            Expectativas e motivações
          </Typography>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Qual a sua principal motivação para realizar o presente procedimento/ tratamento nesse momento?"
              name="motivacaoParaProcedimento"
              value={formData.motivacaoParaProcedimento}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Como você se sentiu em relação a sua aparência nas últimas duas semanas?"
              name="sentimentoAparencia"
              value={formData.sentimentoAparencia}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Você tem alguma preocupação específica em relação ao procedimento?"
              name="preocupacaoProcedimento"
              value={formData.preocupacaoProcedimento}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Você tem alguma restrição de tempo em relação a recuperação do procedimento?"
              name="restricaoProcedimento"
              value={formData.restricaoProcedimento}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Qual a sua principal queixa?"
              name="principalQueixa"
              value={formData.principalQueixa}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth margin="normal" mb={3}>
            <TextField
              label="Outras informações que gostaria de informar (hábitos e saúde):"
              name="outrasObservacoes"
              value={formData.outrasObservacoes}
              onChange={handleChange}
            />
          </FormControl>

          <Typography variant="h6" display="flex" justifyContent="center" mb={2} mt={3}>
            Questionário para mulheres
          </Typography>

          <Typography variant="subtitle1">Ciclo Menstrual:</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.cicloMenstrualRegular}
                onChange={handleChange}
                name="cicloMenstrualRegular"
              />
            }
            label="Regular"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.cicloMenstrualIrregular}
                onChange={handleChange}
                name="cicloMenstrualIrregular"
              />
            }
            label="Irregular"
          />

          <FormControl fullWidth margin="normal">
            <TextField
              label="Data da última menstruação:"
              type="date"
              name="dataUltimaMenstrucao"
              value={formData.dataUltimaMenstrucao}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{ width: '185px' }}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.usaAnticoncepcional}
                onChange={handleChange}
                name="usaAnticoncepcional"
              />
            }
            label="Usa método anticoncepcional?"
          />

          <FormControl fullWidth margin="normal">
            <TextField
              label="Se sim, qual?"
              name="qualAnticoncepcional"
              value={formData.qualAnticoncepcional}
              onChange={handleChange}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.menopausa}
                onChange={handleChange}
                name="menopausa"
              />
            }
            label="Está na menopausa?"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.fazReposicaoHormonal}
                onChange={handleChange}
                name="fazReposicaoHormonal"
              />
            }
            label="Se sim, faz reposição hormonal?"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.gravida}
                onChange={handleChange}
                name="gravida"
              />
            }
            label="Está grávida?"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.amamentando}
                onChange={handleChange}
                name="amamentando"
              />
            }
            label="Está amamentando?"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.filhos}
                onChange={handleChange}
                name="filhos"
              />
            }
            label="Tem filhos?"
          />

<FormControl fullWidth margin="normal">
          <TextField
            label="Quantos Filhos"
            name="quantosFilhos"
            type="number"
            value={formData.quantosFilhos || ''}
            onChange={handleChange}
            inputProps={{ min: 0 }} // Impede valores negativos
          />
        </FormControl>


          <FormControl fullWidth margin="normal">
            <TextField
              label="Data do último parto:"
              name="dataUltimoParto"
              value={formData.dataUltimoParto}
              onChange={handleChange}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.problemaGinecologico}
                onChange={handleChange}
                name="problemaGinecologico"
              />
            }
            label="Tem algum problema ginecológico?"
          />

          <FormControl fullWidth margin="normal">
            <TextField
              label="Se sim, qual?"
              name="qualProblemaGinecologico"
              value={formData.qualProblemaGinecologico}
              onChange={handleChange}
            />
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.episodioAborto}
                onChange={handleChange}
                name="episodioAborto"
              />
            }
            label="Já teve algum episódio de aborto?"
          />

          <Typography variant="h6" alignItems="center" mb={2} mt={3}>Termo de responsabilidade</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termoResponsabilidade}
                onChange={handleChange}
                name="termoResponsabilidade"
              />
            }
            label="Declaro que as informações prestadas acima são verdadeiras e necessárias aos fins dos tratamentos que será proposto. Tenho ciência que a veracidade das informações acima é preponderante para a formação do plano de tratamento mais indicado à melhora da minha queixa. Também fui advertido que a ausência da honestidade e omissão nas respostas acima influenciarão diretamente no resultado, podendo, inclusive, acarretar riscos à minha saúde."
          />

          <FormControl fullWidth margin="normal" mb={3}>
            <TextField
              label="Data"
              type="date"
              name="dataAceitacao"
              value={formData.dataAceitacao}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              sx={{ width: '150px' }}
            />
          </FormControl>
          
          <Box display="flex" justifyContent="center" mt={2} gap={20}>
            <Button
              variant="contained"
              type="submit"
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
              Salvar
            </Button>
            
            <Button
              variant="contained"
              type="button"
              onClick={handleEdit} // Função de edição
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
              Editar
            </Button>
          </Box>
         
          </form>
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

export default AnamneseForm;
