import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//menu view area administrador
import Login from './Pages/admin/Login';
import Painel from './Pages/admin/Painel';
import Register from './Pages/admin/Cadastro';
import CadastroPacientes from './Pages/admin/CadastroPacientes';
import AnamneseForm from './Pages/admin/AnamneseForm';
import Prontuarios from './Pages/admin/Prontuarios';
import DetalhesAnamnese from './Pages/admin/DetalhesAnamnese';
import DashboardFinanceiro from './Pages/admin/DashboardFinanceiro';
import GastosFinanceiro from './Pages/admin/GastosFinanceiro';
import GanhosFinanceiro from './Pages/admin/GanhosFinanceiro';
import TransacoesFinanceiro from './Pages/admin/TransacoesFinanceiro';
import Upload from './Pages/admin/Upload';
import Produtos from './Pages/admin/Produtos';
import Estoque from './Pages/admin/Estoque';
import AssinaturaDigital from './Pages/admin/AssinaturaDigial';
import HistoricoMedico from './Pages/admin/HistoricoMedico';
import Notificaçoes from './Pages/admin/Notificaçoes';
// import DashboardEstoque from './Pages/DashboardEstoque';
//menu view para o publico
import SobreMim from './Pages/public/SobreMim';
import ProcedimentosPage from './Pages/public/ProcedimentosPage';
import Resultados from './Pages/public/Resultados';
import Cosmeticos from './Pages/public/Cosmeticos';
import LocationPage from './Pages/public/Espaco';
import ContactPage from './Pages/public/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sobre-mim" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cadastro-pacientes"
          element={<CadastroPacientes />}
        />{' '}
        <Route path="/criar-anamnese" element={<AnamneseForm />} />
        <Route path="/anamnese-form/:pacienteId" element={<AnamneseForm />} />
        <Route path="/Prontuarios" element={<Prontuarios />} />
        <Route
          path="/detalhes-anamnese/:id"
          element={<DetalhesAnamnese />}
        />{' '}
        {}
        <Route
          path="/HistoricoMedico/:pacienteNome/:anamneseId"
          element={<HistoricoMedico />}
        />{' '}
        {}
        <Route path="/financeiro" element={<DashboardFinanceiro />} />
        <Route path="/gastos" element={<GastosFinanceiro />} />
        <Route path="/ganhos" element={<GanhosFinanceiro />} />
        <Route path="/transacoes" element={<TransacoesFinanceiro />} />
        <Route path="/Painel" element={<Painel />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/assinatura-digital" element={<AssinaturaDigital />} />
        {/* <Route path="/HistoricoMedico" element={<HistoricoMedico />} /> */}
        <Route path="/Notificaçoes" element={<Notificaçoes />} />
        {/* Tudo foi substituido pelo relatorio */}
        {/* <Route path="/dashboard-estoque" element={<DashboardEstoque />} /> */}
        <Route path="/sobre-mim" element={<SobreMim />} />
        <Route path="/ProcedimentosPage" element={<ProcedimentosPage />} />
        <Route path="/cosmeticos" element={<Cosmeticos />} />
        <Route path="/Resultados" element={<Resultados />} />
        <Route path="/espaco" element={<LocationPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
