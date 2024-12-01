import React from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
} from '@mui/material';

const DetalhesAnamneseComponent = ({ anamnese }) => {
  return (
    <div>
      {/* Coagulopatia */}
      <TextField
        label="Coagulopatia Qual"
        value={anamnese.coagulopatiaQual || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Varizes */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.varizes} disabled />}
        label="Varizes"
      />

      {/* Bruxismo */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.bruxismo} disabled />}
        label="Bruxismo"
      />

      {/* Enxaqueca */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.enxaqueca} disabled />}
        label="Enxaqueca"
      />

      {/* HIV */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.hiv} disabled />}
        label="HIV"
      />

      {/* Hepatite Viral */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.hepatiteViral} disabled />}
        label="Hepatite Viral"
      />

      {/* Problema Psiquiátrico */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.problemaPsiquiatrico} disabled />}
        label="Problema Psiquiátrico"
      />

      {/* Histórico de Câncer */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.teveCancer} disabled />}
        label="Histórico de Câncer"
      />

      {/* Remissão */}
      <TextField
        label="Está em Remissão"
        value={anamnese.estaEmRemissao ? 'Sim' : 'Não'}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Uso de Próteses */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usaProteseOrtopedica} disabled />}
        label="Uso de Próteses Ortopédicas"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.usaProteseDentaria} disabled />}
        label="Uso de Próteses Dentárias"
      />

      {/* Marcapasso */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usaMarcapasso} disabled />}
        label="Uso de Marcapasso"
      />

      {/* Desmaio */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.episodioDesmaio} disabled />}
        label="Episódio de Desmaio"
      />
      <TextField
        label="Desmaio Quando"
        value={anamnese.desmaioQuando || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* COVID-19 */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.teveCovid} disabled />}
        label="Histórico de COVID-19"
      />
      <TextField
        label="COVID Quando"
        value={anamnese.covidQuando || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Vacinação COVID */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.vacinaCovid} disabled />}
        label="Vacina COVID"
      />

      {/* Roacutan */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usoRoacutan} disabled />}
        label="Uso de Roacutan"
      />
      <TextField
        label="Tempo de Uso do Roacutan"
        value={anamnese.tempoRoacutan || ''}
        fullWidth
        disabled
        margin="normal"
      />
      <TextField
        label="Parou Roacutan Quando"
        value={anamnese.parouRoacutan || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Queloide */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.teveQueloide} disabled />}
        label="Histórico de Queloide"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.historicoQueloide} disabled />}
        label="Histórico Familiar de Queloide"
      />

      {/* Compulsão */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.temCompulsao} disabled />}
        label="Tem Compulsão"
      />

      {/* Outras Doenças */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.temOutraDoenca} disabled />}
        label="Tem Outra Doença"
      />
      <TextField
        label="Outra Doença"
        value={anamnese.outraDoenca || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Tratamento Médico */}
      <FormControlLabel
        control={
          <Checkbox checked={anamnese.fazendoTratamentoMedico} disabled />
        }
        label="Está em Tratamento Médico"
      />

      {/* Anestesia */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.fezUsoAnestesia} disabled />}
        label="Fez Uso de Anestesia"
      />
      <TextField
        label="Tipo de Anestesia"
        value={anamnese.tipoAnestesia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Cirurgia */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.fezCirurgia} disabled />}
        label="Fez Cirurgia"
      />
      <TextField
        label="Qual Cirurgia"
        value={anamnese.qualCirurgia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Preenchimento Permanente */}
      <FormControlLabel
        control={
          <Checkbox checked={anamnese.temPreenchedorPermanente} disabled />
        }
        label="Tem Preenchimento Permanente"
      />
      <TextField
        label="Qual Preenchimento"
        value={anamnese.qualPreenchedor || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Tratamento Estético */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.fezTratamentoEstetico} disabled />}
        label="Fez Tratamento Estético"
      />
      <TextField
        label="Qual Tratamento Estético"
        value={anamnese.qualTratamentoEstetico || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Satisfação com o Tratamento Estético */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.ficouSatisfeito} disabled />}
        label="Ficou Satisfeito com o Tratamento Estético"
      />

      {/* Tipo Sanguíneo */}
      <TextField
        label="Tipo Sanguíneo"
        value={anamnese.tipoSanguineo || ''}
        fullWidth
        disabled
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.naoSabeTipoSanguineo} disabled />}
        label="Não Sabe o Tipo Sanguíneo"
      />

      {/* Hematomas Fáceis */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.temHematomasFacil} disabled />}
        label="Hematomas Fáceis"
      />

      {/* Trauma Facial */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.sofreuTraumaFace} disabled />}
        label="Sofreu Trauma na Face"
      />
      <TextField
        label="Quando Sofreu Trauma"
        value={anamnese.quandoSofreuTrauma || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Fumante */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.fumante} disabled />}
        label="Fumante"
      />

      {/* Regularidade do Intestino */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.intestinoRegular} disabled />}
        label="Intestino Regular"
      />

      {/* Consumo de Bebida Alcoólica */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usoBebidaAlcoolica} disabled />}
        label="Uso de Bebida Alcoólica"
      />
      <TextField
        label="Qual a Frequência"
        value={anamnese.qualFrequencia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Substâncias Psicoativas */}
      <FormControlLabel
        control={
          <Checkbox checked={anamnese.usoSubstanciasPsicoativas} disabled />
        }
        label="Uso de Substâncias Psicoativas"
      />
      <TextField
        label="Qual Substância"
        value={anamnese.qualSubstancia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Rotinas de Skincare */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.rotinasSkincare} disabled />}
        label="Rotina de Skincare"
      />
      <TextField
        label="Qual a Rotina de Skincare"
        value={anamnese.qualRotinaSkincare || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Cuidados Específicos */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.teveCuidadosQuais} disabled />}
        label="Teve Cuidados Específicos"
      />

      {/* Uso de Protetor Solar */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usaProtetorSolar} disabled />}
        label="Uso de Protetor Solar"
      />
      <TextField
        label="Vezes Por Dia"
        value={anamnese.vezesPorDia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Exposição Solar */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.habitoExposicaoSolar} disabled />}
        label="Exposição Solar"
      />

      {/* Saúde Mental */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.calmo} disabled />}
        label="Calmo"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.ansioso} disabled />}
        label="Ansioso"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.estressado} disabled />}
        label="Estressado"
      />

      {/* Hábito de Coçar o Rosto */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.habitoCocarRosto} disabled />}
        label="Hábito de Coçar o Rosto"
      />

      {/* Qualidade do Sono */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.qualidadeSonoBoa} disabled />}
        label="Qualidade do Sono Boa"
      />
      <FormControlLabel
        control={<Checkbox checked={anamnese.qualidadeSonoRuim} disabled />}
        label="Qualidade do Sono Ruim"
      />

      {/* Alimentação Balanceada */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.alimentacaoBalanceada} disabled />}
        label="Alimentação Balanceada"
      />

      {/* Atividade Física */}
      <FormControlLabel
        control={
          <Checkbox checked={anamnese.praticaAtividadeFisica} disabled />
        }
        label="Pratica Atividade Física"
      />
      <TextField
        label="Qual Atividade Física"
        value={anamnese.qualAtividadeFisica || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Perda ou Ganho de Peso */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.perdaGanhoPeso} disabled />}
        label="Perda ou Ganho de Peso"
      />
      <TextField
        label="Quantos Quilos"
        value={anamnese.quantosPerdaOuGanho || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Medo de Agulhas */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.medoAgulhas} disabled />}
        label="Medo de Agulhas"
      />

      {/* Último Check-up */}
      <TextField
        label="Último Check-up"
        value={anamnese.ultimoCheckup || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Motivação para Procedimento */}
      <TextField
        label="Motivação para Procedimento"
        value={anamnese.motivacaoParaProcedimento || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Sentimento em relação à Aparência */}
      <TextField
        label="Sentimento sobre a Aparência"
        value={anamnese.sentimentoAparencia || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Preocupações com o Procedimento */}
      <TextField
        label="Preocupações com o Procedimento"
        value={anamnese.preocupacaoProcedimento || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Restrições no Procedimento */}
      <TextField
        label="Restrições Relacionadas ao Procedimento"
        value={anamnese.restricaoProcedimento || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Principal Queixa */}
      <TextField
        label="Principal Queixa"
        value={anamnese.principalQueixa || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Outras Observações */}
      <TextField
        label="Outras Observações"
        value={anamnese.outrasObservacoes || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Ciclo Menstrual */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.cicloMenstrualRegular} disabled />}
        label="Ciclo Menstrual Regular"
      />
      <FormControlLabel
        control={
          <Checkbox checked={anamnese.cicloMenstrualIrregular} disabled />
        }
        label="Ciclo Menstrual Irregular"
      />
      <TextField
        label="Data da Última Menstruação"
        value={anamnese.dataUltimaMenstrucao || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Uso de Anticoncepcional */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.usaAnticoncepcional} disabled />}
        label="Uso de Anticoncepcional"
      />
      <TextField
        label="Qual Anticoncepcional"
        value={anamnese.qualAnticoncepcional || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Menopausa */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.menopausa} disabled />}
        label="Menopausa"
      />

      {/* Reposição Hormonal */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.fazReposicaoHormonal} disabled />}
        label="Reposição Hormonal"
      />

      {/* Gravidez */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.gravida} disabled />}
        label="Grávida"
      />

      {/* Amamentando */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.amamentando} disabled />}
        label="Amamentando"
      />

      {/* Filhos */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.filhos} disabled />}
        label="Tem Filhos"
      />
      <TextField
        label="Quantos Filhos"
        value={anamnese.quantosFilhos || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Último Parto */}
      <TextField
        label="Data do Último Parto"
        value={anamnese.dataUltimoParto || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Problema Ginecológico */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.problemaGinecologico} disabled />}
        label="Problema Ginecológico"
      />
      <TextField
        label="Qual Problema Ginecológico"
        value={anamnese.qualProblemaGinecologico || ''}
        fullWidth
        disabled
        margin="normal"
      />

      {/* Aborto */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.episodioAborto} disabled />}
        label="Histórico de Aborto"
      />

      {/* Termo de Responsabilidade */}
      <FormControlLabel
        control={<Checkbox checked={anamnese.termoResponsabilidade} disabled />}
        label="Aceitação do Termo de Responsabilidade"
      />
      <TextField
        label="Data de Aceitação"
        value={anamnese.dataAceitacao || ''}
        fullWidth
        disabled
        margin="normal"
      />
    </div>
  );
};

export default DetalhesAnamneseComponent;
