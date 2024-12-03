import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

function Notificacoes() {
  const navigate = useNavigate();
  const [lembretes, setLembretes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [novoLembrete, setNovoLembrete] = useState({
    paciente: "",
    procedimento: "",
    prioridade: "",
  });

  const API_URL = "http://localhost:3000/api/lembretes";

  useEffect(() => {
    const fetchLembretes = async () => {
      try {
        const response = await axios.get(API_URL);
        setLembretes(response.data);
      } catch (error) {
        console.error("Erro ao buscar lembretes:", error);
      }
    };

    fetchLembretes();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleOpen();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoLembrete({ ...novoLembrete, [name]: value });
  };

  const handleAddLembrete = async () => {
    try {
      const lembrete = {
        ...novoLembrete,
        dataRetorno: selectedDate,
      };
      const response = await axios.post(API_URL, lembrete);
      setLembretes([...lembretes, response.data]);
      setNovoLembrete({ paciente: "", procedimento: "", prioridade: "" });
      handleClose();
    } catch (error) {
      console.error("Erro ao adicionar lembrete:", error);
    }
  };

  const handleDeleteLembrete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setLembretes(lembretes.filter((lembrete) => lembrete.id !== id));
    } catch (error) {
      console.error("Erro ao deletar lembrete:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        overflowX: "hidden", 
        overflowY: "auto",  
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
          padding: "10px 20px",
          borderBottom: "5px solid #fdd835",
          width: "100%",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", cursor: "pointer" }}
          onClick={() => navigate("/painel")}
        />
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Box mb={3} mt={5}>
          <Typography
            variant="h4"
            display="flex"
            justifyContent="center"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#fdd835",
            }}
          >
            Notificação & Alerta
          </Typography>
        </Box>
        <div style={styles.calendarContainer}>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>

        <div style={styles.lembreteContainer}>
          <Typography variant="h6" style={styles.listaTitulo}>
            Lembretes para {selectedDate.toLocaleDateString()}
          </Typography>
          {lembretes
            .filter((lembrete) => {
              const lembreteDate = new Date(lembrete.dataRetorno);
              return lembreteDate.toDateString() === selectedDate.toDateString();
            })
            .map((lembrete) => (
              <div key={lembrete.id} style={styles.lembrete}>
                <p>
                  <strong>Paciente:</strong> {lembrete.paciente}
                </p>
                <p>
                  <strong>Procedimento:</strong> {lembrete.procedimento}
                </p>
                <p>
                  <strong>Data de Retorno:</strong>{" "}
                  {new Date(lembrete.dataRetorno).toLocaleDateString()}
                </p>
                <p>
                  <strong>Prioridade:</strong> {lembrete.prioridade}
                </p>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDeleteLembrete(lembrete.id)}
                  style={{ marginTop: "10px" }}
                >
                  Deletar
                </Button>
              </div>
            ))}
        </div>
      </Box>

      {/* Modal para Adicionar Lembrete */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={styles.modal}>
          <Typography variant="h6">Adicionar Lembrete</Typography>
          <TextField
            name="paciente"
            label="Paciente"
            value={novoLembrete.paciente}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="procedimento"
            label="Procedimento"
            value={novoLembrete.procedimento}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="prioridade"
            label="Prioridade"
            value={novoLembrete.prioridade}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddLembrete}
            style={{ marginTop: "10px" }}
          >
            Adicionar
          </Button>
        </Box>
      </Modal>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#3f3f3f",
          padding: "10px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Todos os direitos reservados Kenia Alves
        </Typography>
        <Box
          sx={{
            borderTop: "3px solid #fdd835",
            marginTop: "10px",
          }}
        />
      </Box>
    </Box>
  );
}

const styles = {
  calendarContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  lembreteContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px 0",
    margin: "0 auto",
  },
  listaTitulo: {
    textAlign: "center",
    marginBottom: "10px",
  },
  lembrete: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  },
};

export default Notificacoes;
