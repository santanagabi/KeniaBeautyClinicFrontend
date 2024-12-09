import React, { useState, useEffect } from "react";
import { Box, Container, Paper, Typography, Button } from "@mui/material";
import logo from "../images/logo.png";
import { useNavigate } from 'react-router-dom';

const API_URL = "https://proj-clinica-estetica-api.onrender.com"

const Produtos = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);

  // Carregar produtos do back-end ao abrir a página
  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await fetch(`${API_URL}/api/produtos`);
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const populateTable = () => {
    return produtos.map((produto, index) => (
      <tr key={produto._id || index}>
        <td>
          {produto.editMode ? (
            <input
              type="text"
              value={produto.nome}
              onChange={(e) => handleNameChange(e, index)}
              style={styles.input}
            />
          ) : (
            produto.nome
          )}
        </td>
        <td>
          {produto.editMode ? (
            <input
              type="text"
              value={produto.quantidade}
              onChange={(e) => handleQuantityChange(e, index)}
              style={styles.input}
            />
          ) : (
            produto.quantidade
          )}
        </td>
        <td>
          {produto.editMode && (
            <Button
              onClick={() => deleteProduto(produto._id)}
              color="error"
              variant="contained"
              sx={styles.deleteButton}
            >
              Deletar
            </Button>
          )}
        </td>
      </tr>
    ));
  };

  const handleNameChange = (e, index) => {
    const updatedProdutos = [...produtos];
    updatedProdutos[index].nome = e.target.value;
    setProdutos(updatedProdutos);
  };

  const handleQuantityChange = (e, index) => {
    const updatedProdutos = [...produtos];
    updatedProdutos[index].quantidade = e.target.value;
    setProdutos(updatedProdutos);
  };

  const enableEdit = () => {
    const updatedProdutos = produtos.map((produto) => ({
      ...produto,
      editMode: true,
    }));
    setProdutos(updatedProdutos);
  };

  const saveChanges = async () => {
    try {
      const updatedProdutos = produtos.map(async (produto) => {
        if (produto.editMode) {
          await fetch(`${API_URL}/api/produtos/${produto._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nome: produto.nome,
              quantidade: produto.quantidade,
            }),
          });
        }
        return produto;
      });
      await Promise.all(updatedProdutos);
      fetchProdutos(); // Recarrega a lista de produtos do back-end
    } catch (error) {
      console.error("Erro ao salvar mudanças:", error);
    }
  };

  const addNewProduct = async () => {
    const newProduct = { nome: "Novo Produto", quantidade: "0" };

    try {
      const response = await fetch(`${API_URL}/api/produtos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProdutos([...produtos, { ...data.produto, editMode: true }]);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  const deleteProduto = async (id) => {
    try {
      await fetch(`${API_URL}/api/produtos/${id}`, {
        method: "DELETE",
      });
      setProdutos(produtos.filter((produto) => produto._id !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3f3f3f",
          padding: "10px 20px",
          borderBottom: "5px solid #fdd835",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", cursor: "pointer" }}
          onClick={() => navigate("/painel")}
        />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ marginBottom: 3, fontWeight: "bold" }}
          >
            LISTA DE PRODUTOS
          </Typography>
          <Paper
            elevation={6}
            sx={{
              padding: "40px",
              borderRadius: "12px",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Produto</th>
                  <th style={styles.th}>Quantidade</th>
                  <th style={styles.th}>Ações</th>
                </tr>
              </thead>
              <tbody>{populateTable()}</tbody>
            </table>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                variant="contained"
                sx={styles.button}
                onClick={enableEdit}
              >
                EDITAR
              </Button>
              <Button
                variant="contained"
                sx={styles.button}
                onClick={saveChanges}
              >
                SALVAR
              </Button>
              <Button
                variant="contained"
                sx={styles.button}
                onClick={addNewProduct}
              >
                ADICIONAR PRODUTO
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#3f3f3f",
          padding: "10px 0",
          textAlign: "center",
          width: "100%",
          position: "relative",
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
};

// Estilização
const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    fontSize: "0.875rem",
  },
  th: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#444",
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    margin: "0 5px",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
  deleteButton: {
    marginLeft: "10px",
  },
};

export default Produtos;
